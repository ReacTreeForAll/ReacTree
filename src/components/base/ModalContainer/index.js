import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useMemo, useEffect } from 'react'
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

const ModalContainer = ({ width, height, color, visible = false, ...props }) => {
  const innerStyle = {
    width,
    height,
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
    <ModalWrapper style={{ display: visible ? 'block' : 'none' }}>
      <ModalInner {...props} style={{ ...props.style, ...innerStyle }} />
    </ModalWrapper>,
    el,
  )
}

ModalContainer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  visible: PropTypes.bool,
}

export default ModalContainer
