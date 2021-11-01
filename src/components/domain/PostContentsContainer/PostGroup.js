import styled from '@emotion/styled'
import Comment from './Comment'
import Text from '../../base/Text'
import PropTypes from 'prop-types'

const PostGroup = ({ channels, paramsId }) => {
  const postList = channels?.filter((_, index) => index === paramsId)[0]?.posts
  return (
    <PostGroupWrapper>
      <GroupHeader>
        <Text block={true} fontSize={'0.8em'}>
          {channels && channels?.filter((_, index) => index === paramsId)[0]?.name}
        </Text>
      </GroupHeader>
      <GroupBody>
        {postList && postList.map((post, index) => <Comment key={index} postId={post} />)}
      </GroupBody>
    </PostGroupWrapper>
  )
}

PostGroup.propTypes = {
  paramsId: PropTypes.number,
  channels: PropTypes.array,
}

const PostGroupWrapper = styled.div`
  width: 900px;
  background-color: red;
  font-size: 48px;
  margin: 0 auto;
`

const GroupHeader = styled.div`
  width: 100%;
  text-align: center;
  padding: 16px;
  background-color: blue;
`

const GroupBody = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  background-color: lightpink;
`

export default PostGroup
