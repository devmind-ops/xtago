import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthCard, AuthCardHeader } from "@/components/AuthCard";
import { XtagoButton } from "@/components/ui/xtago-button";

// Logout icon component
function LogoutIcon() {
  return (
    <div className="flex items-center justify-center w-[120px] h-[120px] mx-auto">
      <div className="relative">
        {/* Background circle */}
        <div className="absolute inset-0 rounded-full bg-xtago-primary/10" />
        {/* Icon */}
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          <path 
            d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" 
            stroke="#FE8A00" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M16 17L21 12L16 7" 
            stroke="#FE8A00" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M21 12H9" 
            stroke="#FE8A00" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function Logout() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsLoggingOut(true);
    
    // Simulate logout API call (clear tokens, session, etc.)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Clear any stored authentication data
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
    
    setIsLoggingOut(false);
    
    // Redirect to sign-in page
    navigate("/sign-in");
  };

  const handleCancel = () => {
    // Go back to dashboard
    navigate("/dashboard");
  };

  return (
    <AuthCard>
      <div className="space-y-8">
        {/* Header */}
        <AuthCardHeader
          title="Logout"
          description="Are you sure you want to logout? You will need to sign in again to access your account."
        />

        {/* Logout Icon */}
        <div className="flex justify-center">
          <LogoutIcon />
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          {/* Logout Button */}
          <XtagoButton
            type="button"
            variant="primary"
            className="w-full"
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            {isLoggingOut ? "Logging out..." : "Yes, Logout"}
          </XtagoButton>

          {/* Cancel Button */}
          <XtagoButton
            type="button"
            variant="secondary"
            className="w-full"
            onClick={handleCancel}
            disabled={isLoggingOut}
          >
            Cancel
          </XtagoButton>
        </div>
      </div>
    </AuthCard>
  );
}

