import styled from '@emotion/styled'
import { Authorization, RequestApi } from '../../../utils/Api'
import React from 'react'
import { useState, useEffect } from 'react'
import Avatar from '../../base/Avatar'
import Input from '../../base/Input'
import Button from '../../base/Button'
import axios from 'axios'

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

const Comment = () => {
  const [commentList, setCommentList] = useState([])
  const [commentValues, setCommentValues] = useState('')
  const handleChange = (e) => {
    const commentText = e.target.value
    setCommentValues(commentText)
  }
  const getComments = async () => {
    const getPostData = await RequestApi('/posts/617b9c4d71e5193aea3bc941', 'GET')
    const { comments } = getPostData
    setCommentList(comments)
  }
  console.log('hi')
  const handleSubmit = (e) => {
    e.preventDefault()
    setCommentValues('')
    getComments()
  }

  const createComment = async () => {
    const tokenId = sessionStorage.getItem('tokenId')
    return await axios.post(
      'http://13.209.30.200:5003/comments/create',
      { comment: commentValues, postId: '617b9c4d71e5193aea3bc941' },
      {
        headers: {
          Authorization: `Bearer ${tokenId}`,
        },
      },
    )
    // await Authorization('/comments/create', 'POST', {
    //   comment: commentValues,
    //   postId: '617b9c4d71e5193aea3bc941',
    // })
  }

  useEffect(() => {
    getComments()
  }, [commentList])

  return (
    <>
      <CardMain>내용내용</CardMain>
      <ul>
        {commentList.map((data, index) => (
          <li key={index}>
            <span>{data.comment}</span>
            <span>{data.createdAt}</span>
          </li>
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

export default Comment
