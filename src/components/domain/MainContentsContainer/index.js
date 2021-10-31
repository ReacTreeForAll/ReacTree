import Question from './Question'
import MyAnswer from './MyAnswer'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
const MainContentsContainer = ({ paramsId, channels, addPost, postInfo }) => {
  return (
    <>
      <Question>
        {channels && channels?.filter((_, index) => index === paramsId)[0]?.description}
      </Question>
      <MyAnswer
        addPost={addPost}
        channelId={channels && channels?.filter((_, index) => index === paramsId)[0]?._id}
        title={postInfo && postInfo?.filter((_, index) => index === paramsId)[0]?.title}></MyAnswer>
    </>
  )
}

//채널에 필터가 있을때 실행된다. 물음표
MainContentsContainer.prototype = {
  paramsId: PropTypes.number,
  channels: PropTypes.array,
  addPost: PropTypes.func,
  postInfo: PropTypes.array,
}

export default MainContentsContainer
