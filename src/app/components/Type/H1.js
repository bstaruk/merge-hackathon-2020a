import styled from 'styled-components';
import { mq } from 'utils/style';

import getPropStyles from '../utils';

const H1 = styled.h1`
  font-size: 1.75em; /* 28/16 */
  font-weight: 700;
  line-height: 1.2;

  @media ${mq.mobileLg} {
    font-size: 2em; /* 32/16 */
  }

  ${props => getPropStyles(props)}
`;

export default H1;
