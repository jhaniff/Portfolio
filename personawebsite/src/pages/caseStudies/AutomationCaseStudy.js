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
        <HeroEyebrow>Project Deep Dive</HeroEyebrow>
        <HeroTitle>Enterprise QA Automation • Harmonising regression for Johnson Controls security platforms</HeroTitle>
        <HeroSummary>
          Embedded with the OpenBlue security group to replace brittle manual regression with unified Selenium, Appium, TestNG,
          and Cypress suites. I owned the framework design, CI/CD orchestration, and coaching that restored confidence in
          multi-device releases.
        </HeroSummary>

        <HeroMetaGrid>
          <HeroMetaCard>
            <span>Role</span>
            <strong>Software Automation Developer Co-op • Framework architect & pipeline owner</strong>
          </HeroMetaCard>
          <HeroMetaCard>
            <span>Timeline</span>
            <strong>Sept 2022 – Apr 2023</strong>
          </HeroMetaCard>
          <HeroMetaCard>
            <span>Tooling</span>
            <strong>Selenium, Appium, Cypress, TestNG, Jenkins, Docker, Jira, Azure DevOps</strong>
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
          Releases for building access control hardware and cloud dashboards stalled because regression relied on spreadsheets
          and ad-hoc scripts. Teams duplicated work across desktop, tablet, and mobile clients, so failures appeared late and
          were hard to reproduce.
        </SectionBody>
        <Checklist>
          <li>
            <FaCheckCircle />
            <span>Five-day manual regression window slowed urgent firmware and web updates.</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>Device coverage was inconsistent across Selenium, Appium, and on-prem labs.</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>No unified reporting, making flaky failures difficult to triage for QA leads.</span>
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
        <SectionSubheading>Reusable libraries and pipelines kept every suite in sync.</SectionSubheading>
        <SectionBody>
          I refactored legacy scripts into a shared page-object library with environment-aware configuration and Dockerized
          dependencies. Jenkins fan-out pipelines parallelized suites across browsers, Android tablets, and iOS devices while
          storing artifacts in S3 for easy traceability.
        </SectionBody>
        <SectionBody>
          Appium Grid and Cypress dashboards streamed live metrics to QA leads, and Confluence playbooks captured device setup
          and troubleshooting steps. I facilitated weekly automation clinics so product, QA, and DevOps could iterate quickly
          on failure trends.
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
            <strong>30% fewer flaky failures</strong>
            <p>Introduced retry logic, logging, and health checks to surface true defects while eliminating noise.</p>
          </MetricCard>
          <MetricCard>
            <span>Coverage</span>
            <strong>120+ scenarios automated</strong>
            <p>Expanded suites across door controllers, mobile dashboards, and cloud services with shared libraries.</p>
          </MetricCard>
          <MetricCard>
            <span>Speed</span>
            <strong>Regression trimmed to a few hours</strong>
            <p>Parallelized CI runs and standardized environments to cut the release gate from twelve hours to just a few.</p>
          </MetricCard>
        </MetricGrid>
        <SectionBody>
          Product managers could greenlight releases with confidence thanks to reliable dashboards and nightly Jenkins trends.
          The automation playbooks remain active references for new QA hires joining the program.
        </SectionBody>
      </CaseSection>
    </CaseStudyShell>
  );
};

export default AutomationCaseStudy;
