import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthCard, AuthCardHeader } from "@/components/AuthCard";
import { XtagoButton } from "@/components/ui/xtago-button";
import { XtagoInput } from "@/components/ui/xtago-input";

// Password icon component
function PasswordIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M5.5 10.8334V9.1667C5.5 6.4084 6.3333 4.1667 10.5 4.1667C14.6667 4.1667 15.5 6.4084 15.5 9.1667V10.8334" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M14.6667 20.8333H6.33341C3.00008 20.8333 2.16675 19.9999 2.16675 16.6666V14.9999C2.16675 11.6666 3.00008 10.8333 6.33341 10.8333H14.6667C18.0001 10.8333 18.8334 11.6666 18.8334 14.9999V16.6666C18.8334 19.9999 18.0001 20.8333 14.6667 20.8333Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M13.8303 15.8334H13.8378" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M10.4963 15.8334H10.5038" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M7.1621 15.8334H7.1696" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Eye icon component for show/hide password
function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M11.482 12.4999C11.482 14.1499 10.149 15.4833 8.499 15.4833C6.849 15.4833 5.516 14.1499 5.516 12.4999C5.516 10.8499 6.849 9.5166 8.499 9.5166C10.149 9.5166 11.482 10.8499 11.482 12.4999Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M8.5 19.3918C11.442 19.3918 14.183 17.6584 16.092 14.6584C16.842 13.4834 16.842 11.5084 16.092 10.3334C14.183 7.3334 11.442 5.6001 8.5 5.6001C5.558 5.6001 2.817 7.3334 0.908 10.3334C0.158 11.5084 0.158 13.4834 0.908 14.6584C2.817 17.6584 5.558 19.3918 8.5 19.3918Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password || !confirmPassword) return;
    
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    if (password.length < 8) {
      alert("Password must be at least 8 characters long!");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    
    // Navigate to success page
    navigate("/account-created");
  };

  return (
    <AuthCard>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Header */}
        <AuthCardHeader
          title="Create New Password"
          description="New password must be at least 8 characters, include letters and numbers, and differ from the previous one."
        />

        {/* Password Input */}
        <XtagoInput
          type={showPassword ? "text" : "password"}
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<PasswordIcon />}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="hover:text-xtago-text transition-colors"
            >
              <EyeIcon />
            </button>
          }
          required
        />

        {/* Confirm Password Input */}
        <XtagoInput
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          icon={<PasswordIcon />}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="hover:text-xtago-text transition-colors"
            >
              <EyeIcon />
            </button>
          }
          required
        />

        {/* Reset Password Button */}
        <XtagoButton
          type="submit"
          variant="primary"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? "Resetting..." : "Reset Password"}
        </XtagoButton>
      </form>
    </AuthCard>
  );
}
