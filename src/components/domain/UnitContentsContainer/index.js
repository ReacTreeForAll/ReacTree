import React from 'react'
import styled from '@emotion/styled'
import MyTreeFlag from './MyTreeFlag'
import LevelUnitContainer from './LevelUnitContainer'
import UnitContainer from './UnitContainer'

const UnitContentsContainer = () => {
  return (
    <UnitContentsContainerStyle>
      <MyTreeFlag />
      <UnitWrapper>
        <LevelUnitContainer />
        <UnitContainer />
      </UnitWrapper>
    </UnitContentsContainerStyle>
  )
}

export default React.memo(UnitContentsContainer)

const UnitContentsContainerStyle = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: transparent;
  margin: auto;
`

const UnitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
  text-align: center;
  font-size: 50px;
  background-color: none;
  margin: auto;
`
