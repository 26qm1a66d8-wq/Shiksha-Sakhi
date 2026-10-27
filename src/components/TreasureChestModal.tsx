import { useState } from "react";
import { Award, Gift, Sparkles, X } from "lucide-react";
import { BADGES_CATALOG } from "../data/examsCatalog";
import { LanguageMode, TreasureChestConfig } from "../types";

interface TreasureChestModalProps {
  chest: TreasureChestConfig | null;
  alreadyClaimed: boolean;
  language: LanguageMode;
  onClaim: (chestId: string) => void;
  onClose: () => void;
}

export function TreasureChestModal({
  chest,
  alreadyClaimed,
  language,
  onClaim,
  onClose,
}: TreasureChestModalProps) {
  const [opened, setOpened] = useState(alreadyClaimed);

  if (!chest) return null;

  const badge = BADGES_CATALOG.find((b) => b.id === chest.badgeId);

  const handleTapChest = () => {
    if (!opened) {
      setOpened(true);
      onClaim(chest.id);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-md bg-white rounded-3xl border border-[#E8E2D9] p-6 sm:p-7 shadow-xl text-center space-y-5">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close reward modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center text-[#6E6882] hover:bg-[#FAF8F5] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!opened ? (
          <>
            <div className="text-xs font-semibold text-amber-700">
              Milestone Reached!
            </div>
            <h2 className="font-display font-bold text-2xl text-[#1E1B2E]">
              {language === LanguageMode.TE ? chest.titleTe : chest.titleEn}
            </h2>
            <p className="text-sm text-[#5C5670]">
              You completed this unit milestone! Tap the golden treasure chest below to reveal your reward.
            </p>

            <div className="py-4 flex justify-center">
              <button
                type="button"
                onClick={handleTapChest}
                className="w-28 h-28 rounded-3xl bg-amber-400 hover:bg-amber-300 border-b-4 border-amber-600 text-[#1E1B2E] flex flex-col items-center justify-center gap-1 shadow-lg active:scale-95 transition-transform cursor-pointer"
              >
                <Gift className="w-12 h-12" />
                <span className="text-xs font-bold">Tap to Open</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-100 border border-amber-300 text-amber-700 flex items-center justify-center">
              <Sparkles className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs font-semibold text-[#059669]">
                {alreadyClaimed ? "Treasure Claimed" : "Treasure Unlocked!"}
              </div>
              <h2 className="font-display font-bold text-2xl text-[#1E1B2E] mt-1">
                +{chest.bonusPoints} Bonus Points
              </h2>
            </div>

            {badge && (
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] flex items-center gap-3 text-left">
                <div className="w-11 h-11 rounded-xl bg-indigo-100 text-[#4338CA] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#6E6882]">Badge Earned</div>
                  <div className="font-display font-semibold text-sm text-[#1E1B2E]">
                    {badge.titleEn} · {badge.titleTe}
                  </div>
                  <div className="text-xs text-[#5C5670] mt-0.5">
                    {badge.descriptionEn}
                  </div>
                </div>
              </div>
            )}

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-left space-y-1.5">
              <p className="text-sm font-medium text-[#1E1B2E] leading-relaxed">
                “{chest.motivationalQuoteEn}”
              </p>
              <p className="text-xs text-[#5C5670] leading-relaxed">
                “{chest.motivationalQuoteTe}”
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 min-h-[48px] rounded-2xl bg-[#4338CA] hover:bg-[#3730A3] text-white font-display font-semibold text-sm transition-colors cursor-pointer"
            >
              Continue Learning Journey
            </button>
          </>
        )}
      </div>
    </div>
  );
}
