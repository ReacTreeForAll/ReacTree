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
    '리아님의 가호로 충만함',
    '기동님의 사랑을 받고있음',
    '새 가지가 나오려고 함',
    '새 가지가 나왔음',
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
