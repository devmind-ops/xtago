import { useEffect } from "react";

interface RefundDetailsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    name: string;
    batchId: string;
    vendor: string;
    reason: string;
    date: string;
    amount: string;
    customer: string;
    refundType: string;
    refundMode: string;
    status: string;
  };
}

export function RefundDetailsPopup({ isOpen, onClose, data }: RefundDetailsPopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-[225px] bg-[#1C242E] rounded-[20px] p-[10px] relative">
        {/* Close button */}
        <div className="flex justify-between items-center mb-[14px]">
          <div className="flex items-center gap-[5px]">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M7.50008 18.3334H12.5001C16.6667 18.3334 18.3334 16.6667 18.3334 12.5001V7.50008C18.3334 3.33341 16.6667 1.66675 12.5001 1.66675H7.50008C3.33341 1.66675 1.66675 3.33341 1.66675 7.50008V12.5001C1.66675 16.6667 3.33341 18.3334 7.50008 18.3334Z" 
                stroke="#697B7B" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <div className="w-[10px] h-[10px] rounded-[2px] bg-[#FE8A00]"></div>
          </div>
          <button 
            onClick={onClose}
            className="text-[#697B7B] hover:text-[#F6F6F6] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[17px]">
          {/* Name */}
          <div className="text-[#F6F6F6] font-['Space_Grotesk'] font-normal">
            <span className="text-[11px] text-[#C4C4C4]">NAME </span>
            <span className="text-[16px]">: {data.name}</span>
          </div>

          {/* Batch ID */}
          <div className="text-[#F6F6F6] font-['Space_Grotesk'] font-normal">
            <span className="text-[11px] text-[#C4C4C4]">BATCH ID </span>
            <span className="text-[16px]">: </span>
            <span className="text-[12px]">{data.batchId}</span>
          </div>

          {/* Vendor */}
          <div className="text-[#F6F6F6] font-['Space_Grotesk'] font-normal">
            <span className="text-[11px] text-[#C4C4C4]">VENDOR </span>
            <span className="text-[16px]">: </span>
            <span className="text-[12px]">{data.vendor}</span>
          </div>

          {/* Reason */}
          <div className="text-[#F6F6F6] font-['Space_Grotesk'] font-normal">
            <span className="text-[11px] text-[#C4C4C4]">REASON </span>
            <span className="text-[16px]">: {data.reason}</span>
          </div>

          {/* Date */}
          <div className="text-[#F6F6F6] font-['Space_Grotesk'] font-normal">
            <span className="text-[11px] text-[#C4C4C4]">DATE </span>
            <span className="text-[16px]">: </span>
            <span className="text-[12px]">{data.date}</span>
          </div>

          {/* Amount */}
          <div className="text-[#F6F6F6] font-['Space_Grotesk'] font-normal">
            <span className="text-[11px] text-[#C4C4C4]">AMOUNT </span>
            <span className="text-[16px]">: </span>
            <span className="text-[12px]">{data.amount}</span>
          </div>

          {/* Customer */}
          <div className="text-[#F6F6F6] font-['Space_Grotesk'] font-normal h-[35px]">
            <span className="text-[11px] text-[#C4C4C4]">CUSTOMER </span>
            <span className="text-[16px]">: </span>
            <span className="text-[12px]">{data.customer}</span>
          </div>

          {/* Refund Type */}
          <div className="text-[#F6F6F6] font-['Space_Grotesk'] font-normal">
            <span className="text-[11px] text-[#C4C4C4]">REFUND TYPE </span>
            <span className="text-[16px]">: </span>
            <span className="text-[12px]">{data.refundType}</span>
          </div>

          {/* Refund Mode */}
          <div className="text-[#F6F6F6] font-['Space_Grotesk'] font-normal">
            <span className="text-[11px] text-[#C4C4C4]">REFUND MODE </span>
            <span className="text-[16px]">: </span>
            <span className="text-[12px]">{data.refundMode}</span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-[11px]">
            <div className="text-[#F6F6F6] font-['Space_Grotesk'] font-normal">
              <span className="text-[11px] text-[#C4C4C4]">STATUS</span>
              <span className="text-[16px]">:</span>
            </div>
            <div className="flex items-center px-4 py-2 rounded-[24px] border border-[#FE8A00]">
              <span className="text-[#FE8A00] font-['Space_Grotesk'] text-[12px] font-medium">
                {data.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
