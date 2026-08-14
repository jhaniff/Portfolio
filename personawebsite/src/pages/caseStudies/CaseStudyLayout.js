import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const CaseStudyShell = styled.div`
  display: grid;
  gap: var(--section-gap);
  width: min(960px, 100%);
  margin: 0 auto;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
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
  gap: var(--space-5);
  padding: clamp(2rem, 5vw, 3rem);
  border-radius: var(--radius-lg);
  background: var(--hero-gradient);
  border: 1px solid var(--color-border);
`;

export const HeroEyebrow = styled.span`
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: var(--text-xs);
  color: var(--color-accent-text);
`;

export const HeroTitle = styled.h1`
  font-size: var(--text-4xl);
  line-height: 1.2;
`;

export const HeroSummary = styled.p`
  color: var(--color-muted);
  line-height: 1.65;
`;

export const HeroMetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-4);
`;

export const HeroMetaCard = styled.div`
  padding: var(--space-4) var(--space-5);
  border-radius: var(--radius-md);
  background: var(--color-panel);
  border: 1px solid var(--color-border);
  display: grid;
  gap: var(--space-1);

  span {
    font-size: var(--text-xs);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-accent-text);
  }

  strong {
    color: var(--color-text);
  }
`;

export const CaseSection = styled(motion.section)`
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  display: grid;
  gap: var(--space-4);
`;

export const SectionHeading = styled.h2`
  font-size: var(--text-3xl);
`;

export const SectionSubheading = styled.h3`
  font-size: var(--text-xl);
  color: var(--color-text);
`;

export const SectionBody = styled.p`
  color: var(--color-muted);
  line-height: 1.7;
`;

export const Checklist = styled.ul`
  display: grid;
  gap: var(--space-3);
  color: var(--color-muted);

  li {
    display: flex;
    gap: var(--space-2);
    align-items: flex-start;
  }
`;

export const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: var(--space-4);
`;

export const MetricCard = styled.div`
  padding: var(--space-4);
  border-radius: var(--radius-md);
  background: var(--color-panel);
  border: 1px solid var(--color-border);
  display: grid;
  gap: var(--space-1);
  text-align: left;

  strong {
    font-size: var(--text-2xl);
    color: var(--color-text);
  }

  span {
    font-size: var(--text-xs);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-accent-text);
  }

  p {
    color: var(--color-muted);
    font-size: var(--text-sm);
    line-height: 1.5;
  }
`;

export const ResourceLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
`;

export const ResourceButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  border-radius: 999px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(45, 212, 191, 0.14);
    border-color: var(--color-accent);
  }
`;
