import styled from 'styled-components';
import getPropStyles from '../utils';

const H3 = styled.h3`
  font-size: 1.25em; /* 20/16 */
  font-weight: 700;
  line-height: 1.2;

  ${props => getPropStyles(props)}
`;

export default H3;
