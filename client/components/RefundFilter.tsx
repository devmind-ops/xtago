import { useState } from "react";

interface RefundFilterProps {
  isOpen: boolean;
  onClose: () => void;
  position: { x: number; y: number };
}

export function RefundFilter({ isOpen, onClose, position }: RefundFilterProps) {
  const [activeFilter, setActiveFilter] = useState<'timeRange' | 'status' | 'reason'>('reason');
  const [selectedReason, setSelectedReason] = useState<'damaged' | 'Damaged'>('Damaged');

  if (!isOpen) return null;

  const filterOptions = {
    timeRange: [],
    status: [],
    reason: [
      { value: 'damaged', label: 'damaged' },
      { value: 'Damaged', label: 'Damaged' }
    ]
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      />
      
      {/* Filter Dropdown */}
      <div
        className="fixed z-50 w-[199px] bg-[#151D26] rounded-[12px] shadow-[0_0_88px_rgba(0,0,0,0.25)] p-6"
        style={{
          left: `${Math.min(Math.max(8, position.x - 99.5), window.innerWidth - 207)}px`,
          top: `${position.y}px`,
        }}
      >
        {/* Filter Buttons */}
        <div className="flex flex-col gap-3 mb-6">
          {/* Time Range */}
          <button
            onClick={() => setActiveFilter('timeRange')}
            className={`w-full h-[42px] px-9 py-[18px] rounded-2xl border-b border-[#FE8A00] flex items-center justify-center ${
              activeFilter === 'timeRange' ? 'bg-[#FE8A00] text-[#151D26]' : 'text-[#F6F6F6]'
            }`}
          >
            <span className="font-['Space_Grotesk'] text-[16px] font-bold">Time Range</span>
          </button>

          {/* Status */}
          <button
            onClick={() => setActiveFilter('status')}
            className={`w-full h-[42px] px-9 py-[18px] rounded-2xl border-b border-[#FE8A00] flex items-center justify-center ${
              activeFilter === 'status' ? 'bg-[#FE8A00] text-[#151D26]' : 'text-[#F6F6F6]'
            }`}
          >
            <span className="font-['Space_Grotesk'] text-[16px] font-bold">Status</span>
          </button>

          {/* Reason */}
          <button
            onClick={() => setActiveFilter('reason')}
            className={`w-full h-[42px] px-5 py-3 rounded-[20px] border border-[#22353E] flex items-center justify-center ${
              activeFilter === 'reason' ? 'bg-[#FE8A00]' : 'bg-transparent'
            }`}
          >
            <span className={`font-['Space_Grotesk'] text-[16px] font-bold ${
              activeFilter === 'reason' ? 'text-[#151D26]' : 'text-[#F6F6F6]'
            }`}>
              Reason
            </span>
          </button>
        </div>

        {/* Menu List - Only show for reason filter */}
        {activeFilter === 'reason' && (
          <div className="relative">
            <div className="bg-[#1C242E] rounded-[12px] shadow-[0_0_88px_rgba(0,0,0,0.25)] p-6">
              <div className="flex flex-col gap-3">
                {filterOptions.reason.map((option) => (
                  <div key={option.value} className="flex items-center gap-[5px]">
                    <button
                      onClick={() => setSelectedReason(option.value as 'damaged' | 'Damaged')}
                      className={`w-4 h-4 rounded-[12px] border border-[#22353E] flex items-center justify-center ${
                        selectedReason === option.value ? 'bg-[#FE8A00]' : 'bg-transparent'
                      }`}
                    >
                      {selectedReason === option.value && (
                        <div className="w-2 h-2 rounded-full bg-[#FE8A00]" />
                      )}
                    </button>
                    <span className="text-[#C4C4C4] font-['Space_Grotesk'] text-[14px] font-medium">
                      {option.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Triangle Arrow */}
            <div className="absolute -top-3 right-3">
              <svg 
                width="32" 
                height="28" 
                viewBox="0 0 32 28" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12.5359 4C14.0755 1.33333 14.8453 -2.38419e-07 16 -3.57628e-07C17.1547 -3.57628e-07 17.9245 1.33333 19.4641 4L29.8564 22C31.396 24.6667 32.1658 26 31.5885 27C31.0111 28 29.4715 28 26.3923 28H5.6077C2.52849 28 0.988892 28 0.411542 27C-0.165808 26 0.603992 24.6667 2.14359 22L12.5359 4Z" 
                  fill="#1C242E"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
