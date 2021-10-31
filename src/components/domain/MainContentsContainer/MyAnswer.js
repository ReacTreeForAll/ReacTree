import styled from '@emotion/styled'
import Text from '../../base/Text'
import React, { useState, useCallback, useEffect } from 'react'
import useForm from '../../../hooks/useForm'
import Button from '../../base/Button'
import PropTypes from 'prop-types'

const MyAnswer = ({ title, addPost, updatePost, channelId, postId }) => {
  //useForm을 사용한 Submit 이벤트 핸들링
  const { errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      body: '',
    },
    onSubmit: async (values) => {
      if (!title) {
        await addPost({ ...values, channelId: channelId })
        console.log('add Done')
      } else {
        await updatePost({ ...values, channelId, postId })
        console.log('update Done')
      }
    },
    validate: ({ body }) => {
      const newErros = {}
      if (!body) newErros.body = '내용을 입력해주세요!!'
      return newErros
    },
  })
  const [isEdit, setIsEdit] = useState(true)

  //Edit 상태 on/off
  const handleEdit = useCallback(
    (e) => {
      if (isEdit) {
        setIsEdit(false)
      } else {
        e.preventDefault()
        e.stopPropagation()
        setIsEdit(true)
      }
    },
    [isEdit],
  )

  //Title Prop여부에 따른 Edit 상태 변경
  const initAnswer = () => {
    if (title) {
      setIsEdit(false)
    } else {
      setIsEdit(true)
    }
  }

  useEffect(() => {
    initAnswer()
  }, [title])

  const textStyle = {
    fontSize: 48,
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  }

  return (
    <MyAnswerContainer>
      <Text block={true} style={{ ...textStyle }}>
        Answer
      </Text>
      <MyAnswerInner>
        <form onSubmit={handleSubmit}>
          <label htmlFor="textarea"></label>
          <Textarea
            id="textarea"
            name="body"
            placeholder="답변을 입력해주세요!!"
            disabled={!isEdit}
            onChange={handleChange}
            autoFocus={true}
            defaultValue={title ? title : ''}
          />
          <Text fontSize={16} color="red">
            {errors.body ? errors.body : ''}
          </Text>
          <Button
            style={{ display: 'block', marginTop: 100, float: 'right' }}
            width={60}
            height={60}
            fontSize={'14px'}
            onClick={handleEdit}>
            {isEdit ? '저장' : '수정'}
          </Button>
        </form>
      </MyAnswerInner>
    </MyAnswerContainer>
  )
}

MyAnswer.prototype = {
  onSubmit: PropTypes.func,
  updatePost: PropTypes.func,
  addPost: PropTypes.func,
  children: PropTypes.string,
}

const MyAnswerContainer = styled.div`
  width: 700px;
  height: 800px;
  background-color: #eaf8f3;
  margin-right: 32px;
  border-radius: 16px;
  border: 0.5px solid #aaa;
`

const MyAnswerInner = styled.div`
  height: 85%;
  margin: 8px 24px;
  padding: 16px;
  line-height: 1.5;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: #fff;
  position: relative;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`

const Textarea = styled.textarea`
  width: 100%;
  height: 400px;
  padding: 24px;
  margin-top: 60px;
  font-size: 18px;
  outline: none;
  border: none;
  resize: none;
  box-sizing: border-box;
`

export default MyAnswer
