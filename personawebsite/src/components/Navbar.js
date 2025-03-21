import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <NavBar>
      <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        Joshua Hanif
      </motion.h2>
      <NavLinks>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/">Home</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/portfolio">Portfolio</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/about">About</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/contact">Contact</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="/resume">Resume</Link>
        </motion.li>
      </NavLinks>
    </NavBar>
  );
};

export default Navbar;

// Styled Components
const NavBar = styled.nav`
  background: #1c1c1c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  color: white;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;

  li {
    display: inline;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ffcc00;
    }
  }
`;