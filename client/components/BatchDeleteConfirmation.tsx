import { useLayoutEffect, useRef, useState } from "react";

interface BatchDeleteConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  position?: { x: number; y: number } | null;
}

export function BatchDeleteConfirmation({ isOpen, onClose, onConfirm, position }: BatchDeleteConfirmationProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ left: number; top: number } | null>(null);

  useLayoutEffect(() => {
    const compute = () => {
      const PADDING = 8;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const menuCenterX = (position?.x ?? vw / 2) + 60;
      const anchorY = position?.y ?? 200;
      const cardW = cardRef.current?.offsetWidth ?? 263;
      const cardH = cardRef.current?.offsetHeight ?? 163;

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
          className="inline-flex p-6 flex-col justify-center items-start gap-3 rounded-xl bg-[#1C242E] shadow-[0_0_88px_rgba(0,0,0,0.25)] w-[263px] relative"
        >
          {/* Triangle pointer */}
          <div className="absolute -top-3 right-8">
            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5359 4C14.0755 1.33333 14.8453 0 16 0C17.1547 0 17.9245 1.33333 19.4641 4L29.8564 22C31.396 24.6667 32.1658 26 31.5885 27C31.0111 28 29.4715 28 26.3923 28H5.6077C2.52849 28 0.988892 28 0.411542 27C-0.165808 26 0.603992 24.6667 2.14359 22L12.5359 4Z" fill="#1C242E"/>
            </svg>
          </div>
          
          <div className="flex w-[215px] p-5 flex-col items-center gap-[15px] rounded-xl bg-[#1C242E]">
            {/* Title */}
            <div className="self-stretch text-[#F6F6F6] text-center font-['Space_Grotesk'] text-base font-medium">
              Are You Sure?
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 self-stretch">
              <button
                onClick={onClose}
                className="flex w-20 h-10 p-[18px] justify-center items-center gap-2 rounded-2xl border border-[#22353E]"
              >
                <span className="text-[#697B7B] font-['Space_Grotesk'] text-base font-bold">Cancel</span>
              </button>
              <button
                onClick={onConfirm}
                className="flex w-20 h-10 p-[18px] justify-center items-center gap-2 rounded-2xl bg-[#FE8A00]"
              >
                <span className="text-[#151D26] font-['Space_Grotesk'] text-base font-bold">Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
