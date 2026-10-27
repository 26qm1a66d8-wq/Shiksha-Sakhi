# शिक्षा सखी (Shiksha Sakhi) — Gamified Exam Preparation Platform

**Shiksha Sakhi** ("Every Step Takes You Closer to Your Goal") is an encouraging, mobile-first gamified learning and Previous-Year Question (PYQ) practice platform crafted primarily for women preparing for TET, CTET, and Indian government examinations. It transforms dense exam syllabi and official 2025 TET question papers into a structured, rewarding daily habit with an interactive learning ladder, bilingual support, instant wrong-answer AI coaching, streaks, and milestone treasure chests.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The blueprint below incorporates your confirmed preferences from our clarification step alongside the full Shiksha Sakhi product specification. Please review before we build the interactive prototype.

- **Confirmed — Bilingual English & Telugu Toggle**: Questions, options, and contextual AI explanations feature a one-tap **English / తెలుగు (Telugu)** switch (with an optional dual-view mode), preserving the authentic bilingual content from the attached *TG TET 19th Jan 2025 (Shift 2 — Mathematics & Science)* paper.
- **Confirmed — Neatly Organized PYQ Bank + 30-Day Free Trial to Paid Plan**: All official questions from the 2025 TET paper are cleanly structured across all 5 exam sections (Child Development & Pedagogy, Language I Telugu, Language II English, Mathematics, and Science) with Topic-Wise, Section-Wise, Mixed, and Mistake-Revision modes. Learners automatically begin with a **30-Day Free Access Plan**, followed by the **₹150 Standard Plan** (or **₹100 Referral Offer** with a valid referral code). A built-in "Simulate Trial Expired" toggle in Profile/Upgrade lets you test both the active 30-day free experience and the post-trial upgrade & referral flow anytime.
- **Confirmed — Inline AI Helper Directly Below Options & Exam Directory**: Whenever a learner selects an incorrect option (or taps *Understand this question*), the contextual AI explanation card unfolds **smoothly right below the four answer options**—keeping the question and choices in view without hijacking the screen. For exam selection, an accessible **Exam Switcher Sidebar/Drawer** displays active TET/CTET tracks at the top followed by a categorized list of all major Indian government exams (DSC, KVS, UPSC, State PSCs, SSC, IBPS/SBI Banking, Railways) marked **Coming Soon**.

---

## 1. Overview & Core Concept

- **What It Does**: Guides learners step-by-step from bite-sized concept cards into real official TG TET 2025 questions, explaining mistakes immediately in plain beginner-friendly language, tracking daily streaks and goals, unlocking next topics on a visual trail, and awarding milestone treasure chests.
- **Target Audience / Persona**: Women balancing household, work, or academic schedules while preparing for teaching eligibility (TG TET, CTET, State TETs) and government recruitment exams—who benefit from calm, structured 10-minute daily study sessions rather than overwhelming coaching portals.
- **Key Value**: Replaces scattered PDFs and intimidating mock-test dashboards with an approachable, confidence-building daily learning path where every mistake becomes a clear learning moment.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Landing on the Learning Path (`Learn`)**: The learner opens Shiksha Sakhi and immediately sees her selected exam (*TG TET 2025 — Paper II Maths & Science* or *CTET Course*), current unit banner, daily goal progress, streak counter, and a winding vertical trail of circular learning nodes (Completed checkmark nodes, pulsing Current node, Locked upcoming nodes, Revision Challenges, and Milestone Treasure Chests).
2. **Exam Switcher Sidebar**: Tapping the exam selector opens the side drawer listing active courses (*TG TET 2025 Official PYQ Path*, *CTET Foundation Sample Path*) and categorized **All-India Government Exams** (*AP TET, DSC/TRT, KVS/NVS, UPSC CSE, TGPSC/State PSC, SSC CGL/CHSL, Banking PO/Clerk, RRB Railways*) badged as **Coming Soon** with a "Notify Me" interest toggle.
3. **Studying a Topic & Practising**: Tapping an unlocked node opens a focused Topic Screen with learning objectives, estimated time (~5–8 mins), swipeable bite-sized concept cards (in English & Telugu), and a clear **Start Practice** CTA.
4. **Answering Questions & Inline AI Help Below Options**: Questions appear one at a time with a one-tap **EN | తె** language toggle and four generous 48px+ touch-friendly option cards. Upon checking an answer:
   - **Correct answers** highlight in mint emerald with a concise takeaway.
   - **Incorrect answers** highlight the mistake and automatically expand the **Contextual Shiksha Sakhi AI Panel directly below the four options**, showing: (1) Correct answer, (2) Simple explanation, (3) Why the chosen option is wrong, (4) A relatable classroom/everyday example, plus interactive **"Explain More Simply"** (powered by server-side Gemini AI with rich offline fallback) and **"Try a Similar Question"** actions.
5. **Completing Milestones & Opening Treasure Chests**: Finishing a topic awards points once (idempotent—no duplicate farming), updates the daily streak and goal ring, and visually unlocks the next node on the winding trail. Reaching a unit milestone unlocks a golden **Treasure Chest** that opens on tap to reveal bonus points, an achievement badge, and an encouraging message.
6. **Structured PYQ Hub (`Practice`)**: Neatly organizes the official TG TET Jan 19, 2025 Shift 2 paper across all 5 subjects (*Child Development & Pedagogy*, *Mathematics*, *Science*, *Language II English*, *Language I Telugu*), supporting **Subject & Topic Practice**, **Paper Section Practice**, **Mixed Quick Quiz**, and **Incorrect Questions Revision** (auto-saved from past mistakes), plus direct access to view the official 2025 question paper reference.
7. **Rewards, 30-Day Free Plan & Referral Upgrade (`Rewards` & `Profile`)**:
   - **Rewards**: Displays total points, current vs. best streak, earned badges with how-earned descriptions, claimed treasure chests, upcoming milestones, and the learner's personal referral card.
   - **30-Day Free Plan & ₹150 / ₹100 Upgrade**: Shows active 30-day free trial countdown, full post-trial plan details (**₹150** standard, **₹100** when applying a valid referral code like `SAKHI100` or a friend's code), transparent referral validation, and a clean prototype activation flow—plus a demo switch in Profile to preview the post-30-day locked state and reset progress.

### Visual Identity & Theme
- **Aesthetic Direction**: Mature, warm, editorial EdTech craft—encouraging, calm, and dignified for adult women learners, completely free of childish cartoons or cluttered analytics tables.
- **Color Palette & Mood (60-30-10 Discipline)**:
  - `--background` (60% Dominant Canvas): Warm Alabaster Cream (`#FAF8F5`) for reduced eye strain during reading.
  - `--card` / `--border` (30% Structural Surfaces): Crisp Paper White (`#FFFFFF`) surfaces separated by subtle warm hairlines (`#E8E2D9`) and soft single-elevation depth.
  - `--primary` (10% Brand Accent): Deep Royal Indigo (`#4338CA` / `#312E81`) for active path nodes, primary CTAs, and active navigation states.
  - `--accent-mint` (Completion & Mastery): Fresh Mint Emerald (`#059669` surface `#ECFDF5`) always paired with checkmarks and explicit labels.
  - `--accent-gold` (Rewards & Streaks): Warm Marigold Gold (`#D97706` surface `#FFFBEB`) for daily streak flames, points, and milestone treasure chests.
- **Typography & Hierarchy**:
  - *Display & Headings*: `Outfit` (SemiBold/Bold, balanced wrapping) paired with Devanagari/Telugu script support for **शिक्षा सखी**.
  - *Body & Bilingual Questions*: `Plus Jakarta Sans` paired with `Noto Sans Telugu` at comfortable 16px reading size (`1.6` line-height) so complex bilingual statements and math expressions remain effortless to scan.
  - *Metrics & Counters*: `IBM Plex Mono` (`tabular-nums`) for streak days, point tallies, question numbers, and trial day counters.
- **Component Styling & Responsive Layout**:
  - **Mobile Viewport ($375\text{px}$–$430\text{px}$)**: Compact sticky header + fixed 4-item bottom navigation (`Learn`, `Practice`, `Rewards`, `Profile`) respecting the $\le 15\%$ sticky viewport height budget, with $\ge 44\text{px}$ ergonomic touch targets.
  - **Desktop Viewport ($1440\text{px}$)**: Expands into a balanced three-column workspace—Left Exam & Section Sidebar (with the All-India Government Exams directory), Center Winding Learning Path / Quiz Stage, and Right Daily Goal, Streak & 30-Day Trial Card—eliminating narrow mobile-strip dead space.
- **Interactive Feedback & Motion**: Fast $\le 200\text{ms}$ tactile press states (`transform`, `opacity`), SVG path progression between nodes, gentle pulse ring on the current unlocked topic, celebratory daily-goal completion banner, and an interactive lid-opening animation for claimable treasure chests.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Inline Expansion Below Options for Wrong-Answer AI Coaching**
  - *Chosen Approach*: Render the contextual AI explanation panel directly underneath the 4 answer choices inside the quiz flow, keeping options visible above it.
  - *Why*: Matches your preference ("down the options") and preserves cognitive context—learners can compare Option A, B, C, and D while reading *why* their choice was wrong and *why* the official key is right, without a modal covering the question.
  - *Alternatives Considered*: Separate chat screen (rejected—breaks quiz focus and violates contextual-only requirement) or full-screen overlay modal (rejected—hides the question stem and options).

- **Decision 2: Hybrid Seeded + Live Server-Side Gemini AI Explanations**
  - *Chosen Approach*: Seed verified, curriculum-accurate explanations (in English and Telugu) for the official TG TET 2025 questions AND connect **"Explain More Simply"** / dynamic clarification to a secure server-side Gemini endpoint (`gemini-3.8-flash`) grounded strictly on the official answer key.
  - *Why*: Guarantees zero-latency reliability even offline or without external keys, while delivering genuine dynamic simplification when the AI API is active—and strictly prevents the model from ever hallucinating an unofficial answer key.
  - *Alternatives Considered*: Pure live LLM calls for every answer check (slower initial feedback) or static text only (less adaptable when a learner needs a simpler everyday analogy).

- **Decision 3: 30-Day Free Trial + Demo Expiry Toggle for ₹150 / ₹100 Referral Flow**
  - *Chosen Approach*: Start learners on an active 30-day free plan with all 2025 TET PYQ sections neatly unlocked, while providing a clear Subscription & Referral hub (₹150 standard / ₹100 with valid referral code) and a one-click *"Preview Post-30-Day Trial State"* switch.
  - *Why*: Lets learners immediately experience neatly organized PYQs across all subjects while making the 30-day trial, post-trial lock state, referral code discount (`₹150 → ₹100`), and simulated upgrade completely testable during prototype evaluation.
  - *Alternatives Considered*: Locking 80% of questions on Day 1 (feels restrictive compared to a welcoming 30-day free plan).

---

## 4. Technical Architecture & Data Strategy

### Architecture & Component Diagram

```
┌────────────────────────────────────────────────────────────────────────────┐
│                      SHIKSHA SAKHI CLIENT WORKSPACE                        │
│                                                                            │
│  ┌──────────────────┐   ┌────────────────────────────┐   ┌──────────────┐  │
│  │ Exam & Nav Rail  │   │   Primary View Stage       │   │ Progress &   │  │
│  │ (Sidebar/Bottom) │   │                            │   │ Trial Rail   │  │
│  │                  │   │  • Winding Learning Ladder │   │              │  │
│  │ • Learn          │   │    (SVG Trail + Nodes +    │   │ • Streak &   │  │
│  │ • Practice (PYQ) │──▶│     Treasure Chests)       │   │   Best Record│  │
│  │ • Rewards        │   │  • Topic Concept Deck      │   │ • Daily Goal │  │
│  │ • Profile        │   │  • One-by-One Quiz Stage   │   │   Ring       │  │
│  │                  │   │    ├─ EN / తెలుగు Toggle   │   │ • 30-Day     │  │
│  │ • Exam Switcher  │   │    ├─ 4 Touch Option Cards │   │   Free Plan  │  │
│  │   ├─ TG TET 2025 │   │    └─ Inline AI Coach      │   │   & ₹150/₹100│  │
│  │   ├─ CTET Course │   │       (Below Options)      │   │   Referral   │  │
│  │   └─ All-India   │   │  • Neat PYQ Browser        │   │              │  │
│  │      Exams       │   │  • Rewards & Profile Views │   │              │  │
│  │      (ComingSoon)│   └─────────────┬──────────────┘   └──────▲───────┘  │
└──────────┬──────────┘                 │                         │          │
           │                            ▼                         │          │
           │          ┌───────────────────────────────────┐       │          │
           └─────────▶│ Modular Local Persistence Store   │───────┘          │
                      │ (Streaks, Unlocked Nodes, Points, │                  │
                      │  Mistakes Bank, Chests, Trial/Ref)│                  │
                      └─────────────────┬─────────────────┘                  │
                                        │                                    │
                                        ▼ POST /api/ai/explain               │
┌────────────────────────────────────────────────────────────────────────────┐
│                     EXPRESS SERVER PROXY (PORT 3000)                       │
│  • Grounds prompt with Question + Options + Learner Choice + Official Key  │
│  • Calls @google/genai (gemini-3.8-flash) with English/Telugu support      │
│  • Returns structured simple explanation, mistake analysis & analogy       │
└────────────────────────────────────────────────────────────────────────────┘
```

### Data Model & State
- **Official TG TET 2025 Question Bank & Learning Units**: Curated directly from the attached *19th Jan 2025 Shift 2 (Mathematics & Science)* paper across all 5 official sections—*Child Development & Pedagogy*, *Mathematics*, *Science*, *Language II English*, and *Language I Telugu*—each storing verified English & Telugu stems, four options, verified official answer index, topic tag, paper metadata, concept summary cards, and baseline bilingual explanations.
- **All-India Government Exam Catalogue**: Active tracks (*TG TET 2025*, *CTET Sample Course*) plus upcoming Indian government exam categories (*State TETs & DSC*, *UPSC & State PSC*, *SSC*, *Banking & Insurance*, *Railways & Defence*) with `Coming Soon` status and user notification bookmarks.
- **Learner Progress & Gamification Store (`localStorage`)**:
  - `completedTopics` & `unlockedNodes`: Tracks progression along each unit ladder and prevents duplicate point awards on repeat completions.
  - `streakState`: Tracks `currentStreak`, `bestStreak`, `lastActiveLocalDate` (updated only upon completing a topic or qualifying quiz), and `dailyGoal` progress (*1 Topic*, *5 Questions*, or *10 Minutes*).
  - `rewardsState`: Stores `points`, `earnedBadges`, and `treasureChests` (`locked` | `unlocked` | `claimed`) so chests cannot be re-claimed on page refresh.
  - `mistakeHistory`: Automatically records any incorrectly answered question IDs for one-tap **Incorrect Questions Revision** in the Practice tab, removing them once mastered.
  - `subscriptionState`: Tracks `trialStartDate` (30-day free window), `simulateExpiredTrial` toggle for testing, `isPremiumUnlocked`, `appliedReferralCode`, `eligiblePrice` (`150` vs `100`), and the learner's own shareable code.

### Interactive Component & State Mapping
- **Winding Learning Path Nodes**: Tapping an `unlocked` or `completed` node navigates to its Topic Concept Deck; tapping a `locked` node opens an inline tooltip card explaining which prerequisite topic unlocks it; tapping an `unlocked` Treasure Chest triggers the chest-opening celebration modal and transitions its state permanently to `claimed`.
- **Quiz & Below-Options AI Coach**: Selecting an option enables **Check Answer**. Submitting updates question progress; if wrong, records the question in `mistakeHistory` and expands the AI explanation block directly beneath Option 4. Clicking **Explain More Simply** fetches a ultra-clear step-by-step analogy in the active language (`EN` or `తెలుగు`) from the server proxy (falling back gracefully to local simplified notes if offline). Clicking **Try a Similar Question** queues a related question from the same syllabus concept.
- **Subscription & Referral Validator**: Entering a valid demo code (e.g., `SAKHI100`, `TETFRIEND`, `WOMEN2025`) validates eligibility, crosses out `₹150`, highlights `₹100 Referral Offer Applied`, and enables simulated plan activation that updates Profile and Practice status immediately.
