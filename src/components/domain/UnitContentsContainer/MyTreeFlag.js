import React from 'react'
import styled from '@emotion/styled'

const MyTreeFlag = () => {
  const userName = '가꿈이'
  const userStep = 1
  const currentMessage = '싹을 틔웠음'
  const messageList = []

  return (
    <Container>
      <p>
        <User>'{userName}'</User>님의 리액트 나무는... <Message>{currentMessage}</Message>!
      </p>
    </Container>
  )
}

export default MyTreeFlag

const Container = styled.div`
  position: relative;
  width: 50%;
  height: 60px;
  text-align: center;
  font-size: 30px;
  background-color: white;
  border-radius: 50px;
  box-sizing: border-box;
  margin: 10px auto;
  padding: 15px;
  box-shadow: 1px 3px 5px #9e9e9e;
`
const User = styled.span`
  color: blue;
  font-weight: 700;
`

const Message = styled.span`
  color: red;
  font-weight: 700;
`
