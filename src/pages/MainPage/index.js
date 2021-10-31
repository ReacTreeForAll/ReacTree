import styled from '@emotion/styled'
import Header from '../../components/domain/Header'
import Swal from 'sweetalert2'
import ImgPath from '../../assets/pageMove.png'
import MainContentsContainer from '../../components/domain/MainContentsContainer'
import NavChannel from '../../components/domain/NavChannel'
import { useRouteMatch, useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Authorization, RequestApi } from '../../utils/Api'

const MainPage = React.memo(() => {
  const [channels, setChannels] = useState([])
  const [userStep, setUserStep] = useState(0)
  const [userInfo, setUserInfo] = useState([])
  const [postInfo, setPostInfo] = useState([])
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

  //포스트 등록 && userStep + 1로 유저 설정 변경 API
  const addPost = async (values) => {
    try {
      await Authorization('/posts/create', 'POST', {
        title: values.body,
        channelId: values.channelId,
      })
      await Authorization('/settings/update-user', 'PUT', {
        fullName: JSON.stringify({
          ...userInfo.fullName,
          userStep: userInfo.fullName.userStep + 1,
        }),
        username: JSON.stringify({
          ...userInfo.fullName,
          userStep: userInfo.fullName.userStep + 1,
        }),
      })
      alert()
    } catch (e) {
      console.error(e)
    }
  }

  //포스트 update API
  const updatePost = async (values) => {
    try {
      await Authorization('/posts/update', 'PUT', {
        title: values.body,
        channelId: values.channelId,
        postId: values.postId,
      })
      alert()
    } catch (e) {
      console.error(e)
    }
  }

  // 특정 사용자의 포스트 목록 조회 API
  const initPost = async () => {
    try {
      if (userInfo._id) {
        const res = await Authorization(`/posts/author/${userInfo._id}`, 'GET')
        setPostInfo(res.reverse())
      }
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

  useEffect(() => {
    initPost()
  }, [userInfo])

  const alert = () => {
    Swal.fire({
      title: '저장 완료!!',
      text: '피드페이지로 이동하시겠어요??',
      imageUrl: ImgPath,
      imageHeight: 100,
      imageWidth: 100,
      showCancelButton: true,
      confirmButtonColor: 'gray',
      cancelButtonColor: 'gray',
      confirmButtonText: '이동하기',
      cancelButtonText: '머무르기',
    }).then((result) => {
      if (result.isConfirmed) {
        history.push()
      } else {
        window.location.reload()
      }
    })
  }

  return (
    <Div1>
      <Header logOut={logOut} />
      <Div2>
        <NavChannel
          paramsId={paramsId + 1 > userStep ? 0 : paramsId}
          channels={channels}
          userstep={userStep === 0 ? 1 : userStep}
        />
        <Div3>
          <MainContentsContainer
            channels={channels}
            paramsId={paramsId}
            addPost={addPost}
            postInfo={postInfo}
            updatePost={updatePost}
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
