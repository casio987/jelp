import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { BodyContainer, InterviewReviewPageContainer, MainBodyContainer, OtherContainer, Tag, TopCenterContainer, TopContainer } from "./style";
import InterviewIcon from "../../assets/videoCall.png";
import { Rating } from "@mui/material";
import ReviewPreviewCard from "../../components/ReviewPreviewCard/ReviewPreviewCard";
import { useParams } from "react-router-dom";
import { Palette } from "../../components/Palette";
import { useEffect, useState } from "react";
import { getInterviewReview } from "../../api/interview";
import ErrorPopup from "../../components/Popup/Popup";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";

const InterviewReviewPage = () => {
  const { interviewReviewId } = useParams();

  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [jobTitle, setJobTitle] = useState<string>("Job Title");
  const [companyName, setCompanyName] = useState<string>("Company name");
  const [experience, setExperience] = useState<string>("Interview experience...");
  const [questionsAsked, setQuestionsAsked] = useState<string>("Questions asked...");
  const [rating, setRating] = useState<number>(0);
  const [offerReceived, setOfferReceived] = useState<boolean>(false);
  const [dateOfPost, setDateOfPost] = useState<string>("");

  const loadInterviewReview = async () => {
    try {
      const { status, data } = await getInterviewReview(interviewReviewId!);
      if (status === 200) {
        setJobTitle(data.jobTitle);
        setCompanyName(data.atCompany);
        setExperience(data.experience);
        setQuestionsAsked(data.questionsAsked);
        setRating(data.rating);
        setOfferReceived(data.offerReceived);
        setDateOfPost(data.createdAt);
      } else {
        setErrorMsg(String(data));
      }
      setIsLoading(false);
    } catch (err: any) {
      setErrorMsg("A network error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadInterviewReview();
    // eslint-disable-next-line
  }, [])

  return (
    <InterviewReviewPageContainer>
      <ErrorPopup
        isOpen={errorMsg !== ""}
        popupMessage={errorMsg}
        handleClose={() => setErrorMsg("")}
        type="error"
      />
      {isLoading
        ? <LoadingOverlay isOpen={isLoading} />
        : (
          <>
            <Header />
            <MainBodyContainer>
              <TopContainer>
                {/* TODO: current placeholder till i figure out how to store images in db */}
                <img src={InterviewIcon} alt="companyLogo" />
                <TopCenterContainer>
                  <h1>{`${jobTitle} (${companyName})`}</h1>
                  <p>{dateOfPost}</p>
                  <Rating value={rating} readOnly />
                </TopCenterContainer>
                <Tag
                  backgroundcolor={offerReceived ? Palette.jelpGreen : Palette.jelpRed}
                >
                  Offer received
                </Tag>
              </TopContainer>
              <h2>Application/Interview Experience</h2>
              <BodyContainer>
                <p>
                  {experience}
                </p>
              </BodyContainer>
              <h2>Interview Questions</h2>
              <BodyContainer>
                <p>
                  {questionsAsked}
                </p>
              </BodyContainer>
              <h2>Other interview reviews for this company</h2>
              <OtherContainer>
                {/* TODO: replace placeholders with db data */}
                <ReviewPreviewCard
                  width="45%"
                  title="Frontend Engineer"
                  dateOfPost="20th March, 2020"
                  atCompany="Canva"
                  experience="Was great 10/10"
                  questionsAsked="Asked about experience and reversing a linked list"
                  offerReceived="Yes"
                  rating={5}
                />
                <ReviewPreviewCard
                  width="45%"
                  title="Frontend Engineer"
                  dateOfPost="20th March, 2020"
                  atCompany="Canva"
                  experience="Was great 10/10"
                  questionsAsked="Asked about experience and reversing a linked list"
                  offerReceived="Yes"
                  rating={5}
                />
              </OtherContainer>
            </MainBodyContainer>
            <Footer/>
          </>
        )
      }
    </InterviewReviewPageContainer>
  );
};

export default InterviewReviewPage;