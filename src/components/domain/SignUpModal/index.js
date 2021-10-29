import styled from '@emotion/styled'
import React from 'react'
import bgImgPath from '../../../assets/backgroundImg.png'
import Text from '../../base/Text'
import SignUpForm from './SignUpForm'
import Logo from '../../base/Logo'

const BackgroundStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bgImgPath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 18px;
`

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`

const SignUpContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 70%;
  min-width: 250px;
  max-width: 400px;
  height: 65%;
  min-height: 570px;
  background-color: white;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 13px;
    min-height: 540px;
  }
`
const SignUpModal = ({ submitSignUpForm }) => {
  return (
    <>
      <BackgroundStyle>
        <BackgroundWrapper>
          <SignUpContainer>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '2em',
              }}>
              <Logo size={120} />
              <Text
                style={{
                  display: 'block',
                  fontSize: '1.5em',
                  fontWeight: 700,
                  textAlign: 'center',
                }}>
                가꿈이 지원서
              </Text>
            </div>
            <SignUpForm submitSignUpForm={submitSignUpForm} />
          </SignUpContainer>
        </BackgroundWrapper>
      </BackgroundStyle>
    </>
  )
}

export default SignUpModal
