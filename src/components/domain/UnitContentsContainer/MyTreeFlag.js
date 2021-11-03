import React from 'react'
import styled from '@emotion/styled'

const MyTreeFlag = ({ name, step, ...props }) => {
  const messageList = [
    '싹을 틔웠음',
    '매일 성장 중',
    '꾸준한 관심이 필요',
    '충분히 잘 크고 있음',
    '관심이 필요함',
    '당신의 의지로 충만함',
    '리아님이 응원함',
    '기동님이 지켜봄',
    '새 가지가 나왔음',
    '새 가지가 자랐음',
  ]
  const currentMessage = messageList[step % 10]

  return (
    <Container>
      <p>
        <User>'{name}'</User>님의 리액트 나무는... <Message>{currentMessage}</Message>!
      </p>
    </Container>
  )
}

export default MyTreeFlag

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: keep-all;
  width: 70%;
  height: 80px;
  font-size: 1.8rem;
  background-color: white;
  border-radius: 50px;
  box-sizing: border-box;
  margin: 10px auto;
  padding: 15px;
  box-shadow: 1px 3px 5px #9e9e9e;
`

const User = styled.span`
  color: #14bd7e;
  font-weight: 700;
`

const Message = styled.span`
  color: red;
  font-weight: 700;
`
