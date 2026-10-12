import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import ProcessPage from "./pages/ProcessPage";
import CareersPage from "./pages/CareersPage";
import LifeAtCompanyPage from "./pages/LifeAtCompanyPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/page-transition/ScrollToTop";
import PageTransition from "./components/page-transition/PageTransition";
import BackToTopButton from "./components/buttons/BackToTopButton";
// import PageTransition from "./components/page-transition/PageTransition";

export default function App() {
  return (
    <BrowserRouter>
      <PageTransition/>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/life" element={<LifeAtCompanyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <BackToTopButton/>
    </BrowserRouter>
  );
}