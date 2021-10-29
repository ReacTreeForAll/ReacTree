import React from 'react'
import bgImgPath from '../../../assets/backgroundImg.png'
import Text from '../../base/Text'
import Logo from '../../base/Logo'
import styled from '@emotion/styled'
import Input from '../../base/Input'
import Button from '../../base/Button'
import useForm from '../../../hooks/useForm'
import { Link } from 'react-router-dom'

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
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`

const SignInContainer = styled.div`
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
  min-height: 520px;
  background-color: white;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 375px) {
    font-size: 13px;
    min-height: 480px;
  }
`
const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
  width: 90%;
  height: 40%;
  border-radius: 5px;
`

const SignInModal = ({ submitSignInForm }) => {
  const { errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await submitSignInForm(values)
    },
    validate: ({ email, password }) => {
      const errors = {}
      if (!email) {
        errors.email = '이메일을 입력해주세요'
      } else if (!/^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+)$/.test(email)) {
        errors.email = '올바른 이메일을 입력해주세요(ex. hello@abc.com)'
      }
      if (!password) {
        errors.password = '비밀번호를 입력해주세요'
      } else if (
        !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(password)
      ) {
        errors.password = '8자 이상 영문 대소문자, 숫자, 특수 문자의 조합을 사용하세요'
      }
      return errors
    },
  })

  return (
    <>
      <BackgroundStyle>
        <BackgroundWrapper>
          <SignInContainer>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '3em',
              }}>
              <Logo size={120} />
              <Text
                style={{
                  display: 'block',
                  fontSize: '1.3em',
                  fontWeight: 700,
                  textAlign: 'center',
                }}>
                리액트 가꿈이가 되시겠습니까?
              </Text>
            </div>
            <FormStyle onSubmit={handleSubmit}>
              <InputStyle>
                <label htmlFor="email" />
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="이메일을 입력해주세요"
                  onChange={handleChange}
                  autoFocus
                />
                <span style={{ color: 'red', fontSize: '8px', padding: '3px' }}>
                  {errors.email}
                </span>
                <label htmlFor="password" />
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="비밀번호를 입력해주세요"
                  onChange={handleChange}
                />
                <span style={{ color: 'red', fontSize: '8px', padding: '3px' }}>
                  {errors.password}
                </span>
              </InputStyle>
              <Button fontSize={'1em'} type="submit">
                로그인
              </Button>
              <Text style={{ margin: '15px', fontSize: '0.8em' }}>
                ReacTree 회원이 아니신가요?
                <Link to="/signup" style={{ color: '#14bd7e', margin: '10px' }}>
                  회원가입
                </Link>
              </Text>
            </FormStyle>
          </SignInContainer>
        </BackgroundWrapper>
      </BackgroundStyle>
    </>
  )
}

export default SignInModal
