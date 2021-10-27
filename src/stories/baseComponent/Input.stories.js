import Input from '../../components/base/Input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: { control: 'text' },
    width: { control: 'text' },
    placeHolder: { control: 'text' },
    fontSize: { control: 'number' },
    border: { control: 'text' },
  },
}

export const Default = (args) => {
  return <Input {...args} />
}

export const SmallFont = (args) => {
  return <Input fontSize={(args.fontSize = '16px')} {...args} />
}

export const Email = (args) => {
  return <Input type={(args.type = 'email')} placeHolder={(args.placeHolder = 'Email')} {...args} />
}

export const Identity = (args) => {
  return <Input type={(args.type = 'text')} placeHolder={(args.placeHolder = 'ID')} {...args} />
}

export const Password = (args) => {
  return (
    <Input
      type={(args.type = 'password')}
      placeHolder={(args.placeHolder = 'Password')}
      {...args}
    />
  )
}
