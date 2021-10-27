import Badge from '../../components/base/Badge'

export default {
  title: 'Components/base/Badge',
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
