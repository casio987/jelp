import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
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

  const [sortType, setSortType] = useState<string>("mostRecent");

  useEffect(() => {
    let sortedList: IInterviewReviewData[] = [];
    if (sortType === "mostRecent") {
      sortedList = [...interviewReviews].sort(
        (reviewA, reviewB) => new Date(reviewB.createdAt).valueOf() - new Date(reviewA.createdAt).valueOf()
      );
    } else if (sortType === "oldestFirst") { 
      sortedList = [...interviewReviews].sort(
        (reviewA, reviewB) => new Date(reviewA.createdAt).valueOf() - new Date(reviewB.createdAt).valueOf()
      );
    } else if (sortType === "jobTitle") {
      sortedList = [...interviewReviews].sort(
        (reviewA, reviewB) => reviewA.jobTitle.localeCompare(reviewB.jobTitle)
      );
    } else if (sortType === "company") {
      sortedList = [...interviewReviews].sort(
        (reviewA, reviewB) => reviewA.atCompany.localeCompare(reviewB.atCompany)
      );
    } else if (sortType === "rating") {
      sortedList = [...interviewReviews].sort(
        (reviewA, reviewB) => reviewB.rating - reviewA.rating
      );
    }
    setInterviewReviews(sortedList);
    // eslint-disable-next-line
  }, [sortType]);

  const fetchInterviewReviews = async () => {
    try {
      const { data } = await getInterviewReviews();
      setInterviewReviews(data);
      setIsLoading(false);
    } catch (err: any) {
      setError(err.response.data || "A network error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInterviewReviews();
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
                  defaultValue=""
                  value={sortType}
                  onChange={(e: SelectChangeEvent) => setSortType(e.target.value)}
                >
                  <MenuItem value={"mostRecent"}>Most recent</MenuItem>
                  <MenuItem value={"oldestFirst"}>Oldest first</MenuItem>
                  <MenuItem value={"jobTitle"}>Job title</MenuItem>
                  <MenuItem value={"company"}>Company</MenuItem>
                  <MenuItem value={"rating"}>Rating</MenuItem>
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