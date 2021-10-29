import styled from '@emotion/styled'
import Text from '../../base/Text'
import Button from '../../base/Button'
import Avatar from '../../base/Avatar'
import Input from '../../base/Input'
import { useState } from 'react'

const CardWrapper = styled.div`
  width: 550px;
  height: 100%;
  background-color: skyblue;
  font-size: 32px;
`

const CardMain = styled.div`
  height: 200px;
  background-color: lightgray;
`

const MyComment = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  background-color: lightgreen;
`

const CardComment = styled.div`
  display: flex;
  align-items: center;
  background-color: lightpink;
`

const LI = styled.li`
  .active {
    height: 100%;
    background-color: red;
    overflow: scroll;
    overflow-y: auto;
  }
`

/* 
  특정 포스트 댓글 달기
  Auth Required
  Request Body {
  "comment": String,
  "postId": String
  }
  댓글 지우기
  Request Body {
  "postId": String
  }
 */

/* 
  특정 포스트 좋아요
  Auth Required
  Request Body {
  "postId": String
  }
 */

/* 
  특정 포스트 취소
  Auth Required
  Request Body {
  "postId": String
  }
 */
const MOCK_DATA_COMMENT = [
  /* 
  Auth Required
  Request Body {
  "comment": String,
  "postId": String
  }
 */
  {
    _id: 1,
    comment: 'test-comment',
    author: '김다슬',
  },
  {
    _id: 2,
    comment: 'test-comment',
    author: '윤승록',
  },
  {
    _id: 3,
    comment: 'test-comment',
    author: '문승희',
  },
  {
    _id: 4,
    comment: 'test-comment',
    author: '김다슬',
  },
  {
    _id: 5,
    comment: 'test-comment',
    author: '윤승록',
  },
  {
    _id: 6,
    comment: 'test-comment',
    author: '문승희',
  },
]

const PostCard = () => {
  const [showComment, setShowComment] = useState(false)

  const onShowComment = () => {
    setShowComment(true)
  }

  const offShowComment = () => {
    setShowComment(false)
  }
  return (
    <CardWrapper>
      <CardMain>main</CardMain>
      <MyComment>
        <div style={{ display: showComment ? 'none' : 'block' }}>
          <Text fontSize={'0.5em'} color={'gray'} block={true}>
            댓글이 총 00개 존재합니다. 확인해보시겠어요?
          </Text>
          <Button width={'7%'} height={25} onClick={onShowComment} style={{ display: 'block' }}>
            <span class="material-icons">more</span>
          </Button>
        </div>
        <ul style={{ display: showComment ? 'block' : 'none' }}>
          {MOCK_DATA_COMMENT.map((comment) => (
            <LI active key={comment._id}>
              <Text fontSize={'0.5em'} color={'gray'} block={true}>
                {comment.comment} / {comment.author}
              </Text>
            </LI>
          ))}
        </ul>
      </MyComment>
      <CardComment>
        <Avatar src={'https://picsum.photos/200'} size={50} />
        <Input width={'75%'} style={{ margin: '1em' }} />
        <Button width={30} fontSize={'0.3em'} height={30}>
          입력
        </Button>
      </CardComment>
    </CardWrapper>
  )
}

export default PostCard
