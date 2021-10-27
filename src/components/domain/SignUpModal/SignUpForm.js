import useForm from '../../../hooks/useForm'
import Button from '../../base/Button'
import styled from '@emotion/styled'
import React from 'react'

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
  padding: 0.8em;
  width: 70%;
  height: 250px;
  border-radius: 5px;
`
const SignUpForm = ({ submitSignUpForm }) => {
  const { errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      fullName: '',
      password: '',
      passwordCheck: '',
    },
    onSubmit: async (values) => {
      await submitSignUpForm(values)
    },
    validate: ({ email, fullName, password, passwordCheck }) => {
      const errors = {}
      if (!email) {
        errors.email = '이메일을 입력해주세요'
      } else if (!/^([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+)$/.test(email)) {
        errors.email = '올바른 이메일을 입력해주세요(ex. hello@abc.com)'
      }
      if (!fullName) {
        errors.fullName = '이름을 입력해주세요'
      } else if (!/^[가-힣]{2,6}$/.test(fullName)) {
        errors.fullName = '2~6자 한글로 입력해주세요'
      }
      if (!password) {
        errors.password = '비밀번호를 입력해주세요'
      } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(password))
        errors.password = '8자 이상 영문 대소문자, 숫자, 특수 문자의 조합을 사용하세요'
      if (!passwordCheck || password !== passwordCheck) {
        errors.passwordCheck = '비밀번호가 일치하지않습니다'
      }
      return errors
    },
  })

  return (
    <FormStyle onSubmit={handleSubmit}>
      <InputStyle>
        <input
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          onChange={handleChange}
          style={{
            width: '80%',
            padding: '1em',
            border: 'none',
            outlineColor: '#14bd7e',
            borderRadius: '3px',
            backgroundColor: '#F2F2F2',
          }}
          autoFocus
        />
        <span style={{ color: 'red', fontSize: '8px', padding: '3px' }}>{errors.email}</span>
        <input
          name="fullName"
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={handleChange}
          style={{
            width: '80%',
            padding: '1em',
            border: 'none',
            outlineColor: '#14bd7e',
            borderRadius: '3px',
            backgroundColor: '#F2F2F2',
          }}
        />
        <span style={{ color: 'red', fontSize: '8px', padding: '3px' }}>{errors.fullName}</span>
        <input
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={handleChange}
          style={{
            width: '80%',
            padding: '1em',
            border: 'none',
            outlineColor: '#14bd7e',
            borderRadius: '3px',
            backgroundColor: '#F2F2F2',
          }}
        />
        <span style={{ color: 'red', fontSize: '8px', padding: '3px' }}>{errors.password}</span>
        <input
          name="passwordCheck"
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요"
          onChange={handleChange}
          style={{
            width: '80%',
            padding: '1em',
            border: 'none',
            outlineColor: '#14bd7e',
            borderRadius: '3px',
            backgroundColor: '#F2F2F2',
          }}
        />
        <span style={{ color: 'red', fontSize: '8px', padding: '3px' }}>
          {errors.passwordCheck}
        </span>
      </InputStyle>
      <Button
        type="submit"
        width={'65%'}
        height={40}
        textColor={'white'}
        fontSize={'0.8em'}
        fontWeight={700}
        backgroundColor={'#14bd7e'}>
        회원가입
      </Button>
    </FormStyle>
  )
}

export default SignUpForm
