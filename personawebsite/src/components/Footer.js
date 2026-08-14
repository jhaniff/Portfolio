import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { PROFILE, resumeLinkProps } from "../data";

const socialLinks = [
  { icon: <FaGithub />, label: "GitHub", href: PROFILE.github },
  { icon: <FaLinkedin />, label: "LinkedIn", href: PROFILE.linkedin },
  { icon: <FaEnvelope />, label: "Email", href: `mailto:${PROFILE.email}` },
];

const Footer = () => {
  return (
    <FooterShell>
      <Glow />
      <FooterContent>
        <Brand>Joshua Hanif</Brand>
        <Subheading>Software Engineer · Toronto, Ontario</Subheading>
        <Callout>
          Open to software engineering roles that combine product delivery with serious quality and automation.
        </Callout>

        <SocialRow>
          {socialLinks.map(({ icon, label, href }) => (
            <SocialButton
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {icon}
              <span>{label}</span>
            </SocialButton>
          ))}
          <SocialButton {...resumeLinkProps}>Resume</SocialButton>
        </SocialRow>

        <Legal>© {new Date().getFullYear()} Joshua Hanif</Legal>
      </FooterContent>
    </FooterShell>
  );
};

export default Footer;

const FooterShell = styled.footer`
  position: relative;
  margin: var(--space-7) auto var(--space-6);
  width: min(var(--content-width), 100%);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: var(--hero-gradient);
  box-shadow: var(--shadow-soft);
`;

const Glow = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, rgba(45, 212, 191, 0.18), transparent 55%);
  pointer-events: none;
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 1;
  padding: var(--space-7) var(--space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  text-align: center;
`;

const Brand = styled.p`
  font-size: var(--text-2xl);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const Subheading = styled.p`
  color: var(--color-muted);
  font-size: var(--text-md);
`;

const Callout = styled.p`
  font-size: var(--text-lg);
  max-width: 34rem;
  color: var(--color-text);
`;

const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-3);
`;

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.7rem 1.3rem;
  border-radius: 999px;
  background: rgba(45, 212, 191, 0.1);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-weight: 500;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: translateY(-2px);
    color: var(--color-text);
    background: rgba(45, 212, 191, 0.2);
    box-shadow: var(--shadow-glow);
  }
`;

const Legal = styled.small`
  font-size: var(--text-sm);
  color: var(--color-muted);
`;
