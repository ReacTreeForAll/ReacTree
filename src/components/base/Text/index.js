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

export default Text
