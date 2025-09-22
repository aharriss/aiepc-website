import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import AIUnionDues from "./pages/AIUnionDues";
import AIMemberDashboard from "./pages/AIMemberDashboard";
import MembersPage from "./pages/MembersPage";
import CompaniesPage from "./pages/CompaniesPage";
import CampaignsPage from "./pages/CampaignsPage";
import NotFound from "./pages/NotFound";
import CheckoutPage from "./pages/CheckoutPage";
import UnionProcessPage from "./pages/UnionProcessPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import OrganizingDisclaimerPage from "./pages/OrganizingDisclaimerPage";
import LegalCenterPage from "./pages/LegalCenterPage";
const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/join" element={<AIUnionDues />} />
            <Route path="/dashboard" element={<AIMemberDashboard />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/union-process" element={<UnionProcessPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/organizing-disclaimer" element={<OrganizingDisclaimerPage />} />
            <Route path="/legal-center" element={<LegalCenterPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
