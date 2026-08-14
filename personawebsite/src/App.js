import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import YuMeetCaseStudy from "./pages/caseStudies/YuMeetCaseStudy";
import SalonAICaseStudy from "./pages/caseStudies/SalonAICaseStudy";
import AutomationCaseStudy from "./pages/caseStudies/AutomationCaseStudy";

const GlobalStyles = createGlobalStyle`
  body {
    background: radial-gradient(circle at top left, rgba(45, 212, 191, 0.16), transparent 45%),
      radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.12), transparent 55%),
      var(--color-background);
    color: var(--color-text);
  }

  #root {
    isolation: isolate;
  }
`;

const AppShell = styled.div`
  position: relative;
  min-height: 100vh;
`;

const ShellColumn = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: var(--space-4) clamp(1.25rem, 3vw, 3rem) var(--space-6);
`;

const Content = styled.main`
  outline: none;
`;

const BackgroundGlow = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background:
    radial-gradient(50% 50% at 20% 10%, rgba(45, 212, 191, 0.16) 0%, rgba(45, 212, 191, 0) 100%),
    radial-gradient(60% 60% at 80% 90%, rgba(14, 165, 233, 0.12) 0%, rgba(14, 165, 233, 0) 100%),
    radial-gradient(45% 45% at 50% 40%, rgba(20, 184, 166, 0.08) 0%, rgba(20, 184, 166, 0) 100%);
`;

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    return undefined;
  }, [pathname, hash]);

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
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ShellColumn>
          <Navbar />
          <Content id="main" tabIndex={-1}>
            <ScrollManager />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio/yumeet" element={<YuMeetCaseStudy />} />
              <Route path="/portfolio/salonai" element={<SalonAICaseStudy />} />
              <Route path="/portfolio/automation" element={<AutomationCaseStudy />} />
              <Route path="/portfolio" element={<Navigate to="/#projects" replace />} />
              <Route path="/about" element={<Navigate to="/#about" replace />} />
              <Route path="/contact" element={<Navigate to="/#contact" replace />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Content>
          <Footer />
        </ShellColumn>
      </AppShell>
    </Router>
  );
}

export default App;
