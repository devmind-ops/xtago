import { useState } from "react";
import { XtagoLogo } from "@/components/XtagoLogo";
import { StickyNavigation } from "@/components/StickyNavigation";
import { AddAccountingForm } from "@/components/AddAccountingForm";
import { EditAccountingForm } from "@/components/EditAccountingForm";
import { AccountingDetailsCard } from "@/components/AccountingDetailsCard";
import { DeleteConfirmationDialog } from "@/components/DeleteConfirmationDialog";
import { FilterTabs } from "@/components/FilterTabs";
import { InteractiveDataTable } from "@/components/InteractiveDataTable";

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

function AddButton({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center gap-2 px-5 py-2.5 bg-[#FE8A00] rounded-2xl">
      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 15V1M1.5 8H15.5" stroke="#151D26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-[#151D26] font-bold text-base">Add</span>
    </button>
  );
}








function Pagination() {
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <div className="flex flex-col items-start">
        <span className="text-[#F6F6F6] text-sm font-normal">Total 85 items</span>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center justify-center w-8 h-8 rounded-xl bg-[rgba(254,138,0,0.1)]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.49992 9.96004L4.23992 6.70004C3.85492 6.31504 3.85492 5.68504 4.23992 5.30004L7.49992 2.04004" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button className="flex flex-col items-center justify-center w-5 h-8 rounded-xl border border-[#091E42] bg-[#00E074] px-2 py-1">
          <span className="text-[#151D26] text-sm font-normal">1</span>
        </button>
        
        <button className="flex flex-col items-center justify-center w-5 h-8 rounded-xl border border-[#22353E] px-2 py-1">
          <span className="text-[#C4C4C4] text-sm font-normal">2</span>
        </button>
        
        <button className="flex flex-col items-center justify-center w-5 h-8 rounded-xl border border-[#22353E] px-2 py-1">
          <span className="text-[#C4C4C4] text-sm font-normal">3</span>
        </button>
        
        <button className="flex flex-col items-center justify-center w-5 h-8 rounded-xl border border-[#22353E] px-2 py-1">
          <span className="text-[#C4C4C4] text-sm font-normal">4</span>
        </button>
        
        <button className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#FE8A00]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.45508 9.96004L7.71508 6.70004C8.10008 6.31504 8.10008 5.68504 7.71508 5.30004L4.45508 2.04004" stroke="#151D26" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}


export default function Accounting() {
  const [activeTab, setActiveTab] = useState("utilities");
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isDetailsCardOpen, setIsDetailsCardOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<any>(null);

  // Sample data
  const allEntries = {
    "one-time": [
      { id: 1, costType: "Equipment", cost: "$ 3444" },
      { id: 2, costType: "License Fees", cost: "$ 2200" },
      { id: 3, costType: "Software", cost: "$ 1500" },
    ],
    "recurring": [
      { id: 4, costType: "Subscription", cost: "$ 99" },
      { id: 5, costType: "Maintenance", cost: "$ 200" },
    ],
    "utilities": [
      { id: 6, costType: "Electricity", cost: "$ 350" },
      { id: 7, costType: "Internet", cost: "$ 80" },
    ]
  };

  const currentEntries = allEntries[activeTab as keyof typeof allEntries] || [];

  const handleAddEntry = (data: any) => {
    console.log('Add entry:', data);
  };

  const handleEditEntry = (data: any) => {
    console.log('Edit entry:', data);
  };

  const handleDeleteEntry = () => {
    console.log('Delete entry:', selectedEntry);
  };

  const [anchorPos, setAnchorPos] = useState<{ x: number; y: number } | null>(null);

  const handleEdit = (entry: any, pos?: { x: number; y: number }) => {
    setSelectedEntry(entry);
    setAnchorPos(pos || null);
    setIsEditFormOpen(true);
  };

  const handleView = (entry: any, pos?: { x: number; y: number }) => {
    setSelectedEntry({
      type: entry.costType,
      description: "New Barcode Scanner",
      cost: entry.cost,
      date: "22-04-2025"
    });
    setAnchorPos(pos || null);
    setIsDetailsCardOpen(true);
  };

  const handleDelete = (entry: any, pos?: { x: number; y: number }) => {
    setSelectedEntry(entry);
    setAnchorPos(pos || null);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#151D26] relative">
      <div className="max-w-[428px] mx-auto bg-[#151D26] pb-[120px]">
        {/* Header */}
        <header className="sticky top-0 z-40 flex items-center justify-between px-4 pt-11 pb-2 bg-[#151D26] border-b border-[#0F1A22]">
          <XtagoLogo />
          <div className="flex items-center gap-4">
            <AiIcon />
            <ProfileAvatar />
            <NotificationIcon />
          </div>
        </header>

        {/* Page Title and Add Button */}
        <div className="flex items-center justify-between px-4 mt-6 mb-6">
          <h1 className="text-[#F6F6F6] text-xl font-bold">Accounting</h1>
          <AddButton onClick={() => setIsAddFormOpen(true)} />
        </div>

        {/* Filter Tabs */}
        <FilterTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Data Table */}
        <div role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
          <InteractiveDataTable
            entries={currentEntries}
            onEdit={handleEdit}
            onView={handleView}
            onDelete={handleDelete}
          />
        </div>

        {/* Pagination */}
        <Pagination />
      </div>

      {/* Modals and Overlays */}
      <AddAccountingForm
        isOpen={isAddFormOpen}
        onClose={() => setIsAddFormOpen(false)}
        onSave={handleAddEntry}
      />

      <EditAccountingForm
        isOpen={isEditFormOpen}
        onClose={() => setIsEditFormOpen(false)}
        onSave={handleEditEntry}
        initialData={selectedEntry}
      />

      <AccountingDetailsCard
        isOpen={isDetailsCardOpen}
        onClose={() => setIsDetailsCardOpen(false)}
        data={selectedEntry || {}}
        inline
        position={anchorPos}
      />

      <DeleteConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleDeleteEntry}
        inline
        position={anchorPos}
      />

      {/* Sticky Navigation */}
      <StickyNavigation />
    </div>
  );
}
