import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { BodyContainer, CompanyReviewPageContainer, MainBodyContainer, OtherContainer, Tag, TopCenterContainer, TopContainer } from "./style";
import CompanyIcon from "../../assets/officeBuilding.png";
import { Rating } from "@mui/material";
import ReviewPreviewCard from "../../components/ReviewPreviewCard/ReviewPreviewCard";
import { useParams } from "react-router-dom";
import { Palette } from "../../components/Palette";
import { useEffect, useState } from "react";
import ErrorPopup from "../../components/Popup/Popup";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";
import { getCompanyReview, getSimilarCompanyReviews } from "../../api/company";
import { ICompanyReviewData } from "../../interfaces/api-responses";

const CompanyReviewPage = () => {
  const { companyReviewId } = useParams();
  
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [companyReview, setCompanyReview] = useState<ICompanyReviewData>({
    // placeholder
    id: 0,
    jobTitle: "Job Title",
    atCompany: "Company name",
    experience: "Company experience...",
    rating: 0,
    isCurrentEmployee: false,
    createdAt: ""
  });

  const [similarReviews, setSimilarReviews] = useState<ICompanyReviewData[]>([]);

  const loadCompanyReview = async () => {
    try {
      const { data } = await getCompanyReview(companyReviewId!);
      setCompanyReview(data);
      await loadSimilarReviews(data.atCompany);
    } catch (err: any) {
      setIsLoading(false);
      setErrorMsg(err.response.data || "A network error occurred. Please try again.");
    }
  };

  const loadSimilarReviews = async (companyName: string) => {
    try {
      const { data } = await getSimilarCompanyReviews(companyName);
      setSimilarReviews(data);
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      throw err;
    }
  };

  const renderSimilarReviews = similarReviews.map((review) => (
    <ReviewPreviewCard
      key={review.id}
      reviewId={review.id}
      title={review.jobTitle}
      atCompany={review.atCompany}
      dateOfPost={review.createdAt}
      experience={review.experience}
      isCurrentEmployee={review.isCurrentEmployee ? "Yes" : "No"}
      rating={review.rating}
    />
  ));

  useEffect(() => {
    loadCompanyReview();
    // eslint-disable-next-line
  }, [])

  return (
    <CompanyReviewPageContainer>
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
                <img src={CompanyIcon} alt="companyLogo" />
                <TopCenterContainer>
                  <h1>{`${companyReview.jobTitle} (${companyReview.atCompany})`}</h1>
                  <p>{new Date(companyReview.createdAt).toLocaleString().split(',')[0]}</p>
                  <Rating value={companyReview.rating} readOnly />
                </TopCenterContainer>
                <Tag
                  backgroundcolor={companyReview.isCurrentEmployee ? Palette.jelpGreen : Palette.jelpRed}
                >
                  Current employee
                </Tag>
              </TopContainer>
              <h2>Company experience</h2>
              <BodyContainer>
                <p>
                  {companyReview.experience}
                </p>
              </BodyContainer>
              {similarReviews.length !== 0
                ? (
                  <>
                    <h2>Other company reviews for this company</h2>
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
    </CompanyReviewPageContainer>
  );
};

export default CompanyReviewPage;