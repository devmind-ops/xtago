interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  bgColor: string;
  hasWarning?: boolean;
  warningText?: string;
  warningValue?: string;
}

function StatCard({ title, value, icon, bgColor, hasWarning, warningText, warningValue }: StatCardProps) {
  return (
    <div className={`rounded-2xl p-4 border border-[#22353E] ${bgColor}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-[#F6F6F6] text-sm font-medium">{title}</span>
        </div>
      </div>
      
      <div className="mb-2">
        <span className="text-[#F6F6F6] text-2xl font-bold">{value}</span>
      </div>
      
      {hasWarning && (
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[#FF1474]/20">
            <div className="w-2 h-2 rounded-full bg-[#FF1474]"></div>
            <span className="text-[#FF1474] text-xs font-medium">{warningText}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#F6F6F6] text-lg font-bold">{warningValue}</span>
            <span className="text-[#697B7B] text-xs">in 1 week</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductsIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#00E074]/20 flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 3H13L12 13H4L3 3Z" stroke="#00E074" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6V5C6 3.895 6.895 3 8 3C9.105 3 10 3.895 10 5V6" stroke="#00E074" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function RevenueIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#00E074]/20 flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1V15M3 8H13" stroke="#00E074" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function CostIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#FE8A00]/20 flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="7" stroke="#FE8A00" strokeWidth="1.5"/>
        <path d="M8 5V11M5 8H11" stroke="#FE8A00" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function RefundIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#9D4EDD]/20 flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 14C11.314 14 14 11.314 14 8C14 4.686 11.314 2 8 2C6.343 2 4.843 2.672 3.758 3.758" stroke="#9D4EDD" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2 8H6V4" stroke="#9D4EDD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export function QuickStats() {
  return (
    <div className="px-3 sm:px-4 mb-6">
      <h2 className="text-[#F6F6F6] text-base sm:text-lg font-bold mb-4">Quick Stats</h2>
      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        <StatCard
          title="Total Live Products"
          value="25,430"
          icon={<ProductsIcon />}
          bgColor="bg-[#1A2D3A]"
        />
        
        <StatCard
          title="Live Stock Retail Value"
          value="$ 20,120"
          icon={<RevenueIcon />}
          bgColor="bg-[#1A2D3A]"
        />
        
        <StatCard
          title="Live Stock Cost Value"
          value="$ 15,650"
          icon={<CostIcon />}
          bgColor="bg-[#2A1F3D]"
        />
        
        <StatCard
          title="Total Refunded Items"
          value="15,650"
          icon={<RefundIcon />}
          bgColor="bg-[#2A1F3D]"
        />
      </div>
      
      {/* Warning Cards Row */}
      <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4">
        <StatCard
          title="Expiring Batches"
          value="12"
          icon={<div className="w-2 h-2 rounded-full bg-[#FF1474]"></div>}
          bgColor="bg-[#1A2D3A]"
          hasWarning={true}
          warningText="!"
          warningValue="12"
        />
        
        <StatCard
          title="Low Stock Items"
          value="30"
          icon={<div className="w-2 h-2 rounded-full bg-[#FF1474]"></div>}
          bgColor="bg-[#1A2D3A]"
          hasWarning={true}
          warningText="!"
          warningValue="30"
        />
      </div>
    </div>
  );
}
