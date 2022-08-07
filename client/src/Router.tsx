import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RateCompanyPage from "./pages/RateCompanyPage/RateCompanyPage";
import RateInterviewPage from "./pages/RateInterviewPage/RateInterviewPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

// TODO: include tokenised routes
const Router = () => (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/signup' element={ <SignUpPage /> } />
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/home' element={ <HomePage /> } />
        <Route path='/rate/company' element={ <RateCompanyPage /> } />
        <Route path='/rate/interview' element={ <RateInterviewPage /> } />
        <Route path='/view/company' element={ <div>view company</div> } />
        <Route path='/view/interview' element={ <div>view interview</div> } />
      </Routes>
    </BrowserRouter>
);

export default Router;