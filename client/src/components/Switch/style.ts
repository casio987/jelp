import { styled } from "@mui/system";
import { Palette } from "../Palette";

export const SwitchContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 2rem;
  width: 75%;
  padding: 0 1rem;
  border: 1px solid ${Palette.jelpGray};
  margin-bottom: 2rem;

  > p {
    color: ${Palette.jelpGray};
  }
`;

export const OptionButton = styled('button')`
  font-size: 1rem;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  border: none;
  background-color: white;
  border-radius: 2rem;
  color: ${Palette.jelpGray};

  &:hover {
    color: ${Palette.jelpRed}
  }
`;