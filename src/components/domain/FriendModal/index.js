import styled from '@emotion/styled'
import { useMemo, useEffect } from 'react'
import ReactDOM from 'react-dom'
import useClickAway from '../../../hooks/useClickAway'
import useKey from '../../../hooks/useKey'
import Avatar from '../../../components/base/Avatar'
import Badge from '../../../components/base/Badge'
import Text from '../../base/Text'

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

const MOCK_DATA = [
  {
    _id: 1,
    email: 'abcde@naver.com',
    fullName: { userName: '문타리', userStep: 2 },
    image: 'https://picsum.photos/200',
  },
  {
    _id: 2,
    email: 'zzzzzz@naver.com',
    fullName: { userName: '김다슬', userStep: 5 },
    image: 'https://picsum.photos/200',
  },
  {
    _id: 3,
    email: 'ggggggg@naver.com',
    fullName: { userName: '윤승록', userStep: 7 },
    image: 'https://picsum.photos/200',
  },
  {
    _id: 1,
    email: 'abcde@naver.com',
    fullName: { userName: '문타리', userStep: 2 },
    image: 'https://picsum.photos/200',
  },
  {
    _id: 2,
    email: 'zzzzzz@naver.com',
    fullName: { userName: '김다슬', userStep: 5 },
    image: 'https://picsum.photos/200',
  },
  {
    _id: 3,
    email: 'ggggggg@naver.com',
    fullName: { userName: '윤승록', userStep: 7 },
    image: 'https://picsum.photos/200',
  },
  {
    _id: 1,
    email: 'abcde@naver.com',
    fullName: { userName: '문타리', userStep: 2 },
    image: 'https://picsum.photos/200',
  },
  {
    _id: 2,
    email: 'zzzzzz@naver.com',
    fullName: { userName: '김다슬', userStep: 5 },
    image: 'https://picsum.photos/200',
  },
  {
    _id: 3,
    email: 'ggggggg@naver.com',
    fullName: { userName: '윤승록', userStep: 7 },
    image: 'https://picsum.photos/200',
  },
]

const FriendModal = ({ showModal = false, onClose, ...props }) => {
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
  return ReactDOM.createPortal(
    <BackgroundStyle>
      <ModalWrapper style={{ display: showModal ? 'block' : 'none' }}>
        <ModalInner ref={ref}>
          <ModalBody className="modal-body">
            <ModalTop className="header">
              <Text>Search Bar</Text>
            </ModalTop>
            <ModalMiddle>
              <Text>Search Bar 하단 영역</Text>
            </ModalMiddle>
            <ModalBottom>
              <Text fontSize={'0.8em'} block={true}>
                현재 접속 중 영역
              </Text>
              {MOCK_DATA.map((user) => (
                <SearchRes key={user._id}>
                  <div>
                    <Avatar src={user.image} size={30} />
                    <Badge isOnline={true} />
                  </div>
                  <div>
                    <Text fontSize={'0.8em'} color={'#2b2b2b'}>
                      {user.fullName.userName} / {user.fullName.userStep}
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

export default FriendModal
