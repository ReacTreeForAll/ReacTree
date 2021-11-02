import SignUpModal from '../components/domain/SignUpModal'
import Swal from 'sweetalert2'
import successImg from '../../src/assets/success.png'
import failImg from '../../src/assets/fail.png'
import { useHistory } from 'react-router'
import { RequestApi } from '../utils/Api'

const SignUpPage = () => {
  const history = useHistory()
  const SuccessAlert = () => {
    Swal.fire({
      title: '회원가입 완료',
      html: '리액트 가꿈이가 되신 것을 축하합니다!<br>로그인 페이지로 이동합니다',
      imageUrl: successImg,
      imageHeight: 100,
      imageWidth: 100,
      confirmButtonColor: 'gray',
      confirmButtonText: '확인',
    }).then((result) => {
      if (result.isConfirmed) {
        history.push('/signin')
      }
    })
  }

  const FailAlert = () => {
    Swal.fire({
      title: '회원가입 실패',
      text: '중복된 아이디가 존재합니다!',
      imageUrl: failImg,
      imageHeight: 100,
      imageWidth: 100,
      confirmButtonColor: 'gray',
      confirmButtonText: '확인',
    })
  }
  const submitSignUpForm = async (values) => {
    try {
      const res = await RequestApi('/signup', 'POST', {
        email: values.email,
        fullName: JSON.stringify({ name: values.fullName, userStep: 1 }),
        password: values.password,
      })
      SuccessAlert()
      return res
    } catch (e) {
      FailAlert()
      console.error(e)
    }
  }
  return <SignUpModal submitSignUpForm={submitSignUpForm} />
}

export default SignUpPage
