import { styled } from "@mui/system";
import { Palette } from "../../components/Palette";

export const PageNotFoundContainer = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  justify-content: center;

  > h1 {
    color: ${Palette.jelpRed};
    font-size: 5rem;
    margin-bottom: 1.5rem;
  }

  > h2 {
    font-weight: normal;
  }
`;

export const SubText = styled('h3')`
  font-weight: normal;

  > span {
    color: ${Palette.jelpRed};
    cursor: pointer;

    &:hover {
      color: ${Palette.jelpBrightRed};
    }
  }
`