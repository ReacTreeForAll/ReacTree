import ModalContainer from '../../components/base/ModalContainer'
import { useState } from 'react'

/* eslint-disable */
export default {
  title: 'Components/ModalContainer',
  component: ModalContainer,
  argTypes: {
    width: {
      defaultValue: 300,
      control: { type: 'number' },
    },
    height: {
      defaultValue: 300,
      control: { type: 'number' },
    },
    color: {
      defaultValue: 'white',
      control: { type: 'color' },
    },
  },
}

export const Default = (args) => {
  const [visible, setVisible] = useState(false)

  const handleModal = () => {
    setVisible(!visible)
  }
  return (
    <div>
      <button onClick={handleModal}>Show Modal</button>
      <ModalContainer visible={visible} {...args}>
        Hi!
        <button onClick={handleModal}>X</button>
      </ModalContainer>
    </div>
  )
}
