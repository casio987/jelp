import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import CompanyListPage from "./pages/CompanyListPage/CompanyListPage";
import CompanyReviewPage from "./pages/CompanyReviewPage/CompanyReviewPage";
import HomePage from "./pages/HomePage/HomePage";
import InterviewListPage from "./pages/InterviewListPage/InterviewListPage";
import InterviewReviewPage from "./pages/InterviewReviewPage/InterviewReviewPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RateCompanyPage from "./pages/RateCompanyPage/RateCompanyPage";
import RateInterviewPage from "./pages/RateInterviewPage/RateInterviewPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

const AuthenticatedRoutes = () => {
  const token = sessionStorage.getItem(process.env.REACT_APP_TOKEN!);
  return (
    !!token ? <Outlet /> : <Navigate to="/" />
  );
};

const Router = () => (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/signup' element={ <SignUpPage /> } />
        <Route path='/login' element={ <LoginPage /> } />
        <Route element={<AuthenticatedRoutes />}>
          <Route path='/home' element={ <HomePage /> } />
          <Route path='/rate/company' element={ <RateCompanyPage /> } />
          <Route path='/rate/interview' element={ <RateInterviewPage /> } />
          <Route path='/profile' element={ <ProfilePage /> } />
          <Route path='/view/company/list' element={ <CompanyListPage /> } />
          <Route path='/view/interview/list' element={ <InterviewListPage /> } />
          <Route path='/view/company/:companyReviewId' element={ <CompanyReviewPage /> } />
          <Route path='/view/interview/:interviewReviewId' element={ <InterviewReviewPage /> } />
        </Route>
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
    </BrowserRouter>
);

export default Router;