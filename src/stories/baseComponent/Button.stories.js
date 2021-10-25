import Button from '../../components/base/Button'

/* eslint-disable */
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    textColor: { control: 'color' },
    fontSize: { control: 'number' },
    fontWeight: {
      type: 'select',
      options: [400, 700],
    },
    backgroundColor: { control: 'color' },
    hoveredColor: { control: 'color' },
    borderRadius: { control: 'number' },
    onClick: { action: 'clicked' },
  },
}

export const Default = (args) => {
  return <Button {...args}>{args.children}</Button>
}
