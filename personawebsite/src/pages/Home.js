import styled from "styled-components";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPostgresql, SiFirebase, SiCplusplus } from "react-icons/si";

const Home = () => {
  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Welcome to My Portfolio
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }}>
          Hi, I'm Joshua Hanif, a passionate Software Engineer specializing in full-stack development, automation, and scalable applications.
        </motion.p>
        <motion.a
          href="/portfolio"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          View My Work
        </motion.a>
      </HeroSection>

      {/* Tech Stack Section */}
      <TechStackSection>
        <h2>My Current Tech Stack</h2>
        <TechIcons>
          <div>
            <FaReact size={50} color="#61DAFB" />
            <p>React</p>
          </div>
          <div>
            <SiJavascript size={50} color="#F7DF1E" />
            <p>JavaScript</p>
          </div>
          <div>
            <SiTypescript size={50} color="#3178C6" />
            <p>TypeScript</p>
          </div>
          <div>
            <FaNodeJs size={50} color="#68A063" />
            <p>Node.js</p>
          </div>
          <div>
            <FaPython size={50} color="#3776AB" />
            <p>Python</p>
          </div>
          <div>
            <FaJava size={50} color="#E76F00" />
            <p>Java</p>
          </div>
          <div>
            <SiCplusplus size={50} color="#00599C" />
            <p>C++</p>
          </div>
          <div>
            <SiPostgresql size={50} color="#336791" />
            <p>PostgreSQL</p>
          </div>
          <div>
            <SiFirebase size={50} color="#FFCA28" />
            <p>Firebase</p>
          </div>
          <div>
            <FaDocker size={50} color="#2496ED" />
            <p>Docker</p>
          </div>
          <div>
            <FaGitAlt size={50} color="#F34F29" />
            <p>Git</p>
          </div>
        </TechIcons>
      </TechStackSection>
    </HomeContainer>
  );
};

export default Home;

// Styled Components
const HomeContainer = styled.div`
  background: #f4f4f4;
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 8rem 2rem;
  background: #e0e0e0;
  color: #222;
  min-height: 60vh;
  
  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  a {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.8rem 1.5rem;
    background: #ffcc00;
    color: #222;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
  }
`;

const TechStackSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: #d9d9d9;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const TechIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  div {
    text-align: center;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
  }
`;