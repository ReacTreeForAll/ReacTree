import styled from '@emotion/styled'
import { useMemo, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import useClickAway from '../../../hooks/useClickAway'
import useKey from '../../../hooks/useKey'
import Avatar from '../../../components/base/Avatar'
import Badge from '../../../components/base/Badge'
import Text from '../../base/Text'
import SearchBar from '../../base/SearchBar'
import { Authorization } from '../../../utils/Api'

const FriendModal = ({ showModal = false, onClose, userInfo, ...props }) => {
  // const loginUserId = '617c01c9f4f4476099ac7995'
  const loginUserId = userInfo._id
  const [friendList, setFriendList] = useState([])

  // 팔로우 목록 조회
  const initFollow = async () => {
    if (loginUserId) {
      const res = await Authorization(`/users/${loginUserId}`, 'GET')
      setFriendList(res.following.map((data) => data.user))
    }
  }
  const ref = useClickAway(() => {
    onClose && onClose()
  })

  useKey('keydown', 'Escape', () => {
    onClose && onClose()
  })

  const el = useMemo(() => document.createElement('div'), [])
  useEffect(() => {
    document.body.appendChild(el)
    return () => {
      document.body.removeChild(el)
    }
  })

  useEffect(() => {
    initFollow()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo])

  return ReactDOM.createPortal(
    <BackgroundStyle>
      <ModalWrapper style={{ display: showModal ? 'block' : 'none' }}>
        <ModalInner ref={ref}>
          <ModalBody className="modal-body">
            <ModalTop className="header">
              <SearchBar initFollow={initFollow} friendList={friendList && friendList} />
            </ModalTop>
            <ModalMiddle>
              <Text>Search Bar 하단 영역</Text>
            </ModalMiddle>
            <ModalBottom>
              <Text fontSize={'0.8em'} block={true}>
                현재 접속 중 영역
              </Text>
              {friendList &&
                friendList.map((user) => (
                  <SearchRes key={user._id}>
                    <div>
                      <Avatar src={user.image} size={30} />
                      <Badge isOnline={user.isOnline} />
                    </div>
                    <div>
                      <Text fontSize={'0.8em'} color={'#2b2b2b'}>
                        {JSON.parse(user.fullName).name} / {JSON.parse(user.fullName).userStep}
                      </Text>
                    </div>
                  </SearchRes>
                ))}
            </ModalBottom>
          </ModalBody>
        </ModalInner>
      </ModalWrapper>
    </BackgroundStyle>,
    el,
  )
}

const BackgroundStyle = styled.div`
  width: 100%;
  height: 100%;
  font-size: 24px;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`

const ModalInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 70%;
  min-width: 320px;
  max-width: 520px;
  height: 70%;
  min-height: 500px;
  background-color: white;
  display: flex;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ModalBody = styled.div`
  background-color: lightgray;
  width: 100%;
  margin: 0 32px;
`

const ModalTop = styled.div`
  background-color: darkgray;
  min-height: 10%;
`

const ModalMiddle = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 24px;
  height: 40%;
  margin: 0 32px;
  overflow: hidden;
  overflow-y: auto;
`
const ModalBottom = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 24px;
  height: 50%;
  margin: 0 32px;
  overflow: hidden;
  overflow-y: auto;
`

const SearchRes = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

export default FriendModal
