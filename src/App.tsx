import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Story from "./pages/Story";
import ShiftCoin from "./pages/ShiftCoin";
import Investors from "./pages/Investors";
import LTSANP from "./pages/LTSANP";
import LTSocial from "./pages/LTSocial";
import MiracleMining from "./pages/MiracleMining";
import SocialUniverse from "./pages/SocialUniverse";
import LTSUMN from "./pages/LTSUMN";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/story" element={<Story />} />
          <Route path="/shift-coin" element={<ShiftCoin />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/ltsanp" element={<LTSANP />} />
          <Route path="/ltsocial" element={<LTSocial />} />
          <Route path="/miraclemining" element={<MiracleMining />} />
          <Route path="/socialuniverse" element={<SocialUniverse />} />
          <Route path="/ltsumn" element={<LTSUMN />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
