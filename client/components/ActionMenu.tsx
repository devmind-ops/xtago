interface ActionMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: (pos?: { x: number; y: number }) => void;
  onView: (pos?: { x: number; y: number }) => void;
  onDelete: (pos?: { x: number; y: number }) => void;
  position?: { x: number; y: number };
}

export function ActionMenu({ isOpen, onClose, onEdit, onView, onDelete, position }: ActionMenuProps) {
  if (!isOpen) return null;

  const handleEdit = () => {
    onEdit(position);
    onClose();
  };

  const handleView = () => {
    onView(position);
    onClose();
  };

  const handleDelete = () => {
    onDelete(position);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      />
      
      {/* Action Menu */}
      <div 
        className="fixed z-50"
        style={{
          left: position?.x || 0,
          top: position?.y || 0,
        }}
      >
        <div className="inline-flex items-center gap-2 w-[120px] h-10">
          {/* Edit Icon */}
          <button
            onClick={handleEdit}
            className="flex w-8 h-8 p-2 flex-col justify-center items-center rounded-full bg-[#1C242E] hover:bg-[#22353E] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.78759 2.75001L3.65634 8.18126C3.46259 8.38751 3.27509 8.79376 3.23759 9.07501L3.00634 11.1C2.92509 11.8313 3.45009 12.3313 4.17509 12.2063L6.18759 11.8625C6.46884 11.8125 6.86259 11.6063 7.05634 11.3938L12.1876 5.96251C13.0751 5.02501 13.4751 3.95626 12.0938 2.65001C10.7188 1.35626 9.67509 1.81251 8.78759 2.75001Z" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.93115 3.65625C8.1999 5.38125 9.5999 6.7 11.3374 6.875" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.375 14.25H13.625" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* View Icon */}
          <button
            onClick={handleView}
            className="flex w-8 h-8 p-2 flex-col justify-center items-center rounded-full bg-[#1C242E] hover:bg-[#22353E] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="12" fill="#1C242E"/>
              <path d="M6.14559 12.6061C6.84333 13.9598 8.80975 17.1076 11.9997 17.1076C15.195 17.1076 17.1581 13.9583 17.8551 12.6061C17.9501 12.4223 18.0001 12.2132 18 12.0004C17.9999 11.7875 17.9497 11.5785 17.8545 11.3948C17.1574 10.0418 15.1923 6.89258 11.9997 6.89258C8.80709 6.89258 6.84267 10.0403 6.14559 11.3933C6.05025 11.5773 6 11.7866 6 11.9997C6 12.2128 6.05025 12.4221 6.14559 12.6061Z" stroke="#697B7B" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M11.9998 13.9688C12.462 13.9687 12.9052 13.7613 13.232 13.3921C13.5589 13.0229 13.7425 12.5221 13.7425 12C13.7425 11.4779 13.5589 10.9771 13.232 10.6079C12.9052 10.2387 12.462 10.0313 11.9998 10.0312C11.5376 10.0313 11.0943 10.2387 10.7675 10.6079C10.4407 10.9771 10.2571 11.4779 10.2571 12C10.2571 12.5221 10.4407 13.0229 10.7675 13.3921C11.0943 13.7613 11.5376 13.9687 11.9998 13.9688Z" stroke="#697B7B" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Delete Icon */}
          <button
            onClick={handleDelete}
            className="flex w-8 h-8 p-2 flex-col justify-center items-center rounded-full bg-[#1C242E] hover:bg-[#22353E] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="12" fill="#1C242E"/>
              <path d="M17.625 8.23755C15.5438 8.0313 13.45 7.92505 11.3625 7.92505C10.125 7.92505 8.8875 7.98755 7.65 8.11255L6.375 8.23755" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.8125 7.60625L9.95 6.7875C10.05 6.19375 10.125 5.75 11.1812 5.75H12.8188C13.875 5.75 13.9562 6.21875 14.05 6.79375L14.1875 7.60625" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.2812 10.2124L15.875 16.5062C15.8062 17.4874 15.75 18.2499 14.0062 18.2499H9.99375C8.25 18.2499 8.19375 17.4874 8.125 16.5062L7.71875 10.2124" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.9563 14.8125H13.0375" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.4375 12.3125H13.5625" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
