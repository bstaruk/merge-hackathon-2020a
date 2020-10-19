import styled from 'styled-components';
import getPropStyles from '../utils';

const H1 = styled.h1`
  font-size: 2em; /* 32/16 */
  font-weight: 700;
  line-height: 1.2;

  ${props => getPropStyles(props)}
`;

export default H1;
