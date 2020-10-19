import styled from 'styled-components';
import getPropStyles from '../utils';

const Strong = styled.strong`
  font-weight: bold;

  ${props => getPropStyles(props)}
`;

export default Strong;
