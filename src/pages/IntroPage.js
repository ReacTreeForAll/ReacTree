import styled from '@emotion/styled'
import React from 'react'
import bgImgPath from '../../src/assets/backgroundImg.png'
import Text from '../components/base/Text'
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
    top: 50%;
    font-size: 12px;
  }
`
const ButtonStyle = styled.button`
  width: 30%;
  max-width: 200px;
  border: none;
  height: 40px;
  border-radius: 5px;
  background-color: #14bd7e;
  font-size: 0.8em;
  font-weight: 700;
  margin: 10px;
  color: white;
  box-shadow: 1px 1px 1px gray;
  :hover {
    background-color: #f3f3f5;
    color: black;
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
              wordBreak: 'keep-all',
            }}>
            눈부신 성장을 위한 리액트 30일 챌린지!
            <br />
            나만의 리액트리를 가꿀 준비가 됐다면 ?
          </Text>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%',
              margin: '1em',
              textAlign: 'center',
            }}>
            <ButtonStyle
              onClick={() => {
                history.push('/signin')
              }}>
              로그인
            </ButtonStyle>
            <ButtonStyle
              onClick={() => {
                history.push('/signup')
              }}>
              회원가입
            </ButtonStyle>
          </div>
        </IntroContainer>
      </BackgroundWrapper>
    </BackgroundStyle>
  )
}

export default IntroPage
