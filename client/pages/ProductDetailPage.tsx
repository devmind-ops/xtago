import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

export default function ProductDetailPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    if (productId) {
      navigate(`/products/edit/${productId}`);
    } else {
      navigate(`/products`);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would save the changes
    console.log("Saving product changes for ID:", productId);
  };

  const handleBack = () => {
    navigate("/products");
  };

  // Mock product data - in real app this would come from an API
  const productData = {
    id: productId,
    name: "Aashirvad Atta with multigrains 500g",
    image: "/assets/images/product-cebcb59d.png",
    sellThroughRate: 82,
    stock: 2,
    status: "Active"
  };

  return (
    <div className="min-h-screen bg-xtago-background relative">
      <div className="max-w-[428px] mx-auto bg-xtago-background relative overflow-visible pb-[120px]">
        {/* Header - Same as other product pages */}
        <header className="sticky top-0 z-40 flex items-center justify-between px-4 pt-11 pb-2 bg-xtago-background border-b border-[#0F1A22]">
          <XtagoLogo />
          <div className="flex items-center gap-4">
            <AiIcon />
            <ProfileAvatar />
            <NotificationIcon />
          </div>
        </header>

        {/* Main Content */}
        <div className="px-4 mt-6 space-y-6">
          {/* Information Section with Edit/Save buttons */}
          <div className="flex items-center justify-between">
            <h1 className="text-white text-xl font-bold font-['Space_Grotesk']">Information</h1>
            <div className="flex items-center gap-2">
              {!isEditing ? (
                <button
                  onClick={handleEdit}
                  className="flex px-5 py-2.5 justify-center items-center gap-2 rounded-2xl border border-[#22353E]"
                >
                  <span className="text-[#697B7B] font-['Space_Grotesk'] text-base font-normal">Edit</span>
                </button>
              ) : null}
              <button
                onClick={isEditing ? handleSave : handleBack}
                className="flex px-5 py-2.5 justify-center items-center gap-2 rounded-2xl bg-[#FE8A00]"
              >
                <span className="text-[#151D26] font-['Space_Grotesk'] text-base font-bold">
                  {isEditing ? "Save" : "Back"}
                </span>
              </button>
            </div>
          </div>

          {/* Product Information Card */}
          <div className="bg-[#1C242E] rounded-3xl p-6 space-y-6">
            {/* Product Image */}
            <div className="w-full aspect-square rounded-3xl overflow-hidden">
              <img 
                src={productData.image} 
                alt={productData.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <div>
                <h2 className="text-white text-lg font-bold font-['Space_Grotesk'] mb-2">
                  {productData.name}
                </h2>
                <p className="text-[#697B7B] text-sm font-medium">
                  Product ID: {productData.id}
                </p>
              </div>

              {/* Basic Info */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[#697B7B] text-sm font-medium">Sell-Through Rate</span>
                  <span className="text-white text-sm font-medium">{productData.sellThroughRate}%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[#697B7B] text-sm font-medium">Stock</span>
                  <span className="text-white text-sm font-medium">{productData.stock} units</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[#697B7B] text-sm font-medium">Status</span>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full border ${
                    productData.status === 'Active' 
                      ? 'text-[#00E074] border-[#00E074]' 
                      : 'text-[#FF1474] border-[#FF1474]'
                  }`}>
                    {productData.status}
                  </span>
                </div>
              </div>

              {/* Additional Information Sections */}
              <div className="border-t border-[#22353E] pt-4 space-y-3">
                <h3 className="text-white text-base font-bold font-['Space_Grotesk']">Pricing Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[#697B7B] text-sm font-medium">Cost Price</span>
                    <span className="text-white text-sm font-medium">$22.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#697B7B] text-sm font-medium">Retail Price</span>
                    <span className="text-white text-sm font-medium">$25.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#697B7B] text-sm font-medium">Profit Margin</span>
                    <span className="text-white text-sm font-medium">12%</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#22353E] pt-4 space-y-3">
                <h3 className="text-white text-base font-bold font-['Space_Grotesk']">Inventory Details</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[#697B7B] text-sm font-medium">Reorder Level</span>
                    <span className="text-white text-sm font-medium">5 units</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#697B7B] text-sm font-medium">Vendor</span>
                    <span className="text-white text-sm font-medium">ABC Foods</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#697B7B] text-sm font-medium">Category</span>
                    <span className="text-white text-sm font-medium">Grocery &gt; Flours</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#22353E] pt-4 space-y-3">
                <h3 className="text-white text-base font-bold font-['Space_Grotesk']">Stock Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[#697B7B] text-sm font-medium">Stock Location</span>
                    <span className="text-white text-sm font-medium">Primary Warehouse</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#697B7B] text-sm font-medium">Last Stock Receipt</span>
                    <span className="text-white text-sm font-medium">22-04-2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#697B7B] text-sm font-medium">Last Sale Date</span>
                    <span className="text-white text-sm font-medium">20-04-2025</span>
                  </div>
                </div>
              </div>

              {/* Low Stock Warning */}
              {productData.stock <= 5 && (
                <div className="bg-[rgba(255,20,116,0.10)] rounded-2xl px-4 py-3 mt-4">
                  <p className="text-[#FF1474] text-sm font-medium text-center">
                    ⚠️ Low Stock Alert - Consider reordering soon
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky Navigation - Same as other product pages */}
      <StickyNavigation />
    </div>
  );
}
