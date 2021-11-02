import React, { useState } from 'react'
import styled from '@emotion/styled'
import ImgPath from '../../../assets/unit.png'
import ModalContainer from '../../../components/base/ModalContainer'

const Unit = ({
  unitId,
  level,
  userStep,
  channel,
  channelName,
  channelInfo,
  likedPosts,
  hoverHandler,
  ...props
}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const maxActiveUnit = userStep % 10
  if (unitId > maxActiveUnit) {
    //배경 어둡게 비활성화하기
  }

  const validateUnit = (unitId, level, userStep) => {
    if (unitId > userStep) {
      alert('아직 열리지 않았습니다')
      return
    }
    setModalVisible(true)
  }

  const onHandleHover = () => {
    hoverHandler(true)
  }
  const onClickHandler = (event) => {
    validateUnit(unitId, level, userStep, channel)
  }

  const handleShow = (event) => {
    event.stopPropagation()
    setModalVisible(false)
  }

  return (
    <>
      <ModalContainer
        showModal={modalVisible}
        handleShow={handleShow}
        unitId={unitId}
        level={level}
        userStep={userStep}
        channel={channel}
        channelName={channelName}
        channelInfo={channelInfo}
        likedPosts={likedPosts}
      />
      <OuterCircle onClick={onClickHandler} onMouseOver={onHandleHover}>
        <InnerCircle>
          <Img src={ImgPath} alt="유닛" />
          <Chapter>{channel}</Chapter>
        </InnerCircle>
      </OuterCircle>
    </>
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
  pointer-events: none;
`

const Img = styled.img`
  width: 60%;
  height: 60%;
  border: none;
  background-color: transparent;
  pointer-events: none;
`
const Chapter = styled.span`
  position: absolute;
  font-size: 20px;
  font-weight: 700;
  top: 40%;
  left: 38%;
  pointer-events: none;
`
