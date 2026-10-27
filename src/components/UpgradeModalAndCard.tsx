import { useState } from "react";
import {
  Check,
  CheckCircle2,
  Copy,
  Gift,
  ShieldCheck,
  Sparkles,
  Tag,
  X,
} from "lucide-react";

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  myReferralCode: string;
  appliedReferralCode: string | null;
  subscriptionStatus: {
    daysRemaining: number;
    isTrialActive: boolean;
    isPremiumUnlocked: boolean;
    applicablePrice: number;
    standardPrice: number;
    referralPrice: number;
  };
  onApplyReferral: (code: string) => { valid: boolean; message: string };
  onRemoveReferral: () => void;
  onConfirmSimulatedPurchase: () => void;
}

export function UpgradeModal({
  isOpen,
  onClose,
  myReferralCode,
  appliedReferralCode,
  subscriptionStatus,
  onApplyReferral,
  onRemoveReferral,
  onConfirmSimulatedPurchase,
}: UpgradeModalProps) {
  const [referralInput, setReferralInput] = useState(
    appliedReferralCode ?? ""
  );
  const [referralFeedback, setReferralFeedback] = useState<{
    valid: boolean;
    message: string;
  } | null>(null);
  const [copiedOwnCode, setCopiedOwnCode] = useState(false);
  const [showConfirmStep, setShowConfirmStep] = useState(false);
  const [justActivated, setJustActivated] = useState(false);

  if (!isOpen) return null;

  const handleCopyMyCode = async () => {
    try {
      await navigator.clipboard.writeText(myReferralCode);
      setCopiedOwnCode(true);
      setTimeout(() => setCopiedOwnCode(false), 2000);
    } catch {
      setCopiedOwnCode(true);
    }
  };

  const handleValidateCode = () => {
    const result = onApplyReferral(referralInput);
    setReferralFeedback(result);
  };

  const handleProceedSimulated = () => {
    onConfirmSimulatedPurchase();
    setShowConfirmStep(false);
    setJustActivated(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl border border-[#E8E2D9] p-6 sm:p-7 shadow-2xl space-y-5 my-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close upgrade screen"
          className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center text-[#6E6882] hover:bg-[#FAF8F5] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Success / Already Unlocked State */}
        {subscriptionStatus.isPremiumUnlocked || justActivated ? (
          <div className="text-center space-y-4 py-4">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 border border-emerald-200 text-[#059669] flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-semibold text-[#059669]">
                Prototype Plan Activated (No Real Charge)
              </div>
              <h2 className="font-display font-bold text-2xl text-[#1E1B2E]">
                Full PYQ Access Unlocked!
              </h2>
              <p className="text-sm text-[#5C5670]">
                All verified TG TET 2025 sections, topic-wise drills, and mixed simulations remain permanently unlocked on this device.
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 min-h-[48px] rounded-2xl bg-[#4338CA] text-white font-display font-semibold text-sm cursor-pointer"
            >
              Start Practising PYQs
            </button>
          </div>
        ) : (
          <>
            {/* Plan Header */}
            <div className="space-y-1.5 pr-8">
              <div className="text-xs font-semibold text-[#4338CA]">
                30-Day Free Plan · Followed by Affordable Full Access
              </div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[#1E1B2E]">
                Shiksha Sakhi Complete PYQ Pass
              </h2>
              <p className="text-xs sm:text-sm text-[#5C5670] leading-relaxed">
                {subscriptionStatus.isTrialActive
                  ? `You currently have ${subscriptionStatus.daysRemaining} days left in your 30-Day Free Plan. After 30 days, continue full PYQ access at ₹150—or ₹100 with a referral code!`
                  : "Your 30-day free window has ended. Activate full PYQ access below—or apply a valid referral code to unlock the ₹100 offer!"}
              </p>
            </div>

            {/* Pricing Comparison Box */}
            <div className="grid grid-cols-2 gap-3">
              <div
                className={`p-4 rounded-2xl border ${
                  !appliedReferralCode
                    ? "bg-indigo-50/70 border-[#4338CA]"
                    : "bg-[#FAF8F5] border-[#EAE5DC] opacity-75"
                }`}
              >
                <div className="text-xs text-[#5C5670]">Standard Post-Trial</div>
                <div className="font-mono font-bold text-2xl tabular-nums text-[#1E1B2E] mt-1">
                  ₹{subscriptionStatus.standardPrice}
                </div>
                <div className="text-[11px] text-[#6E6882] mt-0.5">
                  One-time exam pass
                </div>
              </div>

              <div
                className={`p-4 rounded-2xl border ${
                  appliedReferralCode
                    ? "bg-emerald-50/80 border-[#059669]"
                    : "bg-amber-50/60 border-amber-200"
                }`}
              >
                <div className="text-xs font-semibold text-amber-800 flex items-center gap-1">
                  <Gift className="w-3.5 h-3.5" />
                  <span>Referral Offer</span>
                </div>
                <div className="font-mono font-bold text-2xl tabular-nums text-[#059669] mt-1">
                  ₹{subscriptionStatus.referralPrice}
                </div>
                <div className="text-[11px] text-[#5C5670] mt-0.5">
                  {appliedReferralCode
                    ? `Active (${appliedReferralCode})`
                    : "With valid friend code"}
                </div>
              </div>
            </div>

            {/* What's Included (Honest Verified Scope) */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5DC] space-y-2">
              <div className="text-xs font-semibold text-[#2E294E]">
                What You Receive
              </div>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#4A445D]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>
                    30 days completely free on sign-up across all organized PYQ sections
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>
                    Verified TG TET (19th Jan 2025, Shift 2) Paper II across CDP, Maths, Science, English & Telugu
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>
                    Bilingual (English + తెలుగు) contextual AI wrong-answer explanations & mistake revision bank
                  </span>
                </li>
              </ul>
            </div>

            {/* Referral Code Input & Learner's Own Shareable Code */}
            <div className="space-y-3 pt-1">
              <div className="space-y-1.5">
                <label
                  htmlFor="referral-code-input"
                  className="text-xs font-semibold text-[#2E294E] flex items-center gap-1.5"
                >
                  <Tag className="w-3.5 h-3.5 text-[#4338CA]" />
                  <span>Have a friend's referral code? (Demo: try SAKHI100)</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="referral-code-input"
                    type="text"
                    value={referralInput}
                    onChange={(e) => setReferralInput(e.target.value)}
                    placeholder="Enter code e.g. SAKHI100"
                    className="flex-1 min-h-[42px] px-3.5 rounded-xl bg-[#FAF8F5] border border-[#DCD6CA] text-sm font-mono uppercase text-[#1E1B2E] focus:outline-2 focus:outline-[#4338CA]"
                  />
                  {appliedReferralCode ? (
                    <button
                      type="button"
                      onClick={() => {
                        onRemoveReferral();
                        setReferralInput("");
                        setReferralFeedback(null);
                      }}
                      className="px-3.5 py-2 min-h-[42px] rounded-xl border border-[#DCD6CA] text-xs font-semibold text-[#5C5670] hover:bg-[#FAF8F5] cursor-pointer"
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleValidateCode}
                      className="px-4 py-2 min-h-[42px] rounded-xl bg-indigo-50 hover:bg-indigo-100 text-[#4338CA] text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  )}
                </div>
                {referralFeedback && (
                  <p
                    className={`text-xs ${
                      referralFeedback.valid
                        ? "text-[#059669] font-medium"
                        : "text-rose-600"
                    }`}
                  >
                    {referralFeedback.message}
                  </p>
                )}
              </div>

              {/* Share Own Code */}
              <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DC] flex items-center justify-between gap-2 text-xs">
                <div>
                  <span className="text-[#6E6882]">Your Referral Code: </span>
                  <span className="font-mono font-bold text-[#1E1B2E]">
                    {myReferralCode}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyMyCode}
                  className="inline-flex items-center gap-1 px-2.5 py-1 min-h-[32px] rounded-lg bg-white border border-[#DCD6CA] font-semibold text-[#2E294E] cursor-pointer"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copiedOwnCode ? "Copied!" : "Copy Code"}</span>
                </button>
              </div>
            </div>

            {/* Confirmation Step Before Simulated Prototype Activation */}
            {!showConfirmStep ? (
              <button
                type="button"
                onClick={() => setShowConfirmStep(true)}
                className="w-full py-3.5 px-6 min-h-[50px] rounded-2xl bg-[#4338CA] hover:bg-[#3730A3] text-white font-display font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>
                  Activate Post-Trial Full Access · ₹
                  {subscriptionStatus.applicablePrice}
                </span>
              </button>
            ) : (
              <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-[#2E294E]">
                  <ShieldCheck className="w-4 h-4 text-[#4338CA] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">
                      Confirm Prototype Activation — ₹
                      {subscriptionStatus.applicablePrice}
                    </div>
                    <p className="text-[#5C5670] mt-0.5 leading-relaxed">
                      This is a prototype demonstration—no real payment details are collected and no money is charged. Proceed to simulate unlocking full PYQ access?
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowConfirmStep(false)}
                    className="flex-1 py-2.5 min-h-[42px] rounded-xl bg-white border border-[#DCD6CA] text-xs font-semibold text-[#2E294E] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleProceedSimulated}
                    className="flex-1 py-2.5 min-h-[42px] rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-semibold cursor-pointer"
                  >
                    Confirm ₹{subscriptionStatus.applicablePrice} Demo Unlock
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
