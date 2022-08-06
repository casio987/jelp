import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

const Router = () => (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/signup' element={ <SignUpPage /> } />
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/home' element={ <HomePage /> } />
      </Routes>
    </BrowserRouter>
);

export default Router;