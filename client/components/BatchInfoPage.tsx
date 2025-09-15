import { useState } from "react";
import { BatchDetailsPopup } from "@/components/BatchDetailsPopup";
import { BatchDeleteConfirmation } from "@/components/BatchDeleteConfirmation";
import { ActionMenu } from "@/components/ActionMenu";

interface BatchItem {
  id: number;
  batchId: string;
  expiryDate: string;
  quantity: number;
}

interface BatchFormData {
  batchId: string;
  expiryDate: string;
  quantityOnHand: string;
  stockReceiptDate: string;
}

function SortIcon() {
  return (
    <div className="flex flex-col items-start gap-0.5">
      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.20711 5C0.761654 5 0.538571 4.46143 0.853553 4.14645L4.64645 0.353553C4.84171 0.158291 5.15829 0.158291 5.35355 0.353553L9.14645 4.14645C9.46143 4.46143 9.23835 5 8.79289 5H1.20711Z" fill="#697B7B"/>
      </svg>
      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.79289 -1.05529e-07C9.23835 -6.65859e-08 9.46143 0.538571 9.14645 0.853553L5.35355 4.64645C5.15829 4.84171 4.84171 4.84171 4.64645 4.64645L0.853553 0.853552C0.538571 0.53857 0.761655 -8.07642e-07 1.20711 -7.68699e-07L8.79289 -1.05529e-07Z" fill="#697B7B"/>
      </svg>
    </div>
  );
}

function EditIcon() {
  return (
    <div className="flex w-6 h-6 p-2.5 flex-col justify-center items-center gap-2.5 rounded-full bg-[#1C242E]">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.78759 2.75001L3.65634 8.18126C3.46259 8.38751 3.27509 8.79376 3.23759 9.07501L3.00634 11.1C2.92509 11.8313 3.45009 12.3313 4.17509 12.2063L6.18759 11.8625C6.46884 11.8125 6.86259 11.6063 7.05634 11.3938L12.1876 5.96251C13.0751 5.02501 13.4751 3.95626 12.0938 2.65001C10.7188 1.35626 9.67509 1.81251 8.78759 2.75001Z" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.93115 3.65625C8.1999 5.38125 9.5999 6.7 11.3374 6.875" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.375 14.25H13.625" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function ViewIcon() {
  return (
    <div className="flex w-6 h-6 p-2.5 flex-col justify-center items-center gap-2.5 rounded-full bg-[#1C242E]">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="12" fill="#1C242E"/>
        <path d="M6.14559 12.6061C6.84333 13.9598 8.80975 17.1076 11.9997 17.1076C15.195 17.1076 17.1581 13.9583 17.8551 12.6061C17.9501 12.4223 18.0001 12.2132 18 12.0004C17.9999 11.7875 17.9497 11.5785 17.8545 11.3948C17.1574 10.0418 15.1923 6.89258 11.9997 6.89258C8.80709 6.89258 6.84267 10.0403 6.14559 11.3933C6.05025 11.5773 6 11.7866 6 11.9997C6 12.2128 6.05025 12.4221 6.14559 12.6061Z" stroke="#697B7B" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11.9998 13.9688C12.462 13.9687 12.9052 13.7613 13.232 13.3921C13.5589 13.0229 13.7425 12.5221 13.7425 12C13.7425 11.4779 13.5589 10.9771 13.232 10.6079C12.9052 10.2387 12.462 10.0313 11.9998 10.0312C11.5376 10.0313 11.0943 10.2387 10.7675 10.6079C10.4407 10.9771 10.2571 11.4779 10.2571 12C10.2571 12.5221 10.4407 13.0229 10.7675 13.3921C11.0943 13.7613 11.5376 13.9687 11.9998 13.9688Z" stroke="#697B7B" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function DeleteIcon() {
  return (
    <div className="flex w-6 h-6 p-2.5 flex-col justify-center items-center gap-2.5 rounded-full bg-[#1C242E]">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="12" fill="#1C242E"/>
        <path d="M17.625 8.23755C15.5438 8.0313 13.45 7.92505 11.3625 7.92505C10.125 7.92505 8.8875 7.98755 7.65 8.11255L6.375 8.23755" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.8125 7.60625L9.95 6.7875C10.05 6.19375 10.125 5.75 11.1812 5.75H12.8188C13.875 5.75 13.9562 6.21875 14.05 6.79375L14.1875 7.60625" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16.2812 10.2124L15.875 16.5062C15.8062 17.4874 15.75 18.2499 14.0062 18.2499H9.99375C8.25 18.2499 8.19375 17.4874 8.125 16.5062L7.71875 10.2124" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.9563 14.8125H13.0375" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.4375 12.3125H13.5625" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function DotsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9C3 9.19891 3.07902 9.38968 3.21967 9.53033C3.36032 9.67098 3.55109 9.75 3.75 9.75C3.94891 9.75 4.13968 9.67098 4.28033 9.53033C4.42098 9.38968 4.5 9.19891 4.5 9C4.5 8.80109 4.42098 8.61032 4.28033 8.46967C4.13968 8.32902 3.94891 8.25 3.75 8.25C3.55109 8.25 3.36032 8.32902 3.21967 8.46967C3.07902 8.61032 3 8.80109 3 9ZM8.25 9C8.25 9.19891 8.32902 9.38968 8.46967 9.53033C8.61032 9.67098 8.80109 9.75 9 9.75C9.19891 9.75 9.38968 9.67098 9.53033 9.53033C9.67098 9.38968 9.75 9.19891 9.75 9C9.75 8.80109 9.67098 8.61032 9.53033 8.46967C9.38968 8.32902 9.19891 8.25 9 8.25C8.80109 8.25 8.61032 8.32902 8.46967 8.46967C8.32902 8.61032 8.25 8.80109 8.25 9ZM13.5 9C13.5 9.19891 13.579 9.38968 13.7197 9.53033C13.8603 9.67098 14.0511 9.75 14.25 9.75C14.4489 9.75 14.6397 9.67098 14.7803 9.53033C14.921 9.38968 15 9.19891 15 9C15 8.80109 14.921 8.61032 14.7803 8.46967C14.6397 8.32902 14.4489 8.25 14.25 8.25C14.0511 8.25 13.8603 8.32902 13.7197 8.46967C13.579 8.61032 13.5 8.80109 13.5 9Z" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66663 1.66675V4.16675" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3334 1.66675V4.16675" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.91663 7.57495H17.0833" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.5 7.08341V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08341C2.5 4.58341 3.75 2.91675 6.66667 2.91675H13.3333C16.25 2.91675 17.5 4.58341 17.5 7.08341Z" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.079 11.4167H13.0864" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.079 13.9167H13.0864" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.9962 11.4167H10.0037" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.9962 13.9167H10.0037" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.91197 11.4167H6.91945" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.91197 13.9167H6.91945" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 29.3334C23.3333 29.3334 29.3333 23.3334 29.3333 16.0001C29.3333 8.66675 23.3333 2.66675 16 2.66675C8.66663 2.66675 2.66663 8.66675 2.66663 16.0001C2.66663 23.3334 8.66663 29.3334 16 29.3334Z" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.2267 19.7732L19.7734 12.2266" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.7734 19.7732L12.2267 12.2266" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AddIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 15.5V1.5M1.5 8.5H15.5" stroke="#151D26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function BatchInfoPage() {
  const [showBatchModal, setShowBatchModal] = useState(false);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState<BatchItem | null>(null);
  const [actionPosition, setActionPosition] = useState<{ x: number; y: number } | null>(null);
  const [showActionMenu, setShowActionMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number } | null>(null);
  const [formData, setFormData] = useState<BatchFormData>({
    batchId: "65432",
    expiryDate: "22-04-2025",
    quantityOnHand: "2",
    stockReceiptDate: "22-04-2025"
  });
  const [mainFormData, setMainFormData] = useState<BatchFormData>({
    batchId: "65432",
    expiryDate: "22-04-2025",
    quantityOnHand: "2",
    stockReceiptDate: "22-04-2025"
  });

  // Sample batch data
  const batchItems: BatchItem[] = [
    { id: 1, batchId: "1123", expiryDate: "2025-12-01", quantity: 2 },
    { id: 2, batchId: "1123", expiryDate: "2025-12-01", quantity: 2 },
    { id: 3, batchId: "1123", expiryDate: "2025-12-01", quantity: 2 },
    { id: 4, batchId: "1123", expiryDate: "2025-12-01", quantity: 2 }
  ];

  const handleFormSubmit = () => {
    console.log("Form submitted:", formData);
    setShowBatchModal(false);
  };

  const handleFormChange = (field: keyof BatchFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMainFormChange = (field: keyof BatchFormData, value: string) => {
    setMainFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMainFormSubmit = () => {
    console.log("Main form submitted:", mainFormData);
  };

  const handleActionClick = (batch: BatchItem, event: React.MouseEvent) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    const MENU_WIDTH = 120;
    const PADDING = 8;

    const desiredLeft = rect.left + rect.width / 2 - MENU_WIDTH / 2;
    const x = Math.min(Math.max(PADDING, desiredLeft), window.innerWidth - MENU_WIDTH - PADDING);

    const MENU_HEIGHT = 40;
    const below = rect.bottom + 8;
    const above = rect.top - MENU_HEIGHT - 8;
    const y = below + MENU_HEIGHT + PADDING > window.innerHeight
      ? Math.max(PADDING, above)
      : Math.min(below, window.innerHeight - MENU_HEIGHT - PADDING);

    setSelectedBatch(batch);
    setMenuPosition({ x, y });
    setShowActionMenu(true);
  };

  const handleMenuEdit = (pos?: { x: number; y: number }) => {
    if (!selectedBatch) return;
    setShowActionMenu(false);
    setActionPosition(pos || null);
    setFormData({
      batchId: selectedBatch.batchId,
      expiryDate: selectedBatch.expiryDate,
      quantityOnHand: String(selectedBatch.quantity),
      stockReceiptDate: mainFormData.stockReceiptDate,
    });
    setShowBatchModal(true);
  };

  const handleMenuView = (pos?: { x: number; y: number }) => {
    if (!selectedBatch) return;
    setShowActionMenu(false);
    setActionPosition(pos || null);
    setShowDetailsPopup(true);
  };

  const handleMenuDelete = (pos?: { x: number; y: number }) => {
    if (!selectedBatch) return;
    setShowActionMenu(false);
    setActionPosition(pos || null);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirm = () => {
    console.log('Delete batch:', selectedBatch);
    setShowDeleteConfirmation(false);
    setSelectedBatch(null);
  };

  return (
    <div className="flex flex-col items-center gap-[30px] w-full max-w-[396px] mx-auto">
      {/* Batch Table */}
      <div className="flex flex-col w-full rounded-3xl border border-[#22353E] overflow-hidden">
        {/* Table Header */}
        <div className="flex w-full">
          <div className="flex-1 p-3 flex items-center gap-2 rounded-tl-2xl border-b border-[#22353E] bg-[#1C242E]">
            <span className="text-[#C4C4C4] font-['Space_Grotesk'] text-sm font-medium">Batch ID</span>
            <SortIcon />
          </div>
          <div className="flex-1 p-3 flex items-center gap-2 border-b border-[#22353E] bg-[#1C242E]">
            <span className="text-[#C4C4C4] font-['Space_Grotesk'] text-sm font-medium">Expiry Date</span>
            <SortIcon />
          </div>
          <div className="w-16 p-3 flex items-center justify-center border-b border-[#22353E] bg-[#1C242E]">
            <span className="text-[#C4C4C4] font-['Space_Grotesk'] text-sm font-medium">Qty</span>
          </div>
          <div className="w-20 p-3 flex items-center justify-center rounded-tr-2xl border-b border-[#22353E] bg-[#1C242E]">
            <span className="text-[#C4C4C4] font-['Space_Grotesk'] text-sm font-medium">Action</span>
          </div>
        </div>

        {/* Table Rows */}
        {batchItems.map((item, index) => (
          <div
            key={item.id}
            className={`flex w-full items-center h-12 ${index % 2 === 1 ? 'bg-[#1C242E]' : 'bg-[#151D26]'} ${index === batchItems.length - 1 ? 'rounded-b-2xl' : ''} border-b border-[#22353E]`}
          >
            <div className="flex-1 px-3 py-2">
              <span className="text-[#F6F6F6] font-['Space_Grotesk'] text-sm font-medium">{item.batchId}</span>
            </div>
            <div className="flex-1 px-3 py-2">
              <span className="text-[#F6F6F6] font-['Space_Grotesk'] text-sm font-medium">{item.expiryDate}</span>
            </div>
            <div className="w-16 px-3 py-2 flex justify-center">
              <div className="px-2 py-1 rounded-xl bg-[rgba(255,20,116,0.10)]">
                <span className="text-[#FF1474] font-['Space_Grotesk'] text-xs font-medium">{item.quantity.toString().padStart(2, '0')}</span>
              </div>
            </div>
            <div className="w-20 px-3 py-2 flex justify-center">
              <button
                onClick={(e) => handleActionClick(item, e)}
                className="text-[#697B7B] hover:text-[#F6F6F6] transition-colors p-1"
                aria-label="More actions"
              >
                <DotsIcon />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Permanent Batch Details Form */}
      <div className="flex w-full p-4 flex-col justify-center items-center gap-6 rounded-3xl border border-[#22353E] bg-[#1C242E]">
        {/* Form Header */}
        <div className="flex justify-between items-center w-full">
          <h3 className="text-[#F6F6F6] font-['Space_Grotesk'] text-xl font-bold">Batch Details</h3>
        </div>

        {/* Form Fields */}
        <div className="flex w-full flex-col items-center gap-4">
          {/* Batch Id */}
          <div className="flex w-full flex-col items-start gap-2">
            <label className="text-[#F6F6F6] font-['Space_Grotesk'] text-base font-medium">Batch Id</label>
            <div className="flex p-[18px] justify-between items-center w-full rounded-[20px] border border-[#22353E]">
              <input
                type="text"
                value={mainFormData.batchId}
                onChange={(e) => handleMainFormChange('batchId', e.target.value)}
                className="w-full text-[#697B7B] font-['Space_Grotesk'] text-base font-normal bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Expiry Date */}
          <div className="flex w-full flex-col items-start gap-2">
            <label className="text-[#F6F6F6] font-['Space_Grotesk'] text-base font-medium">Expiry Date</label>
            <div className="flex p-[18px] justify-between items-center w-full rounded-[20px] border border-[#22353E]">
              <input
                type="text"
                value={mainFormData.expiryDate}
                onChange={(e) => handleMainFormChange('expiryDate', e.target.value)}
                className="w-full text-[#697B7B] font-['Space_Grotesk'] text-base font-normal bg-transparent outline-none"
              />
              <CalendarIcon />
            </div>
          </div>

          {/* Quantity on hand */}
          <div className="flex w-full flex-col items-start gap-2">
            <label className="text-[#F6F6F6] font-['Space_Grotesk'] text-base font-medium">Quantity on hand</label>
            <div className="flex p-[18px] justify-between items-center w-full rounded-[20px] border border-[#22353E]">
              <input
                type="text"
                value={mainFormData.quantityOnHand}
                onChange={(e) => handleMainFormChange('quantityOnHand', e.target.value)}
                className="w-full text-[#F6F6F6] font-['Space_Grotesk'] text-base font-normal bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Date of stock receipt */}
          <div className="flex w-full flex-col items-start gap-2">
            <label className="text-[#F6F6F6] font-['Space_Grotesk'] text-base font-medium">Date of stock receipt</label>
            <div className="flex p-[18px] justify-between items-center w-full rounded-[20px] border border-[#22353E]">
              <input
                type="text"
                value={mainFormData.stockReceiptDate}
                onChange={(e) => handleMainFormChange('stockReceiptDate', e.target.value)}
                className="w-full text-[#F6F6F6] font-['Space_Grotesk'] text-base font-normal bg-transparent outline-none"
              />
              <CalendarIcon />
            </div>
          </div>
        </div>

        {/* Print Barcode Link */}
        <button className="text-[#FE8A00] font-['Space_Grotesk'] text-base font-normal underline">
          👉 Click to Print Barcode
        </button>

        {/* Form Buttons */}
        <div className="flex items-center gap-4">
          <button
            className="flex w-[171px] p-[18px] justify-center items-center gap-2 rounded-2xl border border-[#22353E]"
          >
            <span className="text-[#697B7B] font-['Space_Grotesk'] text-base font-bold">Cancel</span>
          </button>
          <button
            onClick={handleMainFormSubmit}
            className="flex w-[170px] p-[18px] justify-center items-center gap-2 rounded-2xl bg-[#FE8A00]"
          >
            <span className="text-[#151D26] font-['Space_Grotesk'] text-base font-bold">Save</span>
          </button>
        </div>
      </div>

      {/* Batch Details Modal */}
      {showBatchModal && (
        <div className="flex w-full p-4 flex-col justify-center items-center gap-6 rounded-3xl border border-[#22353E] bg-[#1C242E]">
          {/* Form Header */}
          <div className="flex justify-between items-center w-full">
            <h3 className="text-[#F6F6F6] font-['Space_Grotesk'] text-xl font-bold">Batch Details</h3>
            <button onClick={() => setShowBatchModal(false)}>
                <CloseIcon />
              </button>
            </div>

          {/* Form Fields */}
          <div className="flex w-full flex-col items-center gap-4">
            {/* Batch Id */}
            <div className="flex w-full flex-col items-start gap-2">
              <label className="text-[#F6F6F6] font-['Space_Grotesk'] text-base font-medium">Batch Id</label>
              <div className="flex p-[18px] justify-between items-center w-full rounded-[20px] border border-[#22353E]">
                <input
                  type="text"
                  value={formData.batchId}
                  onChange={(e) => handleFormChange('batchId', e.target.value)}
                  className="w-full text-[#697B7B] font-['Space_Grotesk'] text-base font-normal bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Expiry Date */}
            <div className="flex w-full flex-col items-start gap-2">
              <label className="text-[#F6F6F6] font-['Space_Grotesk'] text-base font-medium">Expiry Date</label>
              <div className="flex p-[18px] justify-between items-center w-full rounded-[20px] border border-[#22353E]">
                <input
                  type="text"
                  value={formData.expiryDate}
                  onChange={(e) => handleFormChange('expiryDate', e.target.value)}
                  className="w-full text-[#697B7B] font-['Space_Grotesk'] text-base font-normal bg-transparent outline-none"
                />
                <CalendarIcon />
              </div>
            </div>

            {/* Quantity on hand */}
            <div className="flex w-full flex-col items-start gap-2">
              <label className="text-[#F6F6F6] font-['Space_Grotesk'] text-base font-medium">Quantity on hand</label>
              <div className="flex p-[18px] justify-between items-center w-full rounded-[20px] border border-[#22353E]">
                <input
                  type="text"
                  value={formData.quantityOnHand}
                  onChange={(e) => handleFormChange('quantityOnHand', e.target.value)}
                  className="w-full text-[#F6F6F6] font-['Space_Grotesk'] text-base font-normal bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Date of stock receipt */}
            <div className="flex w-full flex-col items-start gap-2">
              <label className="text-[#F6F6F6] font-['Space_Grotesk'] text-base font-medium">Date of stock receipt</label>
              <div className="flex p-[18px] justify-between items-center w-full rounded-[20px] border border-[#22353E]">
                <input
                  type="text"
                  value={formData.stockReceiptDate}
                  onChange={(e) => handleFormChange('stockReceiptDate', e.target.value)}
                  className="w-full text-[#F6F6F6] font-['Space_Grotesk'] text-base font-normal bg-transparent outline-none"
                />
                <CalendarIcon />
              </div>
            </div>
          </div>

          {/* Print Barcode Link */}
            <button className="text-[#FE8A00] font-['Space_Grotesk'] text-base font-normal underline">
              👉 Click to Print Barcode
            </button>

          {/* Form Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowBatchModal(false)}
              className="flex w-[171px] p-[18px] justify-center items-center gap-2 rounded-2xl border border-[#22353E]"
            >
              <span className="text-[#697B7B] font-['Space_Grotesk'] text-base font-bold">Cancel</span>
            </button>
            <button
              onClick={handleFormSubmit}
              className="flex w-[170px] p-[18px] justify-center items-center gap-2 rounded-2xl bg-[#FE8A00]"
            >
              <span className="text-[#151D26] font-['Space_Grotesk'] text-base font-bold">Save</span>
            </button>
          </div>
        </div>
      )}

      {/* Add Batch Button */}
      <button
        onClick={() => setShowBatchModal(true)}
        className="flex w-[303px] h-[53px] p-[10px] justify-center items-center gap-2 rounded-2xl bg-[#FE8A00]"
      >
        <AddIcon />
        <span className="text-[#151D26] font-['Space_Grotesk'] text-base font-bold">Add Batch</span>
      </button>

      {/* Batch Details Popup */}
      {selectedBatch && (
        <BatchDetailsPopup
          isOpen={showDetailsPopup}
          onClose={() => {
            setShowDetailsPopup(false);
            setSelectedBatch(null);
          }}
          batchData={{
            batchId: selectedBatch.batchId,
            expiryDate: selectedBatch.expiryDate,
            quantity: selectedBatch.quantity,
            status: "Active"
          }}
          position={actionPosition}
        />
      )}

      {/* Delete Confirmation Popup */}
      <BatchDeleteConfirmation
        isOpen={showDeleteConfirmation}
        onClose={() => {
          setShowDeleteConfirmation(false);
          setSelectedBatch(null);
        }}
        onConfirm={handleDeleteConfirm}
        position={actionPosition}
      />

      {/* Action Menu */}
      {showActionMenu && selectedBatch && (
        <ActionMenu
          isOpen={true}
          onClose={() => setShowActionMenu(false)}
          onEdit={handleMenuEdit}
          onView={handleMenuView}
          onDelete={handleMenuDelete}
          position={menuPosition || undefined}
        />
      )}
    </div>
  );
}
