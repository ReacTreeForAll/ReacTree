import Avatar from '../../components/base/Avatar'

/* eslint-disable */
export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    src: { defaultValue: 'https://picsum.photos/200' },
    size: {
      type: { name: 'number' },
      defaultValue: 50,
      control: { type: 'number' },
    },
    alt: {
      control: 'string',
    },
    mode: {
      defaultValue: 'cover',
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
    shape: {
      defaultValue: 'circle',
      control: 'inline-radio',
      options: ['circle', 'round', 'square'],
    },
  },
}

export const Default = (args) => {
  return <Avatar {...args} />
}
