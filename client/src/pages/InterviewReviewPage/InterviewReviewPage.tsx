import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { BodyContainer, InterviewReviewPageContainer, MainBodyContainer, OtherContainer, Tag, TopCenterContainer, TopContainer } from "./style";
import InterviewIcon from "../../assets/videoCall.png";
import { Rating } from "@mui/material";
import ReviewPreviewCard from "../../components/ReviewPreviewCard/ReviewPreviewCard";
import { useParams } from "react-router-dom";
import { Palette } from "../../components/Palette";
import { useEffect, useState } from "react";
import { getInterviewReview, getSimilarInterviewReviews } from "../../api/interview";
import ErrorPopup from "../../components/Popup/Popup";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import { IInterviewReviewData } from "../../interfaces/api-responses";

const InterviewReviewPage = () => {
  const { interviewReviewId } = useParams();

  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [interviewReview, setInterviewReview] = useState<IInterviewReviewData>({
    // placeholder
    id: 0,
    jobTitle: "Job Title",
    atCompany: "Company name",
    experience: "Interview experience...",
    questionsAsked: "Questions asked...",
    rating: 0,
    offerReceived: false,
    createdAt: ""
  });

  // const [jobTitle, setJobTitle] = useState<string>("Job Title");
  // const [companyName, setCompanyName] = useState<string>("Company name");
  // const [experience, setExperience] = useState<string>("Interview experience...");
  // const [questionsAsked, setQuestionsAsked] = useState<string>("Questions asked...");
  // const [rating, setRating] = useState<number>(0);
  // const [offerReceived, setOfferReceived] = useState<boolean>(false);
  // const [dateOfPost, setDateOfPost] = useState<string>("");

  const [similarReviews, setSimilarReviews] = useState<IInterviewReviewData[]>([]);

  const loadInterviewReview = async () => {
    try {
      const { data } = await getInterviewReview(interviewReviewId!);
      setInterviewReview(data);
    } catch (err: any) {
      setErrorMsg(err.response.data || "A network error occurred. Please try again.")
    }
  };

  const loadSimilarReviews = async () => {
    try {
      const { data } = await getSimilarInterviewReviews(interviewReview.atCompany);
      setSimilarReviews(data);
    } catch (err: any) {
      throw err;
    }
  };

  const renderSimilarReviews = similarReviews.map((review) => (
    <ReviewPreviewCard
      key={review.id}
      reviewId={review.id}
      title={review.jobTitle}
      dateOfPost={review.createdAt}
      atCompany={review.atCompany}
      experience={review.experience}
      questionsAsked={review.questionsAsked}
      offerReceived={review.offerReceived ? "Yes" : "No"}
      rating={review.rating}
    />
  ));

  useEffect(() => {
    loadInterviewReview();
    loadSimilarReviews();
    setIsLoading(false);
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
                  <h1>{`${interviewReview.jobTitle} (${interviewReview.atCompany})`}</h1>
                  <p>{interviewReview.createdAt}</p>
                  <Rating value={interviewReview.rating} readOnly />
                </TopCenterContainer>
                <Tag
                  backgroundcolor={interviewReview.offerReceived ? Palette.jelpGreen : Palette.jelpRed}
                >
                  Offer received
                </Tag>
              </TopContainer>
              <h2>Application/Interview Experience</h2>
              <BodyContainer>
                <p>
                  {interviewReview.experience}
                </p>
              </BodyContainer>
              <h2>Interview Questions</h2>
              <BodyContainer>
                <p>
                  {interviewReview.questionsAsked}
                </p>
              </BodyContainer>
              {similarReviews.length !== 0
                ? (
                  <>
                    <h2>Other interview reviews for this company</h2>
                    <OtherContainer>
                      {renderSimilarReviews}
                    </OtherContainer>
                  </>
                ) : null
              }
            </MainBodyContainer>
            <Footer/>
          </>
        )
      }
    </InterviewReviewPageContainer>
  );
};

export default InterviewReviewPage;