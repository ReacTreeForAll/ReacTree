import styled from '@emotion/styled'
import Header from '../../components/domain/Header'
import MainContentsContainer from '../../components/domain/MainContentsContainer'
import NavChannel from '../../components/domain/NavChannel'
import { useRouteMatch, useHistory } from 'react-router-dom'
import React, { useCallback, useEffect } from 'react'

const MOCK_DATA = [
  {
    _id: 1,
    name: 'Context API',
    description: 'What is Context API???',
  },
  {
    _id: 2,
    name: 'useLocalStorage',
    description: 'What is useLocalStorage???',
  },
  {
    _id: 3,
    name: 'useCallback',
    description: 'What is useCallback???',
  },
  {
    _id: 4,
    name: 'useState',
    description: 'What is useState???',
  },
  {
    _id: 5,
    name: 'useEffect',
    description: 'What is useEffect???',
  },
  {
    _id: 6,
    name: '6666666',
    description: 'What is 6???',
  },
  {
    _id: 7,
    name: '7777777',
    description: 'What is 77777???',
  },
  {
    _id: 8,
    name: '88888',
    description: 'What is 88888???',
  },
]

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

const MainPage = React.memo(() => {
  const history = useHistory()
  const { url } = useRouteMatch()
  let paramsId = parseInt(url.split('/')[2], 10) //11
  const userstep = 5
  const stepAuthorization = useCallback((userstep, paramsId) => {
    if (paramsId + 1 <= userstep) {
      return true
    }
    // alert('빨리 보고 싶어도 참아주세요!!!')
    history.push('/main/0')
    return false
  }, [])

  useEffect(() => {
    stepAuthorization(userstep, paramsId)
  }, [])

  return (
    <Div1>
      <Header />
      <Div2>
        <NavChannel
          mockData={MOCK_DATA}
          userstep={userstep}
          selectId={paramsId + 1 <= userstep ? paramsId : 0}
        />
        <Div3>
          <MainContentsContainer
            mockData={MOCK_DATA}
            selectId={paramsId + 1 <= userstep ? paramsId : 0}
          />
        </Div3>
      </Div2>
    </Div1>
  )
})

export default MainPage
