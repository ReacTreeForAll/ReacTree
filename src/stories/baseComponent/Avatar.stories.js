import Avatar from '../../components/base/Avatar'

/* eslint-disable */
export default {
  title: 'Components/base/Avatar',
  component: Avatar,
  argTypes: {
    src: { defaultValue: 'https://picsum.photos/200' },
    size: {
      defaultValue: 50,
      control: { type: 'number' },
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
