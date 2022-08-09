import { styled } from "@mui/system";
import { Palette } from "../../components/Palette";

export const LandingPageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const BannerContainer = styled('div')`
  display: flex;
  flex-direction: column;
  background: radial-gradient(97% 597.6% at 0% 0%, #E00707 0%, #D1BE14 100%);
  width: 100%;
  height: 30rem;
  color: white;
  padding: 2rem 4rem;

  @media(max-width: 500px) {
    align-items: center;
    text-align: center;
  }
`;

export const IntroHeading = styled('h1')`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const StartedButton = styled('button')`
  background-color: ${Palette.white};
  border-radius: 1rem;
  font-size: 1rem;
  padding: 1rem;
  margin-top: 1rem;
  width: 25%;
  border: none;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 50%;
  }
`;

export const SecondaryHeading = styled('h2')`
  font-size: 4rem;
  color: ${Palette.jelpRed};
  text-align: center;
`;