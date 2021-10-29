import Question from './Question'
import MyAnswer from './MyAnswer'
import React from 'react'
import PropTypes from 'prop-types'
const MainContentsContainer = ({ selectId = 0, mockData }) => {
  return (
    <>
      <Question>
        {mockData && mockData.filter((_, index) => index === selectId)[0].description}
      </Question>
      <MyAnswer />
    </>
  )
}

MainContentsContainer.prototype = {
  selectId: PropTypes.number,
  mockData: PropTypes.array,
}

export default MainContentsContainer
