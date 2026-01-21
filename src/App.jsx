import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";
import PhotoGallery from "./pages/gallery/PhotoGallery.jsx";
import VideoGallery from "./pages/gallery/VideoGallery.jsx";
import AudioGallery from "./pages/gallery/AudioGallery.jsx";
import Events from "./pages/gallery/Events.jsx";
import ProjectWork from "./pages/gallery/ProjectWork.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/*<ThemeProvider>*/}
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery/photo" element={<PhotoGallery />} />
          <Route path="/gallery/video" element={<VideoGallery />} />
          <Route path="/gallery/audio" element={<AudioGallery />} />
          <Route path="/gallery/events" element={<Events />} />
          <Route path="/gallery/project-work" element={<ProjectWork />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    {/*</ThemeProvider>*/}
  </QueryClientProvider>
);

export default App;
