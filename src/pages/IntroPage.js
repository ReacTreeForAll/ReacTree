import styled from '@emotion/styled'
import React from 'react'
import bgImgPath from '../../src/assets/backgroundImg.png'
import Text from '../components/base/Text'
import Button from '../components/base/Button'
import Logo from '../components/base/Logo'
import { useHistory } from 'react-router'

const BackgroundStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bgImgPath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 24px;
`

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`

const IntroContainer = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  width: 100%;
  height: 60%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`
const IntroPage = () => {
  const history = useHistory()
  return (
    <BackgroundStyle>
      <BackgroundWrapper>
        <IntroContainer>
          <Logo size={'12em'} />
          <Text
            color={'white'}
            fontSize={'1.5em'}
            fontWeight={700}
            style={{
              textAlign: 'center',
              lineHeight: '1.5',
              margin: '2em',
            }}>
            눈부신 성장을 위한 리액트 30일 챌린지!
            <br />
            나만의 리액트리를 가꿀 준비가 됐다면 ?
          </Text>
          <div style={{ width: '50%', margin: '1em', textAlign: 'center' }}>
            <Button
              onClick={() => {
                history.push('/signin')
              }}
              width={'25%'}
              style={{ margin: '10px' }}>
              로그인
            </Button>
            <Button
              onClick={() => {
                history.push('/signup')
              }}
              width={'25%'}>
              회원가입
            </Button>
          </div>
        </IntroContainer>
      </BackgroundWrapper>
    </BackgroundStyle>
  )
}

export default IntroPage
