import { Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../api/auth";
import { InputField, LoginPageContainer, LogoText, SubText, LoginButton, RedirectLink } from "./style";

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
      const { status, data } = await postLogin(email, password);
      if (status === 200) {
        sessionStorage.setItem(process.env.REACT_APP_TOKEN!, data);
        navigate('/home');
      } else {
        setError(data);
      }
    } catch (err: any) {
      setError("A network error occurred. Please try again.");
    }
  }

  return (
    <>
      {error !== ""
        ? (
          <Alert variant="filled" severity="error" onClose={() => setError("")}>
            {error}
          </Alert>        
        ) : null
      }
      <LoginPageContainer>
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
      </LoginPageContainer>
    </>
  );
};

export default LoginPage;