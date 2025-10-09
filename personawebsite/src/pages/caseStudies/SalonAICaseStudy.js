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

const SalonAICaseStudy = () => {
  return (
    <CaseStudyShell>
      <BackLink to="/portfolio">← Back to portfolio</BackLink>

      <CaseHero
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeroEyebrow>Project Deep Dive</HeroEyebrow>
        <HeroTitle>SalonAI • LLaMA-powered guidance for modern salons</HeroTitle>
        <HeroSummary>
          A full-stack platform that pairs fine-tuned LLaMA recommendations with automated scheduling so stylists can deliver
          hyper-personalized experiences. I led model integration, backend orchestration, and containerized deployment, tying
          Redis caching to consistent, low-latency responses.
        </HeroSummary>

        <HeroMetaGrid>
          <HeroMetaCard>
            <span>Role</span>
            <strong>Lead engineer • ML integration, backend APIs, platform ops</strong>
          </HeroMetaCard>
          <HeroMetaCard>
            <span>Timeline</span>
            <strong>Mar – Jul 2025</strong>
          </HeroMetaCard>
          <HeroMetaCard>
            <span>Stack</span>
            <strong>NextJS, Flask, Python, LLaMA, Redis, PostgreSQL, Docker, DigitalOcean</strong>
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
          Stylists were juggling client histories across spreadsheets and emails, so recommendations felt generic and booking
          follow-up was manual. SalonAI set out to surface tailored looks in seconds, lock in appointments automatically, and
          keep both stylists and clients informed without extra admin work.
        </SectionBody>
        <Checklist>
          <li>
            <FaCheckCircle />
            <span>Deliver personalized hairstyle suggestions using a fine-tuned LLaMA model.</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>Automate booking confirmations and availability updates in real time.</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>Keep API responses fast and reliable with Redis caching and container orchestration.</span>
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
        <SectionSubheading>LLM intelligence meets containerized, cache-first APIs.</SectionSubheading>
        <SectionBody>
          Client data flows through PostgreSQL and Redis before reaching a fine-tuned LLaMA model hosted via Flask. The model
          returns curated hairstyle and color suggestions that the NextJS front-end presents with contextual tips, while
          respecting consent and privacy requirements.
        </SectionBody>
        <SectionBody>
          Scheduling runs through RESTful Flask endpoints, broadcasting updates via Redis so stylists see availability change in
          real time. Dockerized services and CI/CD pipelines keep web, ML, and infra deployments consistent across staging and
          production environments.
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
            <span>Personalization</span>
            <strong>LLaMA-powered</strong>
            <p>Fine-tuned the model with salon-specific data so suggestions reflected client history and stylist expertise.</p>
          </MetricCard>
          <MetricCard>
            <span>Operational efficiency</span>
            <strong>Automated bookings</strong>
            <p>Flask APIs handle scheduling, confirmations, and follow-up notifications with no manual intervention.</p>
          </MetricCard>
          <MetricCard>
            <span>Performance</span>
            <strong>Redis caching</strong>
            <p>Hot data stays in Redis, keeping recommendation and booking responses consistently fast.</p>
          </MetricCard>
        </MetricGrid>
        <SectionBody>
          Balancing LLM customization with maintainable DevOps was key. I’d next invest in an experimentation loop for
          measuring stylist satisfaction and exploring multi-salon tenancy.
        </SectionBody>
      </CaseSection>
    </CaseStudyShell>
  );
};

export default SalonAICaseStudy;
