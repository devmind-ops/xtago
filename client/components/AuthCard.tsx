import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { XtagoLogo } from "./XtagoLogo";

interface AuthCardProps {
  children: ReactNode;
  className?: string;
}

export function AuthCard({ children, className }: AuthCardProps) {
  return (
    <div className="min-h-screen bg-xtago-background flex items-center justify-center p-4">
      <div 
        className={cn(
          "w-full max-w-[397px] rounded-xl p-3",
          "bg-gradient-to-br from-blue-500/30 via-blue-600/10 to-transparent",
          className
        )}
      >
        <div className="flex flex-col items-center justify-center space-y-8 p-8">
          {/* Logo */}
          <XtagoLogo />
          
          {/* Content */}
          <div className="w-full max-w-[364px] space-y-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

interface AuthCardHeaderProps {
  title: string;
  description: string;
}

export function AuthCardHeader({ title, description }: AuthCardHeaderProps) {
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-xl font-bold text-xtago-text">
        {title}
      </h2>
      <p className="text-base text-xtago-text max-w-[325px] mx-auto leading-normal">
        {description}
      </p>
    </div>
  );
}

interface AuthCardFooterProps {
  children: ReactNode;
}

export function AuthCardFooter({ children }: AuthCardFooterProps) {
  return (
    <div className="flex items-center justify-center gap-6 text-base">
      {children}
    </div>
  );
}
