
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AIConsulting from "./pages/AIConsulting";
import AILearning from "./pages/AILearning";
import EnterpriseAI from "./pages/EnterpriseAI";
import CreativeTechnology from "./pages/CreativeTechnology";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-consulting" element={<AIConsulting />} />
          <Route path="/ai-learning" element={<AILearning />} />
          <Route path="/enterprise-ai" element={<EnterpriseAI />} />
          <Route path="/creative-technology" element={<CreativeTechnology />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
