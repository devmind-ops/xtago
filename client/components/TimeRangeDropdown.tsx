import { useState } from "react";

interface TimeRangeDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRange: string;
  onSelect: (range: string) => void;
  inline?: boolean;
  className?: string;
}

const timeRanges = [
  "24 Hours",
  "7 Days", 
  "30 Days",
  "3 Months",
  "6 Months",
  "Last Year",
  "All Time"
];

export function TimeRangeDropdown({ isOpen, onClose, selectedRange, onSelect, inline = false, className }: TimeRangeDropdownProps) {
  if (!isOpen) return null;

  const handleSelect = (range: string) => {
    onSelect(range);
    onClose();
  };

  if (inline) {
    return (
      <div className={`absolute z-50 ${className ?? ''}`}>
        <div className="flex w-[199px] flex-col items-center gap-3 rounded-xl bg-[#151D26] p-6 shadow-[0_0_88px_rgba(0,0,0,0.25)] border border-[#22353E]">
          <div className="absolute -top-3 right-8">
            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5359 4C14.0755 1.33333 14.8453 0 16 0C17.1547 0 17.9245 1.33333 19.4641 4L29.8564 22C31.396 24.6667 32.1658 26 31.5885 27C31.0111 28 29.4715 28 26.3923 28H5.6077C2.52849 28 0.988892 28 0.411542 27C-0.165808 26 0.603992 24.6667 2.14359 22L12.5359 4Z" fill="#151D26"/>
            </svg>
          </div>
          <div className="flex w-full flex-col gap-2.5 pt-4">
            {timeRanges.map((range) => {
              const isSelected = range === selectedRange;
              return isSelected ? (
                <button key={range} onClick={() => handleSelect(range)} className="flex h-[42px] w-full items-center justify-center gap-2 rounded-[20px] border border-[#22353E] bg-[#FE8A00] px-5 py-3">
                  <span className="text-center font-['Space_Grotesk'] text-base font-bold text-[#151D26]">{range}</span>
                </button>
              ) : (
                <button key={range} onClick={() => handleSelect(range)} className="flex h-[42px] w-full items-center justify-center gap-2 rounded-2xl border-b border-[#FE8A00] px-9 py-[18px] hover:bg-[#22353E]/30 transition-colors">
                  <span className="font-['Space_Grotesk'] text-base font-bold text-[#F6F6F6]">{range}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />
      {/* Dropdown */}
      <div className="fixed left-4 top-[200px] z-50">
        <div className="flex w-[199px] flex-col items-center gap-3 rounded-xl bg-[#151D26] p-6 shadow-[0_0_88px_rgba(0,0,0,0.25)] border border-[#22353E]">
          <div className="absolute -top-3 left-8">
            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5359 4C14.0755 1.33333 14.8453 0 16 0C17.1547 0 17.9245 1.33333 19.4641 4L29.8564 22C31.396 24.6667 32.1658 26 31.5885 27C31.0111 28 29.4715 28 26.3923 28H5.6077C2.52849 28 0.988892 28 0.411542 27C-0.165808 26 0.603992 24.6667 2.14359 22L12.5359 4Z" fill="#151D26"/>
            </svg>
          </div>
          <div className="flex w-full flex-col gap-2.5 pt-4">
            {timeRanges.map((range) => {
              const isSelected = range === selectedRange;
              return isSelected ? (
                <button key={range} onClick={() => handleSelect(range)} className="flex h-[42px] w-full items-center justify-center gap-2 rounded-[20px] border border-[#22353E] bg-[#FE8A00] px-5 py-3">
                  <span className="text-center font-['Space_Grotesk'] text-base font-bold text-[#151D26]">{range}</span>
                </button>
              ) : (
                <button key={range} onClick={() => handleSelect(range)} className="flex h-[42px] w-full items-center justify-center gap-2 rounded-2xl border-b border-[#FE8A00] px-9 py-[18px] hover:bg-[#22353E]/30 transition-colors">
                  <span className="font-['Space_Grotesk'] text-base font-bold text-[#F6F6F6]">{range}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
