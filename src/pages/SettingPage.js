import React, { useEffect, useState } from 'react'
import { Authorization, RequestApi } from '@utils/Api'
import SettingContainer from '@domain/SettingContainer'
import Swal from 'sweetalert2'
import changeImg from '@assets/pageMove.png'
import NavChannel from '@domain/NavChannel'
import Header from '@domain/Header'
import styled from '@emotion/styled'

const SettingPage = () => {
  const [userPersonal, setUserPersonal] = useState([])
  const [channels, setChannels] = useState([])
  const [userStep, setUserStep] = useState(0)

  // 초기 채널 목록 API
  const initChannels = async () => {
    try {
      const res = await RequestApi('/channels', 'GET')
      setChannels(res)
    } catch (e) {
      console.error(e)
    }
  }

  const getUser = async () => {
    try {
      const res = await Authorization('/auth-user', 'GET')
      const { _id, isOnline, fullName, email, image, coverImage } = res
      setUserPersonal({
        _id,
        isOnline,
        fullName,
        email,
        image,
        coverImage,
      })
      const step = JSON.parse(fullName).userStep
      setUserStep(step)
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
      const { fullName, email, image, coverImage } = userInfo
      setUserPersonal({
        fullName,
        email,
        image,
        coverImage,
      })
      await Authorization('/settings/update-password', 'PUT', {
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
    initChannels()
  }, [])
  return (
    <div style={{ margin: '0 32px' }}>
      <Header userInfo={userPersonal} />
      <SettingContentsContainer>
        <NavChannel
          category={'main'}
          paramsId={userStep - 1}
          channels={channels}
          userstep={userStep === 0 ? 1 : userStep}
        />
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <SettingContainer submitSettingForm={submitSettingForm} userPersonal={userPersonal} />
        </div>
      </SettingContentsContainer>
    </div>
  )
}

const SettingContentsContainer = styled.div`
  display: flex;
  background-color: #f3f3f5;
  overflow-y: auto;
  align-items: center;
`

export default SettingPage
