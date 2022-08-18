import { InputLabel, MenuItem, Pagination, Select } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ReviewPreviewCard from "../../components/ReviewPreviewCard/ReviewPreviewCard";
import { CompanyListPageContainer, TopContainer, FormContainer, GridContainer } from "./style";

const CompanyListPage = () => {
  return (
    <CompanyListPageContainer>
      <Header />
      <TopContainer>
        <h2>35 Reviews</h2>
        <FormContainer>
          <InputLabel>Sort by</InputLabel>
          <Select
            // value={age}
            // onChange={handleChange}
          >
            <MenuItem value={"mostRecent"}>Most recent</MenuItem>
            <MenuItem value={"oldestFirst"}>Oldest first</MenuItem>
            <MenuItem value={"jobTitle"}>Job title</MenuItem>
            <MenuItem value={"company"}>Company</MenuItem>
          </Select>
        </FormContainer>
      </TopContainer>
      <GridContainer>
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
      </GridContainer>
      <Pagination count={10} sx={{ alignSelf: "center", marginBottom: "3rem" }} />
      <Footer />
    </CompanyListPageContainer>
  );
};

export default CompanyListPage;