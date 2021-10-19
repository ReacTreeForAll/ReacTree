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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`

const Avatar = ({
  shape = 'circle',
  size = 50,
  src,
  mode = 'cover',
  alt = 'ImgError..',
  ...props
}) => {
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
