import Badge from '../../components/base/Badge'

/* eslint-disable */
export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    isOnline: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
}

export const Default = (args) => {
  return (
    <>
      <img
        src="https://picsum.photos/200"
        width="50px"
        height="50px"
        style={{ borderRadius: '50%' }}
      />
      <Badge {...args} />
    </>
  )
}
