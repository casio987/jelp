import { Rating } from "@mui/material";
import { CompanyName, DescriptionText, ProfilePageCardContainer } from "./style";

type ProfilePageCardProps = {
  reviewId: number;
  reviewType: "interview" | "company";
  jobTitle: string;
  companyName: string;
  rating: number;
  description: string;
}

const ProfilePageCard = ({
  reviewId,
  reviewType,
  jobTitle,
  companyName,
  rating,
  description
}: ProfilePageCardProps) => {
  return (
    <ProfilePageCardContainer
      onClick={() => window.open(
        `${window.location.origin}/view/${reviewType}/${reviewId}`,
        '_blank',
      )}
    >
      <h3>{jobTitle}</h3>
      <CompanyName>@{companyName}</CompanyName>
      <Rating value={rating} readOnly />
      <DescriptionText>{description}</DescriptionText>
    </ProfilePageCardContainer>
  );
};

export default ProfilePageCard;