import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductFilterProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: any) => void;
}

export function ProductFilter({ isOpen, onClose, onApply }: ProductFilterProps) {
  const [activeSection, setActiveSection] = useState("Stock");
  const [stockFilters, setStockFilters] = useState({
    lowStock: false,
    outOfStock: true, // Default selected as per Figma
  });

  if (!isOpen) return null;

  const handleStockFilterChange = (key: string, value: boolean) => {
    setStockFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleApply = () => {
    onApply({
      activeSection,
      stockFilters
    });
    onClose();
  };

  const sections = [
    { id: "Category", label: "Category" },
    { id: "Vendor", label: "Vendor" },
    { id: "Stock", label: "Stock" },
    { id: "Expiry", label: "Expiry" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />
      
      {/* Filter Popup */}
      <div className="fixed top-32 right-4 z-50 w-[199px] bg-xtago-background rounded-xl shadow-[0_0_88px_rgba(0,0,0,0.25)] p-6">
        {/* Popup Arrow */}
        <div className="absolute -top-3 right-8">
          <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5359 4C14.0755 1.33333 14.8453 -2.38419e-07 16 -3.57628e-07C17.1547 -3.57628e-07 17.9245 1.33333 19.4641 4L29.8564 22C31.396 24.6667 32.1658 26 31.5885 27C31.0111 28 29.4715 28 26.3923 28H5.6077C2.52849 28 0.988892 28 0.411542 27C-0.165808 26 0.603992 24.6667 2.14359 22L12.5359 4Z" fill="#151D26"/>
          </svg>
        </div>

        <div className="space-y-3">
          {sections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  "w-full h-[42px] px-9 flex items-center justify-center rounded-2xl font-bold text-base transition-colors",
                  activeSection === section.id
                    ? "bg-xtago-primary text-xtago-background"
                    : "text-xtago-text border-b border-xtago-primary"
                )}
              >
                {section.label}
              </button>
              
              {/* Stock Submenu */}
              {activeSection === "Stock" && section.id === "Stock" && (
                <div className="mt-3 p-6 bg-xtago-surface rounded-xl shadow-[0_0_88px_rgba(0,0,0,0.25)] relative">
                  {/* Submenu Arrow */}
                  <div className="absolute -top-3 left-8">
                    <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.0359 4C14.5755 1.33333 15.3453 -2.38419e-07 16.5 -3.57628e-07C17.6547 -3.57628e-07 18.4245 1.33333 19.9641 4L30.3564 22C31.896 24.6667 32.6658 26 32.0885 27C31.5111 28 29.9715 28 26.8923 28H6.1077C3.02849 28 1.48889 28 0.911542 27C0.334192 26 1.10399 24.6667 2.64359 22L13.0359 4Z" fill="#1C242E"/>
                    </svg>
                  </div>
                  
                  <div className="space-y-3">
                    {/* Low Stock */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleStockFilterChange('lowStock', !stockFilters.lowStock)}
                        className={cn(
                          "w-4 h-4 rounded-xl border border-xtago-background flex items-center justify-center",
                          stockFilters.lowStock ? "bg-xtago-primary" : "bg-transparent"
                        )}
                      />
                      <span className="text-[#C4C4C4] text-sm font-medium">Low Stock</span>
                    </div>
                    
                    {/* Out of Stock */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleStockFilterChange('outOfStock', !stockFilters.outOfStock)}
                        className={cn(
                          "w-4 h-4 rounded-xl border border-xtago-background flex items-center justify-center",
                          stockFilters.outOfStock ? "bg-xtago-primary" : "bg-transparent"
                        )}
                      />
                      <span className="text-[#C4C4C4] text-sm font-medium">Out of Stock</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
