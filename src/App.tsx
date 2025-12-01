import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import BookingPage from "./pages/BookingPage";
import Contacts from "./pages/Contacts";
import StudyAbroad from "./pages/StudyAbroad";
import StudyCountryDetails from "./pages/StudyCountryDetails";
import StudyApply from "./pages/StudyApply";
import StudyVisa from "./pages/StudyVisa";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/destinations/:id" element={<DestinationDetails />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/contacts" element={<Contacts />} />

              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Study Abroad Routes */}
              <Route path="/study-abroad" element={<StudyAbroad />} />
              <Route path="/study-abroad/apply" element={<StudyApply />} />
              <Route path="/study-abroad/visa" element={<StudyVisa />} />
              <Route path="/study-abroad/:countryId" element={<StudyCountryDetails />} />
            </Routes>
            <WhatsAppButton />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
