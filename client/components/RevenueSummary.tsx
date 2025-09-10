interface SummaryCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  bgColor: string;
}

function SummaryCard({ title, value, change, isPositive, icon, bgColor }: SummaryCardProps) {
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
      
      <div className="flex items-center gap-1">
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none" 
          className={`${isPositive ? 'rotate-0' : 'rotate-180'}`}
        >
          <path 
            d="M6 2L10 8H2L6 2Z" 
            fill={isPositive ? "#00E074" : "#FF1474"} 
          />
        </svg>
        <span className={`text-sm font-medium ${isPositive ? 'text-[#00E074]' : 'text-[#FF1474]'}`}>
          {change}
        </span>
        <span className="text-[#697B7B] text-sm">Last Year</span>
      </div>
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

function PercentIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#FE8A00]/20 flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M13 3L3 13M5.5 4.5C5.5 5.328 4.828 6 4 6C3.172 6 2.5 5.328 2.5 4.5C2.5 3.672 3.172 3 4 3C4.828 3 5.5 3.672 5.5 4.5ZM13.5 11.5C13.5 12.328 12.828 13 12 13C11.172 13 10.5 12.328 10.5 11.5C10.5 10.672 11.172 10 12 10C12.828 10 13.5 10.672 13.5 11.5Z" stroke="#FE8A00" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function RefundIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#00E074]/20 flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 14C11.314 14 14 11.314 14 8C14 4.686 11.314 2 8 2C6.343 2 4.843 2.672 3.758 3.758" stroke="#00E074" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2 8H6V4" stroke="#00E074" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function OnlineIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#FE8A00]/20 flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1Z" stroke="#FE8A00" strokeWidth="1.5"/>
        <path d="M1 8H15M8 1C9.657 1 11 4.134 11 8C11 11.866 9.657 15 8 15C6.343 15 5 11.866 5 8C5 4.134 6.343 1 8 1Z" stroke="#FE8A00" strokeWidth="1.5"/>
      </svg>
    </div>
  );
}

function OfflineIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-[#FE8A00]/20 flex items-center justify-center">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 2L14 14M8 1C11.866 1 15 4.134 15 8C15 9.657 14.39 11.171 13.37 12.31M8 15C4.134 15 1 11.866 1 8C1 6.343 1.61 4.829 2.63 3.69" stroke="#FE8A00" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

export function RevenueSummary() {
  return (
    <div className="px-4 mb-6">
      <h3 className="text-[#F6F6F6] text-lg font-bold mb-4">Revenue summary</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <SummaryCard
          title="Total Revenue"
          value="$765432"
          change="68%"
          isPositive={true}
          icon={<RevenueIcon />}
          bgColor="bg-[#1C2E3A]"
        />
        
        <SummaryCard
          title="Overall Sell-Through Rate"
          value="15%"
          change="9%"
          isPositive={false}
          icon={<PercentIcon />}
          bgColor="bg-[#2A1F3D]"
        />
        
        <SummaryCard
          title="Gross Margin"
          value="15%"
          change="68%"
          isPositive={false}
          icon={<PercentIcon />}
          bgColor="bg-[#2A1F3D]"
        />
        
        <SummaryCard
          title="Total Refund Value"
          value="$76"
          change="68%"
          isPositive={true}
          icon={<RefundIcon />}
          bgColor="bg-[#1C2E3A]"
        />
        
        <SummaryCard
          title="Online Sell-Through Rate"
          value="15%"
          change="9%"
          isPositive={false}
          icon={<OnlineIcon />}
          bgColor="bg-[#2A1F3D]"
        />
        
        <SummaryCard
          title="Offline Sell-Through Rate"
          value="15%"
          change="9%"
          isPositive={false}
          icon={<OfflineIcon />}
          bgColor="bg-[#2A1F3D]"
        />
      </div>
    </div>
  );
}
