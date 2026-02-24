import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDatabase,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPostgresql, SiFirebase, SiCplusplus, SiSelenium, SiAppium, SiTestinglibrary } from "react-icons/si";

const spotlightHighlights = [
  {
    title: "Intelligent automation",
    description: "Ship resilient test infrastructure across web, Android, and iOS.",
    detail: "Designed Selenium, Appium, and Cypress suites that cut flaky failures by 30% at Johnson Controls.",
  },
  {
    title: "Scalable QA architecture",
    description: "Build end-to-end frameworks that slash manual regression at startup speed.",
    detail: "Architected a Playwright + Appium framework at Blaise Transit, cutting manual regression time by 90% across web, Android, and iOS.",
  },
  {
    title: "AI-first product design",
    description: "Blend LLMs and full-stack craft to unlock smarter user journeys.",
    detail: "Fine-tuned LLaMA for SalonAI to generate tailored recommendations and instant booking flows.",
  },
  {
    title: "Human-centered platforms",
    description: "Create delightful experiences for student communities and security teams.",
    detail: "Built yuMeet to connect campus life with realtime messaging, events, and microservice scale.",
  },
];

const featuredPreview = [
  {
    label: "Flagship",
    headline: "yuMeet Social App • Connecting YorkU students in realtime.",
    summary: "Shipped cross-platform React Native apps with a Redis-powered backend, BullMQ notifications, and Dockerized deployment on DigitalOcean Kubernetes.",
    deepDivePath: "/portfolio/yumeet",
  },
  {
    label: "AI Lab",
    headline: "SalonAI • LLaMA-driven beauty recommendations at scale.",
    summary: "Delivered NextJS + Flask platform with fine-tuned LLaMA, Redis caching, and automated scheduling for stylists and clients.",
    deepDivePath: "/portfolio/salonai",
  },
  {
    label: "Automation",
    headline: "Johnson Controls • Enterprise QA automation ecosystem.",
    summary: "Authored unified Selenium/Appium/TestNG and Cypress suites with Jenkins pipelines to accelerate regression coverage across devices.",
    deepDivePath: "/portfolio/automation",
  },
];

const focusAreas = [
  {
    title: "End-to-end QA systems",
    copy: "Design modular Selenium, Appium, and Cypress frameworks matched with Jenkins automation to safeguard every release.",
    note: "Cut flaky failures by 30% and unlocked faster feedback loops for security platforms.",
  },
  {
    title: "Realtime & social platforms",
    copy: "Architect event-driven services with Redis, BullMQ, and microservices that keep communities connected in realtime.",
    note: "Launched yuMeet with cross-platform messaging, events, and automated notifications.",
  },
  {
    title: "AI-assisted experiences",
    copy: "Blend fine-tuned language models with responsive UIs to surface the right insight at the right moment.",
    note: "SalonAI’s LLaMA recommendations and automated booking flow elevate salon teams and clients alike.",
  },
];

const Home = () => {
  return (
    <HomeShell>
      <Hero
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <HeroBackdrop />
        <HeroContent>
          <HeroBadge>
            Automation-focused software engineer
          </HeroBadge>
          <HeroTitle>
            I build resilient automation and AI-powered products.
          </HeroTitle>
          <HeroSubtitle>
            Software QA Analyst at Blaise Transit and York University Software Engineering graduate delivering
            intelligent test automation, realtime platforms, and human-centered digital experiences.
          </HeroSubtitle>

          <ProfileImageWrapper>
            <ProfileImage src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Joshua Hanif portrait" />
          </ProfileImageWrapper>

          <HeroActions>
            <PrimaryButton to="/portfolio">Explore recent work</PrimaryButton>
            <SecondaryButton to="/contact">Connect</SecondaryButton>
          </HeroActions>

          <StatsRow>
            <StatCard>
              <StatValue>12+</StatValue>
              <StatLabel>Platforms, apps, and automation suites shipped</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>3 yrs</StatValue>
              <StatLabel>Hands-on experience across web, mobile, and QA pipelines</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>40%</StatValue>
              <StatLabel>Response time gains delivered with Redis + BullMQ optimizations</StatLabel>
            </StatCard>
          </StatsRow>

        </HeroContent>

        <HeroSpotlight>
          <SpotlightHeading>What I love building</SpotlightHeading>
          <SpotlightText>
            I obsess over creating dependable automation, realtime experiences, and AI-assisted workflows that keep teams
            moving quickly without sacrificing quality.
          </SpotlightText>
          <SpotlightList>
            {spotlightHighlights.map((item) => (
              <SpotlightCard key={item.title}>
                <span>{item.title}</span>
                <strong>{item.description}</strong>
                <p>{item.detail}</p>
              </SpotlightCard>
            ))}
          </SpotlightList>
        </HeroSpotlight>
      </Hero>

      <Section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader>
          <SectionEyebrow>Tech Stack</SectionEyebrow>
          <SectionTitle>Tools I rely on to ship resilient systems.</SectionTitle>
          <SectionSubtitle>
            React, TypeScript, Redis, Docker, and an automation-heavy toolkit that keeps releases fast and reliable.
          </SectionSubtitle>
        </SectionHeader>

        <TechGrid>
          <TechItem>
            <FaReact />
            <span>React</span>
          </TechItem>
          <TechItem>
            <SiJavascript />
            <span>JavaScript</span>
          </TechItem>
          <TechItem>
            <SiTypescript />
            <span>TypeScript</span>
          </TechItem>
          <TechItem>
            <FaNodeJs />
            <span>Node.js</span>
          </TechItem>
          <TechItem>
            <FaPython />
            <span>Python</span>
          </TechItem>
          <TechItem>
            <FaJava />
            <span>Java</span>
          </TechItem>
          <TechItem>
            <SiCplusplus />
            <span>C++</span>
          </TechItem>
          <TechItem>
            <SiPostgresql />
            <span>PostgreSQL</span>
          </TechItem>
          <TechItem>
            <FaDatabase />
            <span>Databases</span>
          </TechItem>
          <TechItem>
            <SiFirebase />
            <span>Firebase</span>
          </TechItem>
          <TechItem>
            <FaDocker />
            <span>Docker</span>
          </TechItem>
          <TechItem>
            <FaGitAlt />
            <span>Git & DevOps</span>
          </TechItem>
          <TechItem>
            <SiTestinglibrary />
            <span>Playwright</span>
          </TechItem>
          <TechItem>
            <SiAppium />
            <span>Appium</span>
          </TechItem>
          <TechItem>
            <SiSelenium />
            <span>Selenium</span>
          </TechItem>
        </TechGrid>
      </Section>

      <Section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader>
          <SectionEyebrow>Focus Areas</SectionEyebrow>
          <SectionTitle>Where my craft shines.</SectionTitle>
        </SectionHeader>

        <HighlightGrid>
          {focusAreas.map((item) => (
            <HighlightCard key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <small>{item.note}</small>
            </HighlightCard>
          ))}
        </HighlightGrid>
      </Section>

      <Section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader>
          <SectionEyebrow>Selected Work</SectionEyebrow>
          <SectionTitle>Recent launches and automation wins.</SectionTitle>
        </SectionHeader>

        <ProjectPreviewGrid>
          {featuredPreview.map((project) => (
            <ProjectPreviewCard key={project.label}>
              <ProjectBadge>{project.label}</ProjectBadge>
              <ProjectHeadline>{project.headline}</ProjectHeadline>
              <ProjectSummary>{project.summary}</ProjectSummary>
              <DeepDiveLink to={project.deepDivePath || "/portfolio"}>Open the project deep dive →</DeepDiveLink>
            </ProjectPreviewCard>
          ))}
        </ProjectPreviewGrid>
      </Section>

      <Section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionHeader>
          <SectionEyebrow>Experience Journey</SectionEyebrow>
          <SectionTitle>Milestones shaping my engineering practice.</SectionTitle>
          <SectionSubtitle>
            From enterprise automation to AI-first side projects, I thrive where dependable engineering meets bold product bets.
          </SectionSubtitle>
        </SectionHeader>

        <Timeline>
          <TimelineItem>
            <TimelineDot />
            <TimelineContent>
              <TimelineHeading>Blaise Transit • Software QA Analyst Intern (2025 – Present)</TimelineHeading>
              <TimelineBody>
                Architected a Playwright + Appium e2e automation framework across web, Android, and iOS, reducing manual regression by 90% and defining the mobile testing roadmap.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot />
            <TimelineContent>
              <TimelineHeading>Johnson Controls • Software Automation Developer Co-op (2022 – 2023)</TimelineHeading>
              <TimelineBody>
                Engineered Selenium, Appium, TestNG, and Cypress suites with Jenkins pipelines, lifting regression confidence and cutting flaky failures by 30%.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot />
            <TimelineContent>
              <TimelineHeading>York University • B.Eng. Software Engineering (2020 – 2025)</TimelineHeading>
              <TimelineBody>
                Deepened systems, UI, and data fundamentals while balancing product work, leadership in team projects, and human-centered design thinking.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot />
            <TimelineContent>
              <TimelineHeading>Independent Builds • yuMeet, SalonAI, and automation tooling</TimelineHeading>
              <TimelineBody>
                Prototype and ship AI-forward platforms, realtime social apps, and reusable QA accelerators that keep me experimenting beyond the classroom.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Section>

      <CallToAction
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <CalloutGlow />
        <CalloutContent>
          <CTAHeading>Let’s unlock dependable, intelligent products.</CTAHeading>
          <CTAText>
            Bring me into your next automation challenge, AI initiative, or realtime platform and I’ll help ship with
            confidence, clarity, and measurable impact.
          </CTAText>
          <CTAButtons>
            <PrimaryButton to="/contact">Start a project</PrimaryButton>
            <GhostButton to="/resume">Review the resume</GhostButton>
          </CTAButtons>
        </CalloutContent>
      </CallToAction>
    </HomeShell>
  );
};

export default Home;

const HomeShell = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 8vw, 5.5rem);
  padding: clamp(1.5rem, 3vw, 2.5rem) 0 clamp(3.5rem, 6vw, 5rem);
`;

const Hero = styled(motion.section)`
  position: relative;
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: clamp(2.5rem, 6vw, 3.75rem);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: linear-gradient(135deg, rgba(26, 10, 43, 0.94), rgba(88, 28, 135, 0.62));
  border: 1px solid rgba(168, 85, 247, 0.22);
  box-shadow: var(--shadow-soft);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(2.5rem, 5vw, 3.5rem);
`;

const HeroBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background:
  radial-gradient(60% 45% at 20% 20%, rgba(192, 132, 252, 0.38), transparent),
  radial-gradient(40% 45% at 80% 10%, rgba(168, 85, 247, 0.32), transparent),
  radial-gradient(70% 65% at 48% 65%, rgba(216, 180, 254, 0.2), transparent);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(1.15rem, 3vw, 1.75rem);
`;

const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ProfileImage = styled.img`
  width: clamp(120px, 18vw, 180px);
  height: clamp(120px, 18vw, 180px);
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(192, 132, 252, 0.6);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.4);
`;

const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  align-self: flex-start;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: rgba(192, 132, 252, 0.18);
  border: 1px solid rgba(168, 85, 247, 0.28);
  color: var(--color-accent);
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  line-height: 1.1;
  font-weight: 700;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2.1vw, 1.2rem);
  color: rgba(226, 232, 240, 0.76);
  max-width: 540px;
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 720px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
`;

const buttonBase = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 1.6rem;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.03em;
  transition: all 0.3s ease;
`;

const PrimaryButton = styled(Link)`
  ${buttonBase}
  background: linear-gradient(135deg, #c084fc, #7c3aed);
  color: #f8fafc;
  box-shadow: var(--shadow-glow);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 45px rgba(147, 51, 234, 0.38);
  }
`;

const SecondaryButton = styled(Link)`
  ${buttonBase}
  color: var(--color-text);
  background: rgba(15, 23, 42, 0.4);
  border: 1px solid rgba(168, 85, 247, 0.25);

  &:hover {
    transform: translateY(-2px);
    background: rgba(168, 85, 247, 0.16);
  }
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
`;

const StatCard = styled.div`
  padding: 1rem 1.1rem;
  border-radius: var(--radius-md);
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(148, 163, 184, 0.18);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const StatValue = styled.span`
  font-size: 1.75rem;
  font-weight: 700;
`;

const StatLabel = styled.small`
  color: rgba(226, 232, 240, 0.65);
  line-height: 1.4;
`;

const HeroSpotlight = styled.div`
  position: relative;
  z-index: 1;
  padding: clamp(1.5rem, 3vw, 2rem);
  border-radius: var(--radius-md);
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(168, 85, 247, 0.22);
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const SpotlightHeading = styled.h2`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
`;

const SpotlightText = styled.p`
  color: rgba(226, 232, 240, 0.75);
  line-height: 1.6;
`;

const SpotlightList = styled.div`
  display: grid;
  gap: 1rem;
`;

const SpotlightCard = styled.div`
  padding: 1rem 1.2rem;
  border-radius: var(--radius-sm);
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(168, 85, 247, 0.18);
  display: grid;
  gap: 0.35rem;

  span {
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 0.16em;
    color: rgba(216, 180, 254, 0.9);
  }

  strong {
    font-size: 1.05rem;
  }

  p {
    color: rgba(226, 232, 240, 0.7);
  }
`;

const Section = styled(motion.section)`
  width: min(1180px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(1.75rem, 4vw, 2.5rem);
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 680px;
`;

const SectionEyebrow = styled.span`
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  color: rgba(209, 173, 255, 0.85);
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.4rem);
`;

const SectionSubtitle = styled.p`
  color: rgba(226, 232, 240, 0.72);
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.4rem;
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.2rem 1rem;
  border-radius: var(--radius-md);
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(168, 85, 247, 0.2);
  color: rgba(226, 232, 240, 0.85);
  transition: transform 0.35s ease, border 0.35s ease, box-shadow 0.35s ease;

  svg {
    width: 32px;
    height: 32px;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(192, 132, 252, 0.45);
    box-shadow: var(--shadow-glow);
  }
`;

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
`;

const HighlightCard = styled.div`
  padding: clamp(1.4rem, 3vw, 1.8rem);
  border-radius: var(--radius-md);
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(168, 85, 247, 0.18);
  display: grid;
  gap: 0.75rem;

  h3 {
    font-size: 1.2rem;
  }

  p {
    color: rgba(226, 232, 240, 0.75);
  }

  small {
    color: rgba(148, 163, 184, 0.76);
    line-height: 1.5;
  }
`;

const ProjectPreviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.6rem;
`;

const ProjectPreviewCard = styled.div`
  padding: clamp(1.6rem, 3.5vw, 2.1rem);
  border-radius: var(--radius-md);
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(168, 85, 247, 0.22);
  display: grid;
  gap: 0.85rem;
  min-height: 240px;
`;

const ProjectBadge = styled.span`
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  color: rgba(216, 180, 254, 0.92);
`;

const ProjectHeadline = styled.h3`
  font-size: 1.2rem;
  line-height: 1.3;
`;

const ProjectSummary = styled.p`
  color: rgba(226, 232, 240, 0.75);
`;

const DeepDiveLink = styled(Link)`
  margin-top: auto;
  color: rgba(216, 180, 254, 0.95);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;

  &:hover {
    color: #ede9fe;
  }
`;

const Timeline = styled.div`
  position: relative;
  margin-top: 1rem;
  display: grid;
  gap: 1.75rem;

  &::before {
    content: "";
    position: absolute;
    left: 11px;
    top: 0.4rem;
    width: 2px;
    height: calc(100% - 0.4rem);
    background: linear-gradient(180deg, rgba(192, 132, 252, 0.48), rgba(192, 132, 252, 0));
  }
`;

const TimelineItem = styled.div`
  position: relative;
  display: flex;
  gap: 1.5rem;
  padding-left: 1.6rem;
`;

const TimelineDot = styled.span`
  position: absolute;
  left: 0;
  top: 0.35rem;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(192, 132, 252, 0.22);
  border: 2px solid rgba(192, 132, 252, 0.6);
  box-shadow: var(--shadow-glow);
`;

const TimelineContent = styled.div`
  padding: 1.1rem 1.4rem;
  border-radius: var(--radius-md);
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(168, 85, 247, 0.22);
  display: grid;
  gap: 0.5rem;
`;

const TimelineHeading = styled.h3`
  font-size: 1.05rem;
`;

const TimelineBody = styled.p`
  color: rgba(226, 232, 240, 0.75);
`;

const CallToAction = styled(motion.section)`
  position: relative;
  width: min(1180px, 100%);
  margin: 0 auto;
  padding: clamp(2.5rem, 6vw, 3.5rem);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(168, 85, 247, 0.22);
  background: linear-gradient(135deg, rgba(26, 10, 43, 0.95), rgba(109, 40, 217, 0.62));
  box-shadow: var(--shadow-soft);
`;

const CalloutGlow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 25% 20%, rgba(216, 180, 254, 0.38), transparent 55%);
`;

const CalloutContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(1.1rem, 3vw, 1.6rem);
  align-items: flex-start;

  @media (max-width: 720px) {
    align-items: center;
    text-align: center;
  }
`;

const CTAHeading = styled.h2`
  font-size: clamp(2rem, 4vw, 2.7rem);
`;

const CTAText = styled.p`
  color: rgba(226, 232, 240, 0.78);
  max-width: 520px;
`;

const CTAButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 720px) {
    justify-content: center;
  }
`;

const GhostButton = styled(Link)`
  ${buttonBase}
  background: transparent;
  border: 1px solid rgba(248, 250, 252, 0.45);
  color: #f8fafc;

  &:hover {
    transform: translateY(-2px);
    background: rgba(248, 250, 252, 0.12);
  }
`;
