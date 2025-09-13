import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { XtagoLogo } from "@/components/XtagoLogo";
import { StickyNavigation } from "@/components/StickyNavigation";
import { ProductEditTabs } from "@/components/ProductEditTabs";
import { BatchInfoPage } from "@/components/BatchInfoPage";

interface EditProductPageProps {}

function CloseIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 29.3334C23.3334 29.3334 29.3334 23.3334 29.3334 16.0001C29.3334 8.66675 23.3334 2.66675 16 2.66675C8.66669 2.66675 2.66669 8.66675 2.66669 16.0001C2.66669 23.3334 8.66669 29.3334 16 29.3334Z" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.2267 19.7732L19.7734 12.2266" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.7734 19.7732L12.2267 12.2266" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.7929 -1.05529e-07C11.2383 -6.65859e-08 11.4614 0.538571 11.1464 0.853553L6.35355 5.64645C6.15829 5.84171 5.84171 5.84171 5.64645 5.64645L0.853553 0.853552C0.538571 0.53857 0.761654 -9.82487e-07 1.20711 -9.43545e-07L10.7929 -1.05529e-07Z" fill="#697B7B"/>
    </svg>
  );
}

function ChevronUpIcon() {
  return (
    <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.20711 6C0.761653 6 0.538571 5.46143 0.853553 5.14645L5.64645 0.353554C5.84171 0.158292 6.15829 0.158292 6.35355 0.353554L11.1464 5.14645C11.4614 5.46143 11.2383 6 10.7929 6L1.20711 6Z" fill="#697B7B"/>
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.22656 11.9416C7.22656 13.0166 8.05156 13.8832 9.07656 13.8832H11.1682C12.0599 13.8832 12.7849 13.1249 12.7849 12.1916C12.7849 11.1749 12.3432 10.8166 11.6849 10.5832L8.32656 9.41658C7.66823 9.18324 7.22656 8.82491 7.22656 7.80824C7.22656 6.87491 7.95156 6.11658 8.84323 6.11658H10.9349C11.9599 6.11658 12.7849 6.98324 12.7849 8.05824" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 5V15" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PercentageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8333 4.16663L4.16663 15.8333M14.1666 15.8333C13.7246 15.8333 13.3007 15.6577 12.9881 15.3451C12.6756 15.0326 12.5 14.6087 12.5 14.1666C12.5 13.7246 12.6756 13.3007 12.9881 12.9881C13.3007 12.6756 13.7246 12.5 14.1666 12.5C14.6087 12.5 15.0326 12.6756 15.3451 12.9881C15.6577 13.3007 15.8333 13.7246 15.8333 14.1666C15.8333 14.6087 15.6577 15.0326 15.3451 15.3451C15.0326 15.6577 14.6087 15.8333 14.1666 15.8333ZM5.83329 7.49996C5.39127 7.49996 4.96734 7.32436 4.65478 7.0118C4.34222 6.69924 4.16663 6.27532 4.16663 5.83329C4.16663 5.39127 4.34222 4.96734 4.65478 4.65478C4.96734 4.34222 5.39127 4.16663 5.83329 4.16663C6.27532 4.16663 6.69924 4.34222 7.0118 4.65478C7.32436 4.96734 7.49996 5.39127 7.49996 5.83329C7.49996 6.27532 7.32436 6.69924 7.0118 7.0118C6.69924 7.32436 6.27532 7.49996 5.83329 7.49996Z" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66663 1.66667V4.16667" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3334 1.66667V4.16667" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.91663 7.575H17.0833" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.5 7.08334V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V7.08334C2.5 4.58334 3.75 2.91667 6.66667 2.91667H13.3333C16.25 2.91667 17.5 4.58334 17.5 7.08334Z" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.079 11.4167H13.0864" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.079 13.9167H13.0864" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.9962 11.4167H10.0037" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.9962 13.9167H10.0037" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.91197 11.4167H6.91945" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.91197 13.9167H6.91945" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ToggleOn() {
  return (
    <div className="relative w-8 h-5">
      <div className="w-7 h-4 rounded-full bg-[#00E074] absolute left-0.5 top-0.5"></div>
      <div className="w-3 h-3 rounded-full bg-white border border-white absolute left-4 top-1"></div>
      <div className="w-1 h-1 rounded-full bg-[#00E074] absolute left-5 top-2"></div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  isDropdown?: boolean;
  options?: string[];
  disabled?: boolean;
  type?: "text" | "number";
}

function FormField({ label, value, onChange, placeholder, icon, isDropdown, options, disabled, type = "text" }: FormFieldProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (isDropdown) {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-[#F6F6F6] text-base font-normal">{label}</label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-[18px] rounded-[20px] border border-[#22353E] bg-transparent text-left"
            disabled={disabled}
          >
            <span className={cn("text-base font-normal", value ? "text-[#F6F6F6]" : "text-[#697B7B]")}>
              {value || placeholder || "Select..."}
            </span>
            <ChevronDownIcon />
          </button>
          {isOpen && options && (
            <div className="absolute top-full left-0 right-0 z-10 mt-1 bg-[#1C242E] border border-[#22353E] rounded-[20px] overflow-hidden">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left text-[#F6F6F6] hover:bg-[#22353E] text-base"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#F6F6F6] text-base font-normal">{label}</label>
      <div className="relative flex items-center">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "w-full px-4 py-[18px] rounded-[20px] border border-[#22353E] bg-transparent text-base font-normal",
            disabled ? "text-[#697B7B]" : "text-[#F6F6F6]",
            "placeholder:text-[#697B7B] focus:outline-none focus:border-[#FE8A00]"
          )}
        />
        {icon && (
          <div className="absolute right-4">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function CollapsibleSection({ title, children, isOpen, onToggle }: CollapsibleSectionProps) {
  return (
    <div className="border border-[#22353E] rounded-3xl bg-[#1C242E] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 hover:bg-[#22353E] transition-colors"
      >
        <h3 className="text-white text-base font-bold">{title}</h3>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 space-y-4">
          {children}
        </div>
      )}
    </div>
  );
}

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
      src="https://api.builder.io/api/v1/image/assets/TEMP/30c3de9cd71050d70477afda594579fb92b89b55?width=88"
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

export default function EditProductPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [activeTab, setActiveTab] = useState<"Product Info" | "Batch Info">("Product Info");

  // State for form sections
  const [openSections, setOpenSections] = useState({
    basicInfo: true,
    pricing: false,
    inventory: false,
    additional: false
  });

  // State for form data
  const [formData, setFormData] = useState({
    // Basic Info
    productName: "gvvgvjh",
    productId: "432",
    vendor: "ABC Foods",
    category: "Grocery",
    subCategory: "Flours",
    
    // Pricing
    costPrice: "22000",
    retailPrice: "22000",
    discountedPrice: "22000",
    margin: "10",
    profitPerUnit: "450",
    bundlePricing: true,
    discountType: "Percentage",
    bundleQuantity: "5",
    percentageOff: "10",
    finalPricePerUnit: "450",
    
    // Inventory
    reorderLevel: "4",
    stockLocation: "Primary",
    quantityOnHand: "2",
    supplierLeadTime: "22-04-2025",
    dateOfStockReceipt: "22-04-2025",
    lastSaleDate: "22-04-2025",
    
    // Additional
    description: "",
    notes: "Enter here",
    tags: "Add here",
    status: true
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const updateField = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleClose = () => {
    navigate("/products");
  };

  const handleSave = () => {
    console.log("Saving product:", formData);
    navigate("/products");
  };

  const handleCancel = () => {
    navigate("/products");
  };

  // Mock product image
  const productImage = "https://api.builder.io/api/v1/image/assets/TEMP/be7c1d186ec6543098f2b1f9546390ab5fb11f32?width=728";

  return (
    <div className="min-h-screen bg-xtago-background relative">
      <div className="max-w-[428px] mx-auto bg-xtago-background relative overflow-visible pb-[120px]">
        <header className="sticky top-0 z-40 flex items-center justify-between px-4 pt-11 pb-2 bg-xtago-background border-b border-[#0F1A22]">
          <XtagoLogo />
          <div className="flex items-center gap-4">
            <AiIcon />
            <ProfileAvatar />
            <NotificationIcon />
          </div>
        </header>

        {/* Tabs */}
        <div className="px-4 mt-6 mb-6">
          <ProductEditTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <div className="px-4">
          {activeTab === "Product Info" ? (
            <div className="w-full bg-[#1C242E] rounded-3xl p-4 space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-[#F6F6F6] text-xl font-bold">Edit Product</h1>
                <button onClick={handleClose} className="hover:opacity-80">
                  <CloseIcon />
                </button>
              </div>

              <div className="w-full aspect-square rounded-3xl overflow-hidden">
                <img
                  src={productImage}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
              <CollapsibleSection
                title="Basic Info"
                isOpen={openSections.basicInfo}
                onToggle={() => toggleSection("basicInfo")}
              >
                <FormField
                  label="Product Name"
                  value={formData.productName}
                  onChange={(value) => updateField("productName", value)}
                  placeholder="Enter product name..."
                />
                <FormField
                  label="Product Id"
                  value={formData.productId}
                  onChange={(value) => updateField("productId", value)}
                  placeholder="Enter product ID..."
                />
                <FormField
                  label="Vendor"
                  value={formData.vendor}
                  onChange={(value) => updateField("vendor", value)}
                  isDropdown
                  options={["ABC Foods", "XYZ Company", "Local Supplier"]}
                />
                <FormField
                  label="Category"
                  value={formData.category}
                  onChange={(value) => updateField("category", value)}
                  isDropdown
                  options={["Grocery", "Electronics", "Clothing", "Home & Garden"]}
                />
                <FormField
                  label="Sub-category"
                  value={formData.subCategory}
                  onChange={(value) => updateField("subCategory", value)}
                  isDropdown
                  options={["Flours", "Spices", "Cereals", "Pulses"]}
                />
              </CollapsibleSection>

              <CollapsibleSection
                title="Pricing & Discounts"
                isOpen={openSections.pricing}
                onToggle={() => toggleSection("pricing")}
              >
                <FormField
                  label="Cost Price"
                  value={formData.costPrice}
                  onChange={(value) => updateField("costPrice", value)}
                  type="number"
                  icon={<DollarIcon />}
                />
                <FormField
                  label="Retail Price"
                  value={formData.retailPrice}
                  onChange={(value) => updateField("retailPrice", value)}
                  type="number"
                  icon={<DollarIcon />}
                />
                {parseInt(formData.retailPrice) < parseInt(formData.costPrice) && (
                  <p className="text-[#FF1474] text-xs font-medium">Retail Price &lt; Cost Price</p>
                )}
                <FormField
                  label="Discounted Price"
                  value={formData.discountedPrice}
                  onChange={(value) => updateField("discountedPrice", value)}
                  type="number"
                  icon={<DollarIcon />}
                />
                <FormField
                  label="Margin"
                  value={formData.margin}
                  onChange={(value) => updateField("margin", value)}
                  type="number"
                  icon={<PercentageIcon />}
                />
                <FormField
                  label="Profit per unit"
                  value={formData.profitPerUnit}
                  onChange={(value) => updateField("profitPerUnit", value)}
                  type="number"
                  icon={<DollarIcon />}
                  disabled
                />

                <div className="border border-[#22353E] rounded-2xl p-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[#F6F6F6] text-base font-normal">Bundle Price</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#F6F6F6] text-base font-normal">Activate Bundle Pricing</span>
                    <ToggleOn />
                  </div>
                  {formData.bundlePricing && (
                    <>
                      <div className="border border-[#FE8A00] rounded-2xl p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[#F6F6F6] text-base font-normal">"Buy 2 for £250 (Save 10%)"</span>
                          <button onClick={handleClose} className="opacity-70 hover:opacity-100">
                            <CloseIcon />
                          </button>
                        </div>

                        <FormField
                          label="Discount Type"
                          value={formData.discountType}
                          onChange={(value) => updateField("discountType", value)}
                          isDropdown
                          options={["Percentage", "Fixed Amount"]}
                        />
                        <FormField
                          label="Bundle Quantity"
                          value={formData.bundleQuantity}
                          onChange={(value) => updateField("bundleQuantity", value)}
                          type="number"
                        />
                        <FormField
                          label="Percentage Off"
                          value={formData.percentageOff}
                          onChange={(value) => updateField("percentageOff", value)}
                          type="number"
                          icon={<PercentageIcon />}
                        />
                        <FormField
                          label="Final Price per unit"
                          value={formData.finalPricePerUnit}
                          onChange={(value) => updateField("finalPricePerUnit", value)}
                          type="number"
                          icon={<DollarIcon />}
                        />

                        <div className="text-center">
                          <p className="text-[#FE8A00] text-xl font-medium">You Save 10%</p>
                          <div className="mt-2 p-4 border border-[#22353E] rounded-lg">
                            <p className="text-[#F6F6F6] text-base font-medium">"Buy 5 for £450 (Save 10%)"</p>
                          </div>
                        </div>

                        <div className="flex gap-5">
                          <button
                            onClick={handleCancel}
                            className="flex-1 px-9 py-[18px] border border-[#22353E] rounded-2xl text-[#697B7B] text-base font-bold"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleSave}
                            className="flex-1 px-9 py-2.5 bg-[#FE8A00] rounded-2xl text-[#151D26] text-base font-normal"
                          >
                            Save
                          </button>
                        </div>
                      </div>

                      <button className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FE8A00] rounded-2xl text-[#151D26] text-base font-bold">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.5 15V1M1.5 8H15.5" stroke="#151D26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Add Bundle
                      </button>
                    </>
                  )}
                </div>
              </CollapsibleSection>

              <CollapsibleSection
                title="Inventory & Stock"
                isOpen={openSections.inventory}
                onToggle={() => toggleSection("inventory")}
              >
                <FormField
                  label="Reorder Level"
                  value={formData.reorderLevel}
                  onChange={(value) => updateField("reorderLevel", value)}
                  type="number"
                />
                <FormField
                  label="Stock Location"
                  value={formData.stockLocation}
                  onChange={(value) => updateField("stockLocation", value)}
                  isDropdown
                  options={["Primary", "Secondary", "Warehouse A", "Warehouse B"]}
                />
                <FormField
                  label="Quantity on hand"
                  value={formData.quantityOnHand}
                  onChange={(value) => updateField("quantityOnHand", value)}
                  type="number"
                />
                <FormField
                  label="Supplier lead time"
                  value={formData.supplierLeadTime}
                  onChange={(value) => updateField("supplierLeadTime", value)}
                  icon={<CalendarIcon />}
                />
                <FormField
                  label="Date of stock receipt"
                  value={formData.dateOfStockReceipt}
                  onChange={(value) => updateField("dateOfStockReceipt", value)}
                  icon={<CalendarIcon />}
                />
                <FormField
                  label="Last sale date"
                  value={formData.lastSaleDate}
                  onChange={(value) => updateField("lastSaleDate", value)}
                  icon={<CalendarIcon />}
                />

                <div className="bg-[rgba(255,20,116,0.10)] rounded-2xl px-3 py-1.5">
                  <p className="text-[#FF1474] text-xs font-medium text-center">
                    Critical - This Product needs to be reordered
                  </p>
                </div>
              </CollapsibleSection>

              <CollapsibleSection
                title="Additional Info"
                isOpen={openSections.additional}
                onToggle={() => toggleSection("additional")}
              >
                <div className="space-y-4">
                  <div>
                    <label className="text-[#F6F6F6] text-base font-normal block mb-2">Description</label>
                    <div className="space-y-0">
                      <div className="flex border border-[#22353E] rounded-t-lg">
                        <div className="flex p-4 border-r border-[#22353E] gap-2">
                          <button className="text-[#697B7B] hover:text-[#F6F6F6]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.01666 2.5H15.725" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M4.26666 17.5H11.975" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M11.875 2.5L8.125 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button className="text-[#697B7B] hover:text-[#F6F6F6]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.06665 3.75001C4.06665 2.83334 4.81665 2.08334 5.73332 2.08334H9.99998C12.1833 2.08334 13.9583 3.85834 13.9583 6.04168C13.9583 8.22501 12.1833 10 9.99998 10H4.06665V3.75001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M4.06665 10H11.9833C14.1667 10 15.9416 11.775 15.9416 13.9583C15.9416 16.1417 14.1667 17.9167 11.9833 17.9167H5.73332C4.81665 17.9167 4.06665 17.1667 4.06665 16.25V10V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button className="text-[#697B7B] hover:text-[#F6F6F6]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.22498 5.975V4.45834C2.22498 3.5 2.99998 2.73334 3.94998 2.73334H16.05C17.0083 2.73334 17.775 3.50834 17.775 4.45834V5.975" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M10 17.2667V3.42499" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M6.71667 17.2667H13.2833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button className="text-[#697B7B] hover:text-[#F6F6F6]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.16669 17.5H15.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M4.16669 2.5V8.33333C4.16669 11.5583 6.77502 14.1667 10 14.1667C13.225 14.1667 15.8334 11.5583 15.8334 8.33333V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </div>
                        <div className="flex p-4 border-r border-[#22353E] gap-2">
                          <button className="text-[#697B7B] hover:text-[#F6F6F6]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 5.83334H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              <path d="M2.5 10H13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              <path d="M2.5 14.1667H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                          <button className="text-[#697B7B] hover:text-[#F6F6F6]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.16669 5.83334L15 5.83334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              <path d="M2.5 10H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              <path d="M4.16669 14.1667L15 14.1667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                          <button className="text-[#697B7B] hover:text-[#F6F6F6]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M17.5 5.83334H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              <path d="M17.5 10H6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              <path d="M17.5 14.1667H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                        </div>
                        <div className="flex p-4 gap-2">
                          <button className="text-[#697B7B] hover:text-[#F6F6F6]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 18.3333H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M2.5 1.66666H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M10 5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12.3583 6.43335L10 4.07501L7.64166 6.43335" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12.3583 13.2417L10 15.6L7.64166 13.2417" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button className="text-[#697B7B] hover:text-[#F6F6F6]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.05 2.99999L4.20835 10.2417C3.95002 10.5167 3.70002 11.0583 3.65002 11.4333L3.34169 14.1333C3.23335 15.1083 3.93335 15.775 4.90002 15.6083L7.58335 15.15C7.95835 15.0833 8.48335 14.8083 8.74168 14.525L15.5834 7.28332C16.7667 6.03332 17.3 4.60832 15.4583 2.86665C13.625 1.14165 12.2334 1.74999 11.05 2.99999Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M9.90833 4.20834C10.2667 6.50834 12.1333 8.26668 14.45 8.50001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M2.5 18.3333H17.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button className="text-[#697B7B] hover:text-[#F6F6F6]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.5 17.0833L9.72724 13.1428C9.83533 12.9516 9.93023 12.7837 10.0152 12.6352M10.0152 12.6352C10.2784 12.1748 10.4459 11.9005 10.6131 11.6947C11.9982 9.99042 14.4682 9.65374 16.2588 10.9251C16.543 11.1269 16.8591 11.4424 17.4875 12.0708M10.0152 12.6352L9.58333 12.5C8.58706 12.3007 8.08893 12.2011 7.63174 12.2108C6.40821 12.2368 5.25796 12.7994 4.48628 13.7492C4.19793 14.1041 3.97074 14.5585 3.51637 15.4673L3.42485 15.6503L3.32396 15.8208M17.4875 12.0708C17.5 11.4671 17.5 10.7825 17.5 10C17.5 6.87522 17.5 5.31283 16.7042 4.21756C16.4472 3.86383 16.1362 3.55276 15.7824 3.29576C14.6872 2.5 13.1248 2.5 10 2.5C6.87522 2.5 5.31283 2.5 4.21756 3.29576C3.86383 3.55276 3.55276 3.86383 3.29576 4.21756C2.5 5.31283 2.5 6.87522 2.5 10C2.5 13.1248 2.5 14.6872 3.29576 15.7824C3.30509 15.7953 3.31449 15.8081 3.32396 15.8208M17.4875 12.0708C17.4501 13.878 17.3007 14.9615 16.7042 15.7824C16.4472 16.1362 16.1362 16.4472 15.7824 16.7042C14.6872 17.5 13.1248 17.5 10 17.5C6.87522 17.5 5.31283 17.5 4.21756 16.7042C3.87667 16.4566 3.5754 16.1587 3.32396 15.8208M7.5 7.5C7.5 8.42047 8.24619 9.16667 9.16667 9.16667C10.0871 9.16667 10.8333 8.42047 10.8333 7.5C10.8333 6.57953 10.0871 5.83333 9.16667 5.83333C8.24619 5.83333 7.5 6.57953 7.5 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                          <button className="text-[#697B7B] hover:text-[#F6F6F6]">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.3333 9.16666V14.1667C18.3333 17.5 17.5 18.3333 14.1666 18.3333H5.83329C2.49996 18.3333 1.66663 17.5 1.66663 14.1667V5.83332C1.66663 2.49999 2.49996 1.66666 5.83329 1.66666H7.08329C8.33329 1.66666 8.60829 2.03332 9.08329 2.66666L10.3333 4.33332C10.65 4.74999 10.8333 4.99999 11.6666 4.99999H14.1666C17.5 4.99999 18.3333 5.83332 18.3333 9.16666Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <textarea
                        value={formData.description}
                        onChange={(e) => updateField("description", e.target.value)}
                        placeholder="Enter description..."
                        className="w-full h-[134px] p-4 border border-[#22353E] rounded-b-lg bg-transparent text-[#F6F6F6] placeholder:text-[#697B7B] resize-none focus:outline-none focus:border-[#FE8A00]"
                      />
                    </div>
                  </div>

                  <FormField
                    label="Notes"
                    value={formData.notes}
                    onChange={(value) => updateField("notes", value)}
                    placeholder="Enter here"
                  />

                  <FormField
                    label="Tags (Optional)"
                    value={formData.tags}
                    onChange={(value) => updateField("tags", value)}
                    placeholder="Add here"
                  />

                  <div className="flex items-center justify-between">
                    <span className="text-white text-base font-normal">Status</span>
                    <ToggleOn />
                  </div>
                </div>
              </CollapsibleSection>

                <div className="flex gap-4">
                  <button
                    onClick={handleCancel}
                    className="flex-1 px-9 py-[18px] border border-[#22353E] rounded-2xl text-[#697B7B] text-base font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex-1 px-9 py-[18px] bg-[#FE8A00] rounded-2xl text-[#151D26] text-base font-bold"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full bg-[#1C242E] rounded-3xl p-4">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-[#F6F6F6] text-xl font-bold">Batch Information</h1>
                <button onClick={handleClose} className="hover:opacity-80">
                  <CloseIcon />
                </button>
              </div>
              <BatchInfoPage />
            </div>
          )}
        </div>
      </div>
      <StickyNavigation />
    </div>
  );
}
