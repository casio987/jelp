import Header from "../../components/Header/Header";
import { BannerContainer, IntroHeading, LandingPageContainer, SecondaryHeading, StartedButton, TextContainer } from "./style";
import Footer from "../../components/Footer/Footer";
import InstructionCard from "./InstructionCard/InstructionCard";
import { LandingPageInstructions } from "../../constants/LandingPageInstructions";

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Header />
      <BannerContainer>
        <TextContainer>
          <IntroHeading>Welcome to jelp!</IntroHeading>
          <p>Want to know the ins and outs of applying for a specific company?</p>
          <p>Get a kick-start on your job searching journey!</p>
          <StartedButton>
            Get started
          </StartedButton>
        </TextContainer>
        {/* TODO: add image/view of demo usage? */}
      </BannerContainer>
      <SecondaryHeading>How it works</SecondaryHeading>
      {LandingPageInstructions.map((instruction, index) => (
        <InstructionCard
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