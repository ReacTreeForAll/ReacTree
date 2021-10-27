import styled from '@emotion/styled'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import Image from '../../base/Image'
import ImgPath from '../../../assets/lock.png'
import PropTypes from 'prop-types'
import Divider from '../../base/Divider'

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

const A = styled.a`
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

const MyBtn = styled.button`
  padding: 8px;
  border-radius: 8px;
  border: none;
  margin: 8px 8px 0 0;
  color: white; //color
  background: gray; //color
  cursor: pointer;
  :hover {
    background: gray; //color
  }
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

const MOCK_DATA = [
  {
    _id: 1,
    name: 'Context API',
  },
  {
    _id: 2,
    name: 'useEffect',
  },
  {
    _id: 3,
    name: 'useFormLongLongLongLongLong',
  },
  {
    _id: 4,
    name: '다슬다슬',
  },
  {
    _id: 5,
    name: '록꾸거록꾸거',
  },
  {
    _id: 6,
    name: 'Context API',
  },
  {
    _id: 7,
    name: 'useEffect',
  },
  {
    _id: 8,
    name: 'useFormLongLongLongLongLong',
  },
  {
    _id: 9,
    name: '다슬다슬',
  },
  {
    _id: 10,
    name: '록꾸거록꾸거',
  },
  {
    _id: 11,
    name: '록꾸거록꾸거',
  },
  {
    _id: 12,
    name: '록꾸거록꾸거',
  },
  {
    _id: 13,
    name: '록꾸거록꾸거',
  },
  {
    _id: 14,
    name: '록꾸거록꾸거',
  },
  {
    _id: 15,
    name: '록꾸거록꾸거',
  },
]

const NavChannel = React.memo(({ viewport = 'browser', userstep }) => {
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

  const handleNav = useCallback(() => {
    setShowNav((showNav) => !showNav)
  }, [])

  const handleSelector = useCallback(
    (e) => {
      if (selector !== e.target.id) {
        setSelector((prevSelector) => parseInt(e.target.id, 10))
      }
    },
    [selector],
  )

  const selectorChecker = useCallback(
    (index) => {
      if (selector !== index) {
        return true
      }
      return false
    },
    [selector],
  )

  const userStepChecker = useCallback((userstep, index) => {
    if (index + 1 <= userstep) {
      return true
    }
    return false
  }, [])

  const startResizing = useCallback((mouseDownEvent) => {
    setIsResizing(true)
  }, [])

  const stopResizing = useCallback(() => {
    setIsResizing(false)
  }, [])

  const resize = useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        setSidebarWidth(mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left)
      }
    },
    [isResizing],
  )

  useEffect(() => {
    window.addEventListener('mousemove', resize)
    window.addEventListener('mouseup', stopResizing)
    return () => {
      window.removeEventListener('mousemove', resize)
      window.removeEventListener('mouseup', stopResizing)
    }
  }, [resize, stopResizing])

  return (
    <>
      <MyBtn style={{ display: showNav ? 'none' : 'block' }} onClick={handleNav}>
        &gt;&gt;
      </MyBtn>
      <NavContainer
        ref={sidebarRef}
        style={{ width: sidebarWidth, display: showNav ? 'block' : 'none' }}
        onMouseDown={(e) => e.preventDefault()}>
        <BtnWrapper>
          <MyBtn style={{ display: viewport === 'browser' ? 'none' : 'block' }} onClick={handleNav}>
            &lt;&lt;
          </MyBtn>
        </BtnWrapper>
        <NavInner>
          {MOCK_DATA.map((channel, index) => (
            <NavItem key={channel._id}>
              <ImageWrapper style={{ display: userStepChecker(userstep, index) ? 'none' : 'flex' }}>
                <Image src={ImgPath} width={30} height={30} />
              </ImageWrapper>
              <Awrapper onClick={handleSelector}>
                <A href="#" id={index + 1} className={selectorChecker(index + 1) ? '' : 'active'}>
                  {index + 1} - {channel.name}
                </A>
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
  userstep: PropTypes.number.isRequired,
}

export default NavChannel
