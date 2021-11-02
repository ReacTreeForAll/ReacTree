import React from 'react'
import styled from '@emotion/styled'
import ImgPath from '../../../assets/unit.png'

const Unit = ({ channel, ...props }) => {
  return (
    <OuterCircle>
      <InnerCircle>
        <Img src={ImgPath} alt="유닛" />
        <Chapter>{channel}</Chapter>
      </InnerCircle>
    </OuterCircle>
  )
}

export default React.memo(Unit)

const OuterCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #e5e5e5;
  border-radius: 50%;
  border: 7px solid #fff8bc;
  margin: 10px;
  transform: translateX(0%);
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 3px 5px #9e9e9e;
  &:hover {
    transform: translateX(0%) scale(1.1);
  }
`

const InnerCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  background-color: #ddf5ff;
  border-radius: 50%;
  border: 5px solid white;
`

const Img = styled.img`
  width: 60%;
  height: 60%;
  border: none;
  background-color: transparent;
`
const Chapter = styled.span`
  position: absolute;
  font-size: 20px;
  font-weight: 700;
  left: 44%;
`
