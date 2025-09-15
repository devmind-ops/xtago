import { useState } from "react";
import { XtagoLogo } from "./XtagoLogo";

interface AddAccountingFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
}

export function AddAccountingForm({ isOpen, onClose, onSave }: AddAccountingFormProps) {
  const [formData, setFormData] = useState({
    categoryType: "",
    costType: "",
    price: "",
    date: "",
    description: ""
  });

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#151D26] overflow-y-auto">
      <div className="max-w-[428px] mx-auto min-h-full pb-[120px]">
        {/* Header */}
        <header className="sticky top-0 z-40 flex items-center justify-between px-4 pt-11 pb-2 bg-[#151D26] border-b border-[#0F1A22]">
          <XtagoLogo />
          <div className="flex items-center gap-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15.7758 5.7757L16.4309 3.8103H17.5693L18.2244 5.7757L20.1898 6.43083V7.56925L18.2244 8.22438L17.5693 10.1898H16.4309L15.7758 8.22438L13.8104 7.56925V6.43083L15.7758 5.7757Z" fill="#FE8A00"/>
              <path d="M18.0001 12V19H16.0001V12H18.0001Z" fill="#FE8A00"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M7.33741 6.00004H10.6628L14.0331 19H11.9669L11.1892 16H6.81094L6.03316 19H3.96704L7.33741 6.00004ZM7.32946 14H10.6707L9.11518 8.00004H8.88501L7.32946 14Z" fill="#FE8A00"/>
            </svg>
            <img 
              className="w-11 h-11 rounded-full border-2 border-[#697B7B]" 
              src="/assets/images/avatar-30c3de9c.png" 
              alt="Profile" 
            />
            <div className="flex items-center justify-center p-3 rounded-2xl border border-[#697B7B] bg-[#1C242E]">
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                <path d="M10.0167 4.42505C7.25841 4.42505 5.01674 6.66672 5.01674 9.42505V11.8334C5.01674 12.3417 4.80007 13.1167 4.54174 13.55L3.58341 15.1417C2.99174 16.125 3.40007 17.2167 4.48341 17.5834C8.07507 18.7834 11.9501 18.7834 15.5417 17.5834C16.5501 17.2501 16.9917 16.0584 16.4417 15.1417L15.4834 13.55C15.2334 13.1167 15.0167 12.3417 15.0167 11.8334V9.42505C15.0167 6.67505 12.7667 4.42505 10.0167 4.42505Z" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M11.5584 4.6667C11.3001 4.5917 11.0334 4.53337 10.7584 4.50003C9.95843 4.40003 9.19176 4.45837 8.4751 4.6667C8.71676 4.05003 9.31676 3.6167 10.0168 3.6167C10.7168 3.6167 11.3168 4.05003 11.5584 4.6667Z" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.5166 17.8833C12.5166 19.2583 11.3916 20.3833 10.0166 20.3833C9.33327 20.3833 8.69993 20.1 8.24993 19.65C7.79993 19.2 7.5166 18.5666 7.5166 17.8833" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10"/>
                <circle cx="14" cy="4" r="3.5" fill="#FF1474" stroke="#697B7B"/>
              </svg>
            </div>
          </div>
        </header>

        {/* Page Title */}
        <div className="px-4 mb-6">
          <h1 className="text-[#F6F6F6] text-xl font-bold">Add Accounting</h1>
        </div>

        {/* Form */}
        <div className="mx-4 p-4 bg-[#1C242E] rounded-3xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#F6F6F6] text-xl font-bold">Add Category</h2>
            <button onClick={onClose} className="text-[#697B7B] hover:text-[#F6F6F6]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16.0001 29.3334C23.3334 29.3334 29.3334 23.3334 29.3334 16.0001C29.3334 8.66675 23.3334 2.66675 16.0001 2.66675C8.66675 2.66675 2.66675 8.66675 2.66675 16.0001C2.66675 23.3334 8.66675 29.3334 16.0001 29.3334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.2266 19.7732L19.7732 12.2266" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.7732 19.7732L12.2266 12.2266" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            {/* Category Type */}
            <div>
              <label className="block text-[#F6F6F6] text-base font-medium mb-2">Category Type</label>
              <div className="relative">
                <select 
                  value={formData.categoryType}
                  onChange={(e) => setFormData({...formData, categoryType: e.target.value})}
                  className="w-full p-[18px] bg-transparent border border-[#22353E] rounded-[20px] text-[#697B7B] appearance-none"
                >
                  <option value="">Select</option>
                  <option value="one-time">One-Time Cost</option>
                  <option value="recurring">Recurring Costs</option>
                  <option value="utilities">Utilities</option>
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="6" viewBox="0 0 12 6" fill="none">
                  <path d="M10.7929 -1.05529e-07C11.2383 -6.65859e-08 11.4614 0.538571 11.1464 0.853553L6.35355 5.64645C6.15829 5.84171 5.84171 5.84171 5.64645 5.64645L0.853553 0.853552C0.538571 0.53857 0.761654 -9.82487e-07 1.20711 -9.43545e-07L10.7929 -1.05529e-07Z" fill="#697B7B"/>
                </svg>
              </div>
            </div>

            {/* Cost Type */}
            <div>
              <label className="block text-[#F6F6F6] text-base font-medium mb-2">Cost Type</label>
              <div className="relative">
                <select 
                  value={formData.costType}
                  onChange={(e) => setFormData({...formData, costType: e.target.value})}
                  className="w-full p-[18px] bg-transparent border border-[#22353E] rounded-[20px] text-[#697B7B] appearance-none"
                >
                  <option value="">Select</option>
                  <option value="equipment">Equipment</option>
                  <option value="license">License Fees</option>
                  <option value="supplies">Supplies</option>
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="12" height="6" viewBox="0 0 12 6" fill="none">
                  <path d="M10.7929 -1.05529e-07C11.2383 -6.65859e-08 11.4614 0.538571 11.1464 0.853553L6.35355 5.64645C6.15829 5.84171 5.84171 5.84171 5.64645 5.64645L0.853553 0.853552C0.538571 0.53857 0.761654 -9.82487e-07 1.20711 -9.43545e-07L10.7929 -1.05529e-07Z" fill="#697B7B"/>
                </svg>
              </div>
            </div>

            {/* Price */}
            <div>
              <label className="block text-[#F6F6F6] text-base font-medium mb-2">Price</label>
              <div className="relative">
                <input 
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="w-full p-[18px] bg-transparent border border-[#22353E] rounded-[20px] text-[#F6F6F6]"
                />
                <svg className="absolute right-4 top-1/2 -translate-y-1/2" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.22656 11.9415C7.22656 13.0165 8.05156 13.8831 9.07656 13.8831H11.1682C12.0599 13.8831 12.7849 13.1248 12.7849 12.1915C12.7849 11.1748 12.3432 10.8165 11.6849 10.5831L8.32656 9.41645C7.66823 9.18312 7.22656 8.82479 7.22656 7.80812C7.22656 6.87479 7.95156 6.11646 8.84323 6.11646H10.9349C11.9599 6.11646 12.7849 6.98312 12.7849 8.05812" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 5V15" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="block text-[#F6F6F6] text-base font-medium mb-2">Date</label>
              <div className="relative">
                <input 
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full p-[18px] bg-transparent border border-[#22353E] rounded-[20px] text-[#F6F6F6]"
                />
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6.66675 1.66675V4.16675" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.3333 1.66675V4.16675" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.91675 7.57495H17.0834" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 7.08341V14.1667C17.5 16.6667 16.25 18.3334 13.3333 18.3334H6.66667C3.75 18.3334 2.5 16.6667 2.5 14.1667V7.08341C2.5 4.58341 3.75 2.91675 6.66667 2.91675H13.3333C16.25 2.91675 17.5 4.58341 17.5 7.08341Z" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-[#F6F6F6] text-base font-medium mb-2">Description</label>
              <div className="border border-[#22353E] rounded-lg overflow-hidden">
                {/* Toolbar */}
                <div className="flex border-b border-[#22353E]">
                  <div className="flex items-center gap-2 px-3 py-3 border-r border-[#22353E]">
                    <button className="text-[#697B7B] hover:text-[#F6F6F6]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M8.0166 2.5H15.7249" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.2666 17.5H11.9749" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.875 2.5L8.125 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <button className="text-[#697B7B] hover:text-[#F6F6F6]">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4.06665 3.74992C4.06665 2.83325 4.81665 2.08325 5.73332 2.08325H9.99998C12.1833 2.08325 13.9583 3.85825 13.9583 6.04159C13.9583 8.22492 12.1833 9.99992 9.99998 9.99992H4.06665V3.74992Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.06665 10H11.9833C14.1667 10 15.9416 11.775 15.9416 13.9583C15.9416 16.1417 14.1667 17.9167 11.9833 17.9167H5.73332C4.81665 17.9167 4.06665 17.1667 4.06665 16.25V10V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Text Area */}
                <textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full h-32 p-4 bg-transparent text-[#F6F6F6] resize-none"
                  placeholder="Enter description..."
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button 
              onClick={onClose}
              className="flex-1 py-4 px-9 border border-[#22353E] rounded-2xl text-[#697B7B] font-bold"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="flex-1 py-4 px-9 bg-[#FE8A00] rounded-2xl text-[#151D26] font-bold"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
