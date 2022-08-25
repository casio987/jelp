import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import { Palette } from "../../components/Palette";

export const RateCompanyPageContainer = styled('div')`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  padding-bottom: 5rem;
`;

export const BodyPageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: center;

  > :first-child {
    align-self: center;
  }

  > p {
    margin: 0 0 2rem 0;
  }

  @media(max-width: 550px) {
    padding: 0 1rem;
  }
`;

export const TopContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
  align-items: center;
  font-size: 1.25rem;

  @media(max-width: 700px) {
    width: 75%;
  }

  @media(max-width: 550px) {
    width: 100%;
  }
`;

export const InputField = styled(TextField)`
  width: 75%;
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: auto;
`;

export const StyledButton = styled('button')`
  border-radius: 1rem;
  border: none;
  background-color: ${Palette.jelpRed};
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;