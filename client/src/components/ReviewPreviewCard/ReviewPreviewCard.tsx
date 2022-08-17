import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HeadingContainer, ReviewPreviewCardContainer, Tag, TextContainter, TopContainer } from "./style";

type ReviewPreviewCardProps = {
  reviewId: number;
  width?: string;
  title: string;
  dateOfPost: string;
  atCompany: string;
  experience: string;
  questionsAsked?: string;
  offerReceived?: string;
  isCurrentEmployee?: string;
  rating: number;
}

const ReviewPreviewCard = ({
  reviewId,
  width,
  title,
  dateOfPost,
  atCompany,
  experience,
  questionsAsked,
  offerReceived,
  isCurrentEmployee,
  rating
}: ReviewPreviewCardProps) => {
  const navigate = useNavigate();

  return (
    <ReviewPreviewCardContainer
      style={width ? { width: width } : undefined}
      onClick={() => navigate(`/view/${questionsAsked ? "interview" : "company"}/${reviewId}`)}
    >
        <TopContainer>
          <HeadingContainer>
            <h3>{title}</h3>
            <p>{dateOfPost}</p>
          </HeadingContainer>
          <Tag>
            {atCompany}
          </Tag>
        </TopContainer>
        <TextContainter>
          <h4>{questionsAsked ? "Application/Interview Experience" : "Company Experience"}</h4>
          <p>{experience}</p>
          {questionsAsked
            ? (
              <>
                <h4>Interview Questions</h4>
                <p>{questionsAsked}</p>
              </>
            ) :
            null
          }
          <h4>{offerReceived === undefined ? "Current employee?" : "Offer received?"}</h4>
          <p>{offerReceived || isCurrentEmployee}</p>
        </TextContainter>
        <Rating value={rating} readOnly sx={{ alignSelf: "center" }} />
    </ReviewPreviewCardContainer>
  );
};

export default ReviewPreviewCard;