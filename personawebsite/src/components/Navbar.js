import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Resume", path: "/resume" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Header>
      <Brand
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Joshua Hanif
      </Brand>

      <DesktopNav>
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <NavItem key={link.path} $active={isActive}>
              <StyledLink to={link.path} $active={isActive}>
                {link.label}
              </StyledLink>
            </NavItem>
          );
        })}
      </DesktopNav>

      <MenuToggle onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle navigation" $active={isOpen}>
        {isOpen ? <FiX /> : <FiMenu />}
      </MenuToggle>

      <AnimatePresence>
        {isOpen && (
          <MobileNav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <MobileNavItem key={link.path} $active={isActive}>
                  <StyledLink to={link.path} $active={isActive}>
                    {link.label}
                  </StyledLink>
                </MobileNavItem>
              );
            })}
          </MobileNav>
        )}
      </AnimatePresence>
    </Header>
  );
};

export default Navbar;

const Header = styled(motion.header)`
  position: sticky;
  top: 0;
  z-index: 10;
  margin: 0 auto;
  width: min(1180px, 100%);
  padding: clamp(1.25rem, 3vw, 2.5rem) clamp(1.5rem, 3vw, 2.75rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(1rem, 2vw, 2rem);
  backdrop-filter: blur(18px);
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.6));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
`; 

const Brand = styled(motion.h1)`
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text);
`;

const DesktopNav = styled.ul`
  display: flex;
  align-items: center;
  gap: clamp(1rem, 2.5vw, 1.75rem);

  @media (max-width: 820px) {
    display: none;
  }
`;

const NavItem = styled.li`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: ${({ $active }) => ($active ? "100%" : "0")};
    height: 2px;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--color-accent), var(--color-accent-strong));
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  font-weight: 500;
  letter-spacing: 0.04em;
  color: ${({ $active }) => ($active ? "var(--color-accent)" : "var(--color-text)")};
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-accent);
  }
`;

const MenuToggle = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  border-radius: 50%;
  background: rgba(192, 132, 252, ${({ $active }) => ($active ? "0.22" : "0.12")});
  border: 1px solid rgba(168, 85, 247, 0.35);
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.25s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(147, 51, 234, 0.28);
  }

  @media (max-width: 820px) {
    display: inline-flex;
  }
`;

const MobileNav = styled(motion.ul)`
  position: absolute;
  top: calc(100% + 1rem);
  left: clamp(1.25rem, 6vw, 2.25rem);
  right: clamp(1.25rem, 6vw, 2.25rem);
  padding: clamp(1.25rem, 3vw, 1.75rem);
  border-radius: var(--radius-lg);
  background: linear-gradient(135deg, rgba(28, 11, 43, 0.94), rgba(33, 12, 52, 0.82));
  border: 1px solid rgba(168, 85, 247, 0.2);
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (min-width: 821px) {
    display: none;
  }
`;

const MobileNavItem = styled.li`
  padding-bottom: 0.35rem;
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
  color: ${({ $active }) => ($active ? "var(--color-accent)" : "var(--color-text)")};

  &:last-child {
    border-bottom: none;
  }
`;