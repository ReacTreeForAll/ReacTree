import useForm from '@hooks/useForm'
import Button from '@base/Button'
import Input from '@base/Input'
import styled from '@emotion/styled'
import Text from '@base/Text'
import Divider from '@base/Divider'

const ChangeForm = ({ submitSettingForm }) => {
  const { errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      fullName: '',
      password: '',
    },
    onSubmit: submitSettingForm,
    validate: ({ fullName, password }) => {
      const errors = {}
      if (!fullName) {
        errors.fullName = '이름을 입력해주세요'
      } else if (!/^[가-힣]{2,6}$/.test(fullName)) {
        errors.fullName = '2~6자 한글로 입력해주세요'
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
    <ChangeFormContainer onSubmit={handleSubmit}>
      <TitleContainer>
        <Text fontSize={'18px'} fontWeight={700}>
          이름 변경
        </Text>
        <Divider size={10} color={'#14BD7E'} style={{ width: '100px' }} />
      </TitleContainer>
      <label htmlFor="fullName" />
      <Input
        type="text"
        name="fullName"
        id="fullName"
        placeholder="변경할 이름을 입력해주세요"
        onChange={handleChange}
      />
      <span style={{ color: 'red', fontSize: '8px', padding: '3px' }}>{errors.fullName}</span>
      <TitleContainer>
        <Text fontSize={'18px'} fontWeight={700}>
          비밀번호 변경
        </Text>
        <Divider color={'#14BD7E'} size={10} style={{ width: '100px' }} />
      </TitleContainer>
      <label htmlFor="password" />
      <Input
        type="password"
        name="password"
        id="password"
        placeholder="변경할 비밀번호를 입력해주세요"
        onChange={handleChange}
      />
      <span style={{ color: 'red', fontSize: '8px', padding: '3px' }}>{errors.password}</span>
      <Button style={{ margin: '2em' }} type="submit">
        변경하기
      </Button>
    </ChangeFormContainer>
  )
}

const ChangeFormContainer = styled.form`
  display: flex;
  width: 30em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em;
`
const TitleContainer = styled.div`
  width: 100%;
  padding: 0.6em 3em;
`
export default ChangeForm
