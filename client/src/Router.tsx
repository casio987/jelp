import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompanyReviewPage from "./pages/CompanyReviewPage/CompanyReviewPage";
import HomePage from "./pages/HomePage/HomePage";
import InterviewListPage from "./pages/InterviewListPage/InterviewListPage";
import InterviewReviewPage from "./pages/InterviewReviewPage/InterviewReviewPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RateCompanyPage from "./pages/RateCompanyPage/RateCompanyPage";
import RateInterviewPage from "./pages/RateInterviewPage/RateInterviewPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

// TODO: check that this works
// const AuthenticatedRoute = (props: RouteProps) => {
//   const token = sessionStorage.getItem(process.env.REACT_APP_TOKEN!);
//   return (
//     <Route {...props}>{!!token ? props.children : <LoginPage/>}</Route>
//     );
// };

const Router = () => (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/signup' element={ <SignUpPage /> } />
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/home' element={ <HomePage /> } />
        <Route path='/rate/company' element={ <RateCompanyPage /> } />
        <Route path='/rate/interview' element={ <RateInterviewPage /> } />
        <Route path='/profile' element={ <ProfilePage /> } />
        <Route path='/view/company/list' element={ <div>view list of company reviews</div> } />
        <Route path='/view/interview/list' element={ <InterviewListPage /> } />
        <Route path='/view/company/:companyReviewId' element={ <CompanyReviewPage /> } />
        <Route path='/view/interview/:interviewReviewId' element={ <InterviewReviewPage /> } />
      </Routes>
    </BrowserRouter>
);

export default Router;