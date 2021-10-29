import styled from '@emotion/styled'
import Header from '../../components/domain/Header'
import MainContentsContainer from '../../components/domain/MainContentsContainer'
import NavChannel from '../../components/domain/NavChannel'
import { useRouteMatch, useHistory } from 'react-router-dom'
import React, { useCallback, useEffect, useState } from 'react'
import { Authorization, RequestApi } from '../../utils/Api'

const MainPage = React.memo(() => {
  const [channels, setChannels] = useState([])
  const [userStep, setUserStep] = useState(0)
  const history = useHistory()
  const { url } = useRouteMatch()
  let paramsId = parseInt(url.split('/')[2], 10) //11

  const stepAuthorization = useCallback(
    (userstep, paramsId) => {
      if (paramsId + 1 <= userstep) {
        return true
      }
      // alert('빨리 보고 싶어도 참아주세요!!!')
      history.push('/main/0')
      return false
    },
    [history],
  )

  const initChannels = async () => {
    try {
      const res = await RequestApi('/channels', 'GET')
      setChannels(res)
    } catch (e) {
      console.error(e)
    }
  }

  const getUserInfo = async () => {
    const res = await Authorization('/auth-user', 'GET')
    const fullName = JSON.parse(res.fullName)
    setUserStep(fullName.userStep)
  }

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
    stepAuthorization(userStep, paramsId)
    initChannels()
  }, [paramsId, stepAuthorization, userStep, url])

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <Div1>
      <Header logOut={logOut} />
      <Div2>
        <NavChannel
          channels={channels}
          userstep={userStep === 0 ? 1 : userStep}
          selectId={paramsId + 1 && console.log(4, paramsId) <= userStep ? paramsId : 0}
        />
        <Div3>
          <MainContentsContainer
            channels={channels}
            selectId={paramsId + 1 <= userStep ? paramsId : 0}
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
