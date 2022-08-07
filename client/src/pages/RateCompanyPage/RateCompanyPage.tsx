import { useState } from 'react';
import { Rating } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ContinueAndSubmitButton, InputField, RateCompanyPageContainer, TopContainer, BodyPageContainer } from "./style";
import { Palette } from '../../components/Palette';
import Switch from '../../components/Switch/Switch';

type IPageState = "input" | "confirm";

const RateCompanyPage = () => {
  const [pageState, setPageState] = useState<IPageState>("input");
  const [companyName, setCompanyName] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [employeeStatus, setEmployeeStatus] = useState<string>("Current");

  const handleContinueAndSubmitClick = () => {
    if (pageState === "input") {
      console.log(companyName, role, rating, experience, employeeStatus);
      setPageState("confirm");
    } else {
      // TODO: make api call to post
      console.log(companyName, role, rating, experience, employeeStatus);
    }
  }
  
  return (
    <RateCompanyPageContainer>
      <Header />
      <BodyPageContainer style={ pageState === "confirm" ? { alignItems: "flex-start", padding: "0 5rem" }: undefined }>
        <TopContainer>
          <p
            style={pageState === "input" ? { fontWeight: "bold" }: { color: Palette.jelpGray }}
          >
            1. Input Details
          </p>
          <p>&gt;</p>
          <p
            style={pageState === "confirm" ? { fontWeight: "bold" }: { color: Palette.jelpGray }}
          >
            2. Confirm and submit
          </p>
        </TopContainer>
        <h3>Company name</h3>
        {pageState === "input"
          ?
            (
              <InputField label="Company name" onChange={(e) => setCompanyName(e.target.value)}  />
            )
            : (
              <p>{companyName}</p>
            )
        }
        <h3>Your role at this company</h3>
        {pageState === "input"
          ?
            (
              <InputField label="Role" onChange={(e) => setRole(e.target.value)}  />
            )
            : (
              <p>{role}</p>
            )
        }
        <h3>Your experience whilst working at this company</h3>
        {pageState === "input"
          ?
            (
              <InputField
                label="Your experience"
                multiline
                placeholder='
                Feel free to note down anything you&apos;re comfortable sharing.
                This can include things such as pros and cons of the company, the work life balance
                , your total compenstion, the company culture, any benefits, WFH opportunities, etc.
                '
                onChange={(e) => setExperience(e.target.value)}
                rows={8}
              />
            )
            : (
              <p>{experience}</p>
            )
        }
        <h3>Give an overall rating of your experience at this company</h3>
        {/* TODO; update rating component design */}
        <Rating value={rating} readOnly={pageState === "confirm"} onChange={(event, newValue) => setRating(Number(newValue))} />
        <h3>Are you a current or former employee?</h3>
        {pageState === "input"
          ?
            (
              <Switch
                option1="Current"
                option2="Former"
                callBackFunc={setEmployeeStatus}
              />
            )
            : (
              <p>{employeeStatus}</p>
            )
        }
        <ContinueAndSubmitButton onClick={handleContinueAndSubmitClick}>
          {pageState === "input" ? "Continue" : "Submit" }
        </ContinueAndSubmitButton>
      </BodyPageContainer>
      <Footer />
    </RateCompanyPageContainer>
  )
};

export default RateCompanyPage;