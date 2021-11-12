import SignInModal from '@domain/SignInModal'
import Swal from 'sweetalert2'
import failImg from '@assets/fail.png'
import { useHistory } from 'react-router'
import { RequestApi } from '@utils/Api'
import { useUserContext } from '@contexts/UserProvider'

const SignInPage = () => {
  const history = useHistory()
  const { updateUserState } = useUserContext()
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
      const { user, token } = res
      sessionStorage.setItem('tokenId', JSON.stringify(token))
      updateUserState(user)
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
