import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TimeRangeDropdownProps {
  value: string;
  onChange: (value: string) => void;
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

export function TimeRangeDropdown({ value, onChange, className }: TimeRangeDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-xtago-surface border border-xtago-surface/60 rounded-lg px-3 py-2 text-xtago-text text-sm focus:outline-none focus:ring-2 focus:ring-xtago-primary appearance-none pr-8 min-w-[120px] text-left hover:bg-xtago-surface/80 transition-colors"
      >
        {value}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 12 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={cn("transition-transform", isOpen && "rotate-180")}
          >
            <path 
              d="M3 4.5L6 7.5L9 4.5" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setIsOpen(false)} />
          
          {/* Dropdown Content */}
          <div className="absolute top-full right-0 mt-2 z-50">
            <div className="flex w-[199px] h-[412px] p-6 flex-col justify-center items-center gap-3 rounded-xl bg-[#151D26] shadow-[0_0_88px_0_rgba(0,0,0,0.25)] border border-xtago-surface/30">
              <div className="flex w-[156px] p-3 flex-col items-start gap-2.5 relative">
                {timeRanges.map((range) => {
                  const isSelected = range === value;
                  
                  if (isSelected) {
                    return (
                      <button
                        key={range}
                        onClick={() => handleSelect(range)}
                        className="flex p-3 justify-center items-center gap-2 self-stretch rounded-[20px] border border-[#22353E] bg-[#FE8A00] w-full shadow-sm"
                      >
                        <span className="text-[#151D26] text-center font-['Space_Grotesk'] text-base font-bold leading-normal">
                          {range}
                        </span>
                      </button>
                    );
                  }
                  
                  return (
                    <button
                      key={range}
                      onClick={() => handleSelect(range)}
                      className="flex w-[156px] h-[42px] p-[18px_36px] justify-center items-center gap-2 rounded-2xl border-b border-[#FE8A00] hover:bg-[#FE8A00]/10 transition-colors"
                    >
                      <span className="text-[#F6F6F6] font-['Space_Grotesk'] text-base font-bold leading-normal">
                        {range}
                      </span>
                    </button>
                  );
                })}
              </div>
              
              {/* Arrow indicator */}
              <svg 
                className="w-10 h-10 relative -right-[15px] -top-3 fill-[#151D26]" 
                width="32" 
                height="28" 
                viewBox="0 0 32 28" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12.5359 4C14.0755 1.33333 14.8453 -2.38419e-07 16 -3.57628e-07C17.1547 -3.57628e-07 17.9245 1.33333 19.4641 4L29.8564 22C31.396 24.6667 32.1658 26 31.5885 27C31.0111 28 29.4715 28 26.3923 28H5.6077C2.52849 28 0.988892 28 0.411542 27C-0.165808 26 0.603992 24.6667 2.14359 22L12.5359 4Z" 
                  fill="#151D26"
                />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
