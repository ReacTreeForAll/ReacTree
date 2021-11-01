import React from 'react'
import styled from '@emotion/styled'
import Unit from './Unit'

const UnitContainer = () => {
  const currentUserStep = []
  const channelNum = 1
  return (
    <Wrapper>
      <UnitContainerStyle>
        <Unit channel={channelNum} />
        <Unit channel={channelNum} />
        <Unit channel={channelNum} />
        <Unit channel={channelNum} />
        <Unit channel={channelNum} />
        <Unit channel={channelNum} />
        <Unit channel={channelNum} />
        <Unit channel={channelNum} />
        <Unit channel={channelNum} />
        <Unit channel={channelNum} />
      </UnitContainerStyle>
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
  height: 90%;
  background-color: #f3f3f5;
  border: 14px solid white;
  border-radius: 50px;
  margin: auto;
  padding: auto;
  box-shadow: 1px 3px 5px #9e9e9e;
`

const UnitContainerStyle = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 80%;
  height: 80%;
  background-color: #f3f3f5;
  border: none;
  border-radius: 50px;
  margin: auto;
  padding: auto;
`
