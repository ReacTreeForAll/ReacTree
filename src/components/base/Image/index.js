import PropTypes from 'prop-types'

const Image = ({ src, width = 150, height = 150, mode, ...props }) => {
  const imageStyle = {
    width,
    height,
    objectFit: mode || undefined,
  }

  return <img src={src} alt="ImgError..." style={{ ...imageStyle, ...props.style }} />
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  mode: PropTypes.string,
}

export default Image
