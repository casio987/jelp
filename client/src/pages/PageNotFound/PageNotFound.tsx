import { useNavigate } from "react-router-dom";
import { PageNotFoundContainer, SubText } from "./style";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <PageNotFoundContainer>
      <h1>jelp</h1>
      <h2>looks like something went wrong</h2>
      <SubText>
        Click
        <span onClick={() => navigate('/')}>
          &nbsp;here&nbsp;
        </span>
        to return to our home page
      </SubText>
    </PageNotFoundContainer>
  );
};

export default PageNotFound;