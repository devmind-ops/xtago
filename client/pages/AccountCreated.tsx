import { AuthCard, AuthCardHeader } from "@/components/AuthCard";

// Success illustration component (simplified version)
function SuccessIllustration() {
  return (
    <div className="flex items-center justify-center w-[217px] h-[203px] mx-auto">
      <div className="relative">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="217" height="203" viewBox="0 0 217 203" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#22353E" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="217" height="203" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Floating dots */}
        <div className="absolute top-12 left-8 w-3 h-3 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-20 right-12 w-2 h-2 bg-white rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-4 w-2 h-2 bg-white rounded-full opacity-50"></div>
        <div className="absolute bottom-12 right-8 w-3 h-3 bg-white rounded-full opacity-60"></div>
        
        {/* Main circle with checkmark */}
        <div className="relative flex items-center justify-center">
          {/* Outer gray circle */}
          <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
            {/* Dark inner shape */}
            <div className="w-24 h-20 bg-gray-800 rounded-t-full flex items-center justify-center relative">
              {/* Green circle with checkmark */}
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center absolute -bottom-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M9 12l2 2 4-4" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccountCreated() {
  const handleContinue = () => {
    // In a real app, this would navigate to the dashboard or login
    alert("Success! This would typically navigate to the dashboard or login page.");
  };

  return (
    <AuthCard>
      <div className="space-y-8 text-center">
        {/* Success Illustration */}
        <SuccessIllustration />
        
        {/* Header */}
        <AuthCardHeader
          title="Account Created Successfully"
          description="Congratulations! You have successfully created your account"
        />
        
      </div>
    </AuthCard>
  );
}
