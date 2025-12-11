import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Accounting from "./pages/Accounting";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import CheckEmail from "./pages/CheckEmail";
import VerifyCode from "./pages/VerifyCode";
import ResetPassword from "./pages/ResetPassword";
import AccountCreated from "./pages/AccountCreated";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import Products from "./pages/Products";
import EditProductPage from "./pages/EditProductPage";
import AddProductPage from "./pages/AddProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Refunds from "./pages/Refunds";
import EditRefund from "./pages/EditRefund";
import HistoryInfo from "./pages/HistoryInfo";
import Logout from "./pages/Logout";
import UploadFile from "./pages/UploadFile";
import { PWAInstallPrompt } from "./components/PWAInstallPrompt";
import { PWAUpdatePrompt } from "./components/PWAUpdatePrompt";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PWAInstallPrompt />
        <PWAUpdatePrompt />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProductPage />} />
          <Route path="/products/view/:productId" element={<ProductDetailPage />} />
          <Route path="/products/edit/:productId" element={<EditProductPage />} />
          <Route path="/historyinfo" element={<HistoryInfo />} />
          <Route path="/info" element={<Dashboard />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="/refunds/edit/:refundId" element={<EditRefund />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/account-created" element={<AccountCreated />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/upload" element={<UploadFile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
