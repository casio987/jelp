import { InputLabel, MenuItem, Select } from "@mui/material";
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