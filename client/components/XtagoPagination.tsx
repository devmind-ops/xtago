import { cn } from "@/lib/utils";

interface XtagoPaginationProps {
  totalItems?: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function PrevIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.49992 9.96004L4.23992 6.70004C3.85492 6.31504 3.85492 5.68504 4.23992 5.30004L7.49992 2.04004" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function NextIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.45508 9.96004L7.71508 6.70004C8.10008 6.31504 8.10008 5.68504 7.71508 5.30004L4.45508 2.04004" stroke="#151D26" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function XtagoPagination({ totalItems, currentPage, totalPages, onPageChange }: XtagoPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-between px-4 py-4">
      <div className="flex flex-col items-start">
        {typeof totalItems === "number" && (
          <span className="text-[#F6F6F6] text-sm font-normal">Total {totalItems} items</span>
        )}
      </div>
      <div className="flex items-center gap-3">
        {/* Prev */}
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-xl",
            currentPage === 1 ? "bg-[#22353E] opacity-60 cursor-not-allowed" : "bg-[rgba(254,138,0,0.1)]"
          )}
        >
          <PrevIcon />
        </button>

        {/* Pages */}
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={cn(
              "flex flex-col items-center justify-center w-5 h-8 rounded-xl border px-2 py-1",
              p === currentPage
                ? "border-[#091E42] bg-[#00E074]"
                : "border-[#22353E]"
            )}
          >
            <span className={cn("text-sm font-normal", p === currentPage ? "text-[#151D26]" : "text-[#C4C4C4]")}>{p}</span>
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-xl",
            currentPage === totalPages ? "bg-[#22353E] opacity-60 cursor-not-allowed" : "bg-[#FE8A00]"
          )}
        >
          <NextIcon />
        </button>
      </div>
    </div>
  );
}
