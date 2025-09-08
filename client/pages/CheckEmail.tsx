import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthCard, AuthCardHeader, AuthCardFooter } from "@/components/AuthCard";
import { XtagoButton } from "@/components/ui/xtago-button";

export default function CheckEmail() {
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();

  const handleOpenEmail = () => {
    // In a real app, this might open the user's default email client
    // For demo purposes, we'll navigate to the verify code page
    navigate("/verify-code");
  };

  const handleResend = async () => {
    setIsResending(true);
    
    // Simulate API call to resend email
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsResending(false);
    
    // Show success message or toast
    alert("Verification code resent!");
  };

  return (
    <AuthCard>
      <div className="space-y-8">
        {/* Header */}
        <AuthCardHeader
          title="Check Your Email"
          description="We sent a verification code to your email. Please check your email"
        />

        {/* Open Email Button */}
        <XtagoButton
          type="button"
          variant="primary"
          className="w-full"
          onClick={handleOpenEmail}
        >
          Open Email
        </XtagoButton>
      </div>

      {/* Resend Footer */}
      <AuthCardFooter>
        <span className="text-xtago-text">Don't received email?</span>
        <button
          type="button"
          className="text-xtago-primary underline hover:text-xtago-primary/80 transition-colors disabled:opacity-50"
          onClick={handleResend}
          disabled={isResending}
        >
          {isResending ? "Sending..." : "Resend"}
        </button>
      </AuthCardFooter>
    </AuthCard>
  );
}
