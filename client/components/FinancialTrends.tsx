export function FinancialTrends() {
  const legends = [
    { label: "Revenue", color: "#FE8A00" },
    { label: "Cost", color: "#00E074" },
    { label: "Profit", color: "#FF1474" },
    { label: "Refund", color: "#01A9EA" }
  ];

  return (
    <div className="px-4 mb-6">
      <h3 className="text-[#F6F6F6] text-lg font-bold mb-4">Financial Trends</h3>
      
      {/* Chart Container */}
      <div className="bg-[#1A2D3A] rounded-2xl p-4 border border-[#22353E]">
        {/* Y-axis labels */}
        <div className="flex">
          <div className="flex flex-col justify-between text-[#697B7B] text-xs w-8 h-40 py-2">
            <span>25k</span>
            <span>20k</span>
            <span>15k</span>
            <span>10k</span>
            <span>5k</span>
          </div>
          
          {/* Chart Area */}
          <div className="flex-1 relative">
            {/* SVG Chart */}
            <svg width="100%" height="160" viewBox="0 0 320 160" className="overflow-visible">
              {/* Grid lines */}
              <defs>
                <pattern id="grid" width="40" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 32" fill="none" stroke="#22353E" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              
              {/* Revenue Line (Orange) */}
              <polyline
                fill="none"
                stroke="#FE8A00"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="0,140 40,120 80,100 120,80 160,60 200,70 240,50 280,40 320,30"
              />
              
              {/* Cost Line (Green) */}
              <polyline
                fill="none"
                stroke="#00E074"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="0,150 40,130 80,120 120,110 160,100 200,90 240,80 280,70 320,60"
              />
              
              {/* Profit Line (Red) */}
              <polyline
                fill="none"
                stroke="#FF1474"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="0,120 40,100 80,110 120,90 160,80 200,100 240,70 280,60 320,50"
              />
              
              {/* Refund Line (Blue) */}
              <polyline
                fill="none"
                stroke="#01A9EA"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="0,130 40,125 80,130 120,128 160,125 200,120 240,125 280,130 320,135"
              />
              
              {/* Data points */}
              {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((x, i) => (
                <g key={i}>
                  <circle cx={x} cy={140 - i * 15} r="4" fill="#FE8A00" stroke="#1A2D3A" strokeWidth="2"/>
                  <circle cx={x} cy={150 - i * 10} r="4" fill="#00E074" stroke="#1A2D3A" strokeWidth="2"/>
                  <circle cx={x} cy={120 - i * 8} r="4" fill="#FF1474" stroke="#1A2D3A" strokeWidth="2"/>
                  <circle cx={x} cy={130 - i * 2} r="4" fill="#01A9EA" stroke="#1A2D3A" strokeWidth="2"/>
                </g>
              ))}
            </svg>
          </div>
        </div>
        
        {/* X-axis labels */}
        <div className="flex justify-between text-[#697B7B] text-xs mt-2 ml-8">
          <span>JAN</span>
          <span>FEB</span>
          <span>MAR</span>
          <span>APR</span>
          <span>MAY</span>
          <span>JUN</span>
          <span>JUL</span>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center gap-4 mt-4">
          {legends.map((legend) => (
            <div key={legend.label} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: legend.color }}
              />
              <span className="text-[#F6F6F6] text-sm font-medium">{legend.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
