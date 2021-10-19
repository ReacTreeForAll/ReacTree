import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const shapetoCssValue = {
  circle: '50%',
  round: '4px',
  square: '0px',
}

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  border-radius: ${({ shape }) => shapetoCssValue[shape]};
  overflow: hidden;
`

const Avatar = ({ shape = 'circle', size = 50, src, mode = 'cover', alt, ...props }) => {
  const avatarStyle = {
    width: size,
    height: size,
  }
  return (
    <AvatarWrapper {...props} shape={shape} style={{ ...avatarStyle, ...props.style }}>
      <img src={src} alt={alt} mode={mode} style={{ ...avatarStyle }} />
    </AvatarWrapper>
  )
}

Avatar.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  mode: PropTypes.string,
  shape: PropTypes.string,
}

export default Avatar
