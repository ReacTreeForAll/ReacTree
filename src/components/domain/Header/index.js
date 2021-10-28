import Logo from '../../base/Logo'
import Text from '../../base/Text'
import styled from '@emotion/styled'
import Divider from '../../base/Divider'
import { useHistory } from 'react-router-dom'
import { useCallback, useState } from 'react'
import FriendModal from '../FriendModal'
import React from 'react'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: #fff;
`

const HeaderMain = styled.div`
  display: flex;
`

const HeaderStart = styled.a`
  display: flex;
  margin-right: auto;
  align-items: center;
  text-decoration: none;
  color: black;
`

const HeaderEnd = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: auto;
`

const RouterLink = styled(Link)`
  color: #2b2b2b;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  margin: 0 24px;
  padding: 16px 0;
  display: block;
  :hover {
    color: #14bd7e;
    border-bottom: 3px solid #14bd7e;
  }
`
const MyBtn = styled.button`
  color: #2b2b2b;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  margin: 0 24px;
  padding: 16px 0;
  display: block;
  border: none;
  background: none;
  :hover {
    color: #14bd7e;
    border-bottom: 3px solid #14bd7e;
  }
`

const Header = ({ logout }) => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = useCallback(() => {
    setShowModal(true)
  }, [])

  const history = useHistory()
  const LogOut = useCallback(() => {
    console.log('조상으로 부터 받은 Logout함수')
  }, [])

  const handleLogout = useCallback(() => {
    LogOut()
    history.push({ pathname: '/' })
  }, [LogOut, history])

  return (
    <>
      <HeaderWrapper>
        <HeaderMain>
          <HeaderStart href="/main">
            <Logo size={76} />
            <Text block={true}>ReacTree</Text>
          </HeaderStart>
          <HeaderEnd>
            <RouterLink to="/main">Main</RouterLink>
            <RouterLink to="/feed">Feed</RouterLink>
            <RouterLink to="/mytree">MyTree</RouterLink>
            <RouterLink to="/settings">Settings</RouterLink>
            <MyBtn onClick={handleModal}>Friends</MyBtn>
            <MyBtn onClick={handleLogout}>
              <span class="material-icons">logout</span>
            </MyBtn>
          </HeaderEnd>
        </HeaderMain>
        <Divider type="horizontal" />
      </HeaderWrapper>
      <FriendModal showModal={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

export default Header
