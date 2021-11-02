import { useEffect, useState } from 'react'
import { Authorization } from '../utils/Api'
import SettingContainer from '../components/domain/SettingContainer'
import Swal from 'sweetalert2'
import changeImg from '../assets/pageMove.png'

const SettingPage = () => {
  const [userPersonal, setUserPersonal] = useState([])
  const getUser = async () => {
    try {
      const res = await Authorization('/auth-user', 'GET')
      const { fullName, email, image, coverImage } = res
      setUserPersonal({
        fullName,
        email,
        image,
        coverImage,
      })
    } catch (e) {
      console.error(e)
    }
  }

  const ChangeAlert = () => {
    Swal.fire({
      title: '저장 완료',
      imageUrl: changeImg,
      imageHeight: 100,
      imageWidth: 100,
      confirmButtonColor: 'gray',
      confirmButtonText: '확인',
    })
  }

  const submitSettingForm = async (values) => {
    try {
      const userInfo = await Authorization('/settings/update-user', 'PUT', {
        fullName: JSON.stringify({
          name: values.fullName,
          userStep: JSON.parse(userPersonal.fullName).userStep,
        }),
        username: JSON.stringify({
          name: values.fullName,
          userStep: JSON.parse(userPersonal.fullName).userStep,
        }),
      })
      const { fullName, email } = userInfo
      setUserPersonal({
        ...userPersonal,
        fullName,
        email,
      })
      const data = await Authorization('/settings/update-password', 'PUT', {
        password: values.password,
      })
      ChangeAlert()
      return userInfo
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    getUser()
  }, [])
  return <SettingContainer submitSettingForm={submitSettingForm} userPersonal={userPersonal} />
}

export default SettingPage
