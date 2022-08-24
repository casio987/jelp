import { Rating } from "@mui/material";
import { HeadingContainer, ReviewPreviewCardContainer, Tag, TextContainter, TopContainer } from "./style";

type ReviewPreviewCardProps = {
  reviewId: number;
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
  title,
  dateOfPost,
  atCompany,
  experience,
  questionsAsked,
  offerReceived,
  isCurrentEmployee,
  rating
}: ReviewPreviewCardProps) => {
  return (
    <ReviewPreviewCardContainer
      onClick={() => window.open(
        `${window.location.origin}/view/${questionsAsked ? "interview" : "company"}/${reviewId}`,
        '_blank',
      )}
    >
        <TopContainer>
          <HeadingContainer>
            <h3>{title}</h3>
            <p>{new Date(dateOfPost).toLocaleString().split(',')[0]}</p>
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