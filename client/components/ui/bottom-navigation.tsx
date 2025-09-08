import { useState } from "react";
import { cn } from "@/lib/utils";

function CostsIcon({ active }: { active?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17C15.24 5.06 14.32 5 13.38 5H10.63C6.22 5 2.75 7.58 2.75 10.75C2.75 11.95 3.92 13 5.37 13H8.63C10.1 13 11.25 11.95 11.25 10.75C11.25 9.55 10.1 8.5 8.63 8.5H5.37C4.92 8.5 4.5 8.73 4.21 9.1"
        stroke={active ? "#F59E0B" : "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProductsIcon({ active }: { active?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 7L12 3L4 7L12 11L20 7Z"
        stroke={active ? "#F59E0B" : "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12L12 16L20 12"
        stroke={active ? "#F59E0B" : "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 17L12 21L20 17"
        stroke={active ? "#F59E0B" : "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon({ active }: { active?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={active ? "#F59E0B" : "currentColor"}
        strokeWidth="1.5"
      />
      <path
        d="M12 16V12"
        stroke={active ? "#F59E0B" : "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8H12.01"
        stroke={active ? "#F59E0B" : "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RefundsIcon({ active }: { active?: boolean }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 12L11 14L15 10"
        stroke={active ? "#F59E0B" : "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke={active ? "#F59E0B" : "currentColor"}
        strokeWidth="1.5"
      />
    </svg>
  );
}

function MicrophoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 14C13.1046 14 14 13.1046 14 12V6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6V12C10 13.1046 10.8954 14 12 14Z"
        stroke="#01A9EA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12"
        stroke="#01A9EA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16V20M10 20H14"
        stroke="#01A9EA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface BottomNavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export function BottomNavigation({ activeTab = "Products", onTabChange }: BottomNavigationProps) {
  const [active, setActive] = useState(activeTab);

  const handleTabClick = (tab: string) => {
    setActive(tab);
    onTabChange?.(tab);
  };

  const tabs = [
    { id: "Costs", label: "Costs", icon: CostsIcon },
    { id: "Products", label: "Products", icon: ProductsIcon },
    { id: "Info", label: "Info", icon: InfoIcon },
    { id: "Refunds", label: "Refunds", icon: RefundsIcon },
  ];

  return (
    <div className="relative">
      {/* Main Navigation */}
      <div className="flex items-center justify-around bg-xtago-background border-t border-xtago-surface px-4 py-3">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          const isActive = active === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 transition-colors",
                isActive ? "text-orange-500" : "text-xtago-muted hover:text-xtago-text"
              )}
            >
              <IconComponent active={isActive} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Floating Action Button */}
      <button
        className="absolute -top-6 right-6 h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-cyan-400 shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
        onClick={() => alert("Voice assistant activated")}
      >
        <MicrophoneIcon />
      </button>
    </div>
  );
}
