import { useEffect, useState } from "react";
import { getSelfInterviewReviews } from "../../api/interview";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Palette } from "../../components/Palette";
import ProfilePageCard from "./ProfilePageCard/ProfilePageCard";
import { EmptyContainer, OptionButton, ProfilePageContainer, StyledPagination, SwitchContainer } from "./style";
import { IInterviewReviewData, ICompanyReviewData } from "../../interfaces/api-responses";
import { getSelfCompanyReviews } from "../../api/company";
import ErrorPopup from "../../components/Popup/Popup";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";

const ProfilePage = () => {
  const [pageState, setPageState] = useState<"interview" | "company">("interview");

  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [interviewReviews, setInterviewReviews] = useState<IInterviewReviewData[]>([]);
  const [companyReviews, setCompanyReviews] = useState<ICompanyReviewData[]>([]);

  const renderInterviewReviews = () => {
    if (interviewReviews.length === 0) {
      return (
        <EmptyContainer>
          <h1>jelp</h1>
          <p>You have yet to post an interview review</p>
        </EmptyContainer>
      );
    } else {
      return (
        interviewReviews.map((interviewReview) =>
          <ProfilePageCard
            key={interviewReview.id}
            reviewId={interviewReview.id}
            reviewType="interview"
            jobTitle={interviewReview.jobTitle}
            companyName={interviewReview.atCompany}
            rating={interviewReview.rating}
            description={interviewReview.experience}
          />
        )
      )
    }
  };

  const renderCompanyReviews = () => {
    if (companyReviews.length === 0) {
      return (
        <EmptyContainer>
          <h1>jelp</h1>
          <p>You have yet to post a company review</p>
        </EmptyContainer>        
      );
    } else {
      return (
        companyReviews.map((companyReview) =>
          <ProfilePageCard
            key={companyReview.id}
            reviewId={companyReview.id}
            reviewType="company"
            jobTitle={companyReview.jobTitle}
            companyName={companyReview.atCompany}
            rating={companyReview.rating}
            description={companyReview.experience}
          />
        )
      );
    }
  } ;

  const fetchInterviewReviews = async () => {
    try {
      const { data } = await getSelfInterviewReviews();
      setInterviewReviews([...interviewReviews, ...data]);
    } catch (err: any) {
      setError(err.response.data || "A network error occurred. Please try again.");
    }
  };

  const fetchCompanyReviews = async () => {
    try {
      const { data } = await getSelfCompanyReviews();
      setCompanyReviews([...companyReviews, ...data]);
    } catch (err: any) {
      setError(err.response.data || "A network error occurred. Please try again.");
    }
  };

  useEffect(() => {
    fetchInterviewReviews();
    fetchCompanyReviews();
    setIsLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <ProfilePageContainer>
      <ErrorPopup
        isOpen={error !== ""}
        popupMessage={error}
        type="error"
        handleClose={() => setError("")}
      />
      {isLoading
        ? <LoadingOverlay isOpen={isLoading} />
        : (
          <>
            <Header />
            <SwitchContainer>
              <OptionButton
                onClick={() => setPageState("interview")}
                style={pageState === "interview" ? { color: Palette.jelpBrightRed, fontWeight: "bold" } : undefined}
              >
                My interivew reviews
              </OptionButton>
              <h3>|</h3>
              <OptionButton
                onClick={() => setPageState("company")}
                style={pageState === "company" ? { color: Palette.jelpBrightRed, fontWeight: "bold" } : undefined}
              >
                My company reviews
              </OptionButton>
            </SwitchContainer>
            {pageState === "interview"
              ? (
                <>
                  {renderInterviewReviews()}
                  <StyledPagination count={3} sx={interviewReviews.length === 0 ? { display: "none" } : undefined} />
                </>
              )
              : (
                <>
                  {renderCompanyReviews()}
                  <StyledPagination count={1} sx={companyReviews.length === 0 ? { display: "none" } : undefined} />
                </>
              )
            }
            <Footer />
          </>
        )
      }
    </ProfilePageContainer>
  );
};

export default ProfilePage;