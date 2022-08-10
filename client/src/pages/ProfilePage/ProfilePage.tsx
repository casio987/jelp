import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Palette } from "../../components/Palette";
import ProfilePageCard from "./ProfilePageCard/ProfilePageCard";
import { OptionButton, ProfilePageContainer, SwitchContainer } from "./style";

const ProfilePage = () => {
  const [pageState, setPageState] = useState<"interview" | "company">("interview");

  // TODO: make api call to fetch interivew and company reviews on render
  // TODO: extract card to render function

  return (
    <ProfilePageContainer>
      <Header />
      <SwitchContainer>
        <OptionButton
          onClick={() => setPageState("interview")}
          style={pageState === "interview" ? { color: Palette.jelpBrightRed, fontWeight: "bold" } : undefined}
        >
          My interivew reviews
        </OptionButton>
        <h3>|</h3>
        <OptionButton
          onClick={() => setPageState("company")}
          style={pageState === "company" ? { color: Palette.jelpBrightRed, fontWeight: "bold" } : undefined}
        >
          My company reviews
        </OptionButton>
      </SwitchContainer>
      {/* TODO: current placeholder cards */}
      <ProfilePageCard
        reviewId={1}
        reviewType="interview" 
        jobTitle="Frontend Engineering (Graduate)"
        companyName="Canva"
        rating={5}
        description="
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Duis molestie libero nulla,
        a pulvinar sapien convallis sit amet.
        "
      />
      <ProfilePageCard
        reviewId={1}
        reviewType="interview" 
        jobTitle="Frontend Engineering (Graduate)"
        companyName="Canva"
        rating={5}
        description="
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Duis molestie libero nulla,
        a pulvinar sapien convallis sit amet.
        "
      />
      <ProfilePageCard
        reviewId={1}
        reviewType="interview" 
        jobTitle="Frontend Engineering (Graduate)"
        companyName="Canva"
        rating={5}
        description="
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Duis molestie libero nulla,
        a pulvinar sapien convallis sit amet.
        "
      />
      <ProfilePageCard
        reviewId={1}
        reviewType="interview" 
        jobTitle="Frontend Engineering (Graduate)"
        companyName="Canva"
        rating={5}
        description="
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Duis molestie libero nulla,
        a pulvinar sapien convallis sit amet.
        "
      />
      <Footer />
    </ProfilePageContainer>
  );
};

export default ProfilePage;