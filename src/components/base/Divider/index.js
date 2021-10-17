import styled from '@emotion/styled'

const Line = styled.hr`
  border: none;

  &.horizontal {
    display: block;
    width: 100%;
    height: 1px;
  }

  &.vertical {
    position: relative;
    top: -1px;
    display: inline-block;
    width: 1px;
    height: 10px;
    vertical-align: middle;
  }
`

const Divider = ({ type = 'horizontal', size = 8, color = '#aaa', ...props }) => {
  const dividerStyle = {
    backgroundColor: color,
    size,
    margin: type === 'vertical' ? `0 ${size}px` : `${size}px 0`,
  }

  return <Line {...props} className={type} style={{ ...dividerStyle, ...props.style }} />
}

export default Divider
