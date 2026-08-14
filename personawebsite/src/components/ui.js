import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--section-gap);
  padding: var(--space-5) 0 var(--space-7);
`;

export const Section = styled(motion.section)`
  width: min(var(--content-width), 100%);
  margin: 0 auto;
  scroll-margin-top: var(--nav-offset);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 40rem;
`;

export const Eyebrow = styled.span`
  text-transform: uppercase;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.16em;
  color: var(--color-accent-text);
`;

export const SectionTitle = styled.h2`
  font-size: var(--text-3xl);
  line-height: 1.2;
  font-weight: 700;
`;

export const SectionLead = styled.p`
  color: var(--color-muted);
  font-size: var(--text-md);
`;

export const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  border-radius: 999px;
  border: 1px solid transparent;
  font-weight: 600;
  font-size: var(--text-sm);
  letter-spacing: 0.03em;
  transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
`;

export const primaryFill = css`
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-strong));
  color: var(--color-on-accent);
  border-color: var(--color-accent-strong);

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, var(--color-accent-text), var(--color-accent));
    border-color: var(--color-accent-text);
  }
`;

export const secondaryFill = css`
  color: var(--color-text);
  background: var(--color-panel);
  border-color: var(--color-border);

  &:hover {
    transform: translateY(-2px);
    background: rgba(45, 212, 191, 0.12);
    border-color: var(--color-accent);
  }
`;

export const PrimaryLink = styled(Link)`
  ${buttonStyles}
  ${primaryFill}
`;

export const SecondaryLink = styled(Link)`
  ${buttonStyles}
  ${secondaryFill}
`;

export const PrimaryAnchor = styled.a`
  ${buttonStyles}
  ${primaryFill}
`;

export const SecondaryAnchor = styled.a`
  ${buttonStyles}
  ${secondaryFill}
`;

export const Card = styled.article`
  padding: clamp(1.4rem, 3vw, 2rem);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  display: grid;
  gap: var(--space-3);
`;

export const ChipList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

export const Chip = styled.li`
  padding: var(--space-1) var(--space-3);
  border-radius: 999px;
  background: rgba(45, 212, 191, 0.12);
  border: 1px solid var(--color-border);
  font-size: var(--text-xs);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-accent-text);
`;

export const TextLink = styled(Link)`
  color: var(--color-accent-text);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  border-bottom: 1px solid transparent;
  width: fit-content;

  &:hover {
    color: var(--color-text);
    border-bottom-color: var(--color-accent);
  }
`;
