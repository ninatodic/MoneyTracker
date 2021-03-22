import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: inline;
  color: #fff;
  margin: 0 1rem;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #c7a1e1;
    cursor: pointer;
  }
  &:hover h1 {
    color: #fff;
  }
`;

export default StyledLink;
