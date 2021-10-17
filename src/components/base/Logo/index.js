import PropTypes from 'prop-types'
import LogoPath from '../../../assets/Logo.png'

const Logo = ({ size = 24, ...props }) => {
  const logoStyle = {
    width: size,
    height: size,
  }
  return (
    <img src={LogoPath} alt="Logo_Error..." style={{ ...logoStyle, ...props.style }} {...props} />
  )
}

Logo.propTypes = {
  size: PropTypes.number,
}

export default Logo
