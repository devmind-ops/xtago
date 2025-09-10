import { useState } from "react";
import { TimeRangeDropdown } from "./TimeRangeDropdown";

export function TimeRangeSelector() {
  const [selectedRange, setSelectedRange] = useState("Last Year");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTimeRangeClick = () => {
    setIsDropdownOpen(true);
  };

  const handleTimeRangeSelect = (range: string) => {
    setSelectedRange(range);
  };

  return (
    <div className="px-4 mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-[#F6F6F6] text-lg font-bold">Select Time Range</h3>
          <p className="text-[#697B7B] text-sm">Compare key metrics over time</p>
        </div>

        <div className="relative">
          <button
            onClick={handleTimeRangeClick}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#22353E] border border-[#22353E] hover:bg-[#2A3A4A] transition-colors"
          >
            <span className="text-[#FE8A00] font-medium">{selectedRange}</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="#FE8A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {isDropdownOpen && (
            <>
              <button className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
              <TimeRangeDropdown
                isOpen={isDropdownOpen}
                onClose={() => setIsDropdownOpen(false)}
                selectedRange={selectedRange}
                onSelect={handleTimeRangeSelect}
                inline
                className="right-0 top-full mt-3"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
