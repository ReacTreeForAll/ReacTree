import PostGroup from '@domain/PostGroup'
import Header from '@domain/Header'
import NavChannel from '@domain/NavChannel'
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { RequestApi, Authorization } from '@utils/Api'
import { useRouteMatch } from 'react-router-dom'

const FeedPage = () => {
  const [channels, setChannels] = useState([])
  const [userStep, setUserStep] = useState(0)
  const [userInfo, setUserInfo] = useState([])
  const { url } = useRouteMatch()
  let paramsId = parseInt(url.split('/')[2], 10)

  // 초기 채널 목록 API
  const initChannels = async () => {
    try {
      const res = await RequestApi('/channels', 'GET')
      setChannels(res)
    } catch (e) {
      console.error(e)
    }
  }
  // 초기 해당 토큰 값의 유저 정보 API
  const getUserInfo = async () => {
    try {
      const res = await Authorization('/auth-user', 'GET')
      if (res) {
        const { _id, isOnline, fullName, email, comments, image, imagePublicId, likes } = res
        setUserInfo({
          _id,
          isOnline,
          fullName,
          email,
          comments,
          image,
          imagePublicId,
          likes,
        })
        const step = JSON.parse(res.fullName).userStep
        setUserStep(step)
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    initChannels()
    getUserInfo()
  }, [])

  return (
    <FeedContainer>
      <Header userInfo={userInfo && userInfo} />
      <Div2>
        <NavChannel
          category={'feed'}
          channels={channels && channels}
          paramsId={paramsId + 1 > userStep ? 0 : paramsId}
          userstep={userStep === 0 ? 1 : userStep - 1}
        />
        <PostGroup
          userInfo={userInfo && userInfo}
          channels={channels && channels}
          paramsId={paramsId + 1 > userStep ? 0 : paramsId}
        />
      </Div2>
    </FeedContainer>
  )
}

const FeedContainer = styled.div`
  margin: 0 32px;
`

const Div2 = styled.div`
  display: flex;
  background-color: #f3f3f5;
`

export default FeedPage
