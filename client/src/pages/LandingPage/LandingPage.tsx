import Header from "../../components/Header/Header";
import { BannerContainer, IntroHeading, LandingPageContainer, SecondaryHeading, StartedButton } from "./style";
import Footer from "../../components/Footer/Footer";
import InstructionCard from "./InstructionCard/InstructionCard";
import { LandingPageInstructions } from "../../constants/LandingPageInstructions";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <LandingPageContainer>
      <Header />
      <BannerContainer>
        <IntroHeading>Welcome to jelp!</IntroHeading>
        <p>Want to know the ins and outs of applying for a specific company?</p>
        <p>Get a kick-start on your job searching journey!</p>
        <StartedButton onClick={() => navigate('/signup')}>
          Get started
        </StartedButton>
      </BannerContainer>
      <SecondaryHeading>How it works</SecondaryHeading>
      {LandingPageInstructions.map((instruction, index) => (
        <InstructionCard
          key={index}
          imageURL={instruction.imageUrl}
          instructionNo={index + 1}
          headingText={instruction.headingText}
          subText={instruction.subText}
        />
      ))}
      <Footer />
    </LandingPageContainer>
  )
};

export default LandingPage;