import { XtagoLogo } from "@/components/XtagoLogo";

export default function AccountCreated() {
  return (
    <div className="min-h-screen bg-[#151D26] flex justify-center items-center px-4 py-[50px]">
      <div className="w-full max-w-[429px] h-[866px] flex justify-center items-center">
        {/* Main Card Container with Gradient */}
        <div 
          className="w-[397px] h-[604px] p-3 flex flex-col justify-center items-center gap-3 rounded-xl"
          style={{
            background: "linear-gradient(108deg, rgba(0, 166, 255, 0.30) -30.64%, rgba(0, 166, 255, 0.00) 104.17%)"
          }}
        >
          {/* Logo at top (click to go Dashboard) */}
          <XtagoLogo />
          
          {/* Content Container */}
          <div className="flex flex-col justify-center items-center gap-[30px] w-[364px]">
            <div className="flex flex-col items-center gap-[50px] w-[191px]">
              {/* Success Illustration */}
              <img 
                src="/assets/images/account-created-824342b9.png" 
                alt="Account Created Success"
                className="w-[217px] h-[203px]"
              />
              
              {/* Text Content */}
              <div className="flex flex-col justify-center items-center gap-[15px] self-stretch">
                {/* Title */}
                <h1 className="self-stretch text-[#F6F6F6] text-center text-[20px] font-bold leading-normal">
                  Account Created Successfully
                </h1>
                
                {/* Description */}
                <p className="w-[325px] text-[#F6F6F6] text-center text-[16px] font-normal leading-normal">
                  Congratulations! You have successfully created your account
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
