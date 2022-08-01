import { HeaderContainer, SignUpButton, Logo, LoginLink } from "./style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/', { replace: true })}>jelp</Logo>
      <LoginLink href="/login">Login</LoginLink>
      <SignUpButton onClick={() => navigate('/signup', { replace: true })}>Sign up</SignUpButton>
    </HeaderContainer>
  )
};

export default Header;