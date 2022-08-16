import { styled } from "@mui/system";
import { Palette } from "../../components/Palette";

export const InterviewReviewPageContainer = styled('div')`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  padding-bottom: 5rem;
`;
  
export const MainBodyContainer = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  align-items: center;

  > h2 {
    align-self: flex-start;
  }
`;

export const TopContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 10rem;
  padding: 1rem 1rem 1rem 2rem;
  margin: 1rem 0;

  > img {
    margin-right: 2rem;
    height: 5rem;
  }
`;

export const TopCenterContainer = styled('div')`
  display: flex;
  flex-direction: column;

  > h1 {
    margin: 0;
  }

  > p {
    margin-top: 0;
    color: ${Palette.jelpGray};
  }
`;

type TagProps = {
  backgroundcolor: string;
}
export const Tag = styled('div')<TagProps>`
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  background-color: ${(props: TagProps) => props.backgroundcolor};
  color: white;
  align-self: flex-start;
  justify-self: flex-start;
  margin-left: auto;
`;

export const BodyContainer = styled('div')`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  height: 20rem;
  overflow-y: auto;  
`;

export const OtherContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

// TODO: media queries