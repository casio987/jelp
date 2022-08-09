import { CardImage, ChevronImage, HomePageCardContainer } from "./style";
import RightChevronIcon from "../../../assets/rightChevron.png";

type HomePageCardProps = {
  text: string;
  imageURL: string;
  handleClick: () => void;
}

const HomePageCard = ({ text, imageURL, handleClick }: HomePageCardProps ) => {
  return (
    <HomePageCardContainer onClick={handleClick}>
      <h3>{text}</h3>
      <CardImage src={imageURL} alt="card image" />
      <ChevronImage src={RightChevronIcon} alt="right chevron" />
    </HomePageCardContainer>
  )
};

export default HomePageCard;