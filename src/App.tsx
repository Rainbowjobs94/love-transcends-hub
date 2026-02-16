import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Story from "./pages/Story";
import ShiftCoin from "./pages/ShiftCoin";
import Investors from "./pages/Investors";
import LTSANP from "./pages/LTSANP";
import LTSocial from "./pages/LTSocial";
import MiracleMining from "./pages/MiracleMining";
import MiningKnowledge from "./pages/MiningKnowledge";
import SocialUniverse from "./pages/SocialUniverse";
import LTSUMN from "./pages/LTSUMN";
import Gallery from "./pages/Gallery";
import LTOpportunity from "./pages/LTOpportunity";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import BioNexusProtocol from "./pages/BioNexusProtocol";
import AdminAIHistory from "./pages/AdminAIHistory";
import AdminAIMemory from "./pages/AdminAIMemory";
import AdminContentManager from "./pages/AdminContentManager";
import UserLogin from "./pages/UserLogin";
import UserMining from "./pages/UserMining";
import GeneticChat from "./pages/GeneticChat";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AdminAuditLog from "./pages/AdminAuditLog";
import AdminSentinel from "./pages/AdminSentinel";
import Contact from "./pages/Contact";
import JohnStrongmanBio from "./pages/JohnStrongmanBio";
import RainbowStrongmanBio from "./pages/RainbowStrongmanBio";
import About from "./pages/About";
import { GuardianChatBubble } from "./components/GuardianChatBubble";
import { CosmicEffects } from "./components/CosmicEffects";


const queryClient = new QueryClient();

const AppRoutes = () => {
  const { isAdmin } = useAuth();
  return (
    <>
      <CosmicEffects />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/story" element={<Story />} />
        <Route path="/shift-coin" element={<ShiftCoin />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/ltsanp" element={<LTSANP />} />
        <Route path="/ltsocial" element={<LTSocial />} />
        <Route path="/miraclemining" element={<MiracleMining />} />
        <Route path="/mining-knowledge" element={<MiningKnowledge />} />
        <Route path="/socialuniverse" element={<SocialUniverse />} />
        <Route path="/ltsumn" element={<LTSUMN />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ltopportunity" element={<LTOpportunity />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/bionexus" element={<BioNexusProtocol />} />
        <Route path="/admin/ai-history" element={<AdminAIHistory />} />
        <Route path="/admin/ai-memory" element={<AdminAIMemory />} />
        <Route path="/admin/content" element={<AdminContentManager />} />
        <Route path="/admin/audit" element={<AdminAuditLog />} />
        <Route path="/admin/sentinel" element={<AdminSentinel />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/mining" element={<UserMining />} />
        <Route path="/genetic-ai" element={<GeneticChat />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/john-strongman" element={<JohnStrongmanBio />} />
        <Route path="/rainbow-strongman" element={<RainbowStrongmanBio />} />
        <Route path="/about" element={<About />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isAdmin && <GuardianChatBubble />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
