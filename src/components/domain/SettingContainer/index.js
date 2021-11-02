import Header from '../Header'
import Avatar from '../../base/Avatar'
import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Authorization } from '../../../utils/Api'
import ChangeForm from './ChangeForm'
import leafImage from '../../../assets/leaf.png'
import Image from '../../base/Image'
import NavChannel from '../NavChannel'

const SettingContainer = ({ submitSettingForm, userPersonal }) => {
  const [imageUrl, setImageUrl] = useState('')
  const [coverImageUrl, setCoverImageUrl] = useState('')
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
      await Authorization('/users/upload-photo', 'POST', formData)
    }
  }
  const showCoverImage = async (e) => {
    e.preventDefault()
    if (e.target.files) {
      const coverImageFile = e.target.files[0]
      const fileReader = new FileReader()
      const formData = new FormData()
      fileReader.readAsDataURL(coverImageFile)
      fileReader.onload = function (e) {
        setCoverImageUrl(e.target.result)
      }
      formData.append('isCover', true)
      formData.append('image', coverImageFile)
      await Authorization('/users/upload-photo', 'POST', formData)
    }
  }

  const getUserImage = () => {
    const prevImg = userPersonal.image
    const coverImg = userPersonal.coverImage
    setImageUrl(prevImg)
    setCoverImageUrl(coverImg)
  }

  useEffect(() => {
    getUserImage()
  }, [userPersonal])

  return (
    <Settings>
      <UserInfoContainer>
        <CoverImageContainer
          style={{
            background: `${
              coverImageUrl ? `url(${coverImageUrl})` : ''
            } no-repeat center center/contain white`,
          }}>
          <CoverWrapper>
            <UserCoverImg>
              <AddCoverImage htmlFor="userCoverImage">
                <span
                  className="material-icons"
                  style={{ borderRadius: '50%', backgroundColor: 'white', padding: '3px' }}>
                  add_a_photo
                </span>
              </AddCoverImage>
              <input
                type="file"
                id="userCoverImage"
                accept="image/*"
                onChange={showCoverImage}
                style={{ display: 'none' }}
              />
            </UserCoverImg>
            <UserProfileImg>
              {imageUrl && (
                <Avatar src={imageUrl} alt="imageFile" size={'150px'} mode={'contain'} />
              )}
              <AddProfileImage htmlFor="userProfileImage">
                <span
                  className="material-icons"
                  style={{ borderRadius: '50%', backgroundColor: 'white', padding: '3px' }}>
                  add_a_photo
                </span>
                <input
                  type="file"
                  id="userProfileImage"
                  accept="image/*"
                  onChange={showPreviewImage}
                  style={{ display: 'none' }}
                />
              </AddProfileImage>
            </UserProfileImg>
          </CoverWrapper>
        </CoverImageContainer>
        <UserSettingContainer>
          <User>
            <UserInfoItem>
              <Image src={leafImage} width={'20px'} height={'20px'} />
              <span>Email: {userPersonal.email}</span>
            </UserInfoItem>
            <UserInfoItem>
              <Image src={leafImage} width={'20px'} height={'20px'} />
              <span>
                FullName: {userPersonal.fullName && JSON.parse(userPersonal.fullName).name}
              </span>
            </UserInfoItem>
            <UserInfoItem>
              <Image src={leafImage} width={'20px'} height={'20px'} />
              <span>
                CurrentStep: {userPersonal.fullName && JSON.parse(userPersonal.fullName).userStep}
              </span>
            </UserInfoItem>
          </User>
          <ChangeFormContainer>
            <ChangeForm submitSettingForm={submitSettingForm} />
          </ChangeFormContainer>
        </UserSettingContainer>
      </UserInfoContainer>
    </Settings>
  )
}
const Settings = styled.div`
  width: 80%;
  min-width: 500px;
  border-radius: 5px;
`
const UserInfoContainer = styled.div`
  height: 60%;
`
const CoverImageContainer = styled.div`
  height: 180px;
  border-radius: 5px 5px 0 0;
`
const UserProfileImg = styled.form`
  position: relative;
  top: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`
const UserCoverImg = styled.form`
  position: relative;
  display: flex;
  width: 100%;
`
const AddProfileImage = styled.label`
  position: relative;
  text-align: center;
  left: -4em;
  bottom: -4em;
  width: 20%;
  height: 20%;
  border-radius: 50%;
  z-index: 200;
  cursor: pointer;
  :hover {
    color: #14bd7e;
  }
`
const AddCoverImage = styled.label`
  position: relative;
  display: inline-block;
  margin: 10px;
  text-align: right;
  width: 100%;
  border-radius: 50%;
  z-index: 200;
  cursor: pointer;
  :hover {
    color: #14bd7e;
  }
`
const CoverWrapper = styled.div`
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px 5px 0 0;
`

const UserSettingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 0 0 5px 5px;
`
const User = styled.div`
  display: flex;
  height: 30%;
  flex-direction: column;
  padding-left: 250px;
  margin: 2em;
  * {
    width: 400px;
  }
  span:nth-of-type(2) {
    margin: 0.8em 0;
  }
`
const UserInfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    padding-left: 10px;
    line-height: 25px;
    font-size: 18px;
  }
`
const ChangeFormContainer = styled.div`
  display: flex;
  align-items: center;
`
export default SettingContainer
