import { cn } from "@/lib/utils";

export type ProductStatus = "Active" | "Inactive" | "Clearance";

export interface Product {
  id: number;
  name: string;
  image: string;
  sellThroughRate: number;
  stock: number;
  status: ProductStatus;
}

interface ProductCardProps {
  product: Product;
  onShowActionMenu?: (product: Product, position: { x: number; y: number }) => void;
}

function DotsIcon() {
  return (
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9.5C3 9.69891 3.07902 9.88968 3.21967 10.0303C3.36032 10.171 3.55109 10.25 3.75 10.25C3.94891 10.25 4.13968 10.171 4.28033 10.0303C4.42098 9.88968 4.5 9.69891 4.5 9.5C4.5 9.30109 4.42098 9.11032 4.28033 8.96967C4.13968 8.82902 3.94891 8.75 3.75 8.75C3.55109 8.75 3.36032 8.82902 3.21967 8.96967C3.07902 9.11032 3 9.30109 3 9.5ZM8.25 9.5C8.25 9.69891 8.32902 9.88968 8.46967 10.0303C8.61032 10.171 8.80109 10.25 9 10.25C9.19891 10.25 9.38968 10.171 9.53033 10.0303C9.67098 9.88968 9.75 9.69891 9.75 9.5C9.75 9.30109 9.67098 9.11032 9.53033 8.96967C9.38968 8.82902 9.19891 8.75 9 8.75C8.80109 8.75 8.61032 8.82902 8.46967 8.96967C8.32902 9.11032 8.25 9.30109 8.25 9.5ZM13.5 9.5C13.5 9.69891 13.579 9.88968 13.7197 10.0303C13.8603 10.171 14.0511 10.25 14.25 10.25C14.4489 10.25 14.6397 10.171 14.7803 10.0303C14.921 9.88968 15 9.69891 15 9.5C15 9.30109 14.921 9.11032 14.7803 8.96967C14.6397 8.82902 14.4489 8.75 14.25 8.75C14.0511 8.75 13.8603 8.82902 13.7197 8.96967C13.579 9.11032 13.5 9.30109 13.5 9.5Z" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function StatusBadge({ status }: { status: ProductStatus }) {
  const statusConfig = {
    Active: {
      color: "#00E074",
      bgColor: "transparent",
      borderColor: "#00E074",
    },
    Inactive: {
      color: "#FF1474",
      bgColor: "transparent", 
      borderColor: "#FF1474",
    },
    Clearance: {
      color: "#FE8A00",
      bgColor: "transparent",
      borderColor: "#FE8A00",
    },
  };

  const config = statusConfig[status];

  return (
    <div 
      className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-2xl sm:rounded-3xl border text-[9px] sm:text-[10px] md:text-xs font-medium whitespace-nowrap"
      style={{
        color: config.color,
        backgroundColor: config.bgColor,
        borderColor: config.borderColor,
      }}
    >
      {status}
    </div>
  );
}

export function ProductCard({ product, onShowActionMenu }: ProductCardProps) {
  const getStockColor = (stock: number) => {
    if (stock <= 5) return "#FF1474"; // Low stock - red/pink
    if (stock <= 20) return "#FE8A00"; // Medium stock - orange  
    return "#00E074"; // High stock - green
  };

  const stockColor = getStockColor(product.stock);

  const handleActionClick = (event: React.MouseEvent) => {
    if (!onShowActionMenu) return;

    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    const MENU_WIDTH = 120;
    const PADDING = 8;

    // Calculate x position to center the menu on the button
    const desiredLeft = rect.left + rect.width / 2 - MENU_WIDTH / 2;
    const x = Math.min(
      Math.max(PADDING, desiredLeft),
      window.innerWidth - MENU_WIDTH - PADDING
    );

    // Calculate y position below the button
    const MENU_HEIGHT = 40;
    const below = rect.bottom + 8;
    const above = rect.top - MENU_HEIGHT - 8;

    const y = below + MENU_HEIGHT + PADDING > window.innerHeight
      ? Math.max(PADDING, above)
      : Math.min(below, window.innerHeight - MENU_HEIGHT - PADDING);

    onShowActionMenu(product, { x, y });
  };

  return (
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3">
      {/* Product Image */}
      <img 
        src={product.image} 
        alt={product.name}
        className="w-12 h-14 sm:w-14 sm:h-16 md:w-[60px] md:h-[66px] rounded-lg object-cover flex-shrink-0"
      />

      {/* Product Info */}
      <div className="flex-1 min-w-0 space-y-0.5 sm:space-y-1">
        <h3 className="text-xtago-text text-xs sm:text-sm md:text-base font-normal leading-tight truncate" title={product.name}>
          {product.name}
        </h3>
        <p className="text-[#C4C4C4] text-[10px] sm:text-xs font-medium truncate">
          Sell-Through Rate : {product.sellThroughRate}%
        </p>
        <p className="text-[#C4C4C4] text-[10px] sm:text-xs font-medium">
          <span style={{ color: stockColor }}>
            {product.stock < 10 ? `0${product.stock}` : product.stock}
          </span>
          {" "}in stock
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
        <button
          onClick={handleActionClick}
          className="text-xtago-muted hover:text-xtago-text"
        >
          <DotsIcon />
        </button>
        <StatusBadge status={product.status} />
      </div>
    </div>
  );
}
