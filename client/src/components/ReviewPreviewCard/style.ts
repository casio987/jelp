import { styled } from "@mui/system";
import { Palette } from "../Palette";

export const ReviewPreviewCardContainer = styled('div')`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${Palette.jelpLightGray};
  }
`;

export const TopContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeadingContainer = styled('div')`
  display: flex;
  flex-direction: column;

  > h3 {
    margin: 0;
  }

  > p {
    margin-top: 0;
    font-size: 0.75rem;
    color: ${Palette.jelpGray}
  }
`;

export const Tag = styled('div')`
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${Palette.jelpRed};
  color: white;
  align-items: center;
`;

export const TextContainter = styled('div')`
  width: 100%;

  > h4 {
    margin-bottom: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;  
  }

  > p {
    margin-top: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;  
  }
`;