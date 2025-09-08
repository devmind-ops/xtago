import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface XtagoInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const XtagoInput = forwardRef<HTMLInputElement, XtagoInputProps>(
  ({ className, icon, rightIcon, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        <div 
          className={cn(
            "flex w-full items-center gap-4 rounded-[20px] border border-xtago-surface bg-transparent px-4 py-[18px] text-base text-xtago-text placeholder:text-xtago-muted focus-within:ring-2 focus-within:ring-xtago-primary focus-within:ring-offset-2 focus-within:ring-offset-xtago-background",
            className
          )}
        >
          {icon && (
            <div className="flex h-5 w-5 items-center justify-center text-xtago-muted">
              {icon}
            </div>
          )}
          <input
            className="flex-1 bg-transparent outline-none placeholder:text-xtago-muted"
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <div className="flex h-5 w-5 items-center justify-center text-xtago-muted">
              {rightIcon}
            </div>
          )}
        </div>
      </div>
    );
  }
);

XtagoInput.displayName = "XtagoInput";

export { XtagoInput };
