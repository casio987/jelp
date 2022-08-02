import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputField, LoginPageContainer, LogoText, SubText, LoginButton, RedirectLink } from "./style";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = () => {
    console.log(email, password);
  }

  return (
    <LoginPageContainer>
      <LogoText onClick={() => navigate('/', { replace: true })}>jelp</LogoText>
      <SubText>
        Sign in to&nbsp;
        <span>
          jelp
        </span>
      </SubText>
      <InputField label="Email" onChange={(e) => setEmail(e.target.value)} />
      <InputField label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      {/* TODO: include update password functionality */}
      <LoginButton onClick={() => login()}>Login</LoginButton>
      <span>
        New to jelp?&nbsp;
        <RedirectLink href="/signup">
          Sign up
        </RedirectLink>
      </span>
    </LoginPageContainer>
  );
};

export default LoginPage;