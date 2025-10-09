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

const AutomationCaseStudy = () => {
  return (
    <CaseStudyShell>
      <BackLink to="/portfolio">← Back to portfolio</BackLink>

      <CaseHero
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeroEyebrow>Project Deep Dive Template</HeroEyebrow>
        <HeroTitle>Enterprise QA Automation • [Add headline about the value delivered]</HeroTitle>
        <HeroSummary>
          [Summarise why the automation effort mattered, the scale of systems covered, and the business-critical outcomes you
          enabled for Johnson Controls or a similar organisation.]
        </HeroSummary>

        <HeroMetaGrid>
          <HeroMetaCard>
            <span>Role</span>
            <strong>[Add your title, team, and collaboration notes]</strong>
          </HeroMetaCard>
          <HeroMetaCard>
            <span>Timeline</span>
            <strong>[Add timeframe]</strong>
          </HeroMetaCard>
          <HeroMetaCard>
            <span>Tooling</span>
            <strong>[List the key frameworks, CI/CD, and infrastructure pieces]</strong>
          </HeroMetaCard>
        </HeroMetaGrid>
      </CaseHero>

      <CaseSection
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading>Testing ecosystem before automation</SectionHeading>
        <SectionBody>
          [Explain the manual pain points, coverage gaps, or release bottlenecks that prompted a new automation strategy.]
        </SectionBody>
        <Checklist>
          <li>
            <FaCheckCircle />
            <span>[Pain point or objective #1]</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>[Pain point or objective #2]</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>[Pain point or objective #3]</span>
          </li>
        </Checklist>
      </CaseSection>

      <CaseSection
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading>Framework design</SectionHeading>
        <SectionSubheading>[Add a concise statement about your strategy]</SectionSubheading>
        <SectionBody>
          [Detail how you structured Selenium, Appium, Cypress, and TestNG to work together. Mention reusable libraries,
          configuration management, environment setup, and integration with Jenkins.]
        </SectionBody>
        <SectionBody>
          [Include how you managed device labs, emulators, or simulators, plus how you monitored and reported results back to
          stakeholders.]
        </SectionBody>
      </CaseSection>

      <CaseSection
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading>Impact & metrics</SectionHeading>
        <MetricGrid>
          <MetricCard>
            <span>Stability</span>
            <strong>[Add metric]</strong>
            <p>[Explain the reduction in flaky tests or outages.]</p>
          </MetricCard>
          <MetricCard>
            <span>Coverage</span>
            <strong>[Add metric]</strong>
            <p>[Share automated suites added, platforms covered, or regression depth.]</p>
          </MetricCard>
          <MetricCard>
            <span>Speed</span>
            <strong>[Add metric]</strong>
            <p>[Describe build time improvements, release cadence, or feedback loop gains.]</p>
          </MetricCard>
        </MetricGrid>
        <SectionBody>
          [Call out stakeholder reactions, production defect trends, or other evidence of success.]
        </SectionBody>
      </CaseSection>

      <CaseSection
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading>Resources</SectionHeading>
        <SectionBody>
          [Indicate which artifacts (pipeline configs, screenshots, reports) you can share privately and how to request them.]
        </SectionBody>
        <ResourceLinks>
          <ResourceButton href="#add-automation-summary-link" target="_blank" rel="noreferrer">
            View summary
          </ResourceButton>
          <ResourceButton href="mailto:hanifjoshua1@gmail.com?subject=Automation%20Project%20Deep%20Dive">
            Schedule walkthrough
          </ResourceButton>
        </ResourceLinks>
      </CaseSection>
    </CaseStudyShell>
  );
};

export default AutomationCaseStudy;
