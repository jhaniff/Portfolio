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

const SalonAICaseStudy = () => {
  return (
    <CaseStudyShell>
      <BackLink to="/portfolio">← Back to portfolio</BackLink>

      <CaseHero
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeroEyebrow>Project Deep Dive Template</HeroEyebrow>
        <HeroTitle>SalonAI • [Add your headline about the transformation here]</HeroTitle>
        <HeroSummary>
          [Provide a high-level narrative about the vision behind SalonAI, the users it serves, and the AI-driven outcomes you
          enabled.]
        </HeroSummary>

        <HeroMetaGrid>
          <HeroMetaCard>
            <span>Role</span>
            <strong>[Add your role, collaborators, and responsibilities]</strong>
          </HeroMetaCard>
          <HeroMetaCard>
            <span>Timeline</span>
            <strong>[Add the duration or release cadence]</strong>
          </HeroMetaCard>
          <HeroMetaCard>
            <span>Stack</span>
            <strong>[List core technologies, ML tooling, and infrastructure]</strong>
          </HeroMetaCard>
        </HeroMetaGrid>
      </CaseHero>

      <CaseSection
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading>Problem framing</SectionHeading>
        <SectionBody>
          [Describe the salon client journey, the friction they experienced, and the opportunity you spotted for AI to improve
          recommendations, bookings, or operations.]
        </SectionBody>
        <Checklist>
          <li>
            <FaCheckCircle />
            <span>[Goal or KPI #1]</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>[Goal or KPI #2]</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>[Goal or KPI #3]</span>
          </li>
        </Checklist>
      </CaseSection>

      <CaseSection
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading>Approach & architecture</SectionHeading>
        <SectionSubheading>[Add a concise statement about how you solved the problem]</SectionSubheading>
        <SectionBody>
          [Outline how you fine-tuned LLaMA, structured data pipelines, and orchestrated the NextJS front-end with Flask APIs.
          Mention security, privacy, and performance considerations where relevant.]
        </SectionBody>
        <SectionBody>
          [Touch on how bookings, notifications, and stylist workflows were automated. Include any MLOps or monitoring
          practices you set up.]
        </SectionBody>
      </CaseSection>

      <CaseSection
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading>Results & insights</SectionHeading>
        <MetricGrid>
          <MetricCard>
            <span>AI accuracy</span>
            <strong>[Add metric]</strong>
            <p>[Explain how you measured recommendation quality or relevancy.]</p>
          </MetricCard>
          <MetricCard>
            <span>Operational efficiency</span>
            <strong>[Add metric]</strong>
            <p>[Describe the scheduling or workflow improvements achieved.]</p>
          </MetricCard>
          <MetricCard>
            <span>User delight</span>
            <strong>[Add metric]</strong>
            <p>[Share feedback, testimonials, or adoption stats.]</p>
          </MetricCard>
        </MetricGrid>
        <SectionBody>
          [Share unexpected learnings, challenges you overcame, and how you would evolve the system next.]
        </SectionBody>
      </CaseSection>

      <CaseSection
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading>Shareable resources</SectionHeading>
        <SectionBody>
          [List demos, design artifacts, or documentation you can provide on request, and any confidentiality notes.]
        </SectionBody>
        <ResourceLinks>
          <ResourceButton href="#add-salonai-demo-link" target="_blank" rel="noreferrer">
            View demo
          </ResourceButton>
          <ResourceButton href="mailto:hanifjoshua1@gmail.com?subject=SalonAI%20Project%20Deep%20Dive">
            Request deep dive
          </ResourceButton>
        </ResourceLinks>
      </CaseSection>
    </CaseStudyShell>
  );
};

export default SalonAICaseStudy;
