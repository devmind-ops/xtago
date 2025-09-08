import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthCard, AuthCardHeader, AuthCardFooter } from "@/components/AuthCard";
import { XtagoButton } from "@/components/ui/xtago-button";
import { OtpInput } from "@/components/ui/otp-input";

export default function VerifyCode() {
  const [code, setCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();

  const handleCodeComplete = (value: string) => {
    setCode(value);
  };

  const handleVerify = async () => {
    if (code.length !== 5) return;
    
    setIsVerifying(true);
    
    // Simulate API call to verify code
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsVerifying(false);
    
    // Navigate to reset password page
    navigate("/reset-password");
  };

  const handleResend = async () => {
    setIsResending(true);
    
    // Simulate API call to resend code
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsResending(false);
    
    // Show success message
    alert("Verification code resent!");
  };

  return (
    <AuthCard>
      <div className="space-y-8">
        {/* Header */}
        <AuthCardHeader
          title="Verify Code"
          description="Enter the code we just sent you on your registered email"
        />

        {/* OTP Input */}
        <div className="flex justify-center">
          <OtpInput
            length={5}
            onComplete={handleCodeComplete}
            className="w-full max-w-[344px]"
          />
        </div>

        {/* Verify Button */}
        <XtagoButton
          type="button"
          variant="primary"
          className="w-full"
          onClick={handleVerify}
          disabled={code.length !== 5 || isVerifying}
        >
          {isVerifying ? "Verifying..." : "Verify Code"}
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
