import { useState } from "react";

interface BatchProduct {
  id: number;
  batchId: string;
  name: string;
  image: string;
  timeLeft: string;
  quantity: number;
  isSelected?: boolean;
}

interface ExBatchTableProps {
  products: BatchProduct[];
  onProductSelect?: (productId: number, isSelected: boolean) => void;
  onSelectAll?: (isSelected: boolean) => void;
}

function SortIcon() {
  return (
    <div className="flex flex-col items-start gap-0.5">
      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.20711 5C0.761654 5 0.538571 4.46143 0.853553 4.14645L4.64645 0.353553C4.84171 0.158291 5.15829 0.158291 5.35355 0.353553L9.14645 4.14645C9.46143 4.46143 9.23835 5 8.79289 5H1.20711Z" fill="#697B7B"/>
      </svg>
      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.79289 -1.05529e-07C9.23835 -6.65859e-08 9.46143 0.538571 9.14645 0.853553L5.35355 4.64645C5.15829 4.84171 4.84171 4.84171 4.64645 4.64645L0.853553 0.853552C0.538571 0.53857 0.761655 -8.07642e-07 1.20711 -7.68699e-07L8.79289 -1.05529e-07Z" fill="#697B7B"/>
      </svg>
    </div>
  );
}

function FigmaCheckbox({ checked, onChange, onClick }: { checked: boolean; onChange: () => void; onClick?: (e: React.MouseEvent) => void; }) {
  return (
    <label className="relative inline-flex items-center justify-center w-5 h-5" onClick={onClick}>
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

export function ExBatchTable({ products, onProductSelect, onSelectAll }: ExBatchTableProps) {
  const [selectedProducts, setSelectedProducts] = useState<Set<number>>(new Set());
  const [allSelected, setAllSelected] = useState(false);

  const handleProductSelect = (productId: number) => {
    const newSelected = new Set(selectedProducts);
    const isSelected = !selectedProducts.has(productId);
    
    if (isSelected) {
      newSelected.add(productId);
    } else {
      newSelected.delete(productId);
    }
    
    setSelectedProducts(newSelected);
    onProductSelect?.(productId, isSelected);
  };

  const handleSelectAll = () => {
    const shouldSelectAll = selectedProducts.size !== products.length;
    setAllSelected(shouldSelectAll);
    setSelectedProducts(shouldSelectAll ? new Set(products.map(p => p.id)) : new Set());
    onSelectAll?.(shouldSelectAll);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Title */}
      <h3 className="text-[#F6F6F6] font-['Space_Grotesk'] text-base font-bold">
        Products
      </h3>

      {/* Table */}
      <div className="flex flex-col w-full">
        {/* Header Row */}
        <div className="flex items-center w-full">
          {/* Checkbox Column Header */}
          <div className="flex w-10 sm:w-12 flex-shrink-0 p-2 sm:p-3 md:p-4 flex-col justify-center items-center gap-1 sm:gap-2 rounded-tl-2xl sm:rounded-tl-3xl border-b border-[#22353E] bg-[#1C242E]">
            <FigmaCheckbox
              checked={selectedProducts.size === products.length && products.length > 0}
              onChange={handleSelectAll}
            />
          </div>

          {/* Batch ID & Product Name Column Header */}
          <div className="flex flex-1 min-w-0 p-2 sm:p-3 md:p-4 items-center gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0 border-b border-[#22353E] bg-[#1C242E]">
            <span className="text-[#C4C4C4] font-['Space_Grotesk'] text-[10px] sm:text-xs md:text-sm font-normal truncate">
              Batch ID & Product Name
            </span>
            <div className="flex-shrink-0">
              <SortIcon />
            </div>
          </div>

          {/* Quantity Column Header */}
          <div className="flex w-14 sm:w-16 md:w-20 flex-shrink-0 p-2 sm:p-3 md:p-4 flex-col justify-center items-center gap-1 sm:gap-2 rounded-tr-2xl sm:rounded-tr-3xl border-b border-[#22353E] bg-[#1C242E]">
            <span className="text-[#C4C4C4] font-['Space_Grotesk'] text-[10px] sm:text-xs md:text-sm font-normal text-center">Qty</span>
          </div>
        </div>

        {/* Table Rows */}
        {products.map((product, index) => {
          const isSelected = selectedProducts.has(product.id);
          const isEvenRow = index % 2 === 1;
          
          return (
            <div
              key={product.id}
              className={`flex items-center w-full cursor-pointer hover:bg-[#22353E] ${isEvenRow ? 'bg-[#1C242E]' : ''}`}
              onClick={() => handleProductSelect(product.id)}
            >
              {/* Checkbox Column */}
              <div className="flex w-10 sm:w-12 flex-shrink-0 min-h-[80px] sm:min-h-[100px] md:h-[114px] p-2 sm:p-3 md:p-4 justify-center items-center gap-1 sm:gap-2 border-r border-b border-l border-[#22353E]">
                <FigmaCheckbox
                  checked={isSelected}
                  onChange={() => handleProductSelect(product.id)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Product Info Column */}
              <div className="flex flex-1 min-w-0 min-h-[80px] sm:min-h-[100px] md:h-[114px] p-2 sm:p-3 items-center gap-2 sm:gap-3 md:gap-[15px] border-b border-[#22353E]">
                {/* Product Image */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-10 h-11 sm:w-12 sm:h-14 md:w-[60px] md:h-[66px] flex-shrink-0 rounded-lg object-cover"
                />
                
                {/* Product Details */}
                <div className="flex flex-1 min-w-0 flex-col justify-center items-start gap-1.5 sm:gap-2 md:gap-3">
                  {/* Check if this is the special "Batch ID" format row */}
                  {product.name.includes('Batch id') ? (
                    <>
                      <div className="w-full text-[#F6F6F6] font-['Space_Grotesk'] text-[10px] sm:text-xs md:text-sm lg:text-base font-normal uppercase truncate">
                        <span className="text-[#C4C4C4]">Batch id : </span>
                        <span className="text-[#F6F6F6]">{product.batchId}</span>
                      </div>
                      <div className="w-full text-[#F6F6F6] font-['Space_Grotesk'] text-[10px] sm:text-xs md:text-sm lg:text-base font-medium truncate" title={product.name.replace(/Batch id : \d+\s*/, '')}>
                        {product.name.replace(/Batch id : \d+\s*/, '')}
                      </div>
                    </>
                  ) : (
                    <div className="w-full text-[#F6F6F6] font-['Space_Grotesk'] text-[10px] sm:text-xs md:text-sm lg:text-base font-normal truncate" title={product.name}>
                      {product.name}
                    </div>
                  )}
                  
                  {/* Time Left Badge */}
                  <div className="flex w-full max-w-[120px] sm:max-w-[130px] h-4 sm:h-5 px-2 sm:px-3 py-1 sm:py-1.5 justify-center items-center gap-1 sm:gap-2 rounded-xl sm:rounded-2xl bg-[rgba(255,20,116,0.10)]">
                    <span className="text-[#FF1474] font-['Space_Grotesk'] text-[9px] sm:text-[10px] md:text-xs font-normal truncate">
                      {product.timeLeft}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quantity Column */}
              <div className="flex w-14 sm:w-16 md:w-20 flex-shrink-0 min-h-[80px] sm:min-h-[100px] md:h-[114px] p-2 sm:p-3 md:p-4 justify-center items-center gap-1 sm:gap-2 border-r border-b border-l border-[#22353E]">
                <div className="flex w-full max-w-[28px] sm:max-w-[33px] h-3.5 sm:h-4 px-2 sm:px-3 py-1 sm:py-1.5 justify-center items-center gap-1 sm:gap-2 flex-shrink-0 rounded-xl sm:rounded-2xl bg-[rgba(255,20,116,0.10)]">
                  <span className="text-[#FF1474] font-['Space_Grotesk'] text-[9px] sm:text-[10px] md:text-xs font-medium">
                    {product.quantity.toString().padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
