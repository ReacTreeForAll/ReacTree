import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const BadgeShape = styled.div`
  position: relative;
  display: inline-block;
  left: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid white;
  transform: translate(-80%, 10%);
`

const Badge = ({ isOnline = false, ...props }) => {
  return (
    <BadgeShape
      {...props}
      style={{ backgroundColor: `${isOnline ? 'green' : 'gray'}`, ...props.style }}
    />
  )
}

Badge.propTypes = {
  isOnline: PropTypes.bool,
}

export default Badge
