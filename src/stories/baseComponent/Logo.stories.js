import Logo from '../../components/base/Logo'
import PropTypes from 'prop-types'

export default {
  title: 'Components/base/Logo',
  component: Logo,
  argTypes: {
    size: { defaultValue: 24, control: { type: 'range', min: 16, max: 60 } },
  },
}

export const Default = (args) => {
  return <Logo {...args} />
}

Logo.propTypes = {
  size: PropTypes.number,
}
