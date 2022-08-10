import { styled } from "@mui/system";
import { Palette } from "../../../components/Palette";

export const ProfilePageCardContainer = styled('div')`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  width: 75%;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  height: 11.5rem;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  > h3 {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${Palette.jelpLightGray};
  }
`;

export const CompanyName = styled('p')`
  margin-top: 0;
  color: ${Palette.jelpGray};
`;

export const DescriptionText =styled('p')`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0;
  width: 75%;
`;

