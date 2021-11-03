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
      } else {
        await updatePost({ ...values, channelId, postId })
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <AnswerSubmitForm onSubmit={handleSubmit}>
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
          <div style={{ margin: '15px' }}>
            <Button
              style={{ display: 'block', float: 'right' }}
              width={60}
              height={60}
              fontSize={'14px'}
              onClick={handleEdit}>
              {isEdit ? '저장' : '수정'}
            </Button>
          </div>
        </AnswerSubmitForm>
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
  width: 50%;
  min-height: 500px;
  background-color: #eaf8f3;
  margin: 32px;
  border-radius: 16px;
  border: 0.5px solid #aaa;
  @media (max-width: 1200px) {
    min-height: 400px;
    width: 90%;
    height: 200px;
  }
`

const MyAnswerInner = styled.div`
  margin: 8px 24px;
  padding: 16px;
  height: 80%;
  line-height: 1.5;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: #fff;
  position: relative;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  @media (max-width: 1200px) {
    height: 200px;
    min-height: 300px;
    width: 90%;
    min-width: 200px;
  }
`
const AnswerSubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const Textarea = styled.textarea`
  width: 100%;
  height: 60%;
  padding: 24px;
  margin-top: 30px;
  font-size: 18px;
  outline: none;
  border: none;
  resize: none;
  box-sizing: border-box;
  @media (max-width: 1200px) {
    height: 150px;
    min-width: 200px;
  }
`

export default MyAnswer
