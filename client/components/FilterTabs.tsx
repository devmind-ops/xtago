import { KeyboardEvent, useMemo } from "react";

interface FilterTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function FilterTabs({ activeTab, onTabChange }: FilterTabsProps) {
  const tabs = useMemo(
    () => [
      { id: "one-time", label: "One-Time Cost" },
      { id: "recurring", label: "Recurring Costs" },
      { id: "utilities", label: "Utilities" },
    ],
    []
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = tabs.findIndex((t) => t.id === activeTab);
    if (currentIndex === -1) return;

    if (e.key === "ArrowRight") {
      const next = (currentIndex + 1) % tabs.length;
      onTabChange(tabs[next].id);
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      const prev = (currentIndex - 1 + tabs.length) % tabs.length;
      onTabChange(tabs[prev].id);
      e.preventDefault();
    }
  };

  return (
    <div className="px-4 mb-6">
      <div
        className="flex bg-[#1A2D3A] rounded-2xl p-1 border border-[#22353E] min-w-0"
        role="tablist"
        aria-label="Accounting categories"
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-controls={`panel-${tab.id}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex-1 min-w-0 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 truncate whitespace-nowrap text-center
                ${isActive
                  ? "bg-[#FE8A00] text-[#151D26] shadow-md"
                  : "text-[#697B7B] hover:text-[#F6F6F6] hover:bg-[#22353E]"}
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
