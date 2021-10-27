import styled from '@emotion/styled'
import React from 'react'
import bgImgPath from '../../../assets/backgroundImg.png'
import Text from '../../base/Text'
import { useState } from 'react'
import SignUpForm from './SignUpForm'
import Logo from '../../base/Logo'

const BackgroundStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bgImgPath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 24px;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`

const ModalInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 60%;
  min-width: 250px;
  max-width: 400px;
  height: 70%;
  min-height: 500px;
  z-index: 2000;
  padding: 0 0 5%;
  background-color: white;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const CloseButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: gray;
  cursor: pointer;
  :hover {
    background-color: red;
  }
`

const SignUpModal = ({ submitSignUpForm }) => {
  const [visible, setVisible] = useState(true)
  const handleModal = () => {
    setVisible((visible) => !visible)
  }
  return (
    <>
      <BackgroundStyle>
        <ModalWrapper style={{ display: visible ? 'block' : 'none' }}>
          <ModalInner style={{ display: visible ? 'block' : 'none' }}>
            <CloseButton onClick={handleModal}>X</CloseButton>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '30px',
              }}>
              <Logo size={120} />
              <Text
                style={{
                  display: 'block',
                  fontSize: '1.3em',
                  fontWeight: 700,
                  textAlign: 'center',
                }}>
                가꿈이 지원서
              </Text>
            </div>
            <SignUpForm submitSignUpForm={submitSignUpForm} />
          </ModalInner>
        </ModalWrapper>
      </BackgroundStyle>
    </>
  )
}

export default SignUpModal
