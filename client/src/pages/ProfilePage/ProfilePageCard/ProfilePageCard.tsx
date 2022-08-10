import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <ProfilePageCardContainer
      onClick={() => navigate(`/view/${reviewType}/${reviewId}`)}
    >
      <h3>{jobTitle}</h3>
      <CompanyName>@{companyName}</CompanyName>
      <Rating value={rating} readOnly />
      <DescriptionText>{description}</DescriptionText>
    </ProfilePageCardContainer>
  );
};

export default ProfilePageCard;