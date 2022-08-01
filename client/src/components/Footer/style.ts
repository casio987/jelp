import { styled } from "@mui/system";
import { Palette } from "../Palette";

export const FooterContainer = styled('div')`
  display: flex;
  flex-direction: row;
  background-color: ${Palette.jelpRed};
  color: ${Palette.white};
  width: 100%;
  align-items: center;
  height: 5rem;
  padding: 0 1rem;
  font-size: 1.5rem;
`;