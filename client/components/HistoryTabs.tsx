interface HistoryTabsProps {
  activeTab: 'sales' | 'audit';
  onTabChange: (tab: 'sales' | 'audit') => void;
}

function SalesHistoryIcon({ active = false }: { active?: boolean }) {
  const color = active ? "#151D26" : "#697B7B";
  return (
    <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.69482 11.9375V6.9917" stroke={color} strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.5107 11.937V4.24487" stroke={color} strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.3291 11.9389V9.7395" stroke={color} strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.9001 16.095H5.7001C4.81644 16.095 4.1001 15.3786 4.1001 14.495V3.29492" stroke={color} strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AuditTrailIcon({ active = false }: { active?: boolean }) {
  const color = active ? "#151D26" : "#697B7B";
  return (
    <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.8335 14.9999L3.83558 11.6845C3.83558 11.574 3.87948 11.468 3.95762 11.3899C4.03576 11.3117 4.14174 11.2678 4.25225 11.2678H8.41975C8.80391 11.2678 8.80183 10.927 8.80183 10.1162C8.80183 9.30534 6.75933 8.62242 6.75933 5.772C6.75933 2.92159 8.87516 2.08325 10.6335 2.08325C12.3918 2.08325 14.3072 2.92159 14.3072 5.772C14.3072 8.62242 12.2756 9.07575 12.2756 10.1162C12.2756 11.1566 12.2756 11.2678 12.6006 11.2678H16.7506C16.8611 11.2678 16.9671 11.3117 17.0452 11.3899C17.1233 11.468 17.1672 11.574 17.1672 11.6845V14.9999H3.8335Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      <path d="M3.8335 17.5H17.1668" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function HistoryTabs({ activeTab, onTabChange }: HistoryTabsProps) {
  return (
    <div className="flex w-full max-w-[316px] p-2 justify-center items-center gap-1.5 rounded-[24px] bg-[#1C242E] h-12 mx-auto">
      {/* Sales History Tab */}
      <button
        onClick={() => onTabChange('sales')}
        className={`flex h-9 px-5 py-3 items-center gap-2 rounded-[20px] flex-shrink-0 ${
          activeTab === 'sales'
            ? 'bg-[#FE8A00]'
            : 'border border-[#22353E]'
        }`}
      >
        <SalesHistoryIcon active={activeTab === 'sales'} />
        <span className={`font-['Space_Grotesk'] text-[14px] font-bold whitespace-nowrap ${
          activeTab === 'sales' ? 'text-[#151D26]' : 'text-[#697B7B]'
        }`}>
          Sales History
        </span>
      </button>

      {/* Audit Trail Tab */}
      <button
        onClick={() => onTabChange('audit')}
        className={`flex h-9 px-5 py-3 items-center gap-2 rounded-[20px] flex-shrink-0 ${
          activeTab === 'audit'
            ? 'bg-[#FE8A00]'
            : 'border border-[#22353E]'
        }`}
      >
        <AuditTrailIcon active={activeTab === 'audit'} />
        <span className={`font-['Space_Grotesk'] text-[14px] font-bold whitespace-nowrap ${
          activeTab === 'audit' ? 'text-[#151D26]' : 'text-[#697B7B]'
        }`}>
          Audit Trail
        </span>
      </button>
    </div>
  );
}
