import useForm from '../../hooks/useForm'

export default {
  title: 'Hooks/useForm',
}

export const Default = () => {
  const { errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      fullName: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values))
    },
    validate: ({ email, fullName, password }) => {
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
      return errors
    },
  })
  return (
    <form onSubmit={handleSubmit}>
      <h1>로그인</h1>
      <div>
        <input
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{errors.email}</span>
      </div>
      <div>
        <input
          name="fullName"
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{errors.fullName}</span>
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{errors.password}</span>
      </div>
      <button type="submit">로그인</button>
    </form>
  )
}
