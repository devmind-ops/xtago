import { XtagoLogo } from "@/components/XtagoLogo";
import { StickyNavigation } from "@/components/StickyNavigation";
import { QuickStats } from "@/components/QuickStats";
import { TimeRangeSelector } from "@/components/TimeRangeSelector";
import { FinancialTrends } from "@/components/FinancialTrends";
import { RevenueSummary } from "@/components/RevenueSummary";

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

function AISearchBar() {
  return (
    <div className="relative flex items-center bg-[#1C2831] rounded-2xl border border-[#2B4755] p-4">
      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0B1B26] border border-[#02FDFE] mr-3">
        <img 
          className="w-11 h-11 rounded-full" 
          src="/assets/images/dashboard-search.png" 
          alt="dashboard ai search" 
        />
      </div>

      <span className="text-white text-base">Ask me anything</span>

      <div className="ml-auto flex items-center gap-2">
        <button
          type="button"
          aria-label="Add"
          className="w-8 h-8 rounded-full bg-[#0B1B26] border border-[#02FDFE] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#02FDFE]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M8 1V15M1 8H15" stroke="#02FDFE" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <button
          type="button"
          aria-label="Voice input"
          className="w-8 h-8 rounded-full bg-[#0B1B26] border border-[#02FDFE] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#02FDFE]"
        >
          <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M9.5 12.3331C8.7262 12.3331 8.0685 12.0568 7.5268 11.5042C6.9851 10.9516 6.7143 10.2805 6.7143 9.491V5.8068C6.7143 5.0174 6.9851 4.3463 7.5268 3.7937C8.0685 3.241 8.7262 2.9647 9.5 2.9647C10.2738 2.9647 10.9315 3.241 11.4732 3.7937C12.0149 4.3463 12.2857 5.0174 12.2857 5.8068V9.491C12.2857 10.2805 12.0149 10.9516 11.4732 11.5042C10.9315 12.0568 10.2738 12.3331 9.5 12.3331ZM8.5714 15.9647V14.0516C6.9619 13.8305 5.631 13.0963 4.5786 11.8489C3.5262 10.6016 3 9.1489 3 7.491H4.8571C4.8571 8.8016 5.31 9.9188 6.2156 10.8428C7.1213 11.7668 8.2161 12.2285 9.5 12.2279C10.7839 12.2272 11.879 11.7652 12.7853 10.8419C13.6916 9.9185 14.1441 8.8016 14.1429 7.491H16C16 9.1489 15.4738 10.6016 14.4214 11.8489C13.369 13.0963 12.0381 13.8305 10.4286 14.0516V15.9647H8.5714Z" fill="#02FDFE"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

function FloatingMic() {
  return (
    <div className="absolute right-4 bottom-[92px] z-40">
      <div className="relative">
        {/* Blur background effect */}
        <div className="absolute inset-0 w-[52px] h-[52px] rounded-full bg-gray-400 opacity-30 blur-sm"></div>

        {/* Main mic button */}
        <div className="relative w-[45px] h-[45px] rounded-[22.5px] border border-[#02FDFE] bg-[#03182A] flex items-center justify-center">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 12.3331C8.7262 12.3331 8.0685 12.0568 7.5268 11.5042C6.9851 10.9516 6.7143 10.2805 6.7143 9.491V5.8068C6.7143 5.0174 6.9851 4.3463 7.5268 3.7937C8.0685 3.241 8.7262 2.9647 9.5 2.9647C10.2738 2.9647 10.9315 3.241 11.4732 3.7937C12.0149 4.3463 12.2857 5.0174 12.2857 5.8068V9.491C12.2857 10.2805 12.0149 10.9516 11.4732 11.5042C10.9315 12.0568 10.2738 12.3331 9.5 12.3331ZM8.5714 15.9647V14.0516C6.9619 13.8305 5.631 13.0963 4.5786 11.8489C3.5262 10.6016 3 9.1489 3 7.491H4.8571C4.8571 8.8016 5.31 9.9188 6.2156 10.8428C7.1213 11.7668 8.2161 12.2285 9.5 12.2279C10.7839 12.2272 11.879 11.7652 12.7853 10.8419C13.6916 9.9185 14.1441 8.8016 14.1429 7.491H16C16 9.1489 15.4738 10.6016 14.4214 11.8489C13.369 13.0963 12.0381 13.8305 10.4286 14.0516V15.9647H8.5714Z" fill="#01A9EA"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
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

        {/* AI Search Bar */}
        <div className="px-4 mt-6 mb-6">
          <AISearchBar />
        </div>

        {/* Dashboard Content */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <QuickStats />

          {/* Time Range Selector */}
          <TimeRangeSelector />

          {/* Financial Trends Chart */}
          <FinancialTrends />

          {/* Revenue Summary */}
          <RevenueSummary />
        </div>

        {/* Floating Microphone */}
        <FloatingMic />
      </div>

      {/* Sticky Navigation */}
      <StickyNavigation />
    </div>
  );
}
