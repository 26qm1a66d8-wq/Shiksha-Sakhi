import { useState } from "react";
import {
  Bell,
  BellRing,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  GraduationCap,
  X,
} from "lucide-react";
import { ExamCourseId } from "../types";
import { GOV_EXAMS_DIRECTORY } from "../data/examsCatalog";

interface ExamSelectorContentProps {
  selectedExamId: ExamCourseId;
  interestedExamIds: string[];
  onSelectExamCourse: (courseId: ExamCourseId) => void;
  onToggleExamInterest: (govExamId: string) => void;
  onCloseMobile?: () => void;
}

export function ExamSelectorPanel({
  selectedExamId,
  interestedExamIds,
  onSelectExamCourse,
  onToggleExamInterest,
  onCloseMobile,
}: ExamSelectorContentProps) {
  const [showAllGovExams, setShowAllGovExams] = useState(true);

  const activeExams = GOV_EXAMS_DIRECTORY.filter((e) => e.status === "active");
  const upcomingExams = GOV_EXAMS_DIRECTORY.filter(
    (e) => e.status === "coming_soon"
  );

  const categories = Array.from(
    new Set(upcomingExams.map((e) => e.category))
  );

  return (
    <div className="space-y-5">
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="font-display font-semibold text-sm text-[#1E1B2E]">
            Choose Your Examination
          </h2>
          {onCloseMobile && (
            <button
              type="button"
              onClick={onCloseMobile}
              aria-label="Close exam selector"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[#5C5670] hover:bg-[#EFECE6] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <p className="text-xs text-[#6E6882] leading-relaxed mb-3">
          Select an active preparation ladder below, or request notifications for upcoming All-India Government Exams.
        </p>

        {/* Active Exam Tracks */}
        <div className="space-y-2">
          {activeExams.map((exam) => {
            const isSelected = exam.linkedCourseId === selectedExamId;
            return (
              <button
                key={exam.id}
                type="button"
                onClick={() => {
                  if (exam.linkedCourseId) {
                    onSelectExamCourse(exam.linkedCourseId);
                    onCloseMobile?.();
                  }
                }}
                className={`w-full text-left p-3 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-indigo-50/80 border-[#4338CA] shadow-2xs"
                    : "bg-white border-[#E8E2D9] hover:border-indigo-300"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-display font-semibold text-sm text-[#1E1B2E]">
                      {exam.shortCode}
                    </div>
                    <div className="text-[11px] text-[#6E6882] mt-0.5">
                      {exam.conductingBody}
                    </div>
                  </div>
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-[#4338CA] text-white"
                        : "border border-[#D5CFC4] text-transparent"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                  </span>
                </div>
                <p className="text-xs text-[#4A445D] mt-2 leading-relaxed">
                  {exam.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Expandable All-India Government Exams ("down the options" + sidebar) */}
      <div className="pt-3 border-t border-[#E8E2D9]">
        <button
          type="button"
          onClick={() => setShowAllGovExams((v) => !v)}
          className="w-full flex items-center justify-between py-1.5 text-left min-h-[40px] cursor-pointer"
        >
          <span className="flex items-center gap-2 font-display font-semibold text-xs text-[#2E294E]">
            <GraduationCap className="w-4 h-4 text-[#4338CA]" />
            <span>All Indian Govt Exams · Coming Soon</span>
          </span>
          {showAllGovExams ? (
            <ChevronUp className="w-4 h-4 text-[#6E6882]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#6E6882]" />
          )}
        </button>

        {showAllGovExams && (
          <div className="mt-3 space-y-4">
            {categories.map((cat) => (
              <div key={cat} className="space-y-1.5">
                <div className="text-[11px] font-semibold text-[#6E6882]">
                  {cat}
                </div>
                <div className="space-y-1.5">
                  {upcomingExams
                    .filter((e) => e.category === cat)
                    .map((exam) => {
                      const notified = interestedExamIds.includes(exam.id);
                      return (
                        <div
                          key={exam.id}
                          className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex items-center justify-between gap-2"
                        >
                          <div className="min-w-0">
                            <div className="text-xs font-semibold text-[#2E294E] truncate">
                              {exam.shortCode}
                            </div>
                            <div className="text-[11px] text-[#6E6882] flex items-center gap-1 mt-0.5">
                              <Clock className="w-3 h-3 shrink-0 text-amber-600" />
                              <span className="truncate">
                                Coming Soon · {exam.conductingBody}
                              </span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => onToggleExamInterest(exam.id)}
                            className={`px-2.5 py-1.5 min-h-[34px] rounded-lg text-[11px] font-semibold flex items-center gap-1 shrink-0 transition-colors cursor-pointer ${
                              notified
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : "bg-white text-[#4338CA] border border-[#E2DCD2] hover:border-indigo-300"
                            }`}
                            title={
                              notified
                                ? "You will be notified when this exam launches"
                                : "Notify me when available"
                            }
                          >
                            {notified ? (
                              <>
                                <BellRing className="w-3 h-3" />
                                <span>Notified</span>
                              </>
                            ) : (
                              <>
                                <Bell className="w-3 h-3" />
                                <span>Notify</span>
                              </>
                            )}
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface MobileExamDrawerProps extends ExamSelectorContentProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileExamDrawer({
  isOpen,
  onClose,
  ...rest
}: MobileExamDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs"
        onClick={onClose}
      />
      <aside className="relative z-10 w-full max-w-sm bg-white h-full overflow-y-auto p-5 shadow-xl">
        <ExamSelectorPanel {...rest} onCloseMobile={onClose} />
      </aside>
    </div>
  );
}
