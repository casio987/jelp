import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../api/auth";
import ErrorPopup from "../../components/Popup/Popup";
import { InputField, LoginPageContainer, LogoText, SubText, LoginButton, RedirectLink, MainContainer } from "./style";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const loginUser = async () => {
    if (email === "" || password === "") {
      setError("All fields must be filled.");
      return;
    }

    try {
      const { data } = await postLogin(email, password);
      sessionStorage.setItem(process.env.REACT_APP_TOKEN!, data);
      navigate('/home');
    } catch (err: any) {
      setError(err.response.data || "A network error occurred. Please try again.")
    }
  }

  return (
    <LoginPageContainer>
      <ErrorPopup
        isOpen={error !== ""}
        popupMessage={error}
        handleClose={() => setError("")}
        type="error"
      />
      <MainContainer>
        <LogoText onClick={() => navigate('/')}>jelp</LogoText>
        <SubText>
          Sign in to&nbsp;
          <span>
            jelp
          </span>
        </SubText>
        <InputField label="Email" error={error !== ""} onChange={(e) => setEmail(e.target.value)} />
        <InputField label="Password" error={error !== ""} type="password" onChange={(e) => setPassword(e.target.value)} />
        {/* TODO: include update password functionality */}
        <LoginButton onClick={loginUser}>Login</LoginButton>
        <span>
          New to jelp?&nbsp;
          <RedirectLink href="/signup">
            Sign up
          </RedirectLink>
        </span>
      </MainContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;