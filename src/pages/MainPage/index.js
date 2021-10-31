import styled from '@emotion/styled'
import Header from '../../components/domain/Header'
import MainContentsContainer from '../../components/domain/MainContentsContainer'
import NavChannel from '../../components/domain/NavChannel'
import { useRouteMatch, useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Authorization, RequestApi } from '../../utils/Api'

const MainPage = React.memo(() => {
  const [channels, setChannels] = useState([])
  const [userStep, setUserStep] = useState(0)
  const [userInfo, setUserInfo] = useState([])
  const history = useHistory()
  const { url } = useRouteMatch()
  let paramsId = parseInt(url.split('/')[2], 10)

  // 초기 채널 목록을 불러옴
  const initChannels = async () => {
    try {
      const res = await RequestApi('/channels', 'GET')
      setChannels(res)
    } catch (e) {
      console.error(e)
    }
  }

  // 초기 해당 토큰 값의 유저 정보를 불러옴
  const getUserInfo = async () => {
    try {
      const res = await Authorization('/auth-user', 'GET')
      const { _id, isOnline, fullName, email } = res
      setUserInfo({
        _id,
        isOnline,
        fullName: JSON.parse(fullName),
        email,
      })
      const step = JSON.parse(res.fullName).userStep
      setUserStep(step)
    } catch (e) {
      console.error(e)
    }
  }

  //로그아웃 기능
  const logOut = async () => {
    try {
      await Authorization('/logout', 'POST')
      sessionStorage.removeItem('tokenId')
      history.push('/')
    } catch (e) {
      console.error(e)
    }
  }

  //질문 등록하기기능 && userStep + 1로 유저 설정 변경
  const addPost = async (values) => {
    try {
      console.log(555, values, userInfo.fullName)
      console.log({ ...userInfo.fullName, userStep: userInfo.fullName.userStep + 1 })
      // await Authorization('/posts/create', 'POST', {
      //   title: values.body,
      //   channelId: values.channelId,
      // })
      const ress = await Authorization('/settings/update-user', 'PUT', {
        fullName: JSON.stringify({
          ...userInfo.fullName,
          userStep: userInfo.fullName.userStep + 1,
        }),
        username: '123',
      })
      console.log('done', ress)
      // alert('포스트 저장 완료!')
    } catch (e) {
      console.error(e)
    }
  }

  //postId를 이용해 MyAnswer에 해당 Post의 내용을 전달함
  const initPostBody = async (postId) => {
    try {
      const res = await Authorization(`/posts/${postId}`, 'POST')
      console.log('postID', res)
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

  return (
    <Div1>
      <Header logOut={logOut} />
      <Div2>
        <NavChannel
          url={url}
          paramsId={paramsId > userStep ? 0 : paramsId}
          channels={channels}
          userstep={userStep === 0 ? 1 : userStep}
        />
        <Div3>
          <MainContentsContainer
            channels={channels}
            selectId={paramsId + 1 <= userStep ? paramsId : 0}
            addPost={addPost}
            initPostBody={initPostBody}
          />
        </Div3>
      </Div2>
    </Div1>
  )
})

const Div1 = styled.div`
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

export default MainPage
