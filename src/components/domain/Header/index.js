import Logo from '../../base/Logo'
import Text from '../../base/Text'
import styled from '@emotion/styled'
import Divider from '../../base/Divider'
import { useCallback, useState } from 'react'
import FriendModal from '../FriendModal'
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Authorization } from '../../../utils/Api'
import { useHistory } from 'react-router-dom'

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

const HeaderStartRouterLink = styled(Link)`
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

const Header = ({ userInfo }) => {
  const [showModal, setShowModal] = useState(false)
  const history = useHistory()

  const handleModal = useCallback(() => {
    setShowModal(true)
  }, [])

  //로그아웃 API
  const logOut = async () => {
    try {
      await Authorization('/logout', 'POST')
      sessionStorage.clear()
      history.push('/')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <HeaderWrapper>
        <HeaderMain>
          <HeaderStartRouterLink to="/main/0">
            <Logo size={76} />
            <Text block={true}>ReacTree</Text>
          </HeaderStartRouterLink>
          <HeaderEnd>
            <RouterLink to="/main/0">Main</RouterLink>
            <RouterLink to="/feed/0">Feed</RouterLink>
            <RouterLink to="/mytree">MyTree</RouterLink>
            <RouterLink to="/settings">Settings</RouterLink>
            <MyBtn onClick={handleModal}>Friends</MyBtn>
            <MyBtn onClick={logOut}>
              <span className="material-icons" onClick={logOut}>
                logout
              </span>
            </MyBtn>
          </HeaderEnd>
        </HeaderMain>
        <Divider type="horizontal" />
      </HeaderWrapper>
      {userInfo && (
        <FriendModal
          userInfo={userInfo && userInfo}
          showModal={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

Header.propTypes = {
  logOut: PropTypes.func,
}

export default Header
