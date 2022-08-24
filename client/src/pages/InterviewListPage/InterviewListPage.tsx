import { InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { getInterviewReviews } from "../../api/interview";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import ErrorPopup from "../../components/Popup/Popup";
import ReviewPreviewCard from "../../components/ReviewPreviewCard/ReviewPreviewCard";
import { IInterviewReviewData } from "../../interfaces/api-responses";
import { EmptyContainer, FormContainer, GridContainer, InterviewListPageContainer, TopContainer } from "./style";

const InterviewListPage = () => {
  const [interviewReviews, setInterviewReviews] = useState<IInterviewReviewData[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchInterviewReviews = async () => {
    try {
      const { data } = await getInterviewReviews();
      setInterviewReviews(data);
    } catch (err: any) {
      setError(err.response.data || "A network error occurred. Please try again.");
    }
  };

  useEffect(() => {
    fetchInterviewReviews();
    setIsLoading(false);
  }, []);

  const renderInterviewReviews = interviewReviews.map((interviewReview) => (
    <ReviewPreviewCard
      key={interviewReview.id}
      reviewId={interviewReview.id}
      title={interviewReview.jobTitle}
      dateOfPost={interviewReview.createdAt}
      questionsAsked={interviewReview.questionsAsked}
      atCompany={interviewReview.atCompany}
      experience={interviewReview.experience}
      offerReceived={interviewReview.offerReceived ? "Yes" : "No"}
      rating={interviewReview.rating}
    />
  ));

  return (
    <InterviewListPageContainer>
      <ErrorPopup
        isOpen={error !== ""}
        popupMessage={error}
        type="error"
        handleClose={() => setError("")}
      />
      {isLoading
        ? (
          <LoadingOverlay isOpen={isLoading} />
        ) : (
          <>
            <Header />
            <TopContainer>
              <h2>{`${interviewReviews.length} Review(s)`}</h2>
              <FormContainer>
                <InputLabel>Sort by</InputLabel>
                <Select
                  // value={age}
                  // onChange={handleChange}
                >
                  <MenuItem value={"mostRecent"}>Most recent</MenuItem>
                  <MenuItem value={"oldestFirst"}>Oldest first</MenuItem>
                  <MenuItem value={"jobTitle"}>Job title</MenuItem>
                  <MenuItem value={"company"}>Company</MenuItem>
                </Select>
              </FormContainer>
            </TopContainer>
            {interviewReviews.length === 0
              ? (
                <EmptyContainer>
                  <h1>jelp</h1>
                  <p>There currently exists no interview reviews</p>
                </EmptyContainer>
              ) : (
                <GridContainer>
                  {renderInterviewReviews}
                </GridContainer>
              )
            }
            <Footer />
          </>
        )
      }
    </InterviewListPageContainer>
  );
};

export default InterviewListPage;