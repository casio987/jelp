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

  @media (max-width: 700px) {
    padding: 0 2rem;
  }

  > :nth-child(5) {
    margin-bottom: 2rem;
  }
`;

export const TopContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 8.5rem;
  padding: 1rem 1rem 1rem 2rem;
  margin: 1rem 0;

  > img {
    margin-right: 2rem;
    height: 5rem;
  }

  @media (max-width: 600px) {
    > img {
      margin-right: 1rem;
      height: 4rem;
    }
  }

  @media (max-width: 420px) {
    > img {
      display: none;
    }
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

  @media (max-width: 600px) {
    > h1 {
      font-size: 1.5rem;
    }
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
  margin-left: auto;

  @media (max-width: 420px) {
    padding: 0.5rem;
  }
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
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;