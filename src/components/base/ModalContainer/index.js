import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useMemo, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`

const ModalInner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`
const CloseButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  margin: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: gray;
  :hover {
    background-color: red;
  }
`

const ModalContainer = ({
  width = 300,
  height = 300,
  color = 'white',
  close = false,
  ...props
}) => {
  const [visible, setVisible] = useState(true)
  const handleModal = () => {
    setVisible(!visible)
  }
  const innerStyle = {
    width,
    height,
    display: visible ? 'block' : 'none',
    backgroundColor: color,
  }

  const el = useMemo(() => document.createElement('div'), [])
  useEffect(() => {
    document.body.appendChild(el)
    return () => {
      document.body.removeChild(el)
    }
  })

  return ReactDOM.createPortal(
    <ModalWrapper>
      <ModalInner {...props} style={{ ...props.style, ...innerStyle }}>
        <CloseButton onClick={handleModal} style={{ display: close ? 'block' : 'none' }}>
          X
        </CloseButton>
      </ModalInner>
    </ModalWrapper>,
    el,
  )
}

ModalContainer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  close: PropTypes.bool,
}

export default ModalContainer
