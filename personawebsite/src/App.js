import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import YuMeetCaseStudy from "./pages/caseStudies/YuMeetCaseStudy";
import SalonAICaseStudy from "./pages/caseStudies/SalonAICaseStudy";
import AutomationCaseStudy from "./pages/caseStudies/AutomationCaseStudy";

const GlobalStyles = createGlobalStyle`
  body {
    background: radial-gradient(circle at top left, rgba(168, 85, 247, 0.24), transparent 45%),
      radial-gradient(circle at bottom right, rgba(147, 51, 234, 0.2), transparent 55%),
      #0b0417;
    color: var(--color-text);
  }

  #root {
    isolation: isolate;
  }
`;

const AppShell = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Content = styled.main`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 0  clamp(1.5rem, 3vw, 3rem) 4rem;
`;

const BackgroundGlow = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(50% 50% at 20% 10%, rgba(192, 132, 252, 0.2) 0%, rgba(192, 132, 252, 0) 100%),
    radial-gradient(60% 60% at 80% 90%, rgba(168, 85, 247, 0.16) 0%, rgba(168, 85, 247, 0) 100%),
    radial-gradient(45% 45% at 50% 40%, rgba(147, 51, 234, 0.12) 0%, rgba(147, 51, 234, 0) 100%);
  filter: blur(0px);
`;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const routerBasename = process.env.PUBLIC_URL
  ? process.env.PUBLIC_URL.replace(/https?:\/\/[^/]+/, "") || "/"
  : "/";

function App() {
  return (
    <Router basename={routerBasename}>
      <GlobalStyles />
      <AppShell>
        <BackgroundGlow />
        <Navbar />
        <Content>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/yumeet" element={<YuMeetCaseStudy />} />
            <Route path="/portfolio/salonai" element={<SalonAICaseStudy />} />
            <Route path="/portfolio/automation" element={<AutomationCaseStudy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Content>
        <Footer />
      </AppShell>
    </Router>
  );
}

export default App;