import { useState } from "react";
import { XtagoLogo } from "@/components/XtagoLogo";
import { StickyNavigation } from "@/components/StickyNavigation";
import { HistoryTabs } from "@/components/HistoryTabs";
import { HistoryFilter } from "@/components/HistoryFilter";
import { SalesHistoryTable } from "@/components/SalesHistoryTable";
import { AuditTrailTable } from "@/components/AuditTrailTable";
import { XtagoPagination } from "@/components/XtagoPagination";

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

export default function HistoryInfo() {
  const [activeTab, setActiveTab] = useState<'sales' | 'audit'>('sales');
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterPosition, setFilterPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const itemsPerPage = 10;
  const totalItems = activeTab === 'sales' ? 45 : 45;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  const handleTabChange = (tab: 'sales' | 'audit') => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset pagination when switching tabs
  };

  const handleFilterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.bottom + 8;
    setFilterPosition({ x, y });
    setIsFilterOpen(true);
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

        {/* Main Content */}
        <div className="px-4 mt-6 space-y-4">
          {/* Tabs */}
          <HistoryTabs activeTab={activeTab} onTabChange={handleTabChange} />

          {/* Tab Content */}
          {activeTab === 'sales' ? (
            <>
              {/* Sales History Table */}
              <SalesHistoryTable onFilterClick={handleFilterClick} currentPage={currentPage} itemsPerPage={itemsPerPage} />

              {/* Pagination */}
              <div className="pt-4">
                <XtagoPagination 
                  totalItems={totalItems} 
                  currentPage={currentPage} 
                  totalPages={totalPages} 
                  onPageChange={setCurrentPage} 
                />
              </div>
            </>
          ) : (
            <>
              {/* Audit Trail Table */}
              <AuditTrailTable onFilterClick={handleFilterClick} />

              {/* Pagination */}
              <div className="pt-4">
                <XtagoPagination 
                  totalItems={totalItems} 
                  currentPage={currentPage} 
                  totalPages={totalPages} 
                  onPageChange={setCurrentPage} 
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Filter Dropdown */}
      <HistoryFilter
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        position={filterPosition}
        type={activeTab}
      />

      {/* Sticky Navigation */}
      <StickyNavigation />
    </div>
  );
}
