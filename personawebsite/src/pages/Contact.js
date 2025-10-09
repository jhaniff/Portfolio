import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaLocationArrow, FaPhone, FaCalendarAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <ContactShell>
      <HeroCard
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeroBadge>Let’s build together</HeroBadge>
        <HeroTitle>Partner with me on your next automation or AI initiative.</HeroTitle>
        <HeroText>
          I’m based in Toronto and open to internships, co-ops, and freelance collaborations focused on reliable
          automation, AI-driven experiences, or realtime platforms.
        </HeroText>

        <PrimaryContact>
          <IconCircle>
            <FaEnvelope />
          </IconCircle>
          <div>
            <strong>Email</strong>
            <a href="mailto:hanifjoshua1@gmail.com">hanifjoshua1@gmail.com</a>
          </div>
        </PrimaryContact>
      </HeroCard>

      <InfoGrid>
        <InfoCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <IconCircle>
            <FaLocationArrow />
          </IconCircle>
          <h3>Location</h3>
          <p>Toronto, Ontario (Eastern Time) • remote friendly across North America.</p>
        </InfoCard>

        <InfoCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <IconCircle>
            <FaPhone />
          </IconCircle>
          <h3>Quick call?</h3>
          <p>Call or text <a href="tel:15197164548">+1 (519) 716-4548</a> • happy to hop on Teams, Zoom, or Meet.</p>
        </InfoCard>

        <InfoCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <IconCircle>
            <FaCalendarAlt />
          </IconCircle>
          <h3>Availability</h3>
          <p>Currently looking for full-time roles and select freelance automation gigs.</p>
        </InfoCard>
      </InfoGrid>

      <ConnectSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ConnectHeading>Find me around the web</ConnectHeading>
        <ConnectLinks>
          <ConnectLink href="https://www.linkedin.com/in/joshua-hanif" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn
          </ConnectLink>
          <ConnectLink href="https://github.com/jhaniff" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </ConnectLink>
          <ConnectLink href="mailto:hanifjoshua1@gmail.com">
            <FaEnvelope /> Email
          </ConnectLink>
        </ConnectLinks>
      </ConnectSection>
    </ContactShell>
  );
};

export default Contact;

const ContactShell = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 5vw, 4rem);
`;

const HeroCard = styled(motion.section)`
  padding: clamp(2.2rem, 5vw, 3.2rem);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, rgba(26, 10, 43, 0.92), rgba(109, 40, 217, 0.58));
  border: 1px solid rgba(168, 85, 247, 0.24);
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 1.2rem;
  width: min(960px, 100%);
`;

const HeroBadge = styled.span`
  align-self: flex-start;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(216, 180, 254, 0.32);
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 0.78rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 2.8rem);
  line-height: 1.15;
`;

const HeroText = styled.p`
  color: rgba(226, 232, 240, 0.78);
  max-width: 640px;
`;

const PrimaryContact = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  border-radius: var(--radius-md);
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(168, 85, 247, 0.24);

  strong {
    display: block;
    font-size: 0.95rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(216, 180, 254, 0.9);
  }

  a {
    color: rgba(226, 232, 240, 0.9);
  }

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const IconCircle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(192, 132, 252, 0.18);
  border: 1px solid rgba(168, 85, 247, 0.28);
  color: rgba(226, 232, 240, 0.9);

  svg {
    width: 20px;
    height: 20px;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: clamp(1.4rem, 3vw, 2.2rem);
`;

const InfoCard = styled(motion.div)`
  padding: clamp(1.6rem, 3.5vw, 2rem);
  border-radius: var(--radius-lg);
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(168, 85, 247, 0.22);
  display: grid;
  gap: 0.75rem;
  text-align: left;

  h3 {
    font-size: 1.2rem;
  }

  p {
    color: rgba(226, 232, 240, 0.7);
  }
`;

const ConnectSection = styled(motion.section)`
  padding: clamp(2rem, 4.5vw, 3rem);
  border-radius: var(--radius-lg);
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(168, 85, 247, 0.24);
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 1.25rem;
`;

const ConnectHeading = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.4rem);
`;

const ConnectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ConnectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.3rem;
  border-radius: 999px;
  border: 1px solid rgba(168, 85, 247, 0.26);
  background: rgba(15, 23, 42, 0.4);
  color: rgba(226, 232, 240, 0.92);
  transition: transform 0.25s ease, color 0.25s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: translateY(-2px);
    color: #ede9fe;
  }
`;
