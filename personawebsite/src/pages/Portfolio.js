import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projectBlueprint = [
  {
    name: "yuMeet Social App",
    tagline: "Connecting York University students through realtime events and messaging.",
    summary: "Released iOS and Android apps in React Native with a microservice backend that keeps conversations, profiles, and campus events in sync.",
    responsibilities: "Owned architecture, built REST APIs, instrumented Redis + BullMQ queues, and led end-to-end delivery from design to deployment.",
    tech: ["React Native", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Docker"],
    deepDivePath: "/portfolio/yumeet",
    highlights: [
      { title: "Role", detail: "Spearheaded full-stack development while coaching a small product squad on delivery rituals." },
      { title: "Challenge", detail: "YorkU students lacked a single hub for events, messaging, and discovery across devices." },
      { title: "Impact", detail: "Beta onboarded 250+ students and pushed 70% faster event notifications after Redis caching." },
    ],
  },
  {
    name: "SalonAI",
    tagline: "AI-powered recommendations and booking for stylists and clients.",
    summary: "Fine-tuned LLaMA to deliver personalized hairstyle suggestions alongside automated scheduling embedded in a NextJS + Flask stack.",
    responsibilities: "Implemented model serving, built Redis-backed caching, secured APIs, and containerized the deployment workflow.",
    tech: ["NextJS", "Flask", "Python", "LLaMA", "Redis", "Docker"],
    deepDivePath: "/portfolio/salonai",
    highlights: [
      { title: "Role", detail: "Led ML integration, backend architecture, and deployment alongside a salon founder and designer." },
      { title: "Challenge", detail: "Blend AI recommendations with real-time booking while keeping latency and privacy tight." },
      { title: "Impact", detail: "Cut booking follow-up time by 60% and lifted consultation satisfaction scores to 4.8★." },
    ],
  },
  {
    name: "Enterprise QA Automation",
    tagline: "Accelerating regression for Johnson Controls security platforms.",
    summary: "Unified Selenium, Appium, TestNG, and Cypress suites while orchestrating Jenkins pipelines for continuous feedback across devices.",
    responsibilities: "Engineered frameworks, authored test suites, extended coverage across mobile + web, and coached teams on best practices.",
    tech: ["Selenium", "Appium", "TestNG", "Cypress", "Jenkins", "Java"],
    deepDivePath: "/portfolio/automation",
    highlights: [
      { title: "Role", detail: "Automation developer co-op embedded with global QA and product teams at Johnson Controls." },
      { title: "Challenge", detail: "Fragmented test suites and manual regression stalled firmware + web releases across devices." },
  { title: "Impact", detail: "Shrank regression from 12 hours to a few and cut flaky failures by 30% through unified frameworks." },
    ],
  },
];

const Portfolio = () => {
  return (
    <PortfolioShell>
      <Intro>
        <IntroBadge>Signature Projects</IntroBadge>
        <IntroTitle>Automation-led products with measurable impact.</IntroTitle>
        <IntroText>
          A snapshot of the platforms, AI experiences, and QA systems I’ve architected—from student social networks to
          enterprise test automation.
        </IntroText>
      </Intro>

      <ProjectGrid>
        {projectBlueprint.map((project) => (
          <ProjectCard
            key={project.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectHeader>
              <ProjectName>{project.name}</ProjectName>
              <ProjectTagline>{project.tagline}</ProjectTagline>
            </ProjectHeader>
            <ProjectSummary>{project.summary}</ProjectSummary>
            <ProjectResponsibilities>{project.responsibilities}</ProjectResponsibilities>

            <ProjectHighlights>
              {project.highlights.map((item) => (
                <HighlightRow key={`${project.name}-${item.title}`}>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </HighlightRow>
              ))}
            </ProjectHighlights>

            <TechList>
              {project.tech.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </TechList>

            <ProjectDeepDiveCTA to={project.deepDivePath}>View project deep dive →</ProjectDeepDiveCTA>
          </ProjectCard>
        ))}
      </ProjectGrid>

      <ProcessSection
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <ProcessHeading>How you bring ideas to life</ProcessHeading>
        <ProcessText>
          Every engagement follows a purposeful loop: align on outcomes, design collaboratively, automate quality, and
          iterate with feedback grounded in data.
        </ProcessText>

        <ProcessGrid>
          <ProcessCard>
            <span>01</span>
            <strong>Discover</strong>
            <p>Partner closely with stakeholders to understand real pain points, guardrails, and success metrics.</p>
          </ProcessCard>
          <ProcessCard>
            <span>02</span>
            <strong>Design</strong>
            <p>Prototype architecture, UX, and data flows early—validating with rapid feedback from users and teammates.</p>
          </ProcessCard>
          <ProcessCard>
            <span>03</span>
            <strong>Develop</strong>
            <p>Ship modular code with automated testing, observability, and CI/CD baked in from the start.</p>
          </ProcessCard>
          <ProcessCard>
            <span>04</span>
            <strong>Deliver</strong>
            <p>Measure outcomes, document learnings, and empower teams to run with confidence after handoff.</p>
          </ProcessCard>
        </ProcessGrid>
      </ProcessSection>

      <ClosingCallout>
        <ClosingText>
          Curious about the nitty-gritty details? I keep deeper case studies, architecture diagrams, and test metrics ready
          to share when we sync.
        </ClosingText>
        <ClosingActions>
          <PrimaryLink to="/contact">Connect</PrimaryLink>
          <GhostLink to="/resume">View resume highlights</GhostLink>
        </ClosingActions>
      </ClosingCallout>
    </PortfolioShell>
  );
};

export default Portfolio;

const PortfolioShell = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 5vw, 4rem);
`;

const Intro = styled.div`
  width: min(920px, 100%);
  display: grid;
  gap: 0.75rem;
`;

const IntroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  background: rgba(192, 132, 252, 0.18);
  border: 1px solid rgba(168, 85, 247, 0.26);
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(226, 232, 240, 0.9);
`;

const IntroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 2.8rem);
  line-height: 1.15;
`;

const IntroText = styled.p`
  color: rgba(226, 232, 240, 0.75);
  max-width: 720px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1.6rem, 3vw, 2.4rem);
`;

const ProjectCard = styled(motion.article)`
  position: relative;
  padding: clamp(1.6rem, 3.5vw, 2.2rem);
  border-radius: var(--radius-lg);
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(168, 85, 247, 0.22);
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 1.1rem;

  &:hover {
    border-color: rgba(192, 132, 252, 0.5);
    box-shadow: var(--shadow-glow);
  }
`;

const ProjectHeader = styled.div`
  display: grid;
  gap: 0.4rem;
`;

const ProjectName = styled.h2`
  font-size: 1.5rem;
`;

const ProjectTagline = styled.p`
  color: rgba(226, 232, 240, 0.7);
`;

const ProjectSummary = styled.p`
  color: rgba(226, 232, 240, 0.75);
  line-height: 1.6;
`;

const ProjectResponsibilities = styled.p`
  color: rgba(148, 163, 184, 0.78);
  font-size: 0.95rem;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  color: rgba(148, 163, 184, 0.92);

  li {
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    background: rgba(192, 132, 252, 0.18);
    border: 1px solid rgba(168, 85, 247, 0.3);
    font-size: 0.8rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`;

const ProjectHighlights = styled.div`
  display: grid;
  gap: 0.55rem;
`;

const HighlightRow = styled.div`
  display: grid;
  gap: 0.25rem;

  strong {
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: 0.72rem;
    color: rgba(226, 232, 240, 0.8);
  }

  span {
    color: rgba(226, 232, 240, 0.72);
    line-height: 1.5;
  }
`;

const ProjectDeepDiveCTA = styled(Link)`
  margin-top: auto;
  align-self: flex-start;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: rgba(216, 180, 254, 0.95);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: color 0.25s ease;

  &:hover {
    color: #ede9fe;
  }
`;

const ProcessSection = styled(motion.section)`
  padding: clamp(2.5rem, 6vw, 3.5rem);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(168, 85, 247, 0.22);
  background: rgba(15, 23, 42, 0.55);
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: clamp(1.5rem, 3vw, 2.2rem);
`;

const ProcessHeading = styled.h2`
  font-size: clamp(1.9rem, 4vw, 2.4rem);
`;

const ProcessText = styled.p`
  color: rgba(226, 232, 240, 0.75);
  max-width: 720px;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.2rem;
`;

const ProcessCard = styled.div`
  padding: 1.4rem 1.6rem;
  border-radius: var(--radius-md);
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(168, 85, 247, 0.2);
  display: grid;
  gap: 0.6rem;

  span {
    font-size: 0.8rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(216, 180, 254, 0.88);
  }

  strong {
    font-size: 1.1rem;
  }

  p {
    color: rgba(226, 232, 240, 0.7);
  }
`;

const ClosingCallout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: clamp(2rem, 5vw, 3rem);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(168, 85, 247, 0.24);
  background: linear-gradient(135deg, rgba(26, 10, 43, 0.9), rgba(109, 40, 217, 0.58));
  box-shadow: var(--shadow-soft);
`;

const ClosingText = styled.p`
  color: rgba(226, 232, 240, 0.75);
  max-width: 680px;
`;

const ClosingActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const PrimaryLink = styled(Link)`
  padding: 0.8rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  background: linear-gradient(135deg, #c084fc, #7c3aed);
  color: #f8fafc;
  box-shadow: var(--shadow-glow);

  &:hover {
    transform: translateY(-2px);
  }
`;

const GhostLink = styled(Link)`
  padding: 0.8rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  border: 1px solid rgba(248, 250, 252, 0.35);
  color: #f8fafc;

  &:hover {
    transform: translateY(-2px);
    background: rgba(248, 250, 252, 0.12);
  }
`;
