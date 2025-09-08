import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface XtagoButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "sm" | "lg";
}

const XtagoButton = forwardRef<HTMLButtonElement, XtagoButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          "inline-flex items-center justify-center gap-2 rounded-2xl font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          // Size variants
          {
            "px-9 py-[18px] text-base": size === "default",
            "px-6 py-3 text-sm": size === "sm", 
            "px-12 py-5 text-lg": size === "lg",
          },
          // Color variants
          {
            "bg-xtago-primary text-xtago-background hover:bg-xtago-primary/90 focus-visible:ring-xtago-primary": variant === "primary",
            "border border-xtago-surface text-xtago-muted hover:bg-xtago-surface/10 focus-visible:ring-xtago-surface": variant === "secondary",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

XtagoButton.displayName = "XtagoButton";

export { XtagoButton };
