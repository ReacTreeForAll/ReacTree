import React, { useState, useEffect } from 'react'
import Header from '../../components/domain/Header'
import Spinner from '../../components/base/Spinner'
import UnitContentsContainer from '../../components/domain/UnitContentsContainer'
import { useHistory } from 'react-router-dom'
import { RequestApi, Authorization } from '../../utils/Api'
import { Div1, Div2 } from './style'

const MyTreePage = () => {
  const [channels, setChannels] = useState([])
  const [channelInfo, setChannelInfo] = useState([])
  const [userInfo, setUserInfo] = useState(null)
  const history = useHistory()

  // 초기 채널 목록 API
  const initChannels = async () => {
    try {
      const res = await RequestApi('/channels', 'GET')
      setChannels(() => {
        return res.map((channel) => channel.name)
      })
      setChannelInfo(() => {
        return res.map((channel) => channel)
      })
    } catch (e) {
      console.error(e)
    }
  }

  // 초기 해당 토큰 값의 유저 정보 API + 로딩
  const getUserInfo = async () => {
    try {
      const res = await Authorization('/auth-user', 'GET')
      const { _id, isOnline, fullName, email, posts, likes } = res
      setUserInfo((res) => ({ _id, isOnline, fullName, email, posts, likes }))
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    initChannels()
  }, [])

  useEffect(() => {
    getUserInfo()
  }, [])

  //로그아웃 API
  const logOut = async () => {
    try {
      await Authorization('/logout', 'POST')
      sessionStorage.clear()
      history.push('/')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Div1>
      <Header logOut={logOut} />
      <Div2>
        {userInfo && (
          <UnitContentsContainer
            userInfo={userInfo}
            channelNameArray={channels}
            channelInfo={channelInfo}
          />
        )}
      </Div2>
    </Div1>
  )
}

export default React.memo(MyTreePage)
