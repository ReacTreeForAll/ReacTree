import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useMemo, useEffect } from 'react'
import ReactDOM from 'react-dom'

const ModalContainer = ({
  width,
  height,
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

  const pureChannnelPostsIdArray = channelInfo[unitId - 1].posts
  const purePostArray = likedPosts.map((postObject) => postObject.post)
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
        <ModalTitle>Channel {unitId}에서 내가 좋아한 포스트</ModalTitle>
        <PostContainer>
          {purePostArray
            .filter((favoredPost) => pureChannnelPostsIdArray.includes(favoredPost._id))
            .map((post, index) => {
              return <PostTitle key={index}>{post.title}</PostTitle>
            })}
        </PostContainer>
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
const ModalTitle = styled.div`
  position: sticky;
  top: 1.5em;
  left: 9%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: center;
  font-size: 1.3em;
  line-height: 1.3em;
  width: 400px;
  background-color: #f3f3f5;
`

const ModalInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow-y: scroll;
`

const PostTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 200px;
  text-align: center;
  font-size: 1.2em;
  line-height: 1.3em;
  background-color: #f3f3f5;
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid black;
  overflow-y: scroll;
`
const PostContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`
