import NavChannel from '../../components/domain/NavChannel'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/domain/NavChannel',
  component: NavChannel,
  argTypes: {
    userstep: {
      defaultValue: 1,
      control: { type: 'range', min: 1, max: 15 },
    },
  },
}

export const Default = (args) => {
  return <NavChannel viewport="browser" {...args} />
}

export const Mobile = (args) => {
  return <NavChannel viewport="mobile" {...args} />
}
