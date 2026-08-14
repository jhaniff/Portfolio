import styled from "styled-components";
import { FaDownload, FaLinkedin } from "react-icons/fa";
import { PROFILE, experience, resumeLinkProps } from "../data";
import {
  Card,
  Eyebrow,
  Page,
  PrimaryAnchor,
  SecondaryAnchor,
  Section,
  SectionHeader,
  SectionLead,
  SectionTitle,
} from "../components/ui";

const Resume = () => {
  return (
    <Page>
      <Section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <HeroCard>
          <Eyebrow>Resume</Eyebrow>
          <SectionTitle as="h1">Joshua Hanif — Software Engineer</SectionTitle>
          <SectionLead>
            York University B.Eng. Software Engineering. Currently a Software QA Engineer at IBM,
            with automation depth from Blaise Transit and Johnson Controls.
          </SectionLead>
          <Actions>
            <PrimaryAnchor {...resumeLinkProps}>
              <FaDownload /> Download PDF
            </PrimaryAnchor>
            <SecondaryAnchor href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </SecondaryAnchor>
          </Actions>
        </HeroCard>

        <SectionHeader>
          <SectionTitle>Experience snapshot</SectionTitle>
        </SectionHeader>
        <Grid>
          {experience.map((job) => (
            <Card key={job.company}>
              <h2>{job.company}</h2>
              <p>
                {job.title} · {job.dates}
              </p>
              <p>{job.bullets[0]}</p>
            </Card>
          ))}
        </Grid>
      </Section>
    </Page>
  );
};

export default Resume;

const HeroCard = styled.div`
  display: grid;
  gap: var(--space-4);
  padding: clamp(1.75rem, 4vw, 3rem);
  border-radius: var(--radius-lg);
  background: var(--hero-gradient);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-soft);
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-5);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  h2 {
    font-size: var(--text-xl);
  }

  p {
    color: var(--color-muted);
  }
`;
