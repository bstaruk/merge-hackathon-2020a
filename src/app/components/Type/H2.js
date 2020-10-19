import styled from 'styled-components';
import getPropStyles from '../utils';

const H2 = styled.h2`
  font-size: 1.75em; /* 28/16 */
  font-weight: 700;
  line-height: 1.2;

  ${props => getPropStyles(props)}
`;

export default H2;
