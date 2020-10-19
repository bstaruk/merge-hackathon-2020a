import styled from 'styled-components';
import getPropStyles from '../utils';

const getFontSize = props => {
  if (props.xsmall) return '0.75rem'; // 12/16
  if (props.small) return '0.875rem'; // 14/16
  if (props.fontSize) return props.fontSize;
  return '1rem';
};

const P = styled.p`
  font-size: ${props => getFontSize(props)};

  ${props => getPropStyles(props)}
`;

export default P;
