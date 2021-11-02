import React, { useState } from 'react'
import styled from '@emotion/styled'
import Unit from './Unit'

const UnitContainer = ({ level, userInfo, userStep, channelName, channelInfo }) => {
  const channelNameArray = channelName && channelName
  /* console.log('liked posts in unitcontariner', userInfo[5]) 로 접근하면 바로 undefined에러남 
  따라서 아래에서처럼 한 번 검증해주고 인덱스로 접근하기
   */
  const likedPosts = userInfo.likes
  const [isMouseIn, setIsMouseIn] = useState(true)
  const unitList = []
  for (let i = 0; i < 10; i++) {
    const channelNum = 10 * (level - 1) + 1 + i
    const channelIndex = channelNum - 1
    unitList.push(
      <Container key={i}>
        <Unit
          unitId={channelNum}
          level={level}
          userStep={userStep}
          channel={channelNum}
          channelName={channelName}
          channelInfo={channelInfo}
          likedPosts={likedPosts}
          hoverHandler={setIsMouseIn}
        />
        <ChannelBanner style={{ visibility: !isMouseIn ? 'hidden' : '' }}>
          <p>{channelNameArray[channelIndex]}</p>
        </ChannelBanner>
      </Container>,
    )
  }
  return (
    <Wrapper>
      <UnitContainerStyle>{unitList}</UnitContainerStyle>
    </Wrapper>
  )
}

export default React.memo(UnitContainer)

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: auto;
  border-radius: 50px;
  width: 100%;
  height: 500px;
  background-color: #f3f3f5;
  border: 14px solid white;
  border-radius: 50px;
  margin: auto;
  padding: 0;
  box-shadow: 1px 3px 5px #9e9e9e;
`

const UnitContainerStyle = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 90%;
  background-color: transparent;
  border: none;
  border-radius: 50px;
  padding-top: 50px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ChannelBanner = styled.div`
  position: relative;
  top: 5px;
  width: 80%;
  height: 40%;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  background-color: white;
  border-radius: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: auto;
  pointer-events: none;
`
