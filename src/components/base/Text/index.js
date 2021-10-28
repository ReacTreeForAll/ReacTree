import PropTypes from 'prop-types'

const Text = ({
  children,
  fontSize = 24,
  fontWeight = 400,
  color,
  underline,
  block,
  paragraph,
  ...props
}) => {
  const fontStyle = {
    fontSize,
    fontWeight,
    color,
    textDecoration: underline ? 'underline' : undefined,
  }

  const Tag = block ? 'div' : paragraph ? 'p' : 'span'

  return (
    <Tag style={{ ...props.style, ...fontStyle }} {...props}>
      {children}
    </Tag>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  fontWeight: PropTypes.bool,
  underline: PropTypes.bool,
  block: PropTypes.bool,
  paragraph: PropTypes.bool,
}

export default Text
