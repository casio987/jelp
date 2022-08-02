import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import { Palette } from "../../components/Palette";

export const LoginPageContainer = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    align-self: flex-end;
  }
`;

export const LogoText = styled('h1')`
  color: ${Palette.jelpRed};
  cursor: pointer;
  margin: 0;
  font-size: 4rem;
`;

export const SubText = styled('h2')`
  font-weight: normal;
  font-size: 2rem;

  > span {
    color: ${Palette.jelpRed};
  }
`;

export const InputField = styled(TextField)`
  width: 100%;
  margin-bottom: 1rem;
`;

export const LoginButton = styled('button')`
  color: white;
  background-color: ${Palette.jelpBrightRed};
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  padding: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background 0.8s ease 0s, box-shadow 0.3s ease 0s;
  &:hover {
    background-color: ${Palette.jelpRed};
    box-shadow: rgba(50, 50, 93, 0.1) 0px 7px 14px, rgba(0, 0, 0, 0.08) 0px 3px 6px;  }

`;

export const RedirectLink = styled('a')`
  text-decoration: none;
  color: ${Palette.jelpRed};
  transition: all 0.3s ease 0s;
  &:hover {
    color: ${Palette.jelpBrightRed};
  }
`;