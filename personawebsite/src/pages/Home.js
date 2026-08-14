import styled from "styled-components";
import { FaEnvelope, FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import {
  PROFILE,
  experience,
  profileImageSrc,
  projects,
  resumeLinkProps,
  skillGroups,
} from "../data";
import {
  Card,
  Chip,
  ChipList,
  Eyebrow,
  Page,
  PrimaryAnchor,
  PrimaryLink,
  SecondaryAnchor,
  Section,
  SectionHeader,
  SectionLead,
  SectionTitle,
  TextLink,
} from "../components/ui";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const Home = () => {
  return (
    <Page>
      <Hero
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Eyebrow>IBM · Quality Engineering</Eyebrow>
        <HeroName>Joshua Hanif</HeroName>
        <HeroTitle>Software Engineer</HeroTitle>
        <HeroMedia>
          <ProfileImage
            src={profileImageSrc}
            alt="Joshua Hanif, Software Engineer"
            width={540}
            height={720}
            decoding="async"
          />
        </HeroMedia>
        <HeroValue>
          I build software and the test automation that keeps it reliable — Playwright, Appium,
          Selenium, and ISTQB-grounded QA alongside product engineering.
        </HeroValue>
        <HeroActions>
          <PrimaryLink to={{ pathname: "/", hash: "#projects" }}>View my work</PrimaryLink>
          <SecondaryAnchor {...resumeLinkProps}>Download resume</SecondaryAnchor>
        </HeroActions>
        <StatsRow>
          <StatCard>
            <StatValue>90%</StatValue>
            <StatLabel>Less manual regression at Blaise Transit after Playwright + Appium</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>30%</StatValue>
            <StatLabel>Fewer flaky failures on Johnson Controls security platforms</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>~40%</StatValue>
            <StatLabel>Faster yuMeet responses after Redis and BullMQ</StatLabel>
          </StatCard>
        </StatsRow>
      </Hero>

      <Section id="about" {...fadeUp}>
        <SectionHeader>
          <Eyebrow>About</Eyebrow>
          <SectionTitle>Product engineering with a quality backbone.</SectionTitle>
        </SectionHeader>
        <AboutCopy>
          <p>
            I’m a Software Engineer with a B.Eng. in Software Engineering from York University. I
            currently work at IBM as a Software QA Engineer on the Quality Engineering track, and I
            hold ISTQB Certified Tester. Before IBM I built Playwright and Appium automation at
            Blaise Transit and Selenium, Appium, and TestNG suites at Johnson Controls.
          </p>
          <p>
            I like the work where shipping the feature and proving it works are the same job: clear
            architecture, honest tests, and CI that teams can trust. I’m looking for full-time
            software engineering roles that value that mix.
          </p>
        </AboutCopy>
      </Section>

      <Section id="experience" {...fadeUp}>
        <SectionHeader>
          <Eyebrow>Experience</Eyebrow>
          <SectionTitle>Where I’ve practiced the craft.</SectionTitle>
          <SectionLead>
            IBM’s Quality Engineering track, with automation work at Blaise Transit and Johnson
            Controls.
          </SectionLead>
        </SectionHeader>
        <Stack>
          {experience.map((job) => (
            <Card key={job.company}>
              <JobHeader>
                <div>
                  <JobCompany>{job.company}</JobCompany>
                  <JobTitle>{job.title}</JobTitle>
                </div>
                <JobDates>{job.dates}</JobDates>
              </JobHeader>
              <BulletList>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </BulletList>
              <ChipList>
                {job.tech.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ChipList>
            </Card>
          ))}
        </Stack>
      </Section>

      <Section id="projects" {...fadeUp}>
        <SectionHeader>
          <Eyebrow>Projects</Eyebrow>
          <SectionTitle>Problem, solution, impact.</SectionTitle>
          <SectionLead>
            Three pieces of work with enough depth to show how I think — not a feature dump.
          </SectionLead>
        </SectionHeader>
        <ProjectGrid>
          {projects.map((project) => (
            <ProjectCard key={project.name}>
              <ProjectName>{project.name}</ProjectName>
              <ProjectBlock>
                <strong>Problem</strong>
                <p>{project.problem}</p>
              </ProjectBlock>
              <ProjectBlock>
                <strong>Solution</strong>
                <p>{project.solution}</p>
              </ProjectBlock>
              <ProjectBlock>
                <strong>Impact</strong>
                <p>{project.impact}</p>
              </ProjectBlock>
              <ChipList>
                {project.tech.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ChipList>
              <TextLink to={project.deepDivePath}>Read the deep dive →</TextLink>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Section>

      <Section id="skills" {...fadeUp}>
        <SectionHeader>
          <Eyebrow>Skills</Eyebrow>
          <SectionTitle>Languages, platforms, and QA tooling.</SectionTitle>
        </SectionHeader>
        <SkillGrid>
          {skillGroups.map((group) => (
            <Card key={group.title} as="div">
              <SkillTitle>{group.title}</SkillTitle>
              <ChipList>
                {group.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ChipList>
            </Card>
          ))}
        </SkillGrid>
      </Section>

      <Section id="contact" {...fadeUp}>
        <ContactPanel>
          <SectionHeader>
            <Eyebrow>Contact</Eyebrow>
            <SectionTitle>Let’s talk about the next role.</SectionTitle>
            <SectionLead>
              Email is best. I’m based in Toronto and open to full-time software engineering roles
              across North America, especially where QA and product engineering sit together.
            </SectionLead>
          </SectionHeader>
          <ContactActions>
            <PrimaryAnchor href={`mailto:${PROFILE.email}`}>
              <FaEnvelope /> {PROFILE.email}
            </PrimaryAnchor>
            <SecondaryAnchor {...resumeLinkProps}>Download resume</SecondaryAnchor>
          </ContactActions>
          <ContactMeta>
            <ContactItem href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </ContactItem>
            <ContactItem href={PROFILE.github} target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </ContactItem>
            <ContactItem as="span">
              <FaLocationArrow /> {PROFILE.location}
            </ContactItem>
          </ContactMeta>
        </ContactPanel>
      </Section>
    </Page>
  );
};

export default Home;

const Hero = styled(Section)`
  position: relative;
  padding: clamp(1.75rem, 4vw, 3rem);
  border-radius: var(--radius-lg);
  overflow: visible;
  background: var(--hero-gradient);
  border: 1px solid var(--color-border);
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(180px, 0.7fr);
  grid-template-areas:
    "eyebrow media"
    "name media"
    "title media"
    "value media"
    "actions media"
    "stats stats";
  gap: var(--space-4) var(--space-6);
  align-items: center;

  ${Eyebrow} {
    grid-area: eyebrow;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "eyebrow"
      "name"
      "title"
      "media"
      "value"
      "actions"
      "stats";
    padding: var(--space-5);
    justify-items: start;
  }
`;

const HeroName = styled.h1`
  grid-area: name;
  font-size: var(--text-4xl);
  line-height: 1.08;
  font-weight: 700;
  white-space: nowrap;

  @media (max-width: 720px) {
    font-size: clamp(1.85rem, 8vw, 2.4rem);
  }
`;

const HeroTitle = styled.p`
  grid-area: title;
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-accent-text);
`;

const HeroValue = styled.p`
  grid-area: value;
  font-size: var(--text-lg);
  color: var(--color-muted);
  max-width: 36rem;
`;

const HeroActions = styled.div`
  grid-area: actions;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);

  @media (max-width: 720px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
`;

const HeroMedia = styled.div`
  grid-area: media;
  justify-self: center;
`;

const ProfileImage = styled.img`
  width: clamp(140px, 22vw, 220px);
  height: clamp(140px, 22vw, 220px);
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(45, 212, 191, 0.55);
`;

const StatsRow = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4);
  width: 100%;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  padding: var(--space-4);
  border-radius: var(--radius-md);
  background: var(--color-panel);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const StatValue = styled.span`
  font-size: var(--text-2xl);
  font-weight: 700;
`;

const StatLabel = styled.span`
  color: var(--color-muted);
  font-size: var(--text-sm);
  line-height: 1.45;
`;

const AboutCopy = styled.div`
  display: grid;
  gap: var(--space-4);
  max-width: 42rem;
  color: var(--color-muted);
  font-size: var(--text-lg);
`;

const Stack = styled.div`
  display: grid;
  gap: var(--space-5);
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);
  align-items: flex-start;
  flex-wrap: wrap;
`;

const JobCompany = styled.h3`
  font-size: var(--text-xl);
`;

const JobTitle = styled.p`
  color: var(--color-accent-text);
  font-weight: 600;
`;

const JobDates = styled.p`
  color: var(--color-muted);
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const BulletList = styled.ul`
  display: grid;
  gap: var(--space-3);
  color: var(--color-muted);
  padding-left: 1.1rem;
  list-style: disc;

  li {
    padding-left: 0.2rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-5);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const ProjectCard = styled(Card)`
  min-height: 100%;
`;

const ProjectName = styled.h3`
  font-size: var(--text-xl);
`;

const ProjectBlock = styled.div`
  display: grid;
  gap: var(--space-1);

  strong {
    font-size: var(--text-xs);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-accent-text);
  }

  p {
    color: var(--color-muted);
    font-size: var(--text-sm);
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-5);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillTitle = styled.h3`
  font-size: var(--text-lg);
`;

const ContactPanel = styled.div`
  padding: clamp(1.75rem, 4vw, 3rem);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: var(--hero-gradient);
  display: grid;
  gap: var(--space-5);
`;

const ContactActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ContactMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
`;

const ContactItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-accent-text);
  font-weight: 600;

  &:hover {
    color: var(--color-text);
  }
`;
