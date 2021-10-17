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
      defaultValue: '',
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
    block: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    lazy: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    placeholder: {
      type: { name: 'string' },
      defaultValue: 'https://via.placeholder.com/200',
      control: { type: 'text' },
    },
    threshold: {
      defaultValue: 0.1,
      control: { type: 'number' },
    },
    iscircle: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
}

export const Default = (args) => {
  return <Image {...args} />
}
