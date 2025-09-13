import { useState } from "react";
import { cn } from "@/lib/utils";

interface ExBatchTimeRangeSelectorProps {
  defaultRange?: string;
  onChange?: (range: string) => void;
}

function ChevronDownIcon() {
  return (
    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.20703 1H6.79297L4 3.79297L1.20703 1Z" fill="#FE8A00" stroke="#FE8A00"/>
    </svg>
  );
}

export function ExBatchTimeRangeSelector({ defaultRange = "24 hours", onChange }: ExBatchTimeRangeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState<string>(defaultRange);

  const timeRanges = [
    "24 hours",
    "7 days", 
    "30 days",
    "3 months",
    "6 months",
    "1 year"
  ];

  const handleSelect = (r: string) => {
    setRange(r);
    onChange?.(r);
    setIsOpen(false);
  };

  return (
    <div className="flex w-full justify-center items-center gap-[26px]">
      <div className="w-[249px] h-[39px] flex-shrink-0">
        <div className="text-[#F6F6F6] font-['Space_Grotesk'] leading-[18px]">
          <span className="text-xl font-bold">Select Time Range </span>
          <span className="text-[10px] font-normal">[Compare key metrics over time]</span>
        </div>
      </div>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-[113px] h-[30px] px-5 justify-center items-center gap-2.5 flex-shrink-0 rounded-[33px] bg-[rgba(254,138,0,0.10)]"
        >
          <div className="flex justify-center items-center gap-[15px]">
            <span className="text-[#FE8A00] font-['Space_Grotesk'] text-xs font-normal">
              {range}
            </span>
            <div className={cn("transition-transform duration-200", isOpen && "rotate-180")}> 
              <ChevronDownIcon />
            </div>
          </div>
        </button>

        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <div className="absolute top-full left-0 right-0 z-20 mt-1 bg-[#1C242E] border border-[#22353E] rounded-2xl overflow-hidden shadow-lg">
              {timeRanges.map((r) => (
                <button
                  key={r}
                  onClick={() => handleSelect(r)}
                  className={cn(
                    "w-full px-4 py-3 text-left text-xs font-normal transition-colors",
                    range === r ? "bg-[rgba(254,138,0,0.10)] text-[#FE8A00]" : "text-[#F6F6F6] hover:bg-[#22353E]"
                  )}
                >
                  {r}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
