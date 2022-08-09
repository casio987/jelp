import { styled } from "@mui/system";
import { Palette } from "../../../components/Palette";

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

  > h3 {
    font-weight: normal;
  }
`;

export const CardImage = styled('img')`
  height: 5rem;
  margin-left: auto;
  margin-right: 2.5rem;

  @media(max-width: 500px) {
    margin-right: 1rem;
    height: 3rem;
  }
`;

export const ChevronImage = styled('img')`
  height: 1.5rem;
`

