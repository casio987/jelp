import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../api/auth";
import ErrorPopup from "../../components/Popup/Popup";
import { SignUpPageContainer, LogoText, SubText, SubSubText, SignUpButton, RedirectLink, InputField, MainBody} from "./style";

const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const signUp = async () => {
    if (email === "" || password === "") {
      setError("All fields must be filled.");
      return;
    } else if (password !== confirmedPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const { data } = await postRegister(email, password);
      sessionStorage.setItem(process.env.REACT_APP_TOKEN!, data);
      navigate('/home');
    } catch (err: any) {
      setError(err.response.data || "A network error occurred. Please try again.");
    }
  }
  
  return (
    <SignUpPageContainer>
      <ErrorPopup
        isOpen={error !== ""}
        popupMessage={error}
        handleClose={() => setError("")}
        type="error"
      />
      <MainBody>
        <LogoText onClick={() => navigate('/')}>
          jelp
        </LogoText>
        <SubText>Sign up now</SubText>
        <SubSubText>Kick-start your job searching journey with us</SubSubText>
        <InputField label="Email" error={error !== ""} onChange={(e) => setEmail(e.target.value)} />
        <InputField label="Password" error={error !== ""} type="password" onChange={(e) => setPassword(e.target.value)} />
        <InputField label="Confirm password" error={error !== ""} type="password" onChange={(e) => setConfirmedPassword(e.target.value)} />
        <SignUpButton onClick={() => signUp()}>Sign Up</SignUpButton>
        <span>
          Already have an account? &nbsp;
          <RedirectLink href="/login">
            Sign in
          </RedirectLink>
        </span>
      </MainBody>
    </SignUpPageContainer>    
  );
};

export default SignUpPage;