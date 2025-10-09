import styled from "styled-components";
import { motion } from "framer-motion";
import { FaDownload, FaFileAlt, FaCheckCircle } from "react-icons/fa";

const accomplishments = [
  "Reduced flaky failures by 30% by building unified Selenium, Appium, and Cypress frameworks for Johnson Controls.",
  "Fine-tuned LLaMA to power SalonAI’s personalized recommendations with Redis-backed performance gains.",
  "Launched yuMeet to connect YorkU students through realtime messaging, events, and microservice orchestration.",
];

const Resume = () => {
  return (
    <ResumeShell>
      <Hero
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <HeroBadge>Resume Snapshot</HeroBadge>
        <HeroTitle>Software engineer pairing automation with AI-first experiences.</HeroTitle>
        <HeroText>
          Final-year York University Software Engineering student with enterprise QA co-op experience and a track record of
          shipping cross-platform apps, LLM-powered products, and dependable pipelines.
        </HeroText>

        <HeroActions>
          <DownloadButton href="/jhanif_Resume.pdf" download>
            <FaDownload /> Download resume
          </DownloadButton>
          <SecondaryButton href="https://www.linkedin.com/in/joshua-hanif" target="_blank" rel="noreferrer">
            <FaFileAlt /> View LinkedIn profile
          </SecondaryButton>
        </HeroActions>
      </Hero>

      <Highlights
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <HighlightsHeading>Quick highlights</HighlightsHeading>
        <HighlightsList>
          {accomplishments.map((item) => (
            <li key={item}>
              <FaCheckCircle /> {item}
            </li>
          ))}
        </HighlightsList>
      </Highlights>

      <SectionsGrid
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionCard>
          <h3>Experience</h3>
          <p>Johnson Controls • Software Automation Developer Co-op (2022 – 2023) — engineered end-to-end automation and CI pipelines.</p>
        </SectionCard>
        <SectionCard>
          <h3>Technical arsenal</h3>
          <p>C/C++, Java, TypeScript, Python, React, Selenium, Appium, Cypress, BullMQ, Redis, Docker, Jenkins, PostgreSQL, Firebase, Swift.</p>
        </SectionCard>
        <SectionCard>
          <h3>Beyond the job</h3>
          <p>yuMeet social platform, SalonAI, QA accelerators, peer mentorship, and ongoing deep dives into LLM tooling.</p>
        </SectionCard>
      </SectionsGrid>

      <Closing
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ClosingTitle>Prefer a tailored resume?</ClosingTitle>
        <ClosingText>
          I’m happy to tailor a version for automation engineering roles, AI-focused teams, or product organizations.
        </ClosingText>
        <ClosingButton href="mailto:hanifjoshua1@gmail.com">Request an updated copy</ClosingButton>
      </Closing>
    </ResumeShell>
  );
};

export default Resume;

const ResumeShell = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 5vw, 4rem);
`;

const Hero = styled(motion.section)`
  padding: clamp(2.4rem, 6vw, 3.5rem);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, rgba(26, 10, 43, 0.92), rgba(109, 40, 217, 0.6));
  border: 1px solid rgba(168, 85, 247, 0.24);
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 1.2rem;
  width: min(960px, 100%);
`;

const HeroBadge = styled.span`
  align-self: flex-start;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(216, 180, 254, 0.32);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 0.78rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 2.8rem);
  line-height: 1.15;
`;

const HeroText = styled.p`
  color: rgba(226, 232, 240, 0.78);
  max-width: 680px;
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  background: linear-gradient(135deg, #c084fc, #7c3aed);
  color: #f8fafc;
  box-shadow: var(--shadow-glow);

  &:hover {
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  border: 1px solid rgba(248, 250, 252, 0.35);
  color: #f8fafc;

  &:hover {
    transform: translateY(-2px);
    background: rgba(248, 250, 252, 0.12);
  }
`;

const Highlights = styled(motion.section)`
  display: grid;
  gap: 1rem;
  width: min(720px, 100%);
`;

const HighlightsHeading = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.3rem);
`;

const HighlightsList = styled.ul`
  display: grid;
  gap: 0.8rem;
  color: rgba(226, 232, 240, 0.78);

  li {
    display: flex;
    gap: 0.6rem;
    align-items: flex-start;

    svg {
      margin-top: 0.2rem;
      color: rgba(216, 180, 254, 0.9);
    }
  }
`;

const SectionsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
`;

const SectionCard = styled.div`
  padding: clamp(1.6rem, 3.5vw, 2.1rem);
  border-radius: var(--radius-lg);
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(168, 85, 247, 0.22);
  display: grid;
  gap: 0.75rem;

  h3 {
    font-size: 1.2rem;
  }

  p {
    color: rgba(226, 232, 240, 0.72);
    line-height: 1.65;
  }
`;

const Closing = styled(motion.section)`
  padding: clamp(2rem, 4.5vw, 3rem);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(168, 85, 247, 0.24);
  background: rgba(15, 23, 42, 0.55);
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 0.9rem;
  width: min(720px, 100%);
`;

const ClosingTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.3rem);
`;

const ClosingText = styled.p`
  color: rgba(226, 232, 240, 0.78);
`;

const ClosingButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  background: rgba(192, 132, 252, 0.18);
  border: 1px solid rgba(168, 85, 247, 0.3);
  color: rgba(226, 232, 240, 0.9);

  &:hover {
    transform: translateY(-2px);
    color: #ede9fe;
  }
`;