import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthCard, AuthCardHeader, AuthCardFooter } from "@/components/AuthCard";
import { XtagoButton } from "@/components/ui/xtago-button";
import { XtagoInput } from "@/components/ui/xtago-input";
import { SocialButton } from "@/components/ui/social-button";
import { Divider } from "@/components/ui/divider";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { PasswordIcon } from "@/components/icons/PasswordIcon";
import { EyeIcon } from "@/components/icons/EyeIcon";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    
    // Demo flow - redirect to dashboard or success page
    navigate("/account-created");
  };

  const handleGoogleSignIn = () => {
    alert("Google Sign In - Would integrate with Google OAuth");
  };

  const handleFacebookSignIn = () => {
    alert("Facebook Sign In - Would integrate with Facebook OAuth");
  };

  return (
    <AuthCard>
      <div className="space-y-8">
        {/* Header */}
        <AuthCardHeader
          title="Hi, Welcome Back!"
          description="Sign In"
        />

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
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

          {/* Sign In Button */}
          <XtagoButton
            type="submit"
            variant="primary"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </XtagoButton>
        </form>

        {/* Divider */}
        <Divider text="Or with Sign In" />

        {/* Social Login Buttons */}
        <div className="space-y-4">
          <SocialButton
            icon={<GoogleIcon />}
            onClick={handleGoogleSignIn}
          >
            Sign Up using Google
          </SocialButton>

          <SocialButton
            icon={<FacebookIcon />}
            onClick={handleFacebookSignIn}
          >
            Continue with Facebook
          </SocialButton>
        </div>

        {/* Forgot Password */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-xtago-text hover:text-xtago-primary transition-colors text-base"
          >
            Forgot Password?
          </button>
        </div>
      </div>

      {/* Footer */}
      <AuthCardFooter>
        <span className="text-xtago-text">Don't have an account?</span>
        <button
          type="button"
          onClick={() => navigate("/create-account")}
          className="text-xtago-primary underline hover:text-xtago-primary/80 transition-colors"
        >
          Create New
        </button>
      </AuthCardFooter>
    </AuthCard>
  );
}
