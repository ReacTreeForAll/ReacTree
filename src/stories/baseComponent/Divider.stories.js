import Divider from '../../components/base/Divider'

export default {
  title: 'Components/base/Divider',
  component: Divider,
  argTypes: {
    size: {
      type: { name: Number },
      defaultValue: 8,
      control: { type: 'number' },
    },
    color: {
      defaultValue: '#aaa',
      control: { type: 'color' },
    },
  },
}

export const Hotizontal = (args) => {
  return (
    <>
      <span>위</span>
      <Divider type="horizontal" {...args} />
      <span>아래</span>
    </>
  )
}

export const Vertical = (args) => {
  return (
    <>
      <span>하나</span>
      <Divider type="vertical" {...args} />
      <span>둘</span>
      <Divider type="vertical" {...args} />
      <span>셋</span>
    </>
  )
}
