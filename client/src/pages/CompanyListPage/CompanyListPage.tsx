import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { getCompanyReviews } from "../../api/company";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ReviewPreviewCard from "../../components/ReviewPreviewCard/ReviewPreviewCard";
import { ICompanyReviewData } from "../../interfaces/api-responses";
import { CompanyListPageContainer, TopContainer, FormContainer, GridContainer, EmptyContainer } from "./style";
import ErrorPopup from "../../components/Popup/Popup";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";

const CompanyListPage = () => {
  const [companyReviews, setCompanyReviews] = useState<ICompanyReviewData[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [sortType, setSortType] = useState<string>("mostRecent");

  useEffect(() => {
    let sortedList: ICompanyReviewData[] = [];
    if (sortType === "mostRecent") {
      sortedList = [...companyReviews].sort(
        (reviewA, reviewB) => new Date(reviewB.createdAt).valueOf() - new Date(reviewA.createdAt).valueOf()
      );
    } else if (sortType === "oldestFirst") { 
      sortedList = [...companyReviews].sort(
        (reviewA, reviewB) => new Date(reviewA.createdAt).valueOf() - new Date(reviewB.createdAt).valueOf()
      );
    } else if (sortType === "jobTitle") {
      sortedList = [...companyReviews].sort(
        (reviewA, reviewB) => reviewA.jobTitle.localeCompare(reviewB.jobTitle)
      );
    } else if (sortType === "company") {
      sortedList = [...companyReviews].sort(
        (reviewA, reviewB) => reviewA.atCompany.localeCompare(reviewB.atCompany)
      );
    } else if (sortType === "rating") {
      sortedList = [...companyReviews].sort(
        (reviewA, reviewB) => reviewB.rating - reviewA.rating
      );
    }
    setCompanyReviews(sortedList);
    // eslint-disable-next-line
  }, [sortType]);

  const fetchCompanyReviews = async () => {
    try {
      const { data } = await getCompanyReviews();
      setCompanyReviews(data);
      setIsLoading(false);
    } catch (err: any) {
      setError(err.response.data || "A network error occurred. Please try again.")
      setIsLoading(false);
    }
  };

  const renderCompanyReviews = companyReviews.map((companyReview) => (
    <ReviewPreviewCard
      key={companyReview.id}
      reviewId={companyReview.id}
      title={companyReview.jobTitle}
      atCompany={companyReview.atCompany}
      dateOfPost={companyReview.createdAt}
      experience={companyReview.experience}
      isCurrentEmployee={companyReview.isCurrentEmployee ? "Yes" : "No"}
      rating={companyReview.rating}
    />
  ));

  useEffect(() => {
    fetchCompanyReviews();
  }, [])

  return (
    <CompanyListPageContainer>
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
              <h2>{`${companyReviews.length} Reviews`}</h2>
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
            {companyReviews.length === 0
              ? (
                <EmptyContainer>
                  <h1>jelp</h1>
                  <p>There currently exists no company reviews</p>
                </EmptyContainer>
              ) : (
                <GridContainer>
                  {renderCompanyReviews}
                </GridContainer>
              )
            }
            <Footer />
          </>
        )
      }
    </CompanyListPageContainer>
  );
};

export default CompanyListPage;