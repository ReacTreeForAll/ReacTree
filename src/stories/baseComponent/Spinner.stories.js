import Spinner from '../../components/base/Spinner'

/* eslint-disable */
export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: { defaultValue: '100px', control: 'text' },
    color: { control: 'color' },
    loading: { defaultValue: true, control: 'boolean' },
  },
}

export const Default = (args) => {
  return <Spinner {...args} />
}
