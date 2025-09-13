import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { XtagoLogo } from "@/components/XtagoLogo";
import { StickyNavigation } from "@/components/StickyNavigation";

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

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 16.5L15 15" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function QrScanIcon() {
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

function ChevronDownIcon() {
  return (
    <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.7929 -3.43947e-07C11.2383 -3.05004e-07 11.4614 0.538571 11.1464 0.853553L6.35355 5.64645C6.15829 5.84171 5.84171 5.84171 5.64645 5.64645L0.853554 0.853552C0.538571 0.53857 0.761654 -1.22091e-06 1.20711 -1.18196e-06L10.7929 -3.43947e-07Z" fill="#697B7B"/>
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

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66675 1.66675V4.16675" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3333 1.66675V4.16675" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.91675 7.57495H17.0834" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.5 7.08341V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08341C2.5 4.58341 3.75 2.91675 6.66667 2.91675H13.3333C16.25 2.91675 17.5 4.58341 17.5 7.08341Z" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.0788 11.4167H13.0863" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.0788 13.9167H13.0863" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.99632 11.4167H10.0038" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.99632 13.9167H10.0038" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.91185 11.4167H6.91933" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.91185 13.9167H6.91933" stroke="#697B7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.22656 11.9415C7.22656 13.0165 8.05156 13.8831 9.07656 13.8831H11.1682C12.0599 13.8831 12.7849 13.1248 12.7849 12.1915C12.7849 11.1748 12.3432 10.8165 11.6849 10.5831L8.32656 9.41645C7.66823 9.18312 7.22656 8.82479 7.22656 7.80812C7.22656 6.87479 7.95156 6.11646 8.84323 6.11646H10.9349C11.9599 6.11646 12.7849 6.98312 12.7849 8.05812" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 5V15" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

interface CollapsibleSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function CollapsibleSection({ title, isOpen, onToggle, children }: CollapsibleSectionProps) {
  return (
    <div className="w-full bg-[#1C242E] rounded-3xl border border-[#22353E] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 hover:bg-[#22353E] transition-colors"
      >
        <h3 className="text-[#F6F6F6] text-base font-bold font-['Space Grotesk']">{title}</h3>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="border-t border-[#22353E] pt-4">
            {children}
          </div>
        </div>
      )}
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
}

function FormField({ label, value, onChange, placeholder, icon, isDropdown, options }: FormFieldProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (isDropdown && options) {
    return (
      <div className="flex flex-col gap-2">
        <label className="text-[#F6F6F6] text-base font-normal font-['Space Grotesk']">{label}</label>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-[18px] rounded-[20px] border border-[#22353E] bg-transparent text-left"
          >
            <span className="text-[#697B7B] text-base font-normal font-['Space Grotesk']">
              {value || placeholder}
            </span>
            <ChevronDownIcon />
          </button>
          
          {isOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
              <div className="absolute top-full left-0 right-0 z-20 mt-1 bg-[#1C242E] border border-[#22353E] rounded-2xl overflow-hidden shadow-lg">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      onChange(option);
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left text-[#F6F6F6] hover:bg-[#22353E] transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#F6F6F6] text-base font-normal font-['Space Grotesk']">{label}</label>
      <div className="flex items-center px-4 py-[18px] rounded-[20px] border border-[#22353E] bg-transparent">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-[#F6F6F6] text-base font-normal font-['Space Grotesk'] outline-none placeholder:text-[#697B7B]"
        />
        {icon && <div className="ml-2">{icon}</div>}
      </div>
    </div>
  );
}

export default function EditRefund() {
  const navigate = useNavigate();

  // Section toggle states
  const [sections, setSections] = useState({
    productInfo: true,
    refundDetails: false,
    vendorInfo: false,
    customerInfo: false,
    descriptionEvidence: false
  });

  // Image/QR code toggle state
  const [showQRCode, setShowQRCode] = useState(false);

  // Form data
  const [formData, setFormData] = useState({
    productName: "Enter Brands Name",
    batchId: "432",
    expiryDate: "22-04-2025",
    originalPrice: "22000",
    refundAmount: "22000",
    stockLocation: "Primary",
    refundReason: "Damaged",
    refundType: "Refund",
    refundMode: "UPI",
    refundDate: "22-04-2025",
    refundStatus: "Success",
    vendor: "ABC Foods",
    amountRefunded: "Full",
    customerName: "",
    customerAddress: "",
    phoneNumber: "+44",
    description: "New Barcode Scanner"
  });

  const toggleSection = (section: keyof typeof sections) => {
    setSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCancel = () => {
    navigate('/refunds');
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log('Saving refund data:', formData);
    navigate('/refunds');
  };

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

        {/* Content */}
        <div className="flex flex-col items-start gap-6 px-4 mt-6">
          {/* Title and Controls */}
          <div className="flex w-full justify-between items-center">
            <h1 className="text-[#F6F6F6] text-xl font-bold font-['Space Grotesk']">Edit Refund</h1>
            <div className="flex items-center gap-2">
              {/* Search Button */}
              <button className="flex items-center justify-center w-12 h-12 bg-[#1C242E] rounded-2xl">
                <SearchIcon />
              </button>
              {/* QR Scan Button */}
              <button
                onClick={() => setShowQRCode(!showQRCode)}
                className="flex items-center justify-center w-12 h-12 bg-[#1C242E] rounded-2xl hover:bg-[#22353E] transition-colors"
              >
                <QrScanIcon />
              </button>
              {/* Filter Button */}
              <button className="flex items-center justify-center w-12 h-12 bg-[#1C242E] rounded-2xl">
                <FilterIcon />
              </button>
            </div>
          </div>

          {/* Product Image / QR Code */}
          <div className="flex justify-center w-full">
            {showQRCode ? (
              <svg
                width="208"
                height="208"
                viewBox="0 0 208 208"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <g clipPath="url(#clip0_445_4024)">
                  <path d="M34.6667 34.6667H86.6667V86.6667H34.6667V34.6667ZM173.333 34.6667V86.6667H121.333V34.6667H173.333ZM121.333 130H138.667V112.667H121.333V95.3333H138.667V112.667H156V95.3333H173.333V112.667H156V130H173.333V156H156V173.333H138.667V156H112.667V173.333H95.3333V138.667H121.333V130ZM138.667 130V156H156V130H138.667ZM34.6667 173.333V121.333H86.6667V173.333H34.6667ZM52 52V69.3333H69.3333V52H52ZM138.667 52V69.3333H156V52H138.667ZM52 138.667V156H69.3333V138.667H52ZM34.6667 95.3333H52V112.667H34.6667V95.3333ZM78 95.3333H112.667V130H95.3333V112.667H78V95.3333ZM95.3333 52H112.667V86.6667H95.3333V52ZM17.3333 17.3333V52H0V17.3333C0 12.7362 1.82619 8.32745 5.07682 5.07682C8.32745 1.82619 12.7362 0 17.3333 0L52 0V17.3333H17.3333ZM190.667 0C195.264 0 199.673 1.82619 202.923 5.07682C206.174 8.32745 208 12.7362 208 17.3333V52H190.667V17.3333H156V0H190.667ZM17.3333 156V190.667H52V208H17.3333C12.7362 208 8.32745 206.174 5.07682 202.923C1.82619 199.673 0 195.264 0 190.667V156H17.3333ZM190.667 190.667V156H208V190.667C208 195.264 206.174 199.673 202.923 202.923C199.673 206.174 195.264 208 190.667 208H156V190.667H190.667Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_445_4024">
                    <rect width="208" height="208" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4470ab7fd3ea359d51624ea975bd9f362a5d0510?width=416"
                alt="Product Image"
                className="w-52 h-60 flex-shrink-0 rounded-3xl object-cover"
              />
            )}
          </div>

          {/* Form Sections */}
          <div className="flex flex-col gap-4 w-full">
            {/* Product Info Section */}
            <CollapsibleSection
              title="Product Info"
              isOpen={sections.productInfo}
              onToggle={() => toggleSection('productInfo')}
            >
              <div className="flex flex-col gap-4">
                <FormField
                  label="Product Name"
                  value={formData.productName}
                  onChange={(value) => updateFormData('productName', value)}
                  placeholder="Enter Brands Name"
                />
                <FormField
                  label="Batch Id"
                  value={formData.batchId}
                  onChange={(value) => updateFormData('batchId', value)}
                  placeholder="432"
                />
                <FormField
                  label="Expiry Date"
                  value={formData.expiryDate}
                  onChange={(value) => updateFormData('expiryDate', value)}
                  placeholder="22-04-2025"
                  icon={<CalendarIcon />}
                />
                <FormField
                  label="Original Price"
                  value={formData.originalPrice}
                  onChange={(value) => updateFormData('originalPrice', value)}
                  placeholder="22000"
                  icon={<DollarIcon />}
                />
                <FormField
                  label="Refund Amount"
                  value={formData.refundAmount}
                  onChange={(value) => updateFormData('refundAmount', value)}
                  placeholder="22000"
                  icon={<DollarIcon />}
                />
              </div>
            </CollapsibleSection>

            {/* Refund Details Section */}
            <CollapsibleSection
              title="Refund Details"
              isOpen={sections.refundDetails}
              onToggle={() => toggleSection('refundDetails')}
            >
              <div className="flex flex-col gap-4">
                <FormField
                  label="Stock Location"
                  value={formData.stockLocation}
                  onChange={(value) => updateFormData('stockLocation', value)}
                  placeholder="Primary"
                  isDropdown={true}
                  options={['Primary', 'Secondary', 'Warehouse A', 'Warehouse B']}
                />
                <FormField
                  label="Refund Reason"
                  value={formData.refundReason}
                  onChange={(value) => updateFormData('refundReason', value)}
                  placeholder="Damaged"
                  isDropdown={true}
                  options={['Damaged', 'Expired', 'Wrong Item', 'Customer Request', 'Quality Issue']}
                />
                <FormField
                  label="Refund Type"
                  value={formData.refundType}
                  onChange={(value) => updateFormData('refundType', value)}
                  placeholder="Refund"
                  isDropdown={true}
                  options={['Refund', 'Exchange', 'Store Credit']}
                />
                <FormField
                  label="Refund Mode"
                  value={formData.refundMode}
                  onChange={(value) => updateFormData('refundMode', value)}
                  placeholder="UPI"
                  isDropdown={true}
                  options={['UPI', 'Cash', 'Bank Transfer', 'Card', 'Wallet']}
                />
                <FormField
                  label="Refund Date"
                  value={formData.refundDate}
                  onChange={(value) => updateFormData('refundDate', value)}
                  placeholder="22-04-2025"
                  icon={<CalendarIcon />}
                />
                <div className="flex justify-between items-center">
                  <span className="text-[#F6F6F6] text-base font-normal font-['Space Grotesk']">Refund Status</span>
                  <div className="px-3 py-1.5 rounded-3xl border border-[#00E074]">
                    <span className="text-[#00E074] text-sm font-normal font-['Space Grotesk']">Success</span>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* Vendor Info Section */}
            <CollapsibleSection
              title="Vendor Info"
              isOpen={sections.vendorInfo}
              onToggle={() => toggleSection('vendorInfo')}
            >
              <div className="flex flex-col gap-4">
                <FormField
                  label="Vendor"
                  value={formData.vendor}
                  onChange={(value) => updateFormData('vendor', value)}
                  placeholder="ABC Foods"
                  isDropdown={true}
                  options={['ABC Foods', 'XYZ Supplies', 'Best Products', 'Quality Goods']}
                />
                <FormField
                  label="Amount Refunded"
                  value={formData.amountRefunded}
                  onChange={(value) => updateFormData('amountRefunded', value)}
                  placeholder="Full"
                  isDropdown={true}
                  options={['Full', 'Partial', 'None']}
                />
              </div>
            </CollapsibleSection>

            {/* Customer Info Section */}
            <CollapsibleSection
              title="Customer Info"
              isOpen={sections.customerInfo}
              onToggle={() => toggleSection('customerInfo')}
            >
              <div className="flex flex-col gap-4">
                <FormField
                  label="Customer Name"
                  value={formData.customerName}
                  onChange={(value) => updateFormData('customerName', value)}
                  placeholder="Enter customer name..."
                />
                <FormField
                  label="Customer Address"
                  value={formData.customerAddress}
                  onChange={(value) => updateFormData('customerAddress', value)}
                  placeholder="Enter Customer Address"
                />
                <FormField
                  label="Phone No"
                  value={formData.phoneNumber}
                  onChange={(value) => updateFormData('phoneNumber', value)}
                  placeholder="+44"
                />
              </div>
            </CollapsibleSection>

            {/* Description & Evidence Section */}
            <CollapsibleSection
              title="Description & Evidence"
              isOpen={sections.descriptionEvidence}
              onToggle={() => toggleSection('descriptionEvidence')}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-[#F6F6F6] text-base font-normal font-['Space Grotesk']">Description</label>
                  <div className="flex flex-col border border-[#22353E] rounded-lg overflow-hidden">
                    {/* Text Editor Toolbar */}
                    <div className="flex border-b border-[#22353E]">
                      <div className="flex items-center gap-2 px-2 py-3 border-r border-[#22353E]">
                        <button className="p-1 text-[#697B7B] hover:text-[#F6F6F6]">I</button>
                        <button className="p-1 text-[#697B7B] hover:text-[#F6F6F6]">B</button>
                        <button className="p-1 text-[#697B7B] hover:text-[#F6F6F6]">U</button>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-3 border-r border-[#22353E]">
                        <button className="p-1 text-[#697B7B] hover:text-[#F6F6F6]">≡</button>
                        <button className="p-1 text-[#697B7B] hover:text-[#F6F6F6]">≡</button>
                        <button className="p-1 text-[#697B7B] hover:text-[#F6F6F6]">≡</button>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-3">
                        <button className="p-1 text-[#697B7B] hover:text-[#F6F6F6]">¶</button>
                        <button className="p-1 text-[#697B7B] hover:text-[#F6F6F6]">✎</button>
                        <button className="p-1 text-[#697B7B] hover:text-[#F6F6F6]">🖼</button>
                        <button className="p-1 text-[#697B7B] hover:text-[#F6F6F6]">📁</button>
                      </div>
                    </div>
                    {/* Text Area */}
                    <textarea
                      value={formData.description}
                      onChange={(e) => updateFormData('description', e.target.value)}
                      placeholder="Enter description..."
                      className="w-full h-32 p-4 bg-transparent text-[#F6F6F6] text-base font-normal font-['Space Grotesk'] outline-none resize-none placeholder:text-[#697B7B]"
                    />
                  </div>
                </div>

                {/* Image Upload Section */}
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#F6F6F6] text-base font-normal font-['Space Grotesk']">Upload Image</span>
                    <button className="p-1 text-[#697B7B] hover:text-[#F6F6F6]">ℹ</button>
                  </div>
                  
                  <div className="flex items-center justify-center h-32 border-2 border-dashed border-[#697B7B] rounded-3xl bg-[#22353E]">
                    <div className="text-center">
                      <div className="mb-2">📷</div>
                      <div className="text-[#FE8A00] text-xs font-bold font-['Space Grotesk'] mb-1">Drag & Drop file here</div>
                      <div className="text-[#00E074] text-xs font-normal font-['Space Grotesk']">Or click to browse (4 mb max)</div>
                    </div>
                  </div>

                  {/* Image Preview Grid */}
                  <div className="flex items-center justify-center gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="relative">
                        <div className="w-16 h-16 bg-[#22353E] rounded-2xl flex items-center justify-center">
                          <span className="text-[#697B7B] text-sm">📷</span>
                        </div>
                        <button className="absolute -top-1 -right-1 w-4 h-4 bg-[#697B7B] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">×</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CollapsibleSection>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 w-full mt-6">
            <button
              onClick={handleCancel}
              className="flex-1 h-12 px-5 border border-[#22353E] rounded-2xl text-[#697B7B] text-sm font-bold font-['Space_Grotesk'] hover:bg-[#22353E] transition-colors whitespace-nowrap"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 h-12 px-5 bg-[#FE8A00] rounded-2xl text-[#151D26] text-sm font-bold font-['Space_Grotesk'] hover:bg-[#FE8A00]/90 transition-colors whitespace-nowrap"
            >
              Save & Send Receipt
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <StickyNavigation />
    </div>
  );
}
