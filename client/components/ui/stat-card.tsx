import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  subtitle?: string;
  trend?: {
    value: string;
    direction: "up" | "down";
    period?: string;
  };
  variant?: "default" | "warning" | "revenue";
  className?: string;
  rightAdornment?: ReactNode;
}

export function StatCard({
  title,
  value,
  icon,
  subtitle,
  trend,
  variant = "default",
  className,
  rightAdornment,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border-2 bg-gradient-to-br from-blue-500/5 to-transparent p-4 shadow-sm",
        {
          "border-red-500/60": variant === "warning",
          "border-green-500/40": title.includes("Total Live Products") || title.includes("Total Revenue") || title.includes("Gross Margin"),
          "border-blue-500/40": title.includes("Live Stock Retail Value") || title.includes("Average Sell-Through Rate") || title.includes("Total Refund Value"),
          "border-orange-500/40": title.includes("Live Stock Cost Value"),
          "border-purple-500/40": title.includes("Total Refunded Items"),
          "border-xtago-surface/60": variant === "default" && !title.includes("Total Live Products") && !title.includes("Live Stock Retail Value") && !title.includes("Live Stock Cost Value") && !title.includes("Total Refunded Items"),
        },
        className
      )}
    >
      <div className="flex items-start gap-3">
        {icon && (
          <div className={cn(
            "flex h-8 w-8 items-center justify-center rounded-lg",
            {
              "bg-green-500/25 text-green-400": variant === "default" && title.includes("Total Live Products"),
              "bg-blue-500/25 text-blue-400": variant === "default" && title.includes("Live Stock Retail Value"),
              "bg-orange-500/25 text-orange-400": variant === "default" && title.includes("Live Stock Cost Value"),
              "bg-purple-500/25 text-purple-400": variant === "default" && title.includes("Total Refunded Items"),
              "bg-red-500/25 text-red-400": variant === "warning",
              "bg-green-500/25 text-green-400": variant === "revenue" && title.includes("Total Revenue"),
              "bg-blue-500/25 text-blue-400": variant === "revenue" && (title.includes("Average Sell-Through Rate") || title.includes("Total Refund Value")),
              "bg-green-500/25 text-green-400": variant === "revenue" && title.includes("Gross Margin"),
            }
          )}>
            {icon}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <p className="text-sm text-xtago-muted mb-1 font-medium leading-tight">{title}</p>
          <p className="text-2xl font-bold text-xtago-text mb-1 leading-tight">{value}</p>

          {subtitle && (
            <p className="text-xs text-xtago-muted leading-tight">{subtitle}</p>
          )}

          {trend && (
            <div className="flex items-center gap-2 mt-2">
              <div className={cn(
                "flex items-center gap-1 text-xs font-medium",
                {
                  "text-green-400": trend.direction === "up",
                  "text-red-400": trend.direction === "down",
                }
              )}>
                {trend.direction === "up" ? "↗" : "↘"} {trend.value}
              </div>
              {trend.period && (
                <span className="text-xs text-xtago-muted">{trend.period}</span>
              )}
            </div>
          )}
        </div>

        {rightAdornment && (
          <div className="ml-auto shrink-0">{rightAdornment}</div>
        )}
      </div>
    </div>
  );
}
