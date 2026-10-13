import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import ProcessPage from "./pages/ProcessPage";
import CareersPage from "./pages/CareersPage";
import LifeAtCompanyPage from "./pages/LifeAtCompanyPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./components/page-transition/ScrollToTop";
import PageTransition from "./components/page-transition/PageTransition";
import BackToTopButton from "./components/buttons/BackToTopButton";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function AppContent() {
  const location = useLocation();

  const isNotFound = ![
    "/",
    "/about",
    "/services",
    "/work",
    "/process",
    "/careers",
    "/life",
    "/contact",
    "/life-at-company",
    "/privacy-policy",
    "/terms"
  ].includes(location.pathname) &&
    !/^\/work\/[^/]+$/.test(location.pathname);

  return (
    <>
      <PageTransition />
      <ScrollToTop />

      {!isNotFound && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/life-at-company" element={<LifeAtCompanyPage />} />
        <Route path="/contact" element={<ContactPage />} />


        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isNotFound && <Footer />}

      {!isNotFound && <BackToTopButton />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
