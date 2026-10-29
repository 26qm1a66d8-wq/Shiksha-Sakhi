import { Award, BookOpen, ChevronDown, Compass, Flame, User } from "lucide-react";
import { ExamCourseId, LanguageMode, NavSection } from "../types";

interface HeaderBarProps {
  selectedExamId: ExamCourseId;
  language: LanguageMode;
  currentStreak: number;
  dailyPercent: number;
  displayName: string;
  activeNav: NavSection;
  onSelectNav: (nav: NavSection) => void;
  onChangeLanguage: (lang: LanguageMode) => void;
  onOpenExamDrawer: () => void;
}

export function HeaderBar({
  selectedExamId,
  language,
  currentStreak,
  dailyPercent,
  displayName,
  activeNav,
  onSelectNav,
  onChangeLanguage,
  onOpenExamDrawer,
}: HeaderBarProps) {
  const examShortLabel =
    selectedExamId === "tg-tet-2025" ? "TG TET 2025" : "CTET Course";

  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <header className="sticky top-0 z-30 h-16 bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#E8E2D9] shadow-[0_1px_0_rgba(30,27,46,0.02)]">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Left: Brand Wordmark + Exam Switcher Trigger */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={() => onSelectNav(NavSection.LEARN)}
            className="flex items-center gap-2 text-left focus-visible:outline-2 focus-visible:outline-indigo-600 rounded-lg min-h-[44px] shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-[#4338CA] text-white flex items-center justify-center font-display font-bold text-sm shadow-[0_5px_12px_rgba(67,56,202,0.22)]">
              श
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[#1E1B2E] whitespace-nowrap block">
                शिक्षा सखी{" "}
                <span className="hidden sm:inline font-medium text-[#5C5670] text-sm">
                  · Shiksha Sakhi
                </span>
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={onOpenExamDrawer}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 min-h-[36px] rounded-lg bg-white border border-[#E8E2D9] hover:border-indigo-300 hover:shadow-sm text-xs font-semibold text-[#2E294E] transition-all whitespace-nowrap shrink-0 cursor-pointer"
            title="Switch examination or view all government exams"
          >
            <span>{examShortLabel}</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#6E6882]" />
          </button>
        </div>

        {/* Center (Desktop Nav Links) */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#5C5670]"
        >
          {[
            { id: NavSection.LEARN, label: "Learn", icon: Compass },
            { id: NavSection.PRACTICE, label: "Practice PYQs", icon: BookOpen },
            { id: NavSection.REWARDS, label: "Rewards", icon: Award },
            { id: NavSection.PROFILE, label: "Profile", icon: User },
          ].map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectNav(item.id)}
                className={`py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer border-b-2 ${
                  isActive
                    ? "text-[#4338CA] border-[#4338CA] font-semibold"
                    : "border-transparent hover:text-[#1E1B2E]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Bilingual Toggle + Streak + Daily Progress + Avatar */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Interactive Bilingual Segmented Control */}
          <div
            role="group"
            aria-label="Question language toggle"
            className="flex items-center p-0.5 rounded-lg bg-[#EFECE6] border border-[#E3DDD3]"
          >
            {(
              [
                { mode: LanguageMode.EN, label: "EN" },
                { mode: LanguageMode.TE, label: "తె" },
                { mode: LanguageMode.BOTH, label: "EN+తె" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.mode}
                type="button"
                onClick={() => onChangeLanguage(opt.mode)}
                className={`px-2 py-1 min-h-[30px] text-[11px] font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  language === opt.mode
                    ? "bg-white text-[#4338CA] shadow-2xs"
                    : "text-[#5C5670] hover:text-[#1E1B2E]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Streak Indicator */}
          <button
            type="button"
            onClick={() => onSelectNav(NavSection.REWARDS)}
            className="flex items-center gap-1 px-2 py-1 min-h-[38px] rounded-lg hover:bg-amber-50/80 transition-colors cursor-pointer"
            title="Current daily learning streak"
          >
            <Flame
              className={`w-4 h-4 ${
                currentStreak > 0
                  ? "text-amber-500 fill-amber-500"
                  : "text-[#8A849E]"
              }`}
            />
            <span className="font-mono text-xs font-semibold tabular-nums text-[#1E1B2E]">
              {currentStreak}
            </span>
          </button>

          {/* Compact Daily Goal Ring */}
          <button
            type="button"
            onClick={() => onSelectNav(NavSection.REWARDS)}
            className="hidden sm:flex items-center gap-1.5 px-2 py-1 min-h-[38px] rounded-lg hover:bg-emerald-50/70 transition-colors cursor-pointer"
            title={`Daily goal progress: ${dailyPercent}%`}
          >
            <svg className="w-5 h-5 -rotate-90" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="9"
                fill="none"
                stroke="#E5E0D8"
                strokeWidth="2.8"
              />
              <circle
                cx="12"
                cy="12"
                r="9"
                fill="none"
                stroke={dailyPercent >= 100 ? "#059669" : "#4338CA"}
                strokeWidth="2.8"
                strokeDasharray={56.5}
                strokeDashoffset={56.5 - (56.5 * Math.min(100, dailyPercent)) / 100}
                strokeLinecap="round"
              />
            </svg>
            <span className="font-mono text-xs tabular-nums text-[#5C5670]">
              {dailyPercent}%
            </span>
          </button>

          {/* Profile Avatar */}
          <button
            type="button"
            onClick={() => onSelectNav(NavSection.PROFILE)}
            aria-label="Open profile and settings"
            className="w-9 h-9 min-h-[36px] min-w-[36px] rounded-full bg-indigo-100 border border-indigo-200 text-[#3730A3] font-display font-semibold text-xs flex items-center justify-center hover:bg-indigo-200/70 transition-colors cursor-pointer"
          >
            {initials || <User className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
