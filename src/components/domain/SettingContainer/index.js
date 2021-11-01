import Header from '../Header'
import NavChannel from '../NavChannel'
import Avatar from '../../base/Avatar'
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Image from '../../base/Image'
import { useUserContext } from '../../../contexts/UserProvider'
import { Authorization } from '../../../utils/Api'

const SettingContainer = () => {
  const [imageUrl, setImageUrl] = useState('')
  const { userState, updateUserState } = useUserContext()
  const showPreviewImage = async (e) => {
    e.preventDefault()
    if (e.target.files) {
      const imageFile = e.target.files[0]
      const fileReader = new FileReader()
      const formData = new FormData()
      fileReader.readAsDataURL(imageFile)
      fileReader.onload = function (e) {
        setImageUrl(e.target.result)
      }
      formData.append('isCover', false)
      formData.append('image', imageFile)
      const res = await Authorization('/users/upload-photo', 'POST', formData)
      updateUserState(res)
    }
  }
  console.log(userState)
  const getUserImage = () => {
    const prevImg = userState?.image
    setImageUrl(prevImg)
  }

  useEffect(() => {
    getUserImage()
  }, [])
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', height: '80%' }}>
        <NavContainer />
        <Settings>
          <UserInfoContainer>
            {imageUrl && <Image src={imageUrl} alt="imageFile" />}
            <form>
              <label htmlFor="userImage" />
              <input type="file" id="userImage" accept="image/*" onChange={showPreviewImage} />
            </form>
            <User>
              <span>{userState.email}</span>
              <span>{JSON.parse(userState.fullName).name}</span>
              <span>{JSON.parse(userState.fullName).userStep}</span>
            </User>
          </UserInfoContainer>
        </Settings>
      </div>
    </div>
  )
}
const NavContainer = styled.div`
  min-width: 150px;
  max-width: 300px;
  height: 100vh;
  overflow-y: auto;
  background: #14bd7e; //color
  position: relative;
  left: 0;
  top: 0;
`
const Settings = styled.div`
  width: 70%;
  height: 100%;
  margin: 50px;
  border: 1px solid black;
  background-color: lightgray;
`
const UserInfoContainer = styled.div`
  height: 20%;
  background-color: yellow;
  display: flex;
`
const User = styled.div`
  display: flex;
  flex-direction: column;
`

export default SettingContainer
