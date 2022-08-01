import { FooterContainer } from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      © jelp {new Date().getFullYear()}
    </FooterContainer>
  )
};

export default Footer;