import { useState } from "react";

interface HistoryFilterProps {
  isOpen: boolean;
  onClose: () => void;
  position: { x: number; y: number };
  type: 'sales' | 'audit';
}

export function HistoryFilter({ isOpen, onClose, position, type }: HistoryFilterProps) {
  const [activeFilter, setActiveFilter] = useState<'timeRange' | 'paymentMode' | 'orderStatus'>('orderStatus');
  const [selectedStatus, setSelectedStatus] = useState<'Success' | 'Failed'>('Failed');

  if (!isOpen) return null;

  const filterOptions = {
    timeRange: [],
    paymentMode: [],
    orderStatus: [
      { value: 'Success', label: 'Success' },
      { value: 'Failed', label: 'Failed' }
    ]
  };

  const filterLabels = {
    sales: {
      timeRange: 'Time Range',
      paymentMode: 'Payment Mode', 
      orderStatus: 'Order Status'
    },
    audit: {
      timeRange: 'Time Range',
      paymentMode: 'Action Type',
      orderStatus: 'Status'
    }
  };

  const labels = filterLabels[type];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[90]"
        onClick={onClose}
      />
      
      {/* Filter Dropdown */}
      <div
        className="fixed z-[100] w-[199px] bg-[#151D26] rounded-[12px] shadow-[0_0_88px_rgba(0,0,0,0.25)] p-6 pointer-events-auto"
        style={{
          left: `${Math.min(Math.max(8, position.x - 99.5), Math.max(8, window.innerWidth - 207))}px`,
          top: `${Math.max(8, Math.min(position.y, window.innerHeight - 250))}px`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Filter Buttons */}
        <div className="flex flex-col gap-2.5 mb-6">
          {/* Time Range */}
          <button
            onClick={() => setActiveFilter('timeRange')}
            className={`w-full h-[42px] px-9 py-[18px] rounded-2xl border-b border-[#FE8A00] flex items-center justify-center ${
              activeFilter === 'timeRange' ? 'bg-[#FE8A00] text-[#151D26]' : 'text-[#F6F6F6]'
            }`}
          >
            <span className="font-['Space_Grotesk'] text-[16px] font-bold">{labels.timeRange}</span>
          </button>

          {/* Payment Mode / Action Type */}
          <button
            onClick={() => setActiveFilter('paymentMode')}
            className={`w-full h-[42px] px-9 py-[18px] rounded-2xl border-b border-[#FE8A00] flex items-center justify-center ${
              activeFilter === 'paymentMode' ? 'bg-[#FE8A00] text-[#151D26]' : 'text-[#F6F6F6]'
            }`}
          >
            <span className="font-['Space_Grotesk'] text-[16px] font-bold">{labels.paymentMode}</span>
          </button>

          {/* Order Status */}
          <button
            onClick={() => setActiveFilter('orderStatus')}
            className={`w-full h-[42px] px-5 py-3 rounded-[20px] border border-[#22353E] flex items-center justify-center ${
              activeFilter === 'orderStatus' ? 'bg-[#FE8A00]' : 'bg-transparent'
            }`}
          >
            <span className={`font-['Space_Grotesk'] text-[16px] font-bold ${
              activeFilter === 'orderStatus' ? 'text-[#151D26]' : 'text-[#F6F6F6]'
            }`}>
              {labels.orderStatus}
            </span>
          </button>
        </div>

        {/* Menu List - Only show for order status filter */}
        {activeFilter === 'orderStatus' && (
          <div className="relative">
            <div className="bg-[#1C242E] rounded-[12px] shadow-[0_0_88px_rgba(0,0,0,0.25)] p-6">
              <div className="flex flex-col gap-3">
                {filterOptions.orderStatus.map((option) => (
                  <div key={option.value} className="flex items-center gap-[5px]">
                    <button
                      onClick={() => setSelectedStatus(option.value as 'Success' | 'Failed')}
                      className={`w-4 h-4 rounded-[12px] border border-[#22353E] flex items-center justify-center ${
                        selectedStatus === option.value ? 'bg-[#FE8A00]' : 'bg-transparent'
                      }`}
                    >
                      {selectedStatus === option.value && (
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
