import Question from './Question'
import MyAnswer from './MyAnswer'
import React from 'react'
import PropTypes from 'prop-types'
const MainContentsContainer = ({ selectId = 0, channels }) => {
  return (
    <>
      <Question>
        {channels && channels?.filter((_, index) => index === selectId)[0]?.description}
      </Question>
      <MyAnswer />
    </>
  )
}

//채널에 필터가 있을때 실행된다. 물음표
MainContentsContainer.prototype = {
  selectId: PropTypes.number,
  channels: PropTypes.array,
}

export default MainContentsContainer
