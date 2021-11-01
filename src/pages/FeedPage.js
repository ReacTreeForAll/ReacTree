import PostGroup from '../components/domain/PostContentsContainer/PostGroup'
import Header from '../components/domain/Header'
import NavChannel from '../components/domain/NavChannel'
import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { RequestApi, Authorization } from '../utils/Api'
import { useRouteMatch, useHistory } from 'react-router-dom'

const FeedPage = () => {
  const [channels, setChannels] = useState([])
  const [userStep, setUserStep] = useState(0)
  const [userInfo, setUserInfo] = useState([])
  const history = useHistory()
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
      const { _id, isOnline, fullName, email, comments, image, imagePublicId, likes } = res
      setUserInfo({
        _id,
        isOnline,
        fullName: JSON.parse(fullName),
        email,
        comments,
        image,
        imagePublicId,
        likes,
      })
      const step = JSON.parse(res.fullName).userStep
      setUserStep(step)
    } catch (e) {
      console.error(e)
    }
  }

  //로그아웃 API
  const logOut = async () => {
    try {
      await Authorization('/logout', 'POST')
      sessionStorage.removeItem('tokenId')
      history.push('/')
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
      <Header logOut={logOut} />
      <Div2>
        <NavChannel
          category={'feed'}
          channels={channels}
          paramsId={paramsId + 1 > userStep ? 0 : paramsId}
          userstep={userStep === 0 ? 1 : userStep}
        />
        <PostGroup channels={channels} paramsId={paramsId + 1 > userStep ? 0 : paramsId} />
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

const Div3 = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 32px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`
export default FeedPage
