import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useState } from 'react'

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`

const ModalInner = styled.div`
  border-radius: 5px;
`

const ModalContainer = ({ onClick, width, height, color, ...props }) => {
  const [showModal, setShowModal] = useState(false)

  const handelModal = () => {
    setShowModal(!showModal)
  }

  const innerStyle = {
    width,
    height,
    backgroundColor: color,
  }

  return (
    <>
      <button onClick={handelModal}>Modal</button>
      {showModal ? (
        <ModalWrapper onClick={handelModal}>
          <ModalInner
            {...props}
            style={{ ...innerStyle, ...props.style }}
            onClick={(e) => e.stopPropagation()}
          />
        </ModalWrapper>
      ) : null}
    </>
  )
}

ModalContainer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
}

export default ModalContainer
