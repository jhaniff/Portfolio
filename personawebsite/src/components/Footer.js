import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Joshua Hanif | All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

// Styled Components
const FooterContainer = styled.footer`
  background: #1c1c1c;
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
`;