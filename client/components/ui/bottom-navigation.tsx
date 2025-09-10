import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

// Icons closely matching the Figma footer
function CostsIcon({ active }: { active?: boolean }) {
  const color = active ? "#F59E0B" : "currentColor";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" />
      <path d="M13.8 7.75C13.33 7.27 12.7 7 12 7C10.62 7 9.5 8.12 9.5 9.5C9.5 10.88 10.62 12 12 12C13.38 12 14.5 13.12 14.5 14.5C14.5 15.88 13.38 17 12 17C11.3 17 10.67 16.73 10.2 16.25" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 5V7M12 17V19" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ProductsIcon({ active }: { active?: boolean }) {
  const color = active ? "#F59E0B" : "currentColor";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 7H18L17 19H7L6 7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 7V6C9 4.343 10.343 3 12 3C13.657 3 15 4.343 15 6V7" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 11H15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function InfoIcon({ active }: { active?: boolean }) {
  const color = active ? "#F59E0B" : "currentColor";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" />
      <path d="M12 16V11" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="8" r="1" fill={color} />
    </svg>
  );
}

function RefundsIcon({ active }: { active?: boolean }) {
  const color = active ? "#F59E0B" : "currentColor";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5C8.686 5 6 7.686 6 11C6 14.314 8.686 17 12 17C13.657 17 15.157 16.328 16.242 15.242" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M16 11H20V15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 11C20 7.686 17.314 5 14 5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ChartFabIcon() {
  // Matches attached frame: rounded square with bars inside
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 3V21H21V3H3ZM5 5H19V19H5V5ZM7 17V15H9V17H7ZM7 13V11H9V13H7ZM7 9V7H9V9H7ZM11 17V13H13V17H11ZM11 11V9H13V11H11ZM15 17V15H17V17H15ZM15 13V7H17V13H15Z" fill="white"/>
    </svg>
  );
}

interface BottomNavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export function BottomNavigation({ activeTab = "Dashboard", onTabChange }: BottomNavigationProps) {
  const [active, setActive] = useState(activeTab);
  const navigate = useNavigate();

  const handleTabClick = (tab: string) => {
    setActive(tab);
    onTabChange?.(tab);
    
    // Navigate to appropriate routes
    switch (tab) {
      case "Costs":
        navigate("/accounting");
        break;
      case "Products":
        navigate("/products");
        break;
      case "Info":
        navigate("/info");
        break;
      case "Refunds":
        navigate("/refunds");
        break;
      case "Dashboard":
        navigate("/dashboard");
        break;
      default:
        break;
    }
  };

  const tabs = [
    { id: "Costs", label: "Costs", icon: CostsIcon },
    { id: "Products", label: "Products", icon: ProductsIcon },
    { id: "Info", label: "Info", icon: InfoIcon },
    { id: "Refunds", label: "Refunds", icon: RefundsIcon },
  ];

  return (
    <div className="relative pb-[calc(env(safe-area-inset-bottom))]">
      {/* Main Navigation */}
      <div className="relative overflow-visible">
        <div className="flex items-center justify-around bg-[#0F1822]/98 backdrop-blur border-t border-xtago-surface/50 px-4 py-3 rounded-t-2xl shadow-[0_-8px_25px_rgba(0,0,0,0.4)]">
          {tabs.map((tab, idx) => {
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

        {/* Center FAB */}
        <button
          aria-label="Dashboard"
          className="absolute left-1/2 -top-7 -translate-x-1/2 h-[64px] w-[64px] rounded-full bg-gradient-to-b from-[#FFB24A] to-[#FE8A00] shadow-[0_12px_32px_rgba(0,0,0,0.5),0_0_0_4px_rgba(0,0,0,0.15)_inset] flex items-center justify-center hover:scale-105 transition-transform duration-200"
          onClick={() => handleTabClick("Dashboard")}
        >
          <ChartFabIcon />
        </button>
      </div>
    </div>
  );
}
