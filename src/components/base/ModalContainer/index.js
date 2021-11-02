import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useMemo, useEffect } from 'react'
import ReactDOM from 'react-dom'

const ModalContainer = ({
  width = 300,
  height = 300,
  color = 'white',
  modalHandler,
  showModal = false,
  handleShow,
  unitId,
  level,
  userStep,
  channel,
  channelName,
  channelInfo,
  likedPosts,
  ...props
}) => {
  const innerStyle = {
    width,
    height,
    display: showModal ? 'block' : 'none',
    backgroundColor: color,
  }

  //pureChannnelPostsIdArray -> 해당 채널의 포스트 Id가 들어있는 배열
  //purePostArray -> 좋아요를 누른 포스트 객체가 들어있는 배열
  const pureChannnelPostsIdArray = channelInfo[unitId - 1].posts
  const purePostArray = likedPosts.map((postObject) => postObject.post)

  // console.log('pureChannnelPostsIdArray', pureChannnelPostsIdArray)
  // console.log('purePostArray', purePostArray)

  const el = useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    document.body.appendChild(el)
    return () => {
      document.body.removeChild(el)
    }
  })

  return ReactDOM.createPortal(
    <ModalWrapper style={{ display: showModal ? 'block' : 'none' }} onClick={handleShow}>
      <ModalInner
        {...props}
        style={{ ...props.style, ...innerStyle }}
        onClick={(e) => e.stopPropagation()}>
        <ul>
          {purePostArray
            .filter((favoredPost) => pureChannnelPostsIdArray.includes(favoredPost._id))
            .map((post, index) => (
              <li key={index}>
                <div>{post.title}</div>
              </li>
            ))}
        </ul>
      </ModalInner>
    </ModalWrapper>,
    el,
  )
}

ModalContainer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  close: PropTypes.bool,
}

export default ModalContainer

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`

const ModalInner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`
// const CloseButton = styled.button`
//   position: fixed;
//   top: 0;
//   right: 0;
//   margin: 10px;
//   border: none;
//   border-radius: 5px;
//   color: white;
//   background-color: gray;
//   :hover {
//     background-color: red;
//   }
// `
