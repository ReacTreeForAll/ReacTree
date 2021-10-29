import SignInModal from '../components/domain/SignInModal'
import axios from 'axios'
import Swal from 'sweetalert2'
import failImg from '../../src/assets/fail.png'
import { useHistory } from 'react-router'
import useLocalStorage from '../hooks/useLocalStorage'

const SignInPage = () => {
  const history = useHistory()
  // 세션 스토리지로 변경 예정
  const [tokenId, setTokenId] = useLocalStorage('tokenId', '')
  const FailAlert = () => {
    Swal.fire({
      title: '로그인 실패',
      text: '아이디와 비밀번호를 한번 더 확인해주세요',
      imageUrl: failImg,
      imageHeight: 100,
      imageWidth: 100,
      confirmButtonColor: 'gray',
      confirmButtonText: '확인',
    })
  }
  const submitSignInForm = async (values) => {
    try {
      const res = await axios
        .post('http://13.209.30.200:5002/login', {
          email: values.email,
          password: values.password,
        })
        .then((res) => res.data)
      const { token } = res
      setTokenId(token)
      history.push('/main')
      return res
    } catch (e) {
      FailAlert()
      console.error(e)
    }
  }
  return <SignInModal submitSignInForm={submitSignInForm} />
}

export default SignInPage
