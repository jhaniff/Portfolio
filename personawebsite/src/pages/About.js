import styled from "styled-components";
import { motion } from "framer-motion";

const principles = [
  {
    title: "Automation with empathy",
    copy: "Pair rigorous QA engineering with the context of the humans depending on the release, from installers to campus communities.",
  },
  {
    title: "Systems thinking",
    copy: "Map complex problems into modular architecture—whether that’s microservices for yuMeet or distributed pipelines at Johnson Controls.",
  },
  {
    title: "Relentless iteration",
    copy: "Ship, measure, and refine quickly with data-driven loops that keep quality high and teams moving confidently.",
  },
];

const timeline = [
  {
    heading: "Blaise Transit",
    subheading: "Software QA Analyst Intern • 2025 – Present",
    paragraph: "Designed a scalable Playwright + Appium automation architecture across web, Android, and iOS that cut manual regression by 90% and defined the mobile testing roadmap for the engineering team.",
  },
  {
    heading: "Johnson Controls",
    subheading: "Software Automation Developer Co-op • 2022 – 2023",
    paragraph: "Unified Selenium, Appium, TestNG, and Cypress suites while wiring Jenkins pipelines that boosted regression reliability by 30%.",
  },
  {
    heading: "York University",
    subheading: "B.Eng. Software Engineering • 2020 – 2025",
    paragraph: "Grounded in algorithms, UI, operating systems, and databases while collaborating on multidisciplinary product teams.",
  },
  {
    heading: "Independent Builds",
    subheading: "yuMeet, SalonAI, Automation Tooling",
    paragraph: "Prototype AI-infused experiences and realtime social apps that keep me experimenting with new stacks and user journeys.",
  },
];

const About = () => {
  return (
    <AboutShell>
      <Intro
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <IntroBadge>Meet Joshua Hanif</IntroBadge>
        <IntroTitle>I turn complex systems into reliable, human-centered products.</IntroTitle>
        <IntroText>
        I'm a Toronto-based Software Engineering graduate from York University, currently building scalable test automation at Blaise Transit.
          My sweet spot is blending rigorous QA systems, realtime platforms, and AI-assisted experiences that
          empower teams and the people they serve.
        </IntroText>
      </Intro>

      <HighlightGrid>
        {principles.map((item) => (
          <HighlightCard
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </HighlightCard>
        ))}
      </HighlightGrid>

      <StorySection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <StoryHeading>The long-form version</StoryHeading>
        <StoryParagraph>
          I care about the intersection of reliability and delight. Whether I’m authoring Appium frameworks, shaping
          microservices for yuMeet, or fine-tuning LLaMA for SalonAI, I lead with empathy for the end user and data-backed
          iteration.
        </StoryParagraph>
        <StoryParagraph>
          Outside of co-ops and coursework, I’m constantly prototyping—stress-testing toolchains, exploring new stacks, and
          sharing findings with peers so we all ship better together.
        </StoryParagraph>
      </StorySection>

      <Timeline>
        {timeline.map((item) => (
          <TimelineItem
            key={item.heading}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <TimelineDot />
            <TimelineContent>
              <h4>{item.heading}</h4>
              <small>{item.subheading}</small>
              <p>{item.paragraph}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      <ValueSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <ValueHeading>What teammates can count on</ValueHeading>
        <ValueGrid>
          <ValueCard>
            <strong>Collaboration</strong>
            <p>I create clarity across product, QA, and engineering so we tackle the right problems with shared context and pace.</p>
          </ValueCard>
          <ValueCard>
            <strong>Craft</strong>
            <p>Quality isn’t a phase—it’s embedded in the way I document, test, and automate every layer of the stack.</p>
          </ValueCard>
          <ValueCard>
            <strong>Momentum</strong>
            <p>From Jenkins pipelines to Redis-backed queues, I build systems that keep teams shipping confidently and continuously.</p>
          </ValueCard>
        </ValueGrid>
      </ValueSection>
    </AboutShell>
  );
};

export default About;

const AboutShell = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 5vw, 4rem);
`;

const Intro = styled(motion.section)`
  display: grid;
  gap: 1rem;
  width: min(880px, 100%);
`;

const IntroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.1rem;
  border-radius: 999px;
  border: 1px solid rgba(168, 85, 247, 0.26);
  background: rgba(192, 132, 252, 0.18);
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const IntroTitle = styled.h1`
  font-size: clamp(2.1rem, 5vw, 3rem);
  line-height: 1.15;
`;

const IntroText = styled.p`
  color: rgba(226, 232, 240, 0.76);
  line-height: 1.65;
`;

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
`;

const HighlightCard = styled(motion.div)`
  padding: clamp(1.5rem, 3vw, 2rem);
  border-radius: var(--radius-lg);
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(168, 85, 247, 0.2);
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 0.75rem;

  h3 {
    font-size: 1.2rem;
  }

  p {
    color: rgba(226, 232, 240, 0.7);
  }
`;

const StorySection = styled(motion.section)`
  display: grid;
  gap: 0.9rem;
  width: min(820px, 100%);
`;

const StoryHeading = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.4rem);
`;

const StoryParagraph = styled.p`
  color: rgba(226, 232, 240, 0.75);
  line-height: 1.7;
`;

const Timeline = styled.div`
  position: relative;
  display: grid;
  gap: 1.5rem;
  margin-top: 1rem;

  &::before {
    content: "";
    position: absolute;
    left: 11px;
    top: 10px;
    width: 2px;
    height: calc(100% - 20px);
    background: linear-gradient(180deg, rgba(192, 132, 252, 0.45), rgba(192, 132, 252, 0));
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-left: 2.6rem;

  @media (max-width: 720px) {
    padding-left: 2rem;
  }
`;

const TimelineDot = styled.span`
  position: absolute;
  left: 0;
  top: 0.35rem;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(192, 132, 252, 0.24);
  border: 2px solid rgba(192, 132, 252, 0.58);
  box-shadow: var(--shadow-glow);
`;

const TimelineContent = styled.div`
  padding: 1.3rem 1.5rem;
  border-radius: var(--radius-md);
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(168, 85, 247, 0.22);
  display: grid;
  gap: 0.45rem;

  @media (max-width: 720px) {
    padding: 1.1rem 1.25rem;
  }

  h4 {
    font-size: 1.15rem;
  }

  small {
    color: rgba(148, 163, 184, 0.72);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  p {
    color: rgba(226, 232, 240, 0.76);
  }
`;

const ValueSection = styled(motion.section)`
  display: grid;
  gap: 1.25rem;
`;

const ValueHeading = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.3rem);
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const ValueCard = styled.div`
  padding: clamp(1.4rem, 3vw, 1.9rem);
  border-radius: var(--radius-md);
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(168, 85, 247, 0.2);
  display: grid;
  gap: 0.5rem;

  strong {
    font-size: 1.1rem;
  }

  p {
    color: rgba(226, 232, 240, 0.7);
    line-height: 1.6;
  }
`;
