"use client";
import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";
import OfflinePage from "./pages/Offlinepage";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // System Status Check
    if (!navigator.onLine && location.pathname !== "/offline") {
      navigate("/offline");
    }

    const handleOnline = () => navigate("/");
    const handleOffline = () => navigate("/offline");

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [navigate, location.pathname]);

  return (
    <div className="w-full min-h-screen bg-[#0B1120] text-neutral-300 font-bodyFont selection:bg-[#00D1FF]/30 selection:text-[#00D1FF]">
      <ScrollToTop />
      <Navbar />

      <main className="relative z-10">
        {/* max-w-screen-2xl for better ultrawide support */}
        <div className="max-w-screen-2xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/offline" element={<OfflinePage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />
      <FooterBottom />

      {/* Global Visual Identity: Cyber Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00D1FF]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#00D1FF]/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}

export default App;