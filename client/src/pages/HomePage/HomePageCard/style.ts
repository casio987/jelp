import { styled } from "@mui/system";
import { Palette } from "../../../components/Palette";

// TODO: media queries
export const HomePageCardContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10rem;
  width: 65%;
  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
  padding: 1rem;
  color: ${Palette.jelpBrightRed};
  cursor: pointer;
`;
