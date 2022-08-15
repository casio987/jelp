import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { BodyContainer, InterviewReviewPageContainer, MainBodyContainer, OtherContainer, Tag, TopCenterContainer, TopContainer } from "./style";
import CompanyIcon from "../../assets/officeBuilding.png";
import { Rating } from "@mui/material";
import ReviewPreviewCard from "../../components/ReviewPreviewCard/ReviewPreviewCard";
import { useParams } from "react-router-dom";
import { Palette } from "../../components/Palette";

const InterviewReviewPage = () => {
  const { interviewReviewId } = useParams();
  console.log(interviewReviewId);
  // TODO: replace placholder text with fetch to grab data

  return (
    <InterviewReviewPageContainer>
      <Header />
      <MainBodyContainer>
        <TopContainer>
          {/* TODO: current placeholder till i figure out how to store images in db */}
          <img src={CompanyIcon} alt="companyLogo" />
          <TopCenterContainer>
            <h1>Frontend Engineer</h1>
            <p>21st February 2022</p>
            <Rating value={2} readOnly />
          </TopCenterContainer>
          <Tag backgroundColor={Palette.jelpGreen}>Offer received</Tag>
        </TopContainer>
        <h2>Application/Interview Experience</h2>
        <BodyContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis ac odio non vulputate. Suspendisse et sem lorem. Sed lacinia vulputate consectetur. Donec ultrices fringilla massa eu commodo. Donec eu sollicitudin sem. Cras aliquam risus nec aliquet semper. Mauris vel varius nibh. Sed sed arcu condimentum, sodales quam a, faucibus urna. Aliquam ultrices ullamcorper lectus, id finibus lacus pretium eget.
            Sed et ligula libero. Ut tincidunt odio quis sapien venenatis pulvinar. Vestibulum sapien sem, fringilla nec ipsum a, finibus accumsan orci. Nulla tincidunt lacus sed lacus condimentum vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent at dolor quis enim mattis sagittis nec eu neque. Phasellus et nunc nec leo interdum fringilla vel ut quam. Quisque elementum a arcu id maximus. Vivamus tristique, ligula in porta consectetur, metus neque scelerisque orci, eu venenatis odio turpis at felis.
            Nullam maximus id tortor et aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer quis suscipit urna. Pellentesque vestibulum pellentesque dui, et convallis lorem lacinia non. Curabitur ullamcorper est sit amet pretium pharetra. Integer cursus massa dui, et fringilla quam maximus sed. Morbi congue porta eros, ut tincidunt diam efficitur a.
            Nulla condimentum mi ut cursus maximus. Nunc vitae mi ullamcorper, dictum dui sit amet, consectetur enim. Mauris rhoncus vestibulum vestibulum. Aenean a mi non ex malesuada blandit id et massa. Nam vehicula massa vitae fringilla consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam consequat diam accumsan, placerat metus vel, gravida purus. Curabitur lobortis enim at dignissim sollicitudin. Aliquam augue quam, commodo a sem vel, venenatis sodales neque. Maecenas eu mollis sapien, vitae blandit quam. Quisque quis ultricies dolor. Praesent sodales urna nec ex accumsan gravida. Praesent quis tellus ut lectus mollis hendrerit. Maecenas finibus libero tellus. Ut semper posuere metus, at maximus orci facilisis in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;         </p>
        </BodyContainer>
        <h2>Interview Questions</h2>
        <BodyContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis ac odio non vulputate. Suspendisse et sem lorem. Sed lacinia vulputate consectetur. Donec ultrices fringilla massa eu commodo. Donec eu sollicitudin sem. Cras aliquam risus nec aliquet semper. Mauris vel varius nibh. Sed sed arcu condimentum, sodales quam a, faucibus urna. Aliquam ultrices ullamcorper lectus, id finibus lacus pretium eget.
            Sed et ligula libero. Ut tincidunt odio quis sapien venenatis pulvinar. Vestibulum sapien sem, fringilla nec ipsum a, finibus accumsan orci. Nulla tincidunt lacus sed lacus condimentum vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent at dolor quis enim mattis sagittis nec eu neque. Phasellus et nunc nec leo interdum fringilla vel ut quam. Quisque elementum a arcu id maximus. Vivamus tristique, ligula in porta consectetur, metus neque scelerisque orci, eu venenatis odio turpis at felis.
            Nullam maximus id tortor et aliquam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer quis suscipit urna. Pellentesque vestibulum pellentesque dui, et convallis lorem lacinia non. Curabitur ullamcorper est sit amet pretium pharetra. Integer cursus massa dui, et fringilla quam maximus sed. Morbi congue porta eros, ut tincidunt diam efficitur a.
            Nulla condimentum mi ut cursus maximus. Nunc vitae mi ullamcorper, dictum dui sit amet, consectetur enim. Mauris rhoncus vestibulum vestibulum. Aenean a mi non ex malesuada blandit id et massa. Nam vehicula massa vitae fringilla consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam consequat diam accumsan, placerat metus vel, gravida purus. Curabitur lobortis enim at dignissim sollicitudin. Aliquam augue quam, commodo a sem vel, venenatis sodales neque. Maecenas eu mollis sapien, vitae blandit quam. Quisque quis ultricies dolor. Praesent sodales urna nec ex accumsan gravida. Praesent quis tellus ut lectus mollis hendrerit. Maecenas finibus libero tellus. Ut semper posuere metus, at maximus orci facilisis in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;         </p>
        </BodyContainer>
        <h2>Other interview reviews for this company</h2>
        <OtherContainer>
          {/* TODO: replace placeholders with db data */}
          <ReviewPreviewCard
            width="45%"
            title="Frontend Engineer"
            dateOfPost="20th March, 2020"
            atCompany="Canva"
            experience="Was great 10/10"
            questionsAsked="Asked about experience and reversing a linked list"
            offerReceived="Yes"
            rating={5}
          />
          <ReviewPreviewCard
            width="45%"
            title="Frontend Engineer"
            dateOfPost="20th March, 2020"
            atCompany="Canva"
            experience="Was great 10/10"
            questionsAsked="Asked about experience and reversing a linked list"
            offerReceived="Yes"
            rating={5}
          />
        </OtherContainer>
      </MainBodyContainer>
      <Footer/>
    </InterviewReviewPageContainer>
  );
};

export default InterviewReviewPage;