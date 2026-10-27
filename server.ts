import dotenv from "dotenv";
import express from "express";
import type { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ExplainRequestBody {
  questionEn: string;
  questionTe?: string;
  optionsEn: string[];
  optionsTe?: string[];
  selectedIndex: number | null;
  correctIndex: number;
  subject: string;
  examLabel: string;
  mode: "standard" | "simpler";
  language: "en" | "te" | "both";
}

function getGenAIClient(): GoogleGenAI | null {
  const key = process.env.GEMINI_API_KEY;
  if (!key || key === "MY_GEMINI_API_KEY" || key.trim() === "") {
    return null;
  }
  return new GoogleGenAI({
    apiKey: key,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: "1mb" }));

  app.get("/api/health", (_req: Request, res: Response) => {
    const aiConfigured = Boolean(getGenAIClient());
    res.json({ status: "ok", aiConfigured });
  });

  app.post("/api/ai/explain", async (req: Request, res: Response) => {
    try {
      const body = req.body as ExplainRequestBody;
      const ai = getGenAIClient();

      if (!ai) {
        res.status(200).json({
          source: "fallback",
          message: "Using built-in verified curriculum explanation.",
        });
        return;
      }

      const {
        questionEn,
        questionTe,
        optionsEn,
        optionsTe,
        selectedIndex,
        correctIndex,
        subject,
        examLabel,
        mode,
      } = body;

      const selectedTextEn =
        selectedIndex !== null && optionsEn[selectedIndex]
          ? optionsEn[selectedIndex]
          : "Not selected / general clarification requested";
      const correctTextEn = optionsEn[correctIndex] ?? "Unavailable";
      const correctTextTe = optionsTe?.[correctIndex] ?? "";

      const styleNote =
        mode === "simpler"
          ? "Explain ULTRA SIMPLY as if coaching a beginner step-by-step using everyday household or school life examples. Avoid heavy academic jargon."
          : "Explain clearly, warmly, and concisely for an adult woman preparing for TET/CTET government teaching exams.";

      const prompt = `
Exam Context: ${examLabel} — Subject: ${subject}
Question (English): ${questionEn}
${questionTe ? `Question (Telugu): ${questionTe}` : ""}
Options (English): ${optionsEn.map((o, idx) => `${idx + 1}. ${o}`).join(" | ")}
${optionsTe && optionsTe.length > 0 ? `Options (Telugu): ${optionsTe.map((o, idx) => `${idx + 1}. ${o}`).join(" | ")}` : ""}
Learner's Selected Option: ${selectedTextEn}
Verified Official Correct Answer: Option ${correctIndex + 1} — ${correctTextEn} ${correctTextTe ? `(${correctTextTe})` : ""}

Task:
${styleNote}
CRITICAL RULE: Do NOT invent or contradict the verified official answer key above. Explain accurately why Option ${correctIndex + 1} is right, why the learner's selected option is wrong (or common trap if none selected), and give one short memorable classroom/everyday analogy. Provide both clear English and natural Telugu fields.
`.trim();

      const candidateModels = ["gemini-3.8-flash", "gemini-3.1-flash-lite"];
      let rawText: string | undefined;
      let lastError: unknown;

      for (const modelName of candidateModels) {
        try {
          const response = await ai.models.generateContent({
            model: modelName,
            contents: prompt,
            config: {
              systemInstruction:
                "You are Shiksha Sakhi's contextual quiz explanation helper. Never act as an open-ended chatbot. Always ground your explanation strictly in the verified correct answer provided. Keep each field concise (2-3 sentences max).",
              responseMimeType: "application/json",
              responseSchema: {
                type: Type.OBJECT,
                properties: {
                  simpleExplanationEn: {
                    type: Type.STRING,
                    description:
                      "Beginner-friendly explanation in English of why the correct answer is right.",
                  },
                  whySelectedWrongEn: {
                    type: Type.STRING,
                    description:
                      "Short explanation in English of why the learner's chosen option is incorrect.",
                  },
                  analogyEn: {
                    type: Type.STRING,
                    description:
                      "A 1-2 sentence relatable classroom or daily-life example in English.",
                  },
                  simpleExplanationTe: {
                    type: Type.STRING,
                    description:
                      "Beginner-friendly explanation in Telugu (తెలుగు) of why the correct answer is right.",
                  },
                  whySelectedWrongTe: {
                    type: Type.STRING,
                    description:
                      "Short explanation in Telugu (తెలుగు) of why the learner's chosen option is incorrect.",
                  },
                  analogyTe: {
                    type: Type.STRING,
                    description:
                      "A 1-2 sentence relatable classroom or daily-life example in Telugu (తెలుగు).",
                  },
                },
                required: [
                  "simpleExplanationEn",
                  "whySelectedWrongEn",
                  "analogyEn",
                  "simpleExplanationTe",
                  "whySelectedWrongTe",
                  "analogyTe",
                ],
              },
            },
          });
          rawText = response.text;
          if (rawText) break;
        } catch (err) {
          lastError = err;
        }
      }

      if (!rawText) {
        res.status(200).json({
          source: "fallback",
          error:
            lastError instanceof Error
              ? lastError.message
              : "Using verified curriculum explanation",
        });
        return;
      }

      const parsed = JSON.parse(rawText);
      res.status(200).json({
        source: "gemini",
        data: parsed,
      });
    } catch (error) {
      console.error("Contextual AI explanation error:", error);
      res.status(200).json({
        source: "fallback",
        error: error instanceof Error ? error.message : "AI explanation unavailable",
      });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Shiksha Sakhi server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
