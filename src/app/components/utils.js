function getColorStyles(props) {
  if (props.color && !!props.theme.color[props.color]) {
    return `color: ${props.theme.color[props.color]};`;
  }

  return '';
}

function getOpacityStyles(props) {
  if (props.opacity) {
    return `opacity: ${parseFloat(props.opacity) * 0.25};`;
  }

  return '';
}

function getFontWeightStyles(props) {
  if (props.fontWeight) {
    return `font-weight: ${props.fontWeight};`;
  }

  return '';
}

function getTextAlignStyles(props) {
  if (props.textAlign) {
    return `text-align: ${props.textAlign};`;
  }

  return '';
}

function getTextTransformStyles(props) {
  if (props.textTransform) {
    return `text-transform: ${props.textTransform};`;
  }

  return '';
}

function getPropStyles(props) {
  let styles = '';
  styles += getColorStyles(props);
  styles += getOpacityStyles(props);
  styles += getFontWeightStyles(props);
  styles += getTextAlignStyles(props);
  styles += getTextTransformStyles(props);
  return styles;
}

export default getPropStyles;
