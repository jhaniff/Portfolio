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

const YuMeetCaseStudy = () => {
  return (
    <CaseStudyShell>
      <BackLink to="/portfolio">← Back to portfolio</BackLink>

      <CaseHero
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeroEyebrow>Project Deep Dive</HeroEyebrow>
        <HeroTitle>yuMeet • Realtime campus network for York University students</HeroTitle>
        <HeroSummary>
          A cross-platform social platform that gives YorkU students a single hub for events, messaging, profiles, and
          announcements. I architected and shipped the full stack, improving realtime responsiveness by ~40% through Redis
          caching and BullMQ-driven notifications.
        </HeroSummary>

        <HeroMetaGrid>
          <HeroMetaCard>
            <span>Role</span>
            <strong>Lead full-stack engineer • Product, architecture, DevOps</strong>
          </HeroMetaCard>
          <HeroMetaCard>
            <span>Timeline</span>
            <strong>Jan – Aug 2025</strong>
          </HeroMetaCard>
          <HeroMetaCard>
            <span>Stack</span>
            <strong>React Native, TypeScript, ExpressJS, PostgreSQL, Redis, BullMQ, Docker, DigitalOcean</strong>
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
          Students were juggling Discord servers, group chats, and email blasts to keep up with campus life. yuMeet set out to
          provide a unified experience where events, group discovery, and realtime chat worked together across iOS and Android.
          Success meant delivering fluid messaging, low-latency notifications, and a backend that could grow with new
          communities.
        </SectionBody>
        <Checklist>
          <li>
            <FaCheckCircle />
            <span>Launch a native-feeling social experience simultaneously on iOS and Android.</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>Design a modular microservice backend that can flex to new campus features.</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>Keep realtime interactions reliable while cutting response latency by ~40%.</span>
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
        <SectionSubheading>Event-driven services power realtime messaging and notifications.</SectionSubheading>
        <SectionBody>
          Auth, profiles, events, and messaging live in independent ExpressJS services communicating over Redis-backed queues.
          React Native powers the UI with a shared design system styled via Tailwind CSS, while WebSockets deliver live chat,
          reactions, and presence updates without sacrificing battery life.
        </SectionBody>
        <SectionBody>
          Redis caches hot data (active chats, upcoming events) and BullMQ orchestrates asynchronous notifications so users get
          instant updates even when offline. Automated Docker builds deploy to DigitalOcean Kubernetes for a clean CI/CD path
          and easy rollbacks.
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
            <strong>≈40% faster responses</strong>
            <p>Redis caching and queue-backed notifications trimmed API latency, keeping chats and event feeds snappy.</p>
          </MetricCard>
          <MetricCard>
            <span>Usage</span>
            <strong>Dual-platform launch</strong>
            <p>Shipped the same codebase to iOS and Android with React Native, ensuring feature parity from day one.</p>
          </MetricCard>
          <MetricCard>
            <span>Reliability</span>
            <strong>Automated regression suites</strong>
            <p>CI smoke tests cover auth, messaging, and events before every release, preventing regressions in core flows.</p>
          </MetricCard>
        </MetricGrid>
        <SectionBody>
          Building for realtime mobile taught me how to balance persistent WebSocket connections with battery constraints and
          platform-specific UX. Next steps include opening APIs for club maintainers and layering in analytics dashboards for
          organizers.
        </SectionBody>
      </CaseSection>

    </CaseStudyShell>
  );
};

export default YuMeetCaseStudy;
