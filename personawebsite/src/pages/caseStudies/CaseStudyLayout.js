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
  color: rgba(216, 180, 254, 0.9);
  text-transform: uppercase;
  font-size: 0.75rem;
  transition: color 0.25s ease;

  &:hover {
    color: #ede9fe;
  }
`;

export const CaseHero = styled(motion.section)`
  display: grid;
  gap: clamp(1rem, 2.5vw, 1.6rem);
  padding: clamp(2.2rem, 5vw, 3.2rem);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, rgba(26, 10, 43, 0.92), rgba(109, 40, 217, 0.6));
  border: 1px solid rgba(168, 85, 247, 0.24);
  box-shadow: var(--shadow-soft);
`;

export const HeroEyebrow = styled.span`
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: rgba(216, 180, 254, 0.75);
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 2.9rem);
  line-height: 1.2;
`;

export const HeroSummary = styled.p`
  color: rgba(226, 232, 240, 0.8);
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
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(168, 85, 247, 0.22);
  display: grid;
  gap: 0.35rem;

  span {
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(216, 180, 254, 0.8);
  }

  strong {
    color: rgba(226, 232, 240, 0.9);
  }
`;

export const CaseSection = styled(motion.section)`
  padding: clamp(1.8rem, 4vw, 2.6rem);
  border-radius: var(--radius-lg);
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(168, 85, 247, 0.18);
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 1rem;
`;

export const SectionHeading = styled.h2`
  font-size: clamp(1.6rem, 4vw, 2.2rem);
`;

export const SectionSubheading = styled.h3`
  font-size: clamp(1.1rem, 2.6vw, 1.4rem);
  color: rgba(226, 232, 240, 0.85);
`;

export const SectionBody = styled.p`
  color: rgba(226, 232, 240, 0.75);
  line-height: 1.7;
`;

export const Checklist = styled.ul`
  display: grid;
  gap: 0.75rem;
  color: rgba(226, 232, 240, 0.78);

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
  background: rgba(26, 10, 43, 0.7);
  border: 1px solid rgba(168, 85, 247, 0.2);
  display: grid;
  gap: 0.35rem;
  text-align: left;

  strong {
    font-size: 1.6rem;
    color: rgba(242, 233, 255, 0.95);
  }

  span {
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(216, 180, 254, 0.75);
  }

  p {
    color: rgba(226, 232, 240, 0.75);
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
  border: 1px solid rgba(216, 180, 254, 0.32);
  color: rgba(226, 232, 240, 0.88);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(216, 180, 254, 0.18);
  }
`;
