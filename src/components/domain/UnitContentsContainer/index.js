import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import MyTreeFlag from './MyTreeFlag'
import LevelUnitContainer from './LevelUnitContainer'
import UnitContainer from './UnitContainer'

const UnitContentsContainer = ({ userInfo, channelNameArray, channelInfo, ...props }) => {
  const [channelNamesArray, setChannelArray] = useState([])
  const [userLevel, setUserLevel] = useState(1)
  const channelNames = channelNameArray && channelNameArray
  const fullName = JSON.parse(userInfo.fullName)
  const { name, userStep } = fullName

  useEffect(() => {
    setUserLevel(userLevel)
  }, [userLevel])

  useEffect(() => {
    setChannelArray(channelNames)
  }, [channelNames])

  const onLevelClicked = (unitId) => {
    if (userLevel !== unitId) {
      setUserLevel(unitId)
    }
  }

  return (
    <UnitContentsContainerStyle>
      <MyTreeFlag name={name} step={userStep} />
      <UnitWrapper>
        <LevelUnitContainer
          userInfo={userInfo}
          channelName={channelNamesArray}
          clickHandler={onLevelClicked}
        />
        <UnitContainer
          level={userLevel}
          userInfo={userInfo}
          userStep={userStep}
          channelName={channelNamesArray}
          channelInfo={channelInfo}
        />
      </UnitWrapper>
    </UnitContentsContainerStyle>
  )
}

export default React.memo(UnitContentsContainer)

const UnitContentsContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80vh;
  background-color: transparent;
  margin: auto;
`

const UnitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  text-align: center;
  font-size: 50px;
  background-color: none;
  margin: auto;
`
