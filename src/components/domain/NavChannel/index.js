import styled from '@emotion/styled'
import { useEffect, useRef, useState, useCallback } from 'react'

const NavContainer = styled.div`
  min-width: 120px;
  max-width: 250px;
  /* flex-grow: 0;
  flex-shrink: 0; */
  /* display: flex; */
  /* width: 300px; */
  height: 100vh;
  background-color: lightgray;
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
  padding: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  :hover {
    background-color: skyblue;
  }
`

const NavA = styled.a`
  text-decoration: none;
  color: black;
  line-height: none;
  cursor: pointer;
`

const NavDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

const ResizeHandle = styled.div`
  width: 3px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  cursor: col-resize;
  :hover {
    background-color: red;
  }
`

const MOCK_DATA = [
  {
    _id: 1,
    name: '1-Context API',
  },
  {
    _id: 2,
    name: '2-useEffect',
  },
  {
    _id: 3,
    name: '3-useFormLonglonglongdsdd',
  },
]

const NavChannel = () => {
  const sidebarRef = useRef(null)
  const [showNav, setShowNav] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [sidebarWidth, setSidebarWidth] = useState(180)

  const handleNav = () => {
    setShowNav(!showNav)
  }
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
      <button id="openBtn" style={{ display: showNav ? 'none' : 'block' }} onClick={handleNav}>
        &gt;&gt;
      </button>
      <NavContainer
        ref={sidebarRef}
        style={{ width: sidebarWidth, display: showNav ? 'block' : 'none' }}
        onMouseDown={(e) => e.preventDefault()}>
        <NavDiv>
          <button id="closeBtn" onClick={handleNav}>
            &lt;&lt;
          </button>
        </NavDiv>
        <NavInner>
          {MOCK_DATA.map((channel) => (
            <NavA key={channel.id}>
              <NavItem>{channel.name}</NavItem>
            </NavA>
          ))}
        </NavInner>
        <ResizeHandle onMouseDown={startResizing} />
      </NavContainer>
    </>
  )
}

export default NavChannel
