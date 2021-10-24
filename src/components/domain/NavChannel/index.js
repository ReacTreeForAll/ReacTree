import styled from '@emotion/styled'
import { useEffect, useRef, useState, useCallback } from 'react'
import Image from '../../base/Image'
import ImgPath from '../../../assets/lock.png'
import PropTypes from 'prop-types'

const NavContainer = styled.div`
  min-width: 120px;
  max-width: 200px;
  height: 100vh;
  overflow-y: auto;
  background-color: lightgray; //color
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
  padding: 8px;
  margin-top: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  :hover {
    background-color: skyblue; //color
  }
`

const A = styled.a`
  text-decoration: none;
  color: blue; //color
  font-size: 16px; //font-size
  line-height: none;
  cursor: pointer;
`

const ResizeHandle = styled.div`
  width: 5px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  cursor: col-resize;
  :hover {
    background-color: gray; //color
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
  background: none;
  :hover {
    background: gray;
  }
`

const ImageWrapper = styled.div`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6); //color
  z-index: 99;
  position: absolute;
  width: 100%;
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

const NavChannel = ({ viewport = 'browser', userstep }) => {
  const sidebarRef = useRef(null)
  const [showNav, setShowNav] = useState(() => {
    if (viewport === 'browser') {
      return true
    }
    return false
  })
  const [isResizing, setIsResizing] = useState(false)
  const [sidebarWidth, setSidebarWidth] = useState(180)

  const handleNav = useCallback(() => {
    setShowNav(!showNav)
  }, [showNav])

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
          <MyBtn
            style={{ visibility: viewport === 'browser' ? 'hidden' : 'visible' }}
            onClick={handleNav}>
            &lt;&lt;
          </MyBtn>
        </BtnWrapper>
        <NavInner>
          {MOCK_DATA.map((channel, index) => (
            <NavItem key={channel._id}>
              <ImageWrapper
                style={{ display: userStepChecker(userstep, index) ? 'none' : 'block' }}>
                <Image src={ImgPath} width={30} height={30} />
              </ImageWrapper>
              <Awrapper>
                <A>
                  {index + 1} - {channel.name}
                </A>
              </Awrapper>
            </NavItem>
          ))}
        </NavInner>
        <ResizeHandle onMouseDown={startResizing} />
      </NavContainer>
    </>
  )
}

NavChannel.propTypes = {
  viewport: PropTypes.string,
  userstep: PropTypes.number.isRequired,
}

export default NavChannel
