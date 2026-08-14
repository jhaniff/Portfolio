import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { navSections, resumeLinkProps } from "../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const { pathname, hash } = useLocation();
  const onHome = pathname === "/";
  const toggleRef = useRef(null);
  const mobileNavRef = useRef(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    if (wasOpenRef.current && !isOpen) {
      toggleRef.current?.focus();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const nav = mobileNavRef.current ?? document.getElementById("mobile-nav");
    const toggle = toggleRef.current;
    const links = nav ? nav.querySelectorAll("a[href]") : [];
    links[0]?.focus();

    const getItems = () => {
      const navLinks = nav ? Array.from(nav.querySelectorAll("a[href]")) : [];
      return toggle ? [toggle, ...navLinks] : navLinks;
    };

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const items = getItems();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!onHome) {
      setActiveHash("");
      return undefined;
    }

    const ids = navSections.map((section) => section.hash);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveHash(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [onHome]);

  const isActive = (sectionHash) => {
    if (sectionHash === "projects" && pathname.startsWith("/portfolio")) return true;
    if (sectionHash === "contact" && pathname === "/resume") return false;
    return onHome && activeHash === sectionHash;
  };

  return (
    <Header>
      <Brand to="/" aria-label="Joshua Hanif home">
        Joshua Hanif
      </Brand>

      <DesktopNav aria-label="Primary">
        {navSections.map((link) => (
          <NavItem key={link.hash} $active={isActive(link.hash)}>
            <NavLink
              to={{ pathname: "/", hash: `#${link.hash}` }}
              $active={isActive(link.hash)}
              aria-current={isActive(link.hash) ? "true" : undefined}
            >
              {link.label}
            </NavLink>
          </NavItem>
        ))}
        <NavItem>
          <ResumeLink {...resumeLinkProps}>Resume</ResumeLink>
        </NavItem>
      </DesktopNav>

      <MenuToggle
        ref={toggleRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        $active={isOpen}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </MenuToggle>

      <AnimatePresence>
        {isOpen && (
          <MobileNav
            ref={mobileNavRef}
            id="mobile-nav"
            aria-label="Primary"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {navSections.map((link) => (
              <MobileNavItem key={link.hash} $active={isActive(link.hash)}>
                <NavLink
                  to={{ pathname: "/", hash: `#${link.hash}` }}
                  $active={isActive(link.hash)}
                  aria-current={isActive(link.hash) ? "true" : undefined}
                >
                  {link.label}
                </NavLink>
              </MobileNavItem>
            ))}
            <MobileNavItem>
              <ResumeLink {...resumeLinkProps}>Resume</ResumeLink>
            </MobileNavItem>
          </MobileNav>
        )}
      </AnimatePresence>
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  position: sticky;
  top: var(--space-1);
  z-index: 10;
  margin: 0 auto;
  width: min(var(--content-width), 100%);
  padding: var(--space-4) var(--space-5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  backdrop-filter: blur(18px);
  background: var(--nav-gradient);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);

  @media (max-width: 768px) {
    padding: var(--space-3) var(--space-4);
  }
`;

const Brand = styled(Link)`
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text);

  &:hover {
    color: var(--color-accent-text);
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--space-5);

  @media (max-width: 820px) {
    display: none;
  }
`;

const NavItem = styled.div`
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

const NavLink = styled(Link)`
  font-weight: 500;
  font-size: var(--text-sm);
  letter-spacing: 0.04em;
  color: ${({ $active }) => ($active ? "var(--color-accent-text)" : "var(--color-text)")};
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-accent-text);
  }
`;

const ResumeLink = styled.a`
  font-weight: 500;
  font-size: var(--text-sm);
  letter-spacing: 0.04em;
  color: var(--color-text);

  &:hover {
    color: var(--color-accent-text);
  }
`;

const MenuToggle = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  padding: var(--space-3);
  border-radius: 50%;
  background: rgba(45, 212, 191, ${({ $active }) => ($active ? "0.22" : "0.1")});
  border: 1px solid var(--color-border);
  color: var(--color-text);
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: rgba(45, 212, 191, 0.22);
    border-color: var(--color-accent);
  }

  @media (max-width: 820px) {
    display: inline-flex;
  }
`;

const MobileNav = styled(motion.nav)`
  position: absolute;
  top: calc(100% + var(--space-3));
  left: var(--space-4);
  right: var(--space-4);
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  background: var(--nav-gradient);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  @media (min-width: 821px) {
    display: none;
  }
`;

const MobileNavItem = styled.div`
  padding-bottom: var(--space-3);
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
  color: ${({ $active }) => ($active ? "var(--color-accent-text)" : "var(--color-text)")};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;
