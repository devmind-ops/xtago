import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthCard, AuthCardHeader } from "@/components/AuthCard";
import { XtagoButton } from "@/components/ui/xtago-button";
import { XtagoInput } from "@/components/ui/xtago-input";
import { SocialButton } from "@/components/ui/social-button";
import { Divider } from "@/components/ui/divider";
import { UserIcon } from "@/components/icons/UserIcon";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { PasswordIcon } from "@/components/icons/PasswordIcon";
import { EyeIcon } from "@/components/icons/EyeIcon";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";

export default function CreateAccount() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password || !agreeToTerms) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1200));
    setIsLoading(false);
    
    // Navigate to email verification
    navigate("/check-email");
  };

  const handleGoogleSignUp = () => {
    alert("Google Sign Up - Would integrate with Google OAuth");
  };

  const handleFacebookSignUp = () => {
    alert("Facebook Sign Up - Would integrate with Facebook OAuth");
  };

  return (
    <AuthCard>
      <div className="space-y-8">
        {/* Header */}
        <AuthCardHeader
          title="Create Your Account"
          description=""
        />

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name Input */}
          <XtagoInput
            type="text"
            placeholder="Enter Your Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            icon={<UserIcon />}
            required
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

          {/* Terms Checkbox */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="checkbox"
                id="terms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="h-4 w-4 rounded border border-white bg-transparent checked:bg-xtago-primary checked:border-xtago-primary focus:ring-2 focus:ring-xtago-primary focus:ring-offset-2 focus:ring-offset-xtago-background"
                required
              />
            </div>
            <label 
              htmlFor="terms" 
              className="text-base text-xtago-text cursor-pointer select-none"
            >
              I agree to all Term, Privacy Policy and Fees
            </label>
          </div>

          {/* Sign Up Button */}
          <XtagoButton
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isLoading || !agreeToTerms}
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </XtagoButton>
        </form>

        {/* Divider */}
        <Divider text="Or with Sign In" />

        {/* Social Login Buttons */}
        <div className="space-y-4">
          <SocialButton
            icon={<GoogleIcon />}
            onClick={handleGoogleSignUp}
          >
            Sign Up using Google
          </SocialButton>

          <SocialButton
            icon={<FacebookIcon />}
            onClick={handleFacebookSignUp}
          >
            Continue with Facebook
          </SocialButton>
        </div>
      </div>
    </AuthCard>
  );
}
