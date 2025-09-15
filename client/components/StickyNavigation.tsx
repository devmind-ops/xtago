import { useNavigate, useLocation } from "react-router-dom";

function CostsIcon({ active = false }: { active?: boolean }) {
  const color = active ? "#FE8A00" : "#697B7B";
  return (
    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.3999 12.5C3.3999 13.6819 3.63269 14.8522 4.08499 15.9442C4.53728 17.0361 5.20021 18.0282 6.03594 18.864C6.87167 19.6997 7.86382 20.3626 8.95575 20.8149C10.0477 21.2672 11.218 21.5 12.3999 21.5C13.5818 21.5 14.7521 21.2672 15.8441 20.8149C16.936 20.3626 17.9281 19.6997 18.7639 18.864C19.5996 18.0282 20.2625 17.0361 20.7148 15.9442C21.1671 14.8522 21.3999 13.6819 21.3999 12.5C21.3999 11.3181 21.1671 10.1478 20.7148 9.05585C20.2625 7.96392 19.5996 6.97177 18.7639 6.13604C17.9281 5.30031 16.936 4.63738 15.8441 4.18508C14.7521 3.73279 13.5818 3.5 12.3999 3.5C11.218 3.5 10.0477 3.73279 8.95575 4.18508C7.86382 4.63738 6.87167 5.30031 6.03594 6.13604C5.20021 6.97177 4.53728 7.96392 4.08499 9.05585C3.63269 10.1478 3.3999 11.3181 3.3999 12.5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.3999 9.5C15.3999 8.96957 15.1892 8.46086 14.8141 8.08579C14.439 7.71071 13.9303 7.5 13.3999 7.5C12.8695 7.5 12.3608 7.71071 11.9857 8.08579C11.6106 8.46086 11.3999 8.96957 11.3999 9.5V14.5C11.3999 15.0304 11.1892 15.5391 10.8141 15.9142C10.439 16.2893 9.93034 16.5 9.3999 16.5H15.3999M9.3999 12.5H13.3999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ProductsIcon({ active = false }: { active?: boolean }) {
  const color = active ? "#FE8A00" : "#697B7B";
  return (
    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.69995 6C7.69995 4.80653 8.17406 3.66193 9.01797 2.81802C9.86188 1.97411 11.0065 1.5 12.2 1.5C13.3934 1.5 14.538 1.97411 15.3819 2.81802C16.2258 3.66193 16.7 4.80653 16.7 6V7.5H21.2V23.5H3.19995V7.5H7.69995V6ZM7.69995 9.5H5.19995V21.5H19.2V9.5H16.7V12.5H14.7V9.5H9.69995V12.5H7.69995V9.5ZM14.7 7.5V6C14.7 5.33696 14.4366 4.70107 13.9677 4.23223C13.4989 3.76339 12.863 3.5 12.2 3.5C11.5369 3.5 10.901 3.76339 10.4322 4.23223C9.96334 4.70107 9.69995 5.33696 9.69995 6V7.5H14.7Z" fill={color}/>
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20.5V14.25M15 20.5V10.5M20 20.5V18M22.5 5.5H7.5C6.83696 5.5 6.20107 5.76339 5.73223 6.23223C5.26339 6.70107 5 7.33696 5 8V23C5 23.663 5.26339 24.2989 5.73223 24.7678C6.20107 25.2366 6.83696 25.5 7.5 25.5H22.5C23.163 25.5 23.7989 25.2366 24.2678 24.7678C24.7366 24.2989 25 23.663 25 23V8C25 7.33696 24.7366 6.70107 24.2678 6.23223C23.7989 5.76339 23.163 5.5 22.5 5.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function InfoIcon({ active = false }: { active?: boolean }) {
  const color = active ? "#FE8A00" : "#697B7B";
  return (
    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_381_5923)">
        <path d="M19.2998 19.3V16.5H18.2998V19.7L20.4498 21.85L21.1498 21.15L19.2998 19.3ZM12.7998 4.5L6.8748 7.925L12.7998 11.35L18.7248 7.925L12.7998 4.5ZM3.7998 16.475V8.525C3.7998 8.15833 3.88747 7.825 4.0628 7.525C4.23814 7.225 4.4838 6.98333 4.7998 6.8L11.7998 2.775C11.9665 2.69167 12.1291 2.625 12.2878 2.575C12.4465 2.525 12.6171 2.5 12.7998 2.5C12.9825 2.5 13.1575 2.525 13.3248 2.575C13.4921 2.625 13.6505 2.69167 13.7998 2.775L20.7998 6.8C21.1165 6.98333 21.3625 7.225 21.5378 7.525C21.7131 7.825 21.8005 8.15833 21.7998 8.525V12.5H19.7998V9.6L12.7748 13.65L5.7998 9.6V16.45L11.7998 19.925V22.225L4.7998 18.2C4.48314 18.0167 4.23747 17.775 4.0628 17.475C3.88814 17.175 3.80047 16.8417 3.7998 16.475ZM18.7998 24.5C17.4165 24.5 16.2375 24.0123 15.2628 23.037C14.2881 22.0617 13.8005 20.8827 13.7998 19.5C13.7991 18.1173 14.2868 16.9383 15.2628 15.963C16.2388 14.9877 17.4178 14.5 18.7998 14.5C20.1818 14.5 21.3611 14.9877 22.3378 15.963C23.3145 16.9383 23.8018 18.1173 23.7998 19.5C23.7978 20.8827 23.3101 22.062 22.3368 23.038C21.3635 24.014 20.1845 24.5013 18.7998 24.5Z" fill={color}/>
      </g>
      <defs>
        <clipPath id="clip0_381_5923">
          <rect width="24" height="24" fill="white" transform="translate(0.799805 0.5)"/>
        </clipPath>
      </defs>
    </svg>
  );
}

function RefundsIcon({ active = false }: { active?: boolean }) {
  const color = active ? "#FE8A00" : "#697B7B";
  return (
    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.59985 12.5C2.59985 18.023 7.07685 22.5 12.5999 22.5C18.1229 22.5 22.5999 18.023 22.5999 12.5C22.5999 6.977 18.1229 2.5 12.5999 2.5C8.49985 2.5 4.97485 4.968 3.43185 8.5M2.59985 5L3.09985 9L7.09985 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.0999 12.5C12.6054 12.5 12.1221 12.3534 11.7109 12.0787C11.2998 11.804 10.9794 11.4135 10.7902 10.9567C10.6009 10.4999 10.5514 9.99723 10.6479 9.51228C10.7444 9.02732 10.9825 8.58187 11.3321 8.23223C11.6817 7.8826 12.1272 7.6445 12.6121 7.54804C13.0971 7.45157 13.5997 7.50108 14.0566 7.6903C14.5134 7.87952 14.9038 8.19995 15.1785 8.61108C15.4532 9.0222 15.5999 9.50555 15.5999 10M13.0999 12.5C12.0999 15 9.59985 16.5 9.59985 16.5H14.1859C15.0909 16.5 15.9599 16.14 16.5999 15.5M13.0999 12.5H9.59985M13.0999 12.5H14.5999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function StickyNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const isRefunds = location.pathname.startsWith("/refunds");

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const isCurrentPath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-[428px] mx-auto relative">
        {/* Center FAB */}
        <button
          aria-label="Dashboard"
          onClick={() => handleNavigation("/dashboard")}
          className="absolute left-1/2 -top-6 -translate-x-1/2 z-20"
        >
          <div className="w-[75px] h-[75px] rounded-full bg-[#151D26] flex items-center justify-center p-[10px]">
            <div className="w-[55px] h-[55px] rounded-full flex items-center justify-center"
                 style={{
                   background: "linear-gradient(130deg, #FE8A00 13.67%, #BC6B09 49.59%, #713F04 86.21%)",
                   boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)"
                 }}>
              <AnalyticsIcon />
            </div>
          </div>
        </button>

        {/* Bottom bar with concave notch */}
        <div className="relative px-3 h-[65px] bg-[#030C15] rounded-t-2xl border-t border-[#0F1A22] overflow-visible">
          <div className="pointer-events-none absolute left-1/2 -top-8 -translate-x-1/2 w-[90px] h-[90px] bg-[#151D26] rounded-full" />

          {/* Nav items */}
          <div className="relative z-10 h-full flex items-center justify-around">
            {/* Costs */}
            <button onClick={() => handleNavigation("/accounting")} className="flex flex-col items-center gap-1.5">
              <CostsIcon active={isCurrentPath("/accounting")} />
              <span className={`${isCurrentPath("/accounting") ? "text-[#FE8A00]" : "text-[#697B7B]"} font-medium text-xs font-['Poppins']`}>Costs</span>
            </button>

            {/* Products */}
            <button onClick={() => handleNavigation("/products")} className="flex flex-col items-center gap-1.5">
              <ProductsIcon active={location.pathname.startsWith("/products")} />
              <span className={`${location.pathname.startsWith("/products") ? "text-[#FE8A00]" : "text-[#697B7B]"} font-normal text-xs font-['Poppins']`}>Products</span>
            </button>

            {/* Spacer under FAB to keep symmetry */}
            <div className="w-[75px]" aria-hidden />

            {/* Info */}
            <button onClick={() => handleNavigation("/historyinfo")} className="flex flex-col items-center gap-1.5">
              <InfoIcon active={isCurrentPath("/historyinfo")} />
              <span className={`${isCurrentPath("/historyinfo") ? "text-[#FE8A00]" : "text-[#697B7B]"} font-normal text-xs font-['Poppins']`}>Info</span>
            </button>

            {/* Refunds */}
            <button onClick={() => handleNavigation("/refunds")} className="flex flex-col items-center gap-1.5">
              <RefundsIcon active={isRefunds} />
              <span className={`${isRefunds ? "text-[#FE8A00]" : "text-[#697B7B]"} font-normal text-xs font-['Poppins']`}>Refunds</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
