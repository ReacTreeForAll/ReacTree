import SignInModal from '../components/domain/SignInModal'
import Swal from 'sweetalert2'
import failImg from '../../src/assets/fail.png'
import { useHistory } from 'react-router'
import useSessionStorage from '../hooks/useSessionStorage'
import { RequestApi } from '../utils/Api'

const SignInPage = () => {
  const history = useHistory()
  const [tokenId, setTokenId] = useSessionStorage('tokenId', '')
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
      const res = await RequestApi('/login', 'POST', {
        email: values.email,
        password: values.password,
      })
      const { token } = res
      setTokenId(token)
      history.push('/main/0')
      return res
    } catch (e) {
      FailAlert()
      console.error(e)
    }
  }
  return <SignInModal submitSignInForm={submitSignInForm} />
}

export default SignInPage
