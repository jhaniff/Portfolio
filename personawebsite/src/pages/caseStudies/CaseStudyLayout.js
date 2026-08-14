import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const CaseStudyShell = styled.div`
  display: grid;
  gap: clamp(2.4rem, 5vw, 3.8rem);
  width: min(960px, 100%);
  margin: 0 auto;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--color-accent-text);
  text-transform: uppercase;
  font-size: var(--text-xs);
  transition: color 0.25s ease;

  &:hover {
    color: var(--color-text);
  }
`;

export const CaseHero = styled(motion.section)`
  display: grid;
  gap: clamp(1rem, 2.5vw, 1.6rem);
  padding: clamp(2.2rem, 5vw, 3.2rem);
  border-radius: var(--radius-lg);
  background: var(--hero-gradient);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-soft);
`;

export const HeroEyebrow = styled.span`
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--color-accent-text);
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 2.9rem);
  line-height: 1.2;
`;

export const HeroSummary = styled.p`
  color: var(--color-muted);
  line-height: 1.65;
`;

export const HeroMetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const HeroMetaCard = styled.div`
  padding: 1rem 1.2rem;
  border-radius: var(--radius-md);
  background: var(--color-panel);
  border: 1px solid var(--color-border);
  display: grid;
  gap: 0.35rem;

  span {
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-accent-text);
  }

  strong {
    color: var(--color-text);
  }
`;

export const CaseSection = styled(motion.section)`
  padding: clamp(1.8rem, 4vw, 2.6rem);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 1rem;
`;

export const SectionHeading = styled.h2`
  font-size: clamp(1.6rem, 4vw, 2.2rem);
`;

export const SectionSubheading = styled.h3`
  font-size: clamp(1.1rem, 2.6vw, 1.4rem);
  color: var(--color-text);
`;

export const SectionBody = styled.p`
  color: var(--color-muted);
  line-height: 1.7;
`;

export const Checklist = styled.ul`
  display: grid;
  gap: 0.75rem;
  color: var(--color-muted);

  li {
    display: flex;
    gap: 0.6rem;
    align-items: flex-start;
  }
`;

export const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
`;

export const MetricCard = styled.div`
  padding: 1rem;
  border-radius: var(--radius-md);
  background: var(--color-panel);
  border: 1px solid var(--color-border);
  display: grid;
  gap: 0.35rem;
  text-align: left;

  strong {
    font-size: 1.6rem;
    color: var(--color-text);
  }

  span {
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-accent-text);
  }

  p {
    color: var(--color-muted);
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

export const ResourceLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const ResourceButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.7rem 1.2rem;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(45, 212, 191, 0.14);
  }
`;
