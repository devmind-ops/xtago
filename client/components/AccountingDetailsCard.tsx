interface AccountingDetailsCardProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    type: string;
    description: string;
    cost: string;
    date: string;
  };
  inline?: boolean;
  position?: { x: number; y: number } | null;
}

export function AccountingDetailsCard({ isOpen, onClose, data, inline = true, position }: AccountingDetailsCardProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-black/50" 
        onClick={onClose}
      />
      
      {/* Card */}
      <div className={`${inline ? 'fixed' : 'fixed'} z-50`} style={inline && position ? { left: Math.min(Math.max(8, position.x - 120), window.innerWidth - 246 - 8), top: Math.min(position.y + 8, window.innerHeight - 200) } : { left: 16, top: 200 }}>
        <div className="inline-flex p-6 flex-col justify-center items-start gap-3 rounded-xl bg-[#1C242E] shadow-[0_0_88px_rgba(0,0,0,0.25)] w-[246px]">
          {/* Triangle pointer */}
          <div className="absolute -top-3 right-4">
            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5359 4C14.0755 1.33333 14.8453 0 16 0C17.1547 0 17.9245 1.33333 19.4641 4L29.8564 22C31.396 24.6667 32.1658 26 31.5885 27C31.0111 28 29.4715 28 26.3923 28H5.6077C2.52849 28 0.988892 28 0.411542 27C-0.165808 26 0.603992 24.6667 2.14359 22L12.5359 4Z" fill="#1C242E"/>
            </svg>
          </div>
          
          <div className="flex w-[198px] flex-col items-start gap-[17px]">
            {/* Icon */}
            <div className="flex w-5 h-5 p-[5px] justify-between items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.50008 18.3334H12.5001C16.6667 18.3334 18.3334 16.6667 18.3334 12.5001V7.50008C18.3334 3.33341 16.6667 1.66675 12.5001 1.66675H7.50008C3.33341 1.66675 1.66675 3.33341 1.66675 7.50008V12.5001C1.66675 16.6667 3.33341 18.3334 7.50008 18.3334Z" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="w-2.5 h-2.5 rounded-sm bg-[#FE8A00]"></div>
            </div>
            
            {/* Content */}
            <div className="space-y-4 text-base font-normal font-['Space_Grotesk']">
              {/* Type */}
              <div>
                <span className="text-[#C4C4C4]">TYPE </span>
                <span className="text-[#F6F6F6]">: {data.type}</span>
              </div>
              
              {/* Description */}
              <div>
                <span className="text-[#C4C4C4]">DESCRIPTION </span>
                <span className="text-[#F6F6F6]">: {data.description}</span>
              </div>
              
              {/* Cost */}
              <div>
                <span className="text-[#C4C4C4]">COST </span>
                <span className="text-[#F6F6F6]">: {data.cost}</span>
              </div>
              
              {/* Date */}
              <div>
                <span className="text-[#C4C4C4]">DATE </span>
                <span className="text-[#F6F6F6]">: {data.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
