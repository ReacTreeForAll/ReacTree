import Text from '@base/Text'

export default {
  title: 'Components/base/Text',
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
