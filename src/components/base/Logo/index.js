import PropTypes from 'prop-types'

const Logo = ({ size = 24, ...props }) => {
  const logoStyle = {
    width: size,
    height: size,
  }
  return (
    <img
      src={process.env.PUBLIC_URL + '/images/Logo.png'}
      alt="Logo_Error..."
      style={{ ...logoStyle, ...props }}
    />
  )
}

Logo.propTypes = {
  size: PropTypes.number,
}

export default Logo
