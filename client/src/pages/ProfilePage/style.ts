import { Pagination } from "@mui/material";
import { styled } from "@mui/system";
import { Palette } from "../../components/Palette";

export const ProfilePageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  position: relative;
  padding-bottom: 5rem;
`;

export const SwitchContainer = styled('div')`
  display: flex;
  flex-direction: row;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
  width: 75%;
  height: 5rem;
  margin-bottom: 2rem;

  > h3 {
    font-weight: normal;
    color: ${Palette.jelpGray}
  }
`;

export const OptionButton = styled('button')`
  font-size: 1rem;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  border: none;
  background-color: white;
  border-radius: 0.5rem;
  color: ${Palette.jelpGray};
  height: 100%;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: ${Palette.jelpLightGray};
    color: ${Palette.jelpRed}
  }
`;

export const EmptyContainer = styled('div')`
  margin: auto 0;
  align-items: center;
  text-align: center;
  color: ${Palette.jelpEmptyGray};
`;

export const StyledPagination = styled(Pagination)`
  margin: auto 0 1rem 0;
`;
