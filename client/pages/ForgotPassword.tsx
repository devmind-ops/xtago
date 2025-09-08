import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthCard, AuthCardHeader, AuthCardFooter } from "@/components/AuthCard";
import { XtagoButton } from "@/components/ui/xtago-button";
import { XtagoInput } from "@/components/ui/xtago-input";

// Email icon component
function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M14.6665 17.5834H6.33317C3.83317 17.5834 2.1665 16.3334 2.1665 13.4167V7.58341C2.1665 4.66675 3.83317 3.41675 6.33317 3.41675H14.6665C17.1665 3.41675 18.8332 4.66675 18.8332 7.58341V13.4167C18.8332 16.3334 17.1665 17.5834 14.6665 17.5834Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M14.6668 8L12.0585 10.0833C11.2002 10.7667 9.79183 10.7667 8.93349 10.0833L6.3335 8" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeMiterlimit="10" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    
    // Navigate to check email page
    navigate("/check-email");
  };

  const handleBackToSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <AuthCard>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Header */}
        <AuthCardHeader
          title="Forgot Password"
          description="Enter your Email, we will send you a verification code."
        />

        {/* Email Input */}
        <XtagoInput
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<EmailIcon />}
          required
        />

        {/* Send Code Button */}
        <XtagoButton
          type="submit"
          variant="primary"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Code"}
        </XtagoButton>
      </form>

      {/* Back to Sign In */}
      <AuthCardFooter>
        <XtagoButton
          type="button"
          variant="secondary"
          className="w-full"
          onClick={handleBackToSignIn}
        >
          Back To Sign In
        </XtagoButton>
      </AuthCardFooter>
    </AuthCard>
  );
}
