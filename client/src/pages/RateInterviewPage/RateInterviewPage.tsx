import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { RateInterviewPageContainer, TopContainer, InputField, StyledButton, BodyPageContainer, ButtonContainer } from "./style";
import { Rating } from "@mui/material";
import { Palette } from "../../components/Palette";
import Switch from "../../components/Switch/Switch";
import { postInterviewReview } from "../../api/interview";
import { useNavigate } from "react-router-dom";
import ErrorPopup from "../../components/Popup/Popup";

type IPageState = "input" | "confirm";

const RateInterviewPage = () => {
  const navigate = useNavigate();
  const [pageState, setPageState] = useState<IPageState>("input");

  const [hasOffer, setHasOffer] = useState<string>("Yes");
  const [companyName, setCompanyName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [experience, setExperience] = useState<string>("");
  const [questionsAsked, setQuestionsAsked] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  const [alertMsg, setAlertMsg] = useState<string>("");
  const [alertType, setAlertType] = useState<"success" | "error">("error");

  const handleContinueAndSubmitClick = async () => {
    if (pageState === "input") {
      if (
        companyName === "" || role === "" || experience === "" || questionsAsked === "") {
        setAlertType("error");
        setAlertMsg("All fields must be filled.");
      } else {
        setPageState("confirm");
        setAlertMsg("");
      }
    } else {
      try {
        await postInterviewReview(
          companyName,
          role,
          experience,
          questionsAsked,
          rating,
          hasOffer === "Yes" ? true : false
        );
        setAlertType("success");
        setAlertMsg("Interview review successfully created. Redirecting you back to the home page.");
        setTimeout(() => {
          navigate('/home');
        }, 5000)
      } catch (err: any) {
        setAlertType("error");
        setAlertMsg(err.response.data || "A network error occurred. Please try again.")
      }
    }
  }

  return (
    <RateInterviewPageContainer>
      <ErrorPopup
        isOpen={alertMsg !== ""}
        popupMessage={alertMsg}
        handleClose={() => setAlertMsg("")}
        type={alertType}
      />
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
              <InputField error={alertMsg !== ""} value={companyName} label="Company name" onChange={(e) => setCompanyName(e.target.value)}  />
            )
            : (
              <p>{companyName}</p>
            )
        }
        <h3>Job title</h3>
        {pageState === "input"
          ?
            (
              <InputField error={alertMsg !== ""} value={role} label="Job title" onChange={(e) => setRole(e.target.value)}  />
            )
            : (
              <p>{role}</p>
            )
        }
        <h3>What was your application/interivew experience like?</h3>
        {pageState === "input"
          ?
            (
              // TODO: may have to change this to free text editor
              <InputField
                error={alertMsg !== ""}
                label="Your experience"
                value={experience}
                multiline
                placeholder='
                Feel free to note down anything you&apos;re comfortable sharing.
                This can include things such as the good, the bad, how many interviews there were, the type of interview
                conducted (behavioural, technical, system design, etc), etc.
                '
                onChange={(e) => setExperience(e.target.value)}
                rows={8}
              />
            )
            : (
              <p>{experience}</p>
            )
        }
        <h3>What were a couple of the questions you were asked?</h3>
        {pageState === "input"
          ?
            (
              <InputField
                error={alertMsg !== ""}
                value={questionsAsked}
                label="Interview questions"
                multiline
                rows={8}
                onChange={(e) => setQuestionsAsked(e.target.value)}
              />
            )
            : (
              <p>{questionsAsked}</p>
            )
        }
        <h3>Give an overall rating of your interview experience</h3>
        <Rating 
          value={rating}
          readOnly={pageState === "confirm"}
          onChange={(event, newValue) => setRating(Number(newValue))}
        />
        <h3>Did you end up receiving an offer?</h3>
        {pageState === "input"
          ?
            (
              <Switch
                option1="Yes"
                option2="No"
                callBackFunc={setHasOffer}
              />
                )
            : (
              <p>{hasOffer}</p>
            )
        }
        <ButtonContainer>
          <StyledButton onClick={handleContinueAndSubmitClick}>
            {pageState === "input" ? "Continue" : "Submit"}
          </StyledButton>
          {pageState === "confirm" 
            ? (
              <StyledButton onClick={() => setPageState("input")} style={{ backgroundColor: Palette.jelpGray }}>
                Back
              </StyledButton>
            ) : null
          }
        </ButtonContainer>
      </BodyPageContainer>
      <Footer />
    </RateInterviewPageContainer>
  )
};

export default RateInterviewPage;