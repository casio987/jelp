import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpPageContainer, LogoText, SubText, SubSubText, SignUpButton, RedirectLink, InputField} from "./style";

const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const signUp = () => {
    console.log(email, password);
  }
  
  return (
    <SignUpPageContainer>
      <LogoText onClick={() => navigate('/')}>
        jelp
      </LogoText>
      <SubText>Sign up now</SubText>
      <SubSubText>Kick-start your job searching journey with us</SubSubText>
      <InputField label="Email" onChange={(e) => setEmail(e.target.value)} />
      <InputField label="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <SignUpButton onClick={() => signUp()}>Sign Up</SignUpButton>
      <span>
        Already have an account? &nbsp;
        <RedirectLink href="/login">
          Sign in
        </RedirectLink>
      </span>
    </SignUpPageContainer>
  );
};

export default SignUpPage;