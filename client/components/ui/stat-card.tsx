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
}

export function StatCard({ 
  title, 
  value, 
  icon, 
  subtitle, 
  trend, 
  variant = "default", 
  className 
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-xtago-surface bg-gradient-to-br from-blue-500/10 to-transparent p-4",
        {
          "border-red-500/50": variant === "warning",
          "border-xtago-surface": variant === "default" || variant === "revenue",
        },
        className
      )}
    >
      <div className="flex items-start gap-3">
        {icon && (
          <div className={cn(
            "flex h-8 w-8 items-center justify-center rounded-lg",
            {
              "bg-green-500/20 text-green-400": variant === "default" && !title.includes("Cost") && !title.includes("Refund"),
              "bg-yellow-500/20 text-yellow-400": variant === "default" && title.includes("Cost"),
              "bg-purple-500/20 text-purple-400": variant === "default" && title.includes("Refund"),
              "bg-red-500/20 text-red-400": variant === "warning",
              "bg-blue-500/20 text-blue-400": variant === "revenue",
            }
          )}>
            {icon}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <p className="text-sm text-xtago-muted mb-1 font-medium">{title}</p>
          <p className="text-2xl font-bold text-xtago-text mb-1">{value}</p>
          
          {subtitle && (
            <p className="text-xs text-xtago-muted">{subtitle}</p>
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
      </div>
    </div>
  );
}
