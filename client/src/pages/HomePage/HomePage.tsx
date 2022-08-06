import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HomePageCard from "./HomePageCard/HomePageCard";
import { HomePageContainer } from "./style";
import RateCompanyIcon from "../../assets/rateCompany.png";
import RateInterviewIcon from "../../assets/rateInterview.png";
import ViewReviewsIcon from "../../assets/viewReviews.png";
import InterviewIcon from "../../assets/interview.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <HomePageContainer>
      <Header />
      <HomePageCard 
        text="Add a review of your experience at a company"
        imageURL={RateCompanyIcon}
        handleClick={() => navigate('/rate/company', { replace: true })}
      />
      <HomePageCard 
        text="Add a review of your interview experience at a company"
        imageURL={RateInterviewIcon}
        handleClick={() => navigate('/rate/interview', { replace: true })}
      />
      <HomePageCard 
        text="Take a look at what others have said about a company"
        imageURL={ViewReviewsIcon}
        handleClick={() => navigate('/view/company', { replace: true })}
      />
      <HomePageCard 
        text="Need a run down of how your interview might go?"
        imageURL={InterviewIcon}
        handleClick={() => navigate('/view/interview', { replace: true })}
      />
      <Footer />
    </HomePageContainer>
  )
};

export default HomePage;