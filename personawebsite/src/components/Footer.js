import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/jhaniff" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/joshua-hanif" },
  { icon: <FaEnvelope />, label: "Email", href: "mailto:hanifjoshua1@gmail.com" },
];

const Footer = () => {
  return (
    <FooterShell>
      <Glow />
      <FooterContent>
        <Brand>
          Joshua Hanif
        </Brand>
        <Subheading>Automation-focused software engineer • Toronto, Ontario.</Subheading>

        <Callout>
          Let’s collaborate on your next intelligent platform, QA initiative, or AI-assisted product experience.
        </Callout>

        <SocialRow>
          {socialLinks.map(({ icon, label, href }) => (
            <SocialButton
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              {icon}
              <span>{label}</span>
            </SocialButton>
          ))}
        </SocialRow>

        <Legal>
          © {new Date().getFullYear()} • Built with intention. {/* Feel free to adjust copy */}
        </Legal>
      </FooterContent>
    </FooterShell>
  );
};

export default Footer;

const FooterShell = styled.footer`
  position: relative;
  margin: clamp(3rem, 6vw, 5rem) auto clamp(2rem, 5vw, 4rem);
  width: min(1180px, 100%);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(168, 85, 247, 0.22);
  background: linear-gradient(135deg, rgba(27, 13, 44, 0.94), rgba(36, 12, 53, 0.8));
  box-shadow: var(--shadow-soft);
`;

const Glow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(192, 132, 252, 0.22), transparent 55%);
  opacity: 0.8;
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 1;
  padding: clamp(2.5rem, 5vw, 3.5rem) clamp(1.75rem, 4vw, 3.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.25rem, 3vw, 2rem);
  text-align: center;
`;

const Brand = styled(motion.h3)`
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const Subheading = styled.p`
  color: var(--color-muted);
  font-size: clamp(1rem, 2vw, 1.1rem);
`;

const Callout = styled.p`
  font-size: clamp(1.05rem, 2.4vw, 1.2rem);
  max-width: 540px;
  color: var(--color-text);
`;

const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(0.75rem, 2vw, 1.2rem);
`;

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.7rem 1.3rem;
  border-radius: 999px;
  background: rgba(192, 132, 252, 0.12);
  border: 1px solid rgba(168, 85, 247, 0.22);
  color: var(--color-text);
  transition: all 0.3s ease;
  font-weight: 500;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: translateY(-2px);
    color: #fdf4ff;
    background: rgba(192, 132, 252, 0.24);
    box-shadow: var(--shadow-glow);
  }
`;

const Legal = styled.small`
  font-size: 0.85rem;
  color: rgba(237, 233, 254, 0.7);
`;