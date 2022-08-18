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
import { getCompanyReview } from "../../api/company";

const CompanyReviewPage = () => {
  const { companyReviewId } = useParams();

  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [jobTitle, setJobTitle] = useState<string>("Job Title");
  const [companyName, setCompanyName] = useState<string>("Company name");
  const [experience, setExperience] = useState<string>("Company experience...");
  const [rating, setRating] = useState<number>(0);
  const [isCurrentEmployee, setIsCurrentEmployee] = useState<boolean>(false);
  const [dateOfPost, setDateOfPost] = useState<string>("");

  const loadInterviewReview = async () => {
    try {
      const { status, data } = await getCompanyReview(companyReviewId!);
      if (status === 200) {
        setJobTitle(data.jobTitle);
        setCompanyName(data.atCompany);
        setExperience(data.experience);
        setRating(data.rating);
        setIsCurrentEmployee(data.isCurrentEmployee);
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
                  <h1>{`${jobTitle} (${companyName})`}</h1>
                  <p>{dateOfPost}</p>
                  <Rating value={rating} readOnly />
                </TopCenterContainer>
                <Tag
                  backgroundcolor={isCurrentEmployee ? Palette.jelpGreen : Palette.jelpRed}
                >
                  Current employee
                </Tag>
              </TopContainer>
              <h2>Company experience</h2>
              <BodyContainer>
                <p>
                  {experience}
                </p>
              </BodyContainer>
              <h2>Other company reviews for this company</h2>
              <OtherContainer>
                {/* TODO: replace placeholders with db data */}
                <ReviewPreviewCard
                  reviewId={1}
                  title="Frontend Engineer"
                  dateOfPost="20th March, 2020"
                  atCompany="Canva"
                  experience="Was great 10/10"
                  isCurrentEmployee="Yes"
                  rating={5}
                />
                <ReviewPreviewCard
                  reviewId={1}
                  title="Frontend Engineer"
                  dateOfPost="20th March, 2020"
                  atCompany="Canva"
                  experience="Was great 10/10"
                  isCurrentEmployee="Yes"
                  rating={5}
                />
              </OtherContainer>
            </MainBodyContainer>
            <Footer/>
          </>
        )
      }
    </CompanyReviewPageContainer>
  );
};

export default CompanyReviewPage;