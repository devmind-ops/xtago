import { useLayoutEffect, useRef, useState } from "react";

interface BatchDetailsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  batchData: {
    batchId: string;
    expiryDate: string;
    quantity: number;
    status: string;
  };
  position?: { x: number; y: number } | null;
}

export function BatchDetailsPopup({ isOpen, onClose, batchData, position }: BatchDetailsPopupProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ left: number; top: number } | null>(null);

  useLayoutEffect(() => {
    const compute = () => {
      const PADDING = 8;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const menuCenterX = (position?.x ?? vw / 2) + 60;
      const anchorY = position?.y ?? 200;
      const cardW = cardRef.current?.offsetWidth ?? 246;
      const cardH = cardRef.current?.offsetHeight ?? 227;

      const desiredLeft = menuCenterX - cardW / 2;
      const left = Math.min(Math.max(PADDING, desiredLeft), vw - cardW - PADDING);

      const below = anchorY + 8;
      const above = anchorY - cardH - 8;
      const top = below + cardH + PADDING > vh ? Math.max(PADDING, above) : Math.min(below, vh - cardH - PADDING);

      setCoords({ left, top });
    };

    compute();
    window.addEventListener("resize", compute);
    window.addEventListener("orientationchange", compute);
    return () => {
      window.removeEventListener("resize", compute);
      window.removeEventListener("orientationchange", compute);
    };
  }, [position?.x, position?.y]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="fixed z-50" style={coords ?? { left: 16, top: 200 }}>
        <div 
          ref={cardRef} 
          className="inline-flex p-6 flex-col justify-center items-start gap-3 rounded-xl bg-[#1C242E] shadow-[0_0_88px_rgba(0,0,0,0.25)] w-[246px] relative"
        >
          {/* Triangle pointer */}
          <div className="absolute -top-3 right-8">
            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5359 4C14.0755 1.33333 14.8453 0 16 0C17.1547 0 17.9245 1.33333 19.4641 4L29.8564 22C31.396 24.6667 32.1658 26 31.5885 27C31.0111 28 29.4715 28 26.3923 28H5.6077C2.52849 28 0.988892 28 0.411542 27C-0.165808 26 0.603992 24.6667 2.14359 22L12.5359 4Z" fill="#1C242E"/>
            </svg>
          </div>
          
          <div className="flex w-[198px] flex-col items-start gap-[17px]">
            {/* Batch ID */}
            <div className="text-white font-['Space_Grotesk'] text-base font-medium uppercase">
              <span className="text-[#C4C4C4]">Batch id </span>
              <span className="text-[#F6F6F6]">: </span>
              <span className="text-white">{batchData.batchId}</span>
            </div>

            {/* Expiry Date */}
            <div className="w-[198px] text-[#F6F6F6] font-['Space_Grotesk'] text-base font-medium uppercase">
              <span className="text-[#C4C4C4]">Expiry Date </span>
              <span className="text-[#F6F6F6]">: {batchData.expiryDate}</span>
            </div>

            {/* Quantity */}
            <div className="flex w-[137px] justify-between items-center">
              <div className="w-[94px] flex-shrink-0 text-[#C4C4C4] font-['Space_Grotesk'] text-base font-normal uppercase">
                Quantity :
              </div>
              <div className="flex w-[33px] h-4 px-3 py-1.5 justify-center items-center gap-2 flex-shrink-0 rounded-2xl bg-[rgba(255,20,116,0.10)]">
                <span className="text-[#FF1474] font-['Space_Grotesk'] text-xs font-medium">
                  {batchData.quantity.toString().padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Status */}
            <div className="flex w-[161px] justify-between items-center">
              <div className="w-[198px] flex-shrink-0 text-[#C4C4C4] font-['Space_Grotesk'] text-base font-normal uppercase">
                STATUS
              </div>
              <div className="flex p-2 items-center gap-2.5 rounded-3xl border border-[#00E074]">
                <span className="text-[#00E074] font-['Space_Grotesk'] text-base font-medium">
                  {batchData.status}
                </span>
              </div>
            </div>

            {/* Print Barcode Link */}
            <button className="w-full text-[#FE8A00] text-center font-['Space_Grotesk'] text-xs font-medium underline">
              👉 Click to Print Barcode
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
