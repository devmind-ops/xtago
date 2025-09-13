interface ProductEditTabsProps {
  activeTab: "Product Info" | "Batch Info";
  onTabChange: (tab: "Product Info" | "Batch Info") => void;
}

function ProductIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_406_2814)">
        <path d="M18.3333 5.83341L9.99999 1.66675L1.66666 5.83341V14.1667L9.99999 18.3334L18.3333 14.1667V5.83341Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M1.66666 5.8335L9.99999 10.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 18.3333V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.3333 5.8335L10 10.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.1666 3.75L5.83331 7.91667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_406_2814">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

function BatchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_406_2824)">
        <path d="M13.125 0.0195312L20 3.45703V11.123L18.75 10.498V4.85352L13.75 7.35352V9.87305L12.5 10.498V7.35352L7.5 4.85352V7.07031L6.25 6.44531V3.45703L13.125 0.0195312ZM13.125 6.26953L14.8535 5.40039L10.332 2.8125L8.27148 3.84766L13.125 6.26953ZM16.2012 4.73633L17.9785 3.84766L13.125 1.41602L11.6699 2.14844L16.2012 4.73633ZM11.25 11.123L10 11.748V11.7383L6.25 13.6133V18.0566L10 16.1719V17.5781L5.625 19.7656L0 16.9434V10.3418L5.625 7.5293L11.25 10.3418V11.123ZM5 18.0566V13.6133L1.25 11.7383V16.1719L5 18.0566ZM5.625 12.5293L9.22852 10.7324L5.625 8.92578L2.02148 10.7324L5.625 12.5293ZM11.25 12.5195L15.625 10.332L20 12.5195V17.666L15.625 19.8535L11.25 17.666V12.5195ZM15 18.1445V15.166L12.5 13.916V16.8945L15 18.1445ZM18.75 16.8945V13.916L16.25 15.166V18.1445L18.75 16.8945ZM15.625 14.082L17.9785 12.9004L15.625 11.7285L13.2715 12.9004L15.625 14.082Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_406_2824">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export function ProductEditTabs({ activeTab, onTabChange }: ProductEditTabsProps) {
  return (
    <div className="flex w-full max-w-[272px] mx-auto p-1.5 justify-center items-center gap-1.5 rounded-3xl bg-[#1C242E]">
      {/* Product Info Tab */}
      <button
        onClick={() => onTabChange("Product Info")}
        className={`flex h-9 px-2.5 py-3 items-center gap-1.5 flex-shrink-0 rounded-[20px] transition-colors ${
          activeTab === "Product Info"
            ? "bg-[#FE8A00] text-[#151D26]"
            : "border border-[#22353E] text-[#697B7B]"
        }`}
      >
        <ProductIcon />
        <span className="font-['Space_Grotesk'] text-sm font-bold">
          Product Info
        </span>
      </button>

      {/* Batch Info Tab */}
      <button
        onClick={() => onTabChange("Batch Info")}
        className={`flex h-9 px-2 py-3 items-center gap-1.5 flex-shrink-0 rounded-[20px] transition-colors ${
          activeTab === "Batch Info"
            ? "bg-[#FE8A00] text-[#151D26]"
            : "border border-[#22353E] text-[#697B7B]"
        }`}
      >
        <BatchIcon />
        <span className="font-['Space_Grotesk'] text-sm font-bold">
          Batch Info
        </span>
      </button>
    </div>
  );
}
