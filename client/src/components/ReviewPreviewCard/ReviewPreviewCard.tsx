import { Rating } from "@mui/material";
import { HeadingContainer, ReviewPreviewCardContainer, Tag, TextContainter, TopContainer } from "./style";

type ReviewPreviewCardProps = {
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
  return (
    <ReviewPreviewCardContainer style={width ? { width: width } : undefined}>
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
          <h4>Application/Interview Experience</h4>
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