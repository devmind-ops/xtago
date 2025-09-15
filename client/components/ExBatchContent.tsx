import { TimeRangeSelector } from "@/components/TimeRangeSelector";
import { ExBatchTable } from "@/components/ExBatchTable";

export function ExBatchContent() {

  // Sample data for the table
  const batchProducts = [
    {
      id: 1,
      batchId: "1123",
      name: "1123-Aashirvad Atta with multigrains 500g",
      image: "/assets/images/product-cebcb59d.png",
      timeLeft: "02h : 40m : 02s left",
      quantity: 2
    },
    {
      id: 2,
      batchId: "1123",
      name: "1123-Aashirvad Atta with multigrains 500g",
      image: "/assets/images/product-cebcb59d.png",
      timeLeft: "02h : 40m : 02s left",
      quantity: 2
    },
    {
      id: 3,
      batchId: "1123",
      name: "1123-Aashirvad Atta with multigrains 500g",
      image: "/assets/images/product-cebcb59d.png",
      timeLeft: "02h : 40m : 02s left",
      quantity: 2
    },
    {
      id: 4,
      batchId: "1123",
      name: "1123-Aashirvad Atta with multigrains 500g",
      image: "/assets/images/product-cebcb59d.png",
      timeLeft: "02h : 40m : 02s left",
      quantity: 2
    },
    {
      id: 5,
      batchId: "1123",
      name: "1123-Aashirvad Atta with multigrains 500g",
      image: "/assets/images/product-cebcb59d.png",
      timeLeft: "02h : 40m : 02s left",
      quantity: 2
    },
    {
      id: 6,
      batchId: "1123",
      name: "Batch id : 1123 Aashirvad Atta with multigrains 500g",
      image: "/assets/images/product-cebcb59d.png",
      timeLeft: "02h : 40m : 02s left",
      quantity: 2
    },
    {
      id: 7,
      batchId: "1123",
      name: "1123-Aashirvad Atta with multigrains 500g",
      image: "/assets/images/product-cebcb59d.png",
      timeLeft: "02h : 40m : 02s left",
      quantity: 2
    },
    {
      id: 8,
      batchId: "1123",
      name: "1123-Aashirvad Atta with multigrains 500g",
      image: "/assets/images/product-cebcb59d.png",
      timeLeft: "02h : 40m : 02s left",
      quantity: 2
    }
  ];

  const handleProductSelect = (productId: number, isSelected: boolean) => {
    console.log(`Product ${productId} ${isSelected ? 'selected' : 'deselected'}`);
  };

  const handleSelectAll = (isSelected: boolean) => {
    console.log(`All products ${isSelected ? 'selected' : 'deselected'}`);
  };

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="w-full">
        <TimeRangeSelector />
      </div>

      {/* Products Table */}
      <ExBatchTable
        products={batchProducts}
        onProductSelect={handleProductSelect}
        onSelectAll={handleSelectAll}
      />
    </div>
  );
}
