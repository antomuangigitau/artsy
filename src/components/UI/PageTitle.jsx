import { Link } from 'react-router-dom';
import styled from 'styled-components';
const PageTitle = ({ title }) => {
  return (
    <Wrapper>
      <Link to="/">Home/</Link> {title}
    </Wrapper>
  );
};
export default PageTitle;

const Wrapper = styled.h3`
  font-family: 'Satoshi', sans-serif;
  font-size: 24px;
  font-weight: 500;

  a {
    color: #bcb7b7;
  }
`;
