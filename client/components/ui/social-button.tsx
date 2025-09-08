import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const SocialButton = forwardRef<HTMLButtonElement, SocialButtonProps>(
  ({ className, icon, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "flex w-full items-center justify-center gap-3 rounded-[20px] border border-xtago-surface bg-transparent px-6 py-4 text-sm font-bold text-xtago-text transition-colors hover:bg-xtago-surface/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-xtago-primary focus-visible:ring-offset-2 focus-visible:ring-offset-xtago-background",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="flex h-6 w-6 items-center justify-center">
          {icon}
        </div>
        {children}
      </button>
    );
  }
);

SocialButton.displayName = "SocialButton";

export { SocialButton };
