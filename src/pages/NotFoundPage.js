import Logo from '../components/base/Logo'
import Button from '../components/base/Button'
import React from 'react'
import { useHistory } from 'react-router'
import styled from '@emotion/styled'
import Text from '../components/base/Text'
const NotFoundPage = () => {
  const history = useHistory()
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ErrorMessage>
        <Logo size={'20em'} />
        <Text fontWeight={700} fontSize={'2em'}>
          요청하신 페이지가 존재하지않습니다!
        </Text>
        <div
          style={{
            width: '200px',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '60px',
          }}>
          <Button onClick={() => history.push('/')}>처음으로</Button>
        </div>
      </ErrorMessage>
    </div>
  )
}

const ErrorMessage = styled.div`
  width: 100%;
  height: 90%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default NotFoundPage
