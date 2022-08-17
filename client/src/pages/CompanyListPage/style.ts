import { FormControl } from "@mui/material";
import { styled } from "@mui/system";

export const CompanyListPageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 5rem;
  position: relative;
`;

export const TopContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 3rem;

  > h2 {
    margin: 0;
    font-weight: normal;
  }
`;

export const FormContainer = styled(FormControl)`
  margin-left: auto;
  width: 8rem;
`;

export const GridContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media(max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media(max-width: 700px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;