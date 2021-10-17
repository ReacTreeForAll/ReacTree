import Text from '../../components/base/Text'
import PropTypes from 'prop-types'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    fontSize: { defaultValue: 24, control: { type: 'range', min: 16, max: 60 } },
    color: { control: 'color' },
    fontWeight: { control: 'number' },
    underline: { control: 'boolean' },
    block: { control: 'boolean' },
    paragraph: { control: 'boolean' },
  },
}

export const Default = (args) => {
  return (
    <>
      <Text {...args}>TEXT</Text>
      <Text {...args}>AAAAAAA</Text>
    </>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  fontWeight: PropTypes.bool,
  underline: PropTypes.bool,
  block: PropTypes.bool,
  paragraph: PropTypes.bool,
}
