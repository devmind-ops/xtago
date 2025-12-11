import { useEffect, useState } from "react";
import { XtagoButton } from "./ui/xtago-button";

export function PWAUpdatePrompt() {
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);
  const [updateServiceWorker, setUpdateServiceWorker] = useState<(() => void) | null>(null);

  useEffect(() => {
    // Listen for service worker updates
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        // Service worker updated, reload the page
        window.location.reload();
      });

      // Check for updates periodically
      const checkForUpdates = async () => {
        try {
          const registration = await navigator.serviceWorker.getRegistration();
          if (registration) {
            await registration.update();
            
            // Check if there's a waiting service worker
            if (registration.waiting) {
              setUpdateServiceWorker(() => () => {
                registration.waiting?.postMessage({ type: "SKIP_WAITING" });
              });
              setShowUpdatePrompt(true);
            }
          }
        } catch (error) {
          console.error("Error checking for updates:", error);
        }
      };

      // Check for updates on load
      checkForUpdates();

      // Check for updates every 5 minutes
      const interval = setInterval(checkForUpdates, 5 * 60 * 1000);

      return () => clearInterval(interval);
    }
  }, []);

  const handleUpdate = () => {
    if (updateServiceWorker) {
      updateServiceWorker();
      setShowUpdatePrompt(false);
      // Page will reload automatically via controllerchange event
    }
  };

  const handleDismiss = () => {
    setShowUpdatePrompt(false);
    // Don't show again for this session
    sessionStorage.setItem("pwa-update-dismissed", "true");
  };

  // Don't show if dismissed in this session
  if (!showUpdatePrompt || sessionStorage.getItem("pwa-update-dismissed") === "true") {
    return null;
  }

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-[428px] w-full px-4">
      <div className="bg-[#1C242E] border border-[#22353E] rounded-3xl p-4 shadow-2xl">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-[#00E074]/20 rounded-2xl flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#00E074]"
              >
                <path
                  d="M12 4V1M12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4ZM12 4V8M12 16V20M12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 15.1046 13.1046 16 12 16ZM12 16V12M4 12H8M16 12H20M6.34315 6.34315L8.46447 8.46447M15.5355 15.5355L17.6569 17.6569M6.34315 17.6569L8.46447 15.5355M15.5355 8.46447L17.6569 6.34315"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-[#F6F6F6] text-base font-bold font-['Space_Grotesk'] mb-1">
              Update Available
            </h3>
            <p className="text-[#697B7B] text-sm font-normal font-['Space_Grotesk'] mb-3">
              A new version of Xtago is available. Update now to get the latest features and improvements.
            </p>
            <div className="flex gap-2">
              <XtagoButton
                variant="primary"
                size="sm"
                onClick={handleUpdate}
                className="flex-1"
              >
                Update Now
              </XtagoButton>
              <XtagoButton
                variant="secondary"
                size="sm"
                onClick={handleDismiss}
                className="px-4"
              >
                Later
              </XtagoButton>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 text-[#697B7B] hover:text-[#F6F6F6] transition-colors"
            aria-label="Close"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15M5 5L15 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}


