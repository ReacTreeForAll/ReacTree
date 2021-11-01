import React from 'react'
import styled from '@emotion/styled'

const LevelUnit = ({ level, imageSrc, ...props }) => {
  const userLevel = level

  return (
    <LevelInnerCircle>
      <LevelImg src={imageSrc} alt="유닛" />
      <Level>Lv. {userLevel}</Level>
    </LevelInnerCircle>
  )
}

export default React.memo(LevelUnit)

const LevelInnerCircle = styled.div`
  position: relative;
  top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  background-color: #ddf5ff;
  border-radius: 50%;
  border: 14px solid white;
  margin: 20px;
  padding: 0;
  transform: translateX(0%);
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 3px 5px #9e9e9e;
  &:hover {
    transform: translateX(0%) scale(1.1);
  }
`

const LevelImg = styled.img`
  position: absolute;
  top: 10%;
  width: 60%;
  height: 60%;
  border: none;
  background-color: transparent;
`
const Level = styled.span`
  position: absolute;
  top: 75%;
  font-size: 20px;
  font-weight: 700;
`
