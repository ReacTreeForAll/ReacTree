import styled from '@emotion/styled'
import { RequestApi } from '../../../utils/Api'
import React from 'react'
import { useState, useEffect } from 'react'
import Avatar from '../../base/Avatar'
import Input from '../../base/Input'
import Button from '../../base/Button'
import axios from 'axios'

const Test = () => {
  const [newComment, setNewComment] = useState('')
  const [commentList, setCommentList] = useState([])
  const tokenId = JSON.parse(sessionStorage.getItem('tokenId'))
  const createComment = async (newComment) => {
    const commentResponse = await axios
      .post(
        'http://13.209.30.200:5003/comments/create',
        { comment: newComment, postId: '617b9c4d71e5193aea3bc941' },
        {
          headers: {
            Authorization: `Bearer ${tokenId}`,
          },
        },
      )
      .then((res) => res.data)
    setCommentList([commentResponse, ...commentList])
  }

  const deleteComment = async (targetId) => {
    try {
      const res = await axios
        .delete('http://13.209.30.200:5003/comments/delete', {
          headers: {
            Authorization: `Bearer ${tokenId}`,
          },
          data: {
            id: targetId,
          },
        })
        .then((res) => res.data)
      setCommentList(commentList.filter((comment) => comment._id !== targetId))
      console.log(res)
    } catch (e) {
      console.error(e)
    }
  }

  const handleChange = (e) => {
    const comment = e.target.value
    setNewComment(comment)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createComment(newComment)
  }

  const getCommentsList = async () => {
    const data = await RequestApi('/posts/617b9c4d71e5193aea3bc941', 'GET').then(
      (data) => data.comments,
    )
    setCommentList(data.reverse())
    console.log(commentList)
  }
  useEffect(() => {
    getCommentsList()
  }, [])

  const displayedAt = (createdAt) => {
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
    <>
      <CardMain>내용내용</CardMain>
      <ul>
        {commentList.map((data, index) => (
          <CommentItem key={index}>
            <span>{data.author.fullName}</span>
            <span>{data.comment}</span>
            <span>{displayedAt(data.createdAt)}</span>
            {/* {commentList.filter((item) => item.author)} */}
            <span onClick={() => deleteComment(data._id)} className="material-icons">
              highlight_off
            </span>
          </CommentItem>
        ))}
      </ul>
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
          <Input onChange={handleChange} />
          <Button type="submit">입력</Button>
        </form>
      </MyComment>
    </>
  )
}

const CardMain = styled.div`
  width: 700px;
  height: 500px;
  background-color: lightgray;
  text-align: center;
  padding-top: 300px;
  font-size: 30px;
  font-weight: 700;
`
const MyComment = styled.div`
  height: 100px;
  width: 700px;
  display: flex;
  align-items: center;
  background-color: silver;
`
const CommentItem = styled.div`
  display: flex;
  justify-content: space-between;
`

export default Test
