import { FaCheckCircle } from "react-icons/fa";
import {
  BackLink,
  CaseHero,
  CaseSection,
  CaseStudyShell,
  Checklist,
  HeroEyebrow,
  HeroMetaCard,
  HeroMetaGrid,
  HeroSummary,
  HeroTitle,
  MetricCard,
  MetricGrid,
  ResourceButton,
  ResourceLinks,
  SectionBody,
  SectionHeading,
  SectionSubheading,
} from "./CaseStudyLayout";

const YuMeetCaseStudy = () => {
  return (
    <CaseStudyShell>
      <BackLink to="/portfolio">← Back to portfolio</BackLink>

      <CaseHero
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeroEyebrow>Project Deep Dive Template</HeroEyebrow>
        <HeroTitle>yuMeet • [Add your headline about the outcome here]</HeroTitle>
        <HeroSummary>
          [Use this paragraph to summarise why yuMeet exists, who it serves, and the transformation you delivered. Mention the
          most impressive result or learning right away.]
        </HeroSummary>

        <HeroMetaGrid>
          <HeroMetaCard>
            <span>Role</span>
            <strong>[Add your role, responsibilities, and collaborators]</strong>
          </HeroMetaCard>
          <HeroMetaCard>
            <span>Timeline</span>
            <strong>[Add project timeline or duration]</strong>
          </HeroMetaCard>
          <HeroMetaCard>
            <span>Stack</span>
            <strong>[List the core technologies and services used]</strong>
          </HeroMetaCard>
        </HeroMetaGrid>
      </CaseHero>

      <CaseSection
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading>Context & objectives</SectionHeading>
        <SectionBody>
          [Explain the situation that prompted yuMeet. Who were the users? What problem were they facing? What goals did you and
          any partners set at the outset?]
        </SectionBody>
        <Checklist>
          <li>
            <FaCheckCircle />
            <span>[Key objective or KPI #1]</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>[Key objective or KPI #2]</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>[Key objective or KPI #3]</span>
          </li>
        </Checklist>
      </CaseSection>

      <CaseSection
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading>Solution snapshot</SectionHeading>
        <SectionSubheading>[Add a one-line statement about your approach]</SectionSubheading>
        <SectionBody>
          [Walk through how you architected the platform. Mention major modules (auth, messaging, events, notifications), how the
          microservices interact, and any design decisions that shaped the experience.]
        </SectionBody>
        <SectionBody>
          [Highlight anything custom you built: Redis caching strategy, BullMQ queues, deployment pipeline, mobile design
          system, etc.]
        </SectionBody>
      </CaseSection>

      <CaseSection
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading>Outcomes & learning</SectionHeading>
        <MetricGrid>
          <MetricCard>
            <span>Impact</span>
            <strong>[Add metric]</strong>
            <p>[Explain what the number means and why it matters.]</p>
          </MetricCard>
          <MetricCard>
            <span>Usage</span>
            <strong>[Add metric]</strong>
            <p>[Note adoption, retention, or engagement insights.]</p>
          </MetricCard>
          <MetricCard>
            <span>Reliability</span>
            <strong>[Add metric]</strong>
            <p>[Quote a performance, stability, or quality improvement.]</p>
          </MetricCard>
        </MetricGrid>
        <SectionBody>
          [Share qualitative feedback, lessons learned, or what you’d tackle next if you had more time.]
        </SectionBody>
      </CaseSection>

      <CaseSection
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading>Artifacts & follow-ups</SectionHeading>
        <SectionBody>
          [List assets you can share privately—demos, screenshots, architecture diagrams—and how to request them.]
        </SectionBody>
        <ResourceLinks>
          <ResourceButton href="#add-yumeet-demo-link" target="_blank" rel="noreferrer">
            View walkthrough
          </ResourceButton>
          <ResourceButton href="mailto:hanifjoshua1@gmail.com?subject=yuMeet%20Project%20Deep%20Dive">
            Request deeper dive
          </ResourceButton>
        </ResourceLinks>
      </CaseSection>
    </CaseStudyShell>
  );
};

export default YuMeetCaseStudy;
