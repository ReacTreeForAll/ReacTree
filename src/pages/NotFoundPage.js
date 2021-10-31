import Logo from '../components/base/Logo'
import Header from '../components/domain/Header'
import React from 'react'
import styled from '@emotion/styled'
import Text from '../components/base/Text'

const NotFoundPage = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Header />
      <ErrorMessage>
        <Logo size={'20em'} />
        <Text fontWeight={700} fontSize={'2em'}>
          요청하신 페이지가 존재하지않습니다!
        </Text>
      </ErrorMessage>
    </div>
  )
}

const ErrorMessage = styled.div`
  width: 100%;
  height: 70%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default NotFoundPage
