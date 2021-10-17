import Image from '../../components/base/Image'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    src: {
      type: { name: 'string', require: true },
      defaultValue: 'https://picsum.photos/200',
      control: { type: 'text' },
    },
    width: {
      defaultValue: 150,
      control: { type: 'range', min: 200, max: 600 },
    },
    height: {
      defaultValue: 150,
      control: { type: 'range', min: 200, max: 600 },
    },
    mode: {
      defaultValue: 'cover',
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
  },
}

export const Default = (args) => {
  return <Image {...args} />
}
