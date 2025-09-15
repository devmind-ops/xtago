import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { XtagoLogo } from "@/components/XtagoLogo";
import { StickyNavigation } from "@/components/StickyNavigation";
import { ActionMenu } from "@/components/ActionMenu";
import { AccountingDetailsCard } from "@/components/AccountingDetailsCard";
import { EditAccountingForm } from "@/components/EditAccountingForm";
import { DeleteConfirmationDialog } from "@/components/DeleteConfirmationDialog";
import { XtagoPagination } from "@/components/XtagoPagination";
import { RefundDetailsPopup } from "@/components/RefundDetailsPopup";
import { RefundFilter } from "@/components/RefundFilter";

function AiIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.7758 5.7757L16.4309 3.8103H17.5693L18.2244 5.7757L20.1898 6.43083V7.56925L18.2244 8.22438L17.5693 10.1898H16.4309L15.7758 8.22438L13.8104 7.56925V6.43083L15.7758 5.7757Z" fill="#FE8A00"/>
      <path d="M18.0001 12V19H16.0001V12H18.0001Z" fill="#FE8A00"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.33741 6.00004H10.6628L14.0331 19H11.9669L11.1892 16H6.81094L6.03316 19H3.96704L7.33741 6.00004ZM7.32946 14H10.6707L9.11518 8.00004H8.88501L7.32946 14Z" fill="#FE8A00"/>
    </svg>
  );
}

function ProfileAvatar() {
  return (
    <img 
      className="w-11 h-11 rounded-full border-2 border-[#697B7B]" 
      src="/assets/images/avatar-30c3de9c.png" 
      alt="Profile Avatar" 
    />
  );
}

function NotificationIcon() {
  return (
    <div className="relative flex items-center justify-center p-3 rounded-2xl border border-[#697B7B] bg-[#1C242E]">
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0167 4.42505C7.25841 4.42505 5.01674 6.66672 5.01674 9.42505V11.8334C5.01674 12.3417 4.80007 13.1167 4.54174 13.55L3.58341 15.1417C2.99174 16.125 3.40007 17.2167 4.48341 17.5834C8.07507 18.7834 11.9501 18.7834 15.5417 17.5834C16.5501 17.2501 16.9917 16.0584 16.4417 15.1417L15.4834 13.55C15.2334 13.1167 15.0167 12.3417 15.0167 11.8334V9.42505C15.0167 6.67505 12.7667 4.42505 10.0167 4.42505Z" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M11.5584 4.6667C11.3001 4.5917 11.0334 4.53337 10.7584 4.50003C9.95843 4.40003 9.19176 4.45837 8.4751 4.6667C8.71676 4.05003 9.31676 3.6167 10.0168 3.6167C10.7168 3.6167 11.3168 4.05003 11.5584 4.6667Z" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5166 17.8833C12.5166 19.2583 11.3916 20.3833 10.0166 20.3833C9.33327 20.3833 8.69993 20.1 8.24993 19.65C7.79993 19.2 7.5166 18.5666 7.5166 17.8833" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10"/>
        <circle cx="14" cy="4" r="3.5" fill="#FF1474" stroke="#697B7B"/>
      </svg>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 16.5L15 15" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.05005 1.57495H13.95C14.775 1.57495 15.45 2.24995 15.45 3.07495V4.72495C15.45 5.32495 15.075 6.07495 14.7 6.44995L11.475 9.29995C11.025 9.67495 10.725 10.425 10.725 11.025V14.25C10.725 14.7 10.425 15.3 10.05 15.525L9.00005 16.2C8.02505 16.8 6.67505 16.125 6.67505 14.925V10.95C6.67505 10.425 6.37505 9.74995 6.07505 9.37495L3.22505 6.37495C2.85005 5.99995 2.55005 5.32495 2.55005 4.87495V3.14995C2.55005 2.24995 3.22505 1.57495 4.05005 1.57495Z" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.1975 1.57495L4.5 7.49995" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SortIcon() {
  return (
    <div className="flex flex-col items-start gap-[2px]">
      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.20711 5C0.761654 5 0.538571 4.46143 0.853553 4.14645L4.64645 0.353553C4.84171 0.158291 5.15829 0.158291 5.35355 0.353553L9.14645 4.14645C9.46143 4.46143 9.23835 5 8.79289 5H1.20711Z" fill="#697B7B"/>
      </svg>
      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.79289 0C9.23835 0 9.46143 0.538571 9.14645 0.853553L5.35355 4.64645C5.15829 4.84171 4.84171 4.84171 4.64645 4.64645L0.853553 0.853552C0.538571 0.53857 0.761655 0 1.20711 0L8.79289 0Z" fill="#697B7B"/>
      </svg>
    </div>
  );
}

function DotsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 9C3.5 9.19891 3.57902 9.38968 3.71967 9.53033C3.86032 9.67098 4.05109 9.75 4.25 9.75C4.44891 9.75 4.63968 9.67098 4.78033 9.53033C4.92098 9.38968 5 9.19891 5 9C5 8.80109 4.92098 8.61032 4.78033 8.46967C4.63968 8.32902 4.44891 8.25 4.25 8.25C4.05109 8.25 3.86032 8.32902 3.71967 8.46967C3.57902 8.61032 3.5 8.80109 3.5 9ZM8.75 9C8.75 9.19891 8.82902 9.38968 8.96967 9.53033C9.11032 9.67098 9.30109 9.75 9.5 9.75C9.69891 9.75 9.88968 9.67098 10.0303 9.53033C10.171 9.38968 10.25 9.19891 10.25 9C10.25 8.80109 10.171 8.61032 10.0303 8.46967C9.88968 8.32902 9.69891 8.25 9.5 8.25C9.30109 8.25 9.11032 8.32902 8.96967 8.46967C8.82902 8.61032 8.75 8.80109 8.75 9ZM14 9C14 9.19891 14.079 9.38968 14.2197 9.53033C14.3603 9.67098 14.5511 9.75 14.75 9.75C14.9489 9.75 15.1397 9.67098 15.2803 9.53033C15.421 9.38968 15.5 9.19891 15.5 9C15.5 8.80109 15.421 8.61032 15.2803 8.46967C15.1397 8.32902 14.9489 8.25 14.75 8.25C14.5511 8.25 14.3603 8.32902 14.2197 8.46967C14.079 8.61032 14 8.80109 14 9Z" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Checkbox component similar to accounting items
function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <label className="relative inline-flex items-center justify-center w-5 h-5">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <span className="block w-5 h-5 rounded-md border border-[#697B7B] bg-transparent" />
      <span className="pointer-events-none absolute w-2.5 h-2.5 rounded-[2px] bg-[#FE8A00] opacity-0 peer-checked:opacity-100" />
    </label>
  );
}

interface RefundItem {
  id: number;
  productName: string;
  cost: string;
  selected: boolean;
  hasOrange?: boolean;
}

export default function Refunds() {
  const navigate = useNavigate();
  const [refundItems, setRefundItems] = useState<RefundItem[]>([
    { id: 1, productName: "Aashirvad Atta 500g", cost: "$36", selected: false, hasOrange: true },
    { id: 2, productName: "Aashirvad Atta 500g", cost: "$36", selected: false },
    { id: 3, productName: "Aashirvad Atta 500g", cost: "$36", selected: false },
    { id: 4, productName: "Aashirvad Atta 500g", cost: "$36", selected: false },
    { id: 5, productName: "Aashirvad Atta 500g", cost: "$36", selected: false },
    { id: 6, productName: "Aashirvad Atta 500g", cost: "$36", selected: false },
    { id: 7, productName: "Aashirvad Atta 500g", cost: "$36", selected: false },
    { id: 8, productName: "Aashirvad Atta 500g", cost: "$36", selected: false },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.max(1, Math.ceil(refundItems.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = refundItems.slice(startIndex, startIndex + itemsPerPage);

  const [activeActionMenu, setActiveActionMenu] = useState<{ id: number; position: { x: number; y: number } } | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<RefundItem | null>(null);
  const [anchorPos, setAnchorPos] = useState<{ x: number; y: number } | null>(null);
  const [isRefundDetailsOpen, setIsRefundDetailsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterPosition, setFilterPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const toggleItemSelection = (id: number) => {
    setRefundItems(items =>
      items.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const openDetails = (item: RefundItem, e?: React.MouseEvent) => {
    setSelectedItem(item);
    if (e) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      setAnchorPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height });
    } else {
      setAnchorPos(null);
    }
    setIsDetailsOpen(true);
  };

  const handleActionClick = (e: React.MouseEvent, item: RefundItem) => {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const MENU_WIDTH = 120;
    const PADDING = 8;
    const desiredLeft = rect.left + rect.width / 2 - MENU_WIDTH / 2;
    const x = Math.min(Math.max(PADDING, desiredLeft), window.innerWidth - MENU_WIDTH - PADDING);
    const MENU_HEIGHT = 40;
    const below = rect.bottom + 8;
    const above = rect.top - MENU_HEIGHT - 8;
    const y = below + MENU_HEIGHT + PADDING > window.innerHeight ? Math.max(PADDING, above) : Math.min(below, window.innerHeight - MENU_HEIGHT - PADDING);
    setActiveActionMenu({ id: item.id, position: { x, y } });
    setSelectedItem(item);
  };

  const handleFilterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.bottom + 8;
    setFilterPosition({ x, y });
    setIsFilterOpen(true);
  };

  const handleViewRefundDetails = () => {
    setActiveActionMenu(null);
    setIsRefundDetailsOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#151D26] relative">
      <div className="max-w-[428px] mx-auto bg-[#151D26] relative overflow-visible pb-[120px]">
        {/* Header */}
        <header className="sticky top-0 z-40 flex items-center justify-between px-4 pt-11 pb-2 bg-[#151D26] border-b border-[#0F1A22]">
          <XtagoLogo />
          <div className="flex items-center gap-4">
            <AiIcon />
            <ProfileAvatar />
            <NotificationIcon />
          </div>
        </header>

        {/* Content */}
        <div className="flex flex-col items-start gap-4 px-4 mt-6">
          {/* Title and Search */}
          <div className="flex w-full justify-between items-center">
            <h1 className="text-[#F6F6F6] text-base font-bold font-['Space Grotesk']">Refunds</h1>
            <div className="flex items-center gap-2">
              {/* Search Button */}
              <button className="flex items-center justify-center w-12 h-12 bg-[#1C242E] rounded-2xl" aria-label="Search">
                <SearchIcon />
              </button>
              {/* Filter Button */}
              <button
                onClick={handleFilterClick}
                className="flex items-center justify-center w-12 h-12 bg-[#1C242E] rounded-2xl"
                aria-label="Open filters"
              >
                <FilterIcon />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="flex flex-col items-start w-full">
            {/* Table Header */}
            <div className="flex w-full items-center">
              {/* Checkbox Column Header */}
              <div className="flex w-[52px] p-4 flex-col justify-center items-center gap-2.5 flex-shrink-0 rounded-tl-3xl border-b border-[#22353E] bg-[#1C242E]">
                <span className="text-[#697B7B] text-base font-normal font-['Space Grotesk']">#</span>
              </div>
              
              {/* Product Name Column Header */}
              <div className="flex w-[177px] p-4 items-center gap-3 flex-shrink-0 border-b border-[#22353E] bg-[#1C242E]">
                <span className="text-[#C4C4C4] text-base font-normal font-['Space Grotesk']">Product Name</span>
                <SortIcon />
              </div>
              
              {/* Cost Column Header */}
              <div className="flex w-[84px] p-4 items-center gap-3 flex-shrink-0 border-b border-[#22353E] bg-[#1C242E]">
                <span className="text-[#C4C4C4] text-base font-normal font-['Space Grotesk']">Cost</span>
                <SortIcon />
              </div>
              
              {/* Action Column Header */}
              <div className="flex flex-1 p-4 items-center gap-3 rounded-tr-3xl border-b border-[#22353E] bg-[#1C242E]">
                <span className="text-[#C4C4C4] text-base font-normal font-['Space Grotesk']">Action</span>
              </div>
            </div>

            {/* Table Rows */}
            {visibleItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex w-full items-center cursor-pointer hover:bg-[#22353E] ${index % 2 === 1 ? 'bg-[#1C242E]' : ''}`}
                onClick={() => toggleItemSelection(item.id)}
              >
                {/* Checkbox Column */}
                <div className="flex h-[72px] p-4 justify-center items-center gap-2.5 border-r border-b border-l border-[#22353E]" onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    checked={item.selected}
                    onChange={() => toggleItemSelection(item.id)}
                  />
                </div>
                
                {/* Product Name Column */}
                <div className="flex w-[178px] p-4 items-center gap-2.5 border-b border-[#22353E]">
                  <span className="text-[#F6F6F6] text-base font-normal font-['Space Grotesk'] flex-1">
                    {item.productName}
                  </span>
                </div>
                
                {/* Cost Column */}
                <div className="flex w-[85px] h-[72px] p-4 items-center gap-2.5 border-b border-[#22353E]">
                  <span className="text-[#F6F6F6] text-base font-normal font-['Space Grotesk']">
                    {item.cost}
                  </span>
                </div>
                
                {/* Action Column */}
                <div className="flex flex-1 h-[72px] p-4 justify-center items-center gap-2 border-r border-b border-l border-[#22353E]">
                  <button onClick={(e) => handleActionClick(e, item)} className="flex items-center justify-center">
                    <DotsIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pt-2">
            <XtagoPagination
              totalItems={refundItems.length}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>

      {/* Action Menu */}
      {activeActionMenu && selectedItem && (
        <ActionMenu
          isOpen={true}
          onClose={() => setActiveActionMenu(null)}
          onEdit={(pos) => { navigate(`/refunds/edit/${selectedItem?.id}`); }}
          onView={handleViewRefundDetails}
          onDelete={(pos) => { setAnchorPos(pos || null); setIsDeleteOpen(true); }}
          position={activeActionMenu.position}
        />
      )}

      {/* Details Card */}
      <AccountingDetailsCard
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        data={{
          type: selectedItem?.productName || "",
          description: "Refund initiated by customer",
          cost: selectedItem?.cost || "",
          date: new Date().toISOString().slice(0,10).split('-').reverse().join('-')
        }}
        inline
        position={anchorPos}
      />

      {/* Edit Form */}
      <EditAccountingForm
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onSave={() => setIsEditOpen(false)}
        initialData={{
          categoryType: "Refund",
          costType: selectedItem?.productName || "",
          price: selectedItem?.cost?.replace(/[^0-9.]/g, "") || "",
          date: new Date().toISOString().slice(0,10),
          description: "Refund item edit"
        }}
      />

      {/* Delete Confirmation */}
      <DeleteConfirmationDialog
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={() => setIsDeleteOpen(false)}
        inline
        position={anchorPos}
      />

      {/* Refund Details Popup */}
      <RefundDetailsPopup
        isOpen={isRefundDetailsOpen}
        onClose={() => setIsRefundDetailsOpen(false)}
        data={{
          name: selectedItem?.productName || "Aashirvad Atta 500g",
          batchId: "1123",
          vendor: "ABC Foods",
          reason: "Damaged",
          date: "22-04-2025",
          amount: selectedItem?.cost || "$23",
          customer: "Charlie, 123 Main Street, Anytown, 9234567654",
          refundType: "Replacement",
          refundMode: "UPI",
          status: "Pending"
        }}
      />

      {/* Filter Dropdown */}
      <RefundFilter
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        position={filterPosition}
      />

      {/* Sticky Navigation */}
      <StickyNavigation />
    </div>
  );
}
