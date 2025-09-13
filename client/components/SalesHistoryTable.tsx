import { useState } from "react";
import { OrderDetailsPopup } from "./OrderDetailsPopup";

interface SalesHistoryTableProps {
  onFilterClick: (e: React.MouseEvent) => void;
  currentPage: number;
  itemsPerPage: number;
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 16.5L15 15" stroke="#697B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.0498 1.57495H13.9498C14.7748 1.57495 15.4498 2.24995 15.4498 3.07495V4.72495C15.4498 5.32495 15.0748 6.07495 14.6998 6.44995L11.4748 9.29995C11.0248 9.67495 10.7248 10.425 10.7248 11.025V14.25C10.7248 14.7 10.4248 15.3 10.0498 15.525L8.9998 16.2C8.02481 16.8 6.6748 16.125 6.6748 14.925V10.95C6.6748 10.425 6.3748 9.74995 6.0748 9.37495L3.2248 6.37495C2.8498 5.99995 2.5498 5.32495 2.5498 4.87495V3.14995C2.5498 2.24995 3.2248 1.57495 4.0498 1.57495Z" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.1975 1.57495L4.5 7.49995" stroke="#697B7B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 12L5.25 8.25L6.3 7.1625L8.25 9.1125V3H9.75V9.1125L11.7 7.1625L12.75 8.25L9 12ZM4.5 15C4.0875 15 3.7345 14.8533 3.441 14.5597C3.1475 14.2662 3.0005 13.913 3 13.5V11.25H4.5V13.5H13.5V11.25H15V13.5C15 13.9125 14.8533 14.2657 14.5597 14.5597C14.2662 14.8538 13.913 15.0005 13.5 15H4.5Z" fill="#697B7B"/>
    </svg>
  );
}

function SortIcon() {
  return (
    <div className="flex flex-col items-start gap-[2px]">
      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.20711 5C0.761654 5 0.538571 4.46143 0.853553 4.14645L4.64645 0.353553C4.84171 0.158291 5.15829 0.158291 5.35355 0.353553L9.14645 4.14645C9.46143 4.46143 9.23835 5 8.79289 5H1.20711Z" fill="#697B7B"/>
      </svg>
      <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.79289 0C9.23835 0 9.46143 0.538571 9.14645 0.853553L5.35355 4.64645C5.15829 4.84171 4.84171 4.84171 4.64645 4.64645L0.853553 0.853552C0.538571 0.53857 0.761655 0 1.20711 0L8.79289 0Z" fill="#697B7B"/>
      </svg>
    </div>
  );
}

interface OrderData {
  id: string;
  orderId: string;
  amount: string;
  dateTime: string;
  noOfItems: string;
  paymentMode: string;
  status: string;
}

export function SalesHistoryTable({ onFilterClick, currentPage, itemsPerPage }: SalesHistoryTableProps) {
  const [selectedOrder, setSelectedOrder] = useState<OrderData | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Sample dataset (45 rows) to demonstrate pagination
  const base: Omit<OrderData, "id"> = { orderId: '32635', amount: '$275.43', dateTime: '23 mar 2023\n12:34:56 PM', noOfItems: '50', paymentMode: 'UPI', status: 'Success' };
  const orders: OrderData[] = Array.from({ length: 45 }, (_, i) => ({
    id: String(i + 1),
    orderId: String(30000 + i),
    amount: `$${(250 + (i % 50) + 0.43).toFixed(2)}`,
    dateTime: base.dateTime,
    noOfItems: String(10 + (i % 60)),
    paymentMode: i % 3 === 0 ? 'Card' : i % 3 === 1 ? 'UPI' : 'Cash',
    status: i % 4 === 0 ? 'Failed' : 'Success',
  }));

  const handleOrderClick = (order: OrderData) => {
    setSelectedOrder(order);
    setIsDetailsOpen(true);
  };

  const start = Math.max(0, (currentPage - 1) * itemsPerPage);
  const paginatedOrders = orders.slice(start, start + itemsPerPage);

  return (
    <div className="flex flex-col gap-4">
      {/* Header with Search and Actions */}
      <div className="flex justify-between items-center w-full">
        <h2 className="text-[#F6F6F6] font-['Space_Grotesk'] text-[16px] font-bold">
          Sales History
        </h2>
        <div className="flex items-center gap-[7px]">
          {/* Search Input */}
          <div className="flex p-[15px_16px] items-center gap-[30px] rounded-2xl bg-[#1C242E]">
            <SearchIcon />
          </div>
          
          {/* Filter Button */}
          <button
            type="button"
            onClick={onFilterClick}
            className="flex w-[50px] h-12 justify-center items-center gap-2 rounded-2xl bg-[#1C242E]"
          >
            <FilterIcon />
          </button>
          
          {/* Download Button */}
          <div className="flex p-[15px_16px] items-center gap-4 rounded-2xl bg-[#1C242E]">
            <DownloadIcon />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex flex-col">
        {/* Table Header */}
        <div className="flex w-full items-center">
          <div className="flex w-20 p-4 flex-col justify-center items-center gap-2.5 flex-shrink-0 rounded-tl-[24px] border-b border-[#22353E] bg-[#1C242E]">
            <span className="text-[#C4C4C4] font-['Space_Grotesk'] text-[16px] font-normal">Order ID</span>
          </div>
          
          <div className="flex w-[182px] p-4 items-center gap-3 flex-shrink-0 border-b border-[#22353E] bg-[#1C242E]">
            <span className="text-[#C4C4C4] font-['Space_Grotesk'] text-[16px] font-normal">Amount</span>
            <SortIcon />
          </div>
          
          <div className="flex w-[134px] p-4 flex-col justify-center items-center gap-2.5 flex-shrink-0 rounded-tr-[24px] border-b border-[#22353E] bg-[#1C242E]">
            <span className="text-[#C4C4C4] font-['Space_Grotesk'] text-[16px] font-normal">Date & Time</span>
          </div>
        </div>

        {/* Table Rows */}
        {paginatedOrders.map((order, index) => (
          <div
            key={order.id}
            onClick={() => handleOrderClick(order)}
            className={`flex items-center cursor-pointer hover:bg-[#22353E] transition-colors ${
              index % 2 === 1 ? 'bg-[#1C242E]' : ''
            }`}
          >
            <div className="flex p-4 justify-center items-center gap-2.5 border-r border-b border-l border-[#22353E]">
              <span className="text-[#F6F6F6] font-['Space_Grotesk'] text-[16px] font-medium">
                {order.orderId}
              </span>
            </div>
            
            <div className="flex w-[180px] p-4 items-center gap-2.5 border-b border-[#22353E]">
              <span className="text-[#F6F6F6] font-['Space_Grotesk'] text-[16px] font-medium">
                {order.amount}
              </span>
            </div>
            
            <div className="flex w-[135px] h-[52px] p-4 justify-center items-center gap-2.5 border-r border-b border-l border-[#22353E]">
              <span className="text-[#C4C4C4] font-['Space_Grotesk'] text-[16px] font-medium whitespace-pre-line text-center">
                {order.dateTime}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Order Details Popup */}
      <OrderDetailsPopup
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        data={selectedOrder || {
          orderId: '',
          noOfItems: '',
          amount: '',
          paymentMode: '',
          dateTime: '',
          status: ''
        }}
      />
    </div>
  );
}
