import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";

const Router = () => (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LandingPage /> }></Route>
      </Routes>
    </BrowserRouter>
);

export default Router;