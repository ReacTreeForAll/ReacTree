import styled from '@emotion/styled'
import { Authorization, RequestApi } from '../../../utils/Api'
import React from 'react'
import { useState, useEffect } from 'react'
import Avatar from '../../base/Avatar'
import Input from '../../base/Input'
import Button from '../../base/Button'
import { useCallback } from 'react'
import { useUserContext } from '../../../contexts/UserProvider'
import Text from '../../base/Text'

const Comment = ({ postId }) => {
  const [newComment, setNewComment] = useState('')
  const [commentList, setCommentList] = useState([])
  const [likeList, setLikeList] = useState([])
  const [isLiked, setIsLiked] = useState(false)
  const [showComment, setShowComment] = useState(false)
  const { userState } = useUserContext()
  const [postBody, setPostBody] = useState('')
  // postId 임의로 받았다고 생각하고 진행
  // const postId = '617b9c4d71e5193aea3bc941'
  console.log(postId)

  // 댓글을 생성하는 API
  const createComment = async (newComment, postId) => {
    const commentResponse = await Authorization('/comments/create', 'POST', {
      comment: newComment,
      postId,
    })
    setCommentList([commentResponse, ...commentList])
  }

  // 댓글을 삭제하는 API
  const deleteComment = async (targetId) => {
    await Authorization('/comments/delete', 'DELETE', { id: targetId })
    setCommentList(commentList.filter((comment) => comment._id !== targetId))
  }

  // 좋아요를 생성하는 API
  const createLike = async (postId) => {
    const likeResponse = await Authorization('/likes/create', 'POST', {
      postId,
    })
    setLikeList([likeResponse, ...likeList])
  }

  // 좋아요를 취소하는 API
  const deleteLike = async (targetId) => {
    await Authorization('/likes/delete', 'DELETE', { id: targetId })
    setLikeList(likeList.filter((like) => like._id !== targetId))
    console.log(likeList)
  }

  // 유저는 한번만 좋아요가 가능하도록 구현
  // 현재 좋아요한 내역이 없다면 좋아요 생성
  // 좋아요한 내역이 있다면 좋아요 취소
  const handleLike = (e) => {
    const userAlreadyLike = likeList.filter((like) => like.user === userState.userInfo._id)
    if (!isLiked && userAlreadyLike.length === 0) {
      createLike(postId)
      setIsLiked(true)
    } else {
      deleteLike(userAlreadyLike[0]._id)
      setIsLiked(false)
    }
  }

  // input의 입력값을 받아 데이터 업데이트
  const handleChange = (e) => {
    const comment = e.target.value
    setNewComment(comment)
  }

  // 제출이 일어나면 새로운 댓글 생성
  // 빈 값일 때는 생성안되게, 생성 후 인풋 입력 값 삭제 및 댓글 자동으로 열리게 구현
  const handleSubmit = (e) => {
    e.preventDefault()
    if (newComment) {
      createComment(newComment, postId)
      setNewComment('')
      setShowComment(true)
    }
  }

  // 화살표 버튼을 누르면 댓글을 보여지게해줌
  const handleShowComment = useCallback(() => {
    setShowComment((prevShowComment) => !prevShowComment)
  }, [])

  // 렌더링 된 이후 한번만 포스트 정보 받아오기
  const getPostInfo = async () => {
    const data = await RequestApi(`/posts/${postId}`, 'GET')
    const { comments, likes, title } = data
    // 유저가 특정 포스트에 좋아요를 누른 상태라면 isLiked true로 설정
    if (likes.filter((like) => like.user === userState.userInfo._id).length !== 0) {
      setIsLiked(true)
    }
    setLikeList(likes)
    setCommentList(comments.reverse())
    setPostBody(title)
  }

  useEffect(() => {
    getPostInfo()
  }, [postId])

  // 댓글 입력 시간을 계산해주는 함수 -> 나중에 옮겨야할듯
  const displayTime = (createdAt) => {
    const milliSeconds = new Date() - new Date(createdAt)
    const seconds = milliSeconds / 1000
    if (seconds < 60) return '방금 전'
    const minutes = seconds / 60
    if (minutes < 60) return `${Math.floor(minutes)}분 전`
    const hours = minutes / 60
    if (hours < 24) return `${Math.floor(hours)}시간 전`
    const days = hours / 24
    if (days < 7) return `${Math.floor(days)}일 전`
    const weeks = days / 7
    if (weeks < 5) return `${Math.floor(weeks)}주 전`
    const months = days / 30
    if (months < 12) return `${Math.floor(months)}개월 전`
    const years = days / 365
    return `${Math.floor(years)}년 전`
  }
  return (
    <Wrapper>
      <CardMain>
        <Text block={true} fontSize={'0.4em'}>
          {postBody}
        </Text>
        <LikeIcon style={{ color: `${isLiked ? 'red' : ''}` }}>
          <span onClick={handleLike} className="material-icons">
            favorite
          </span>
          <span>{likeList.length}</span>
        </LikeIcon>
      </CardMain>
      <CommentsContainer>
        <CommentsTitle onClick={handleShowComment}>
          <span style={{ margin: '8px', fontWeight: '700', fontSize: '0.4em' }}>
            총 {commentList.length}개의 댓글이 있습니다
          </span>
          <span style={{ fontSize: '30px' }} className="material-icons">
            arrow_drop_down
          </span>
        </CommentsTitle>
        {showComment ? (
          <CommentList style={{ position: 'fixed', zIndex: '2000' }}>
            {commentList.map((data, index) => (
              <CommentItem key={index}>
                <CommentContents>
                  <span style={{ fontWeight: '700' }}>{JSON.parse(data.author.fullName).name}</span>
                  <span>{data.comment}</span>
                  <span style={{ fontSize: '10px' }}>{displayTime(data.createdAt)}</span>
                </CommentContents>
                {data.author.email === userState.userInfo.email ? (
                  <Icon onClick={() => deleteComment(data._id)} className="material-icons">
                    highlight_off
                  </Icon>
                ) : (
                  ''
                )}
              </CommentItem>
            ))}
          </CommentList>
        ) : (
          ''
        )}
      </CommentsContainer>
      <MyComment>
        <form
          onSubmit={handleSubmit}
          style={{
            width: '80%',
            height: '60%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '50px',
          }}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/77623643?v=4"
            size={70}
            mode={'fill'}
          />
          <label htmlFor="myComment" />
          <Input
            id="myComment"
            name="myComment"
            value={newComment}
            placeholder="댓글을 입력해주세요!"
            onChange={handleChange}
          />
          <Button type="submit">입력</Button>
        </form>
      </MyComment>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 600px;
  background-color: lightsalmon;
  font-size: 48px;
  margin: 0 auto;
  padding: 16px 0 32px 0;
`

const CardMain = styled.div`
  width: 100%;
  height: 200px;
  background-color: lightgray;
  text-align: center;
  position: relative;
`
const CommentsContainer = styled.div`
  width: 100%;
  background-color: green;
`
const CommentsTitle = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  :hover {
    background-color: #eaf8f3;
  }
`
const LikeIcon = styled.span`
  font-size: 30px;
  display: block;
  bottom: 0;
  right: 0;
  position: absolute;
  padding: 13px;
  &:hover {
    color: red;
  }
`

const MyComment = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: yellow;
`
const CommentList = styled.ul`
  width: 500px;
  display: block;
  background-color: #fbfbfb;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 5px 5px;
`
const CommentItem = styled.div`
  display: flex;
  padding: 8px;
  border-bottom: 1px solid lightgray;
`
const CommentContents = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  font-size: 0.3em;
  span:not(last-child) {
    margin-right: 15px;
  }
`
const Icon = styled.span`
  font-size: 18px;
  :hover {
    color: red;
  }
`
export default Comment
