import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCard, Product } from "@/components/ProductCard";
import { ActionMenu } from "@/components/ActionMenu";
import { DeleteConfirmationDialog } from "@/components/DeleteConfirmationDialog";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 16.5L15 15" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function QRScanIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3H6.0075V1.5H1.5V6H3V3ZM3 12H1.5V16.5H6.0075V15H3V12ZM15 15H12V16.5H16.5V12H15V15ZM12 3H15V6H16.5V1.5H12V3Z" fill="#697B7B"/>
      <path d="M3.75 8.25H8.25V3.75H3.75V8.25ZM5.25 5.25H6.75V6.75H5.25V5.25ZM3.75 14.25H8.25V9.75H3.75V14.25ZM5.25 11.25H6.75V12.75H5.25V11.25ZM14.25 3.75H9.75V8.25H14.25V3.75ZM12.75 6.75H11.25V5.25H12.75V6.75ZM9.7575 9.75H11.2575V11.25H9.7575V9.75ZM11.2575 11.25H12.7575V12.75H11.2575V11.25ZM12.7575 12.75H14.2575V14.25H12.7575V12.75ZM12.7575 9.75H14.2575V11.25H12.7575V9.75Z" fill="#697B7B"/>
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.05005 1.57495H13.95C14.775 1.57495 15.45 2.24995 15.45 3.07495V4.72495C15.45 5.32495 15.075 6.07495 14.7 6.44995L11.475 9.29995C11.025 9.67495 10.725 10.425 10.725 11.025V14.25C10.725 14.7 10.425 15.3 10.05 15.525L9.00005 16.2C8.02505 16.8 6.67505 16.125 6.67505 14.925V10.95C6.67505 10.425 6.37505 9.74995 6.07505 9.37495L3.22505 6.37495C2.85005 5.99995 2.55005 5.32495 2.55005 4.87495V3.14995C2.55005 2.24995 3.22505 1.57495 4.05005 1.57495Z" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.1975 1.57495L4.5 7.49995" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AddIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 13V1M1 7H13" stroke="#151D26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Mock products data - in a real app this would come from an API or state management
const mockProducts = [
  {
    id: 1,
    name: "Aashirvad Atta with multigrains 500g",
    image: "/assets/images/product-cebcb59d.png",
    sellThroughRate: 82,
    stock: 2,
    status: "Active" as const,
  },
  {
    id: 2,
    name: "Kitchen Treasures Kashmiri chilli powder 500g",
    image: "/assets/images/product-fd04a522.png",
    sellThroughRate: 82,
    stock: 2,
    status: "Active" as const,
  },
  {
    id: 3,
    name: "Aashirvad Atta with multigrains 500g",
    image: "/assets/images/product-41969875.png",
    sellThroughRate: 82,
    stock: 30,
    status: "Clearance" as const,
  },
  {
    id: 4,
    name: "Kitchen Treasures Kashmiri chilli powder 500g",
    image: "/assets/images/product-fd04a522.png",
    sellThroughRate: 82,
    stock: 2,
    status: "Inactive" as const,
  },
  {
    id: 5,
    name: "Aashirvad Atta with multigrains 500g",
    image: "/assets/images/product-cebcb59d.png",
    sellThroughRate: 82,
    stock: 2,
    status: "Inactive" as const,
  },
  {
    id: 6,
    name: "Kitchen Treasures Kashmiri chilli powder 500g",
    image: "/assets/images/product-fd04a522.png",
    sellThroughRate: 82,
    stock: 2,
    status: "Active" as const,
  },
  {
    id: 7,
    name: "Aashirvad Atta with multigrains 500g",
    image: "/assets/images/product-41969875.png",
    sellThroughRate: 82,
    stock: 30,
    status: "Inactive" as const,
  },
  {
    id: 8,
    name: "Kitchen Treasures Kashmiri chilli powder 500g",
    image: "/assets/images/product-fd04a522.png",
    sellThroughRate: 82,
    stock: 2,
    status: "Clearance" as const,
  },
  {
    id: 9,
    name: "Aashirvad Atta with multigrains 500g",
    image: "/assets/images/product-cebcb59d.png",
    sellThroughRate: 82,
    stock: 2,
    status: "Active" as const,
  }
];

export function ProductsList() {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [stockFilters, setStockFilters] = useState({ lowStock: false, outOfStock: true });
  const [activeFilterSection, setActiveFilterSection] = useState("Stock");
  const [activeActionMenu, setActiveActionMenu] = useState<{ product: Product; position: { x: number; y: number } } | null>(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState<{ product: Product; position: { x: number; y: number } } | null>(null);

  const handleSearchToggle = () => {
    setIsSearchOpen((v) => !v);
    if (isSearchOpen) setSearchQuery("");
  };

  const toggleStock = (key: "lowStock" | "outOfStock") =>
    setStockFilters((p) => ({ ...p, [key]: !p[key] }));

  const handleShowActionMenu = (product: Product, position: { x: number; y: number }) => {
    setActiveActionMenu({ product, position });
  };

  const handleEdit = (pos?: { x: number; y: number }) => {
    if (activeActionMenu) {
      console.log('Edit product:', activeActionMenu.product, pos);
      navigate(`/products/edit/${activeActionMenu.product.id}`);
      setActiveActionMenu(null);
    }
  };

  const handleView = (pos?: { x: number; y: number }) => {
    if (activeActionMenu) {
      console.log('View product:', activeActionMenu.product, pos);
      navigate(`/products/view/${activeActionMenu.product.id}`);
      setActiveActionMenu(null);
    }
  };

  const handleDelete = (pos?: { x: number; y: number }) => {
    if (activeActionMenu) {
      console.log('Delete product:', activeActionMenu.product, pos);
      setDeleteConfirmation({
        product: activeActionMenu.product,
        position: activeActionMenu.position
      });
      setActiveActionMenu(null);
    }
  };

  const handleDeleteConfirm = () => {
    if (deleteConfirmation) {
      console.log('Confirmed delete for product:', deleteConfirmation.product);
      // Here you would actually delete the product
      // For now, just close the dialog
      setDeleteConfirmation(null);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmation(null);
  };

  // Filter products based on search query
  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Header with title and action buttons */}
      <div className="flex items-center justify-between relative gap-2">
        <h1 className="text-xtago-text text-sm sm:text-base md:text-lg font-bold flex-shrink-0">Products</h1>
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {/* Search Popover */}
          <Popover open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <PopoverTrigger asChild>
              <button
                onClick={handleSearchToggle}
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-xtago-surface rounded-2xl"
                aria-label="Open search"
              >
                <SearchIcon />
              </button>
            </PopoverTrigger>
            <PopoverContent align="end" side="bottom" sideOffset={8} className="w-[18rem] max-w-[calc(100vw-2rem)] rounded-2xl border-[#22353E] bg-[#1C242E] p-3">
              <div className="flex items-center gap-2">
                <SearchIcon />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="flex-1 bg-transparent text-xtago-text placeholder-xtago-muted text-sm outline-none"
                  autoFocus
                />
                <button
                  onClick={handleSearchToggle}
                  className="text-xtago-muted hover:text-xtago-text text-sm"
                  aria-label="Close search"
                >
                  ✕
                </button>
              </div>
            </PopoverContent>
          </Popover>

          {/* QR Scan Button */}
          <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-xtago-surface rounded-2xl">
            <QRScanIcon />
          </button>

          {/* Filter Popover */}
          <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <PopoverTrigger asChild>
              <button
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-xtago-surface rounded-2xl"
                aria-label="Open filters"
              >
                <FilterIcon />
              </button>
            </PopoverTrigger>
            <PopoverContent align="end" side="bottom" sideOffset={8} className="w-[199px] max-w-[calc(100vw-2rem)] p-4 sm:p-6 rounded-xl bg-[#151D26] border-0 shadow-[0_0_88px_rgba(0,0,0,0.25)]">
              <div className="space-y-3">
                {(["Category","Vendor","Stock","Expiry"] as const).map((section) => (
                  <div key={section}>
                    <button
                      onClick={() => setActiveFilterSection(section)}
                      className={cn(
                        "w-full h-9 sm:h-[42px] px-4 sm:px-6 md:px-9 flex items-center justify-center rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm md:text-base transition-colors",
                        activeFilterSection === section
                          ? "bg-xtago-primary text-xtago-background"
                          : "text-xtago-text border-b border-xtago-primary"
                      )}
                    >
                      {section}
                    </button>

                    {activeFilterSection === "Stock" && section === "Stock" && (
                      <div className="mt-3 p-4 sm:p-6 bg-[#1C242E] rounded-xl shadow-[0_0_88px_rgba(0,0,0,0.25)]">
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => toggleStock("lowStock")}
                              className={cn(
                                "w-4 h-4 rounded-xl border border-xtago-background flex items-center justify-center flex-shrink-0",
                                stockFilters.lowStock ? "bg-xtago-primary" : "bg-transparent"
                              )}
                            />
                            <span className="text-[#C4C4C4] text-xs sm:text-sm font-medium">Low Stock</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => toggleStock("outOfStock")}
                              className={cn(
                                "w-4 h-4 rounded-xl border border-xtago-background flex items-center justify-center flex-shrink-0",
                                stockFilters.outOfStock ? "bg-xtago-primary" : "bg-transparent"
                              )}
                            />
                            <span className="text-[#C4C4C4] text-xs sm:text-sm font-medium">Out of Stock</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* Add Button */}
          <button
            onClick={() => navigate('/products/add')}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-xtago-primary rounded-2xl text-xtago-background font-bold text-xs sm:text-sm md:text-base"
            aria-label="Add product"
          >
            <AddIcon />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-xtago-surface rounded-3xl overflow-hidden">
        {filteredProducts.map((product, index) => (
          <div key={product.id}>
            <ProductCard
              product={product}
              onShowActionMenu={handleShowActionMenu}
            />
            {index < filteredProducts.length - 1 && (
              <div className="border-b border-xtago-background" />
            )}
          </div>
        ))}

        {/* No Results */}
        {filteredProducts.length === 0 && searchQuery && (
          <div className="p-8 text-center text-xtago-muted">
            No products found for "{searchQuery}"
          </div>
        )}
      </div>

      {/* Action Menu */}
      {activeActionMenu && (
        <ActionMenu
          isOpen={true}
          onClose={() => setActiveActionMenu(null)}
          onEdit={handleEdit}
          onView={handleView}
          onDelete={handleDelete}
          position={activeActionMenu.position}
        />
      )}

      {/* Delete Confirmation Dialog */}
      {deleteConfirmation && (
        <DeleteConfirmationDialog
          isOpen={true}
          onClose={handleDeleteCancel}
          onConfirm={handleDeleteConfirm}
          position={deleteConfirmation.position}
        />
      )}
    </div>
  );
}
