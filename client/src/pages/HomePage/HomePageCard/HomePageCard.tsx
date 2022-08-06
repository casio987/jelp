import { HomePageCardContainer } from "./style";
import RightChevronIcon from "../../../assets/rightChevron.png";

type HomePageCardProps = {
  text: string;
  imageURL: string;
  handleClick: () => void;
}

const HomePageCard = ({ text, imageURL, handleClick }: HomePageCardProps ) => {
  return (
    <HomePageCardContainer onClick={handleClick}>
      <h3 style={{ fontWeight: "normal"   }}>{text}</h3>
      <img src={imageURL} alt="" style={{ height: "5rem", marginLeft: "auto", marginRight: "2.5rem" }} />
      <img src={RightChevronIcon} alt="" style={{ height: "1.5rem"}} />
    </HomePageCardContainer>
  )
};

export default HomePageCard;