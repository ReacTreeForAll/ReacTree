import styled from '@emotion/styled'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import Image from '../../base/Image'
import ImgPath from '../../../assets/lock.png'
import PropTypes from 'prop-types'
import Divider from '../../base/Divider'
import { Link } from 'react-router-dom'
import Button from '../../../components/base/Button'

const NavChannel = React.memo(({ viewport = 'browser', userstep = 0, channels, paramsId }) => {
  const sidebarRef = useRef(null)
  const [showNav, setShowNav] = useState(() => {
    if (viewport === 'browser') {
      return true
    }
    return false
  })
  const [isResizing, setIsResizing] = useState(false)
  const [sidebarWidth, setSidebarWidth] = useState(180)
  const [selector, setSelector] = useState(0)

  //모바일에서 Nav display 상태 핸들링
  const handleNav = useCallback(() => {
    setShowNav((showNav) => !showNav)
  }, [])

  // 선택한 질문의 값이 이전 selector 값과 다를 경우
  const handleSelector = useCallback(
    (e) => {
      if (selector !== e.target.id) {
        setSelector((prevSelector) => parseInt(e.target.id, 10))
      }
    },
    [selector],
  )

  //setector를 비교하여 이전 setector와 현재 Item의 index가 같다면 active
  const selectorChecker = useCallback(
    (index) => {
      if (selector === index) {
        return 'active'
      }
      return ''
    },
    [selector],
  )

  // 사용자 진도율에 따라 자물쇠 이미지를 on/off함
  const userStepChecker = useCallback((userstep, index) => {
    // console.log(`step: ${userstep}, idx:${index}`)
    if (index + 1 <= userstep) {
      return true
    }
    return false
  }, [])

  //리사이징 이벤트 스타트
  const startResizing = useCallback((mouseDownEvent) => {
    setIsResizing(true)
  }, [])

  //리사이징 이벤트 스탑
  const stopResizing = useCallback(() => {
    setIsResizing(false)
  }, [])

  //마우스무브 이벤트로 NavChannel width를 실시간으로 변경함
  const resize = useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        setSidebarWidth(mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left)
      }
    },
    [isResizing],
  )

  //전역 이벤트 추가/삭제
  useEffect(() => {
    window.addEventListener('mousemove', resize)
    window.addEventListener('mouseup', stopResizing)
    return () => {
      window.removeEventListener('mousemove', resize)
      window.removeEventListener('mouseup', stopResizing)
    }
  }, [resize, stopResizing])

  //paramsId 변경에 따라 selector 업데이트 && Lock 이미지 설정
  useEffect(() => {
    setSelector(paramsId)
    userStepChecker(userstep, paramsId)
  }, [paramsId])

  return (
    <>
      <Button
        width={'4%'}
        height={30}
        style={{ display: showNav ? 'none' : 'block' }}
        onClick={handleNav}>
        &gt;&gt;
      </Button>
      <NavContainer
        ref={sidebarRef}
        style={{ width: sidebarWidth, display: showNav ? 'block' : 'none' }}
        onMouseDown={(e) => e.preventDefault()}>
        <BtnWrapper>
          <Button
            width={'25%'}
            height={30}
            style={{ display: viewport === 'browser' ? 'none' : 'block', marginRight: '8px' }}
            onClick={handleNav}>
            &lt;&lt;
          </Button>
        </BtnWrapper>
        <NavInner>
          {channels &&
            channels.map((channel, index) => (
              <NavItem key={channel._id}>
                <ImageWrapper
                  style={{ display: userStepChecker(userstep, index) ? 'none' : 'flex' }}>
                  <Image src={ImgPath} width={30} height={30} />
                </ImageWrapper>
                <Awrapper onClick={handleSelector}>
                  <RouterLink to={`/main/${index}`} id={index} className={selectorChecker(index)}>
                    {index + 1} - {channel.name}
                  </RouterLink>
                </Awrapper>
                <Divider type="horizontal" />
              </NavItem>
            ))}
        </NavInner>
        <ResizeHandle
          style={{ display: viewport === 'browser' ? 'block' : 'none' }}
          onMouseDown={startResizing}
          onDoubleClick={() => setSidebarWidth(180)}
        />
      </NavContainer>
    </>
  )
})

NavChannel.propTypes = {
  viewport: PropTypes.string,
  userstep: PropTypes.number,
  paramsId: PropTypes.number,
  channels: PropTypes.array,
}

const NavContainer = styled.div`
  min-width: 150px;
  max-width: 300px;
  height: 100vh;
  overflow-y: auto;
  background: white; //color
  position: relative;
  left: 0;
  top: 0;
`
const NavInner = styled.ul`
  background: none;
  padding-left: 10px;
  margin: 8px;
`

const NavItem = styled.li`
  list-style: none;
  position: relative;
`

const Awrapper = styled.div`
  margin-top: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const RouterLink = styled(Link)`
  text-decoration: none;
  color: #2b2b2b; //color
  font-size: 16px; //font-size
  font-weight: 700;
  line-height: none;
  display: block;
  cursor: pointer;
  padding: 16px;
  :hover {
    background-color: #14bd7e;
    color: white;
  }
  &.active {
    background-color: #14bd7e; //color
    color: white;
  }
`

const ResizeHandle = styled.div`
  width: 5px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  cursor: col-resize;
  :hover {
    background-color: rgba(0, 0, 0, 0.3); //color
  }
`

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

const ImageWrapper = styled.div`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2); //color
  z-index: 99;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: not-allowed;
`

export default NavChannel
