import { useState } from "react";

interface FilterTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function FilterTabs({ activeTab, onTabChange }: FilterTabsProps) {
  const tabs = [
    { id: "one-time", label: "One-Time Cost" },
    { id: "recurring", label: "Recurring Costs" },
    { id: "utilities", label: "Utilities" }
  ];

  return (
    <div className="px-4 mb-6">
      <div className="flex bg-[#1A2D3A] rounded-2xl p-1 border border-[#22353E]">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex-1 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
              ${activeTab === tab.id 
                ? 'bg-[#FE8A00] text-[#151D26] shadow-md' 
                : 'text-[#697B7B] hover:text-[#F6F6F6] hover:bg-[#22353E]'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
