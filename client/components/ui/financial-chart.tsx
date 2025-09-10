interface DataPoint {
  month: string;
  revenue: number;
  cost: number;
  profit: number;
  refund: number;
}

const chartData: DataPoint[] = [
  { month: "JAN", revenue: 8, cost: 6, profit: 5, refund: 2 },
  { month: "FEB", revenue: 12, cost: 8, profit: 7, refund: 3 },
  { month: "MAR", revenue: 22, cost: 16, profit: 18, refund: 4 },
  { month: "APR", revenue: 18, cost: 12, profit: 10, refund: 5 },
  { month: "MAY", revenue: 20, cost: 14, profit: 12, refund: 6 },
  { month: "JUN", revenue: 16, cost: 10, profit: 8, refund: 7 },
  { month: "JUL", revenue: 24, cost: 18, profit: 20, refund: 6 },
];

const CHART_WIDTH = 320;
const CHART_HEIGHT = 200;
const PADDING = 40;

function createPath(data: number[], color: string) {
  const maxValue = 25; // Max scale to match Figma
  const stepX = (CHART_WIDTH - PADDING * 2) / (data.length - 1);
  
  let path = "";
  data.forEach((value, index) => {
    const x = PADDING + index * stepX;
    const y = CHART_HEIGHT - PADDING - ((value / maxValue) * (CHART_HEIGHT - PADDING * 2));
    
    if (index === 0) {
      path += `M ${x} ${y}`;
    } else {
      path += ` L ${x} ${y}`;
    }
  });
  
  return (
    <g>
      <path
        d={path}
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Data points */}
      {data.map((value, index) => {
        const x = PADDING + index * stepX;
        const y = CHART_HEIGHT - PADDING - ((value / maxValue) * (CHART_HEIGHT - PADDING * 2));
        return (
          <circle
            key={index}
            cx={x}
            cy={y}
            r="3"
            fill={color}
            stroke="white"
            strokeWidth="1"
          />
        );
      })}
    </g>
  );
}

export function FinancialChart() {
  const months = chartData.map(d => d.month);
  const yAxisLabels = ["5k", "10k", "15k", "20k", "25k"];
  
  return (
    <div className="w-full">
      <div className="relative bg-gradient-to-br from-blue-500/5 to-transparent rounded-xl p-4 border border-xtago-surface/30">
        <svg width="100%" height="240" viewBox={`0 0 ${CHART_WIDTH} 240`} className="overflow-visible">
          {/* Grid lines */}
          {yAxisLabels.map((_, index) => {
            const y = CHART_HEIGHT - PADDING - (index * (CHART_HEIGHT - PADDING * 2) / (yAxisLabels.length - 1));
            return (
              <line
                key={index}
                x1={PADDING}
                y1={y}
                x2={CHART_WIDTH - PADDING}
                y2={y}
                stroke="#374151"
                strokeWidth="0.5"
                opacity="0.2"
              />
            );
          })}
          
          {/* Y-axis labels */}
          {yAxisLabels.map((label, index) => {
            const y = CHART_HEIGHT - PADDING - (index * (CHART_HEIGHT - PADDING * 2) / (yAxisLabels.length - 1));
            return (
              <text
                key={index}
                x={PADDING - 10}
                y={y + 4}
                textAnchor="end"
                className="fill-xtago-muted text-xs font-medium"
              >
                {label}
              </text>
            );
          })}
          
          {/* Chart lines with data points */}
          {createPath(chartData.map(d => d.revenue), "#F59E0B")} {/* Orange for Revenue */}
          {createPath(chartData.map(d => d.cost), "#10B981")} {/* Green for Cost */}
          {createPath(chartData.map(d => d.profit), "#EF4444")} {/* Red for Profit */}
          {createPath(chartData.map(d => d.refund), "#3B82F6")} {/* Blue for Refund */}
          
          {/* X-axis labels */}
          {months.map((month, index) => {
            const x = PADDING + index * ((CHART_WIDTH - PADDING * 2) / (months.length - 1));
            return (
              <text
                key={index}
                x={x}
                y={CHART_HEIGHT + 20}
                textAnchor="middle"
                className="fill-xtago-muted text-xs font-medium"
              >
                {month}
              </text>
            );
          })}
        </svg>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-orange-500"></div>
          <span className="text-sm text-xtago-text font-medium">Revenue</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="text-sm text-xtago-text font-medium">Cost</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <span className="text-sm text-xtago-text font-medium">Profit</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
          <span className="text-sm text-xtago-text font-medium">Refund</span>
        </div>
      </div>
    </div>
  );
}
