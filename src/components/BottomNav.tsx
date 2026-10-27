import { Award, BookOpen, Compass, User } from "lucide-react";
import { NavSection } from "../types";

interface BottomNavProps {
  activeNav: NavSection;
  mistakeCount: number;
  onSelectNav: (nav: NavSection) => void;
}

export function BottomNav({
  activeNav,
  mistakeCount,
  onSelectNav,
}: BottomNavProps) {
  const items = [
    { id: NavSection.LEARN, label: "Learn", icon: Compass },
    {
      id: NavSection.PRACTICE,
      label: "Practice",
      icon: BookOpen,
      badge: mistakeCount > 0 ? mistakeCount : undefined,
    },
    { id: NavSection.REWARDS, label: "Rewards", icon: Award },
    { id: NavSection.PROFILE, label: "Profile", icon: User },
  ];

  return (
    <nav
      aria-label="Bottom navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 h-16 bg-white/95 backdrop-blur-md border-t border-[#E8E2D9] grid grid-cols-4 items-center px-2"
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeNav === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelectNav(item.id)}
            className={`relative min-h-[48px] flex flex-col items-center justify-center rounded-xl transition-colors cursor-pointer ${
              isActive
                ? "text-[#4338CA]"
                : "text-[#6E6882] hover:text-[#1E1B2E]"
            }`}
          >
            <div className="relative">
              <Icon
                className={`w-5 h-5 ${
                  isActive ? "stroke-[2.4]" : "stroke-[1.9]"
                }`}
              />
              {item.badge !== undefined && (
                <span className="absolute -top-1.5 -right-2.5 min-w-[16px] h-4 px-1 rounded-full bg-amber-500 text-white font-mono text-[10px] font-semibold flex items-center justify-center tabular-nums">
                  {item.badge}
                </span>
              )}
            </div>
            <span
              className={`text-[11px] mt-1 tracking-tight whitespace-nowrap ${
                isActive ? "font-semibold" : "font-medium"
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
