import { useEffect } from "react";

interface OrderDetailsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    orderId: string;
    noOfItems: string;
    amount: string;
    paymentMode: string;
    dateTime: string;
    status: string;
  };
}

export function OrderDetailsPopup({ isOpen, onClose, data }: OrderDetailsPopupProps) {
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

  const getStatusColor = (status: string) => {
    return status.toLowerCase() === 'success' ? '#00E074' : '#FF6B6B';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-[246px] bg-[#1C242E] rounded-[12px] p-6 relative shadow-[0_0_88px_rgba(0,0,0,0.25)]">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#697B7B] hover:text-[#F6F6F6] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Content */}
        <div className="flex flex-col gap-[17px] w-[198px]">
          {/* Order ID */}
          <div className="text-[#F6F6F6] font-['Space_Grotesk'] font-normal">
            <span className="text-[16px] text-[#C4C4C4]">ORDER ID </span>
            <span className="text-[16px]">: </span>
            <span className="text-[16px] text-white">{data.orderId}</span>
          </div>

          {/* No of Items */}
          <div className="text-[#F6F6F6] font-['Space_Grotesk'] font-normal">
            <span className="text-[16px] text-[#C4C4C4]">NO OF ITEMS </span>
            <span className="text-[16px]">: {data.noOfItems}</span>
          </div>

          {/* Amount */}
          <div className="text-[#F6F6F6] font-['Space_Grotesk'] font-normal">
            <span className="text-[16px] text-[#C4C4C4]">AMOUNT </span>
            <span className="text-[16px]">: {data.amount}</span>
          </div>

          {/* Payment Mode */}
          <div className="text-[#F6F6F6] font-['Space_Grotesk'] font-normal">
            <span className="text-[16px] text-[#C4C4C4]">PAYMENT MODE </span>
            <span className="text-[16px]">: {data.paymentMode}</span>
          </div>

          {/* Date & Time */}
          <div className="text-[#F6F6F6] font-['Space_Grotesk'] font-normal">
            <span className="text-[16px] text-[#C4C4C4]">DATE & TIME </span>
            <span className="text-[16px]">: {data.dateTime}</span>
          </div>

          {/* Status */}
          <div className="flex items-center justify-between w-[161px]">
            <div className="text-[#C4C4C4] font-['Space_Grotesk'] text-[16px] font-normal">
              STATUS
            </div>
            <div 
              className="flex items-center px-4 py-2 rounded-[24px] border"
              style={{ borderColor: getStatusColor(data.status) }}
            >
              <span 
                className="font-['Space_Grotesk'] text-[16px] font-medium"
                style={{ color: getStatusColor(data.status) }}
              >
                {data.status}
              </span>
            </div>
          </div>
        </div>

        {/* Triangle Arrow */}
        <div className="absolute -top-3 right-[14px]">
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
    </div>
  );
}
