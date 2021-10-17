import Logo from '../../components/base/Logo'
import PropTypes from 'prop-types'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Logo',
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
