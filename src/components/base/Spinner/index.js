import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Icon = styled.i`
    display:inline-block
    vertical-align:middle
`

const Spinner = ({ size = 100, color = '#00AEEF', loading = true, ...props }) => {
  return loading ? (
    <Icon>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width={size}
        height={size}
        viewBox="0 0 100 100"
        enable-background="new 0 0 100 100"
        xmlSpace="preserve">
        <circle opacity="0" fill={color} cx="29.883" cy="48.438" r="5.969">
          <animate
            attributeName="opacity"
            begin=".1"
            values="0;1;0"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle opacity="0" fill={color} cx="49.522" cy="48.438" r="5.969">
          <animate
            attributeName="opacity"
            begin=".2"
            values="0;1;0"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
        <circle opacity="0" fill={color} cx="68.199" cy="48.438" r="5.969">
          <animate
            attributeName="opacity"
            begin=".3"
            values="0;1;0"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </Icon>
  ) : null
}

Spinner.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  loading: PropTypes.bool,
}

export default Spinner
