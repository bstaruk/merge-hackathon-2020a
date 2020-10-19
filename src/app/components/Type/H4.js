import styled from 'styled-components';
import getPropStyles from '../utils';

const H4 = styled.h4`
  font-size: 1.125em; /* 18/16 */
  font-weight: 700;
  line-height: 1.2;

  ${props => getPropStyles(props)}
`;

export default H4;
