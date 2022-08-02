import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SignUpPageContainer, LogoText, SubText, SubSubText, SignUpButton, RedirectLink } from "./style";

const SignUpPage = () => {
  
  const navigate = useNavigate();

  // const signUp = () => {

  // }
  
  return (
    <SignUpPageContainer>
      <LogoText onClick={() => navigate('/', { replace: true })}>jelp</LogoText>
      <SubText>Sign up now</SubText>
      <SubSubText>Kick-start your job searching journey with us</SubSubText>
      <TextField variant="outlined" label="Email" sx={{ marginBottom: "1rem", width: "100%" }} />
      <TextField variant="outlined" label="Password" type="password" sx={{ marginBottom: "1rem", width: "100%" }} />
      <SignUpButton>Sign Up</SignUpButton>
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