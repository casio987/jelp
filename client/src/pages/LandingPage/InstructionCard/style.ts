import { styled } from "@mui/system";
import { Palette } from "../../../components/Palette";

export const InstructionCardContainer = styled('div')`
  display: flex;
  flex-direction: row;
  height: 6rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  color: ${Palette.jelpRed};

  > :first-of-type {
    margin-right: 1rem;
  }

  h2 {
    margin-right: 1rem;
  }
`;

export const InstructionImage = styled('img')`
  height: 100%;
`;

export const TextContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

export const StepText = styled('h2')`
  margin-right: 1rem;
`;

export const SubText = styled('p')`
  color: ${Palette.jelpGray};
  margin: 0;
`;

// TODO: make responsive