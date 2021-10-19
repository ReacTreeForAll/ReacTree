import styled from '@emotion/styled'
import Text from '../Text'
import Image from '../Image'
import imgPath from '../../../assets/leaf.png'
import PropTypes from 'prop-types'

const QuestionContainer = styled.div`
  width: 600px;
  height: 800px;
  background-color: #eef2bb;
`
const QuestionInner = styled.div`
  height: 85%;
  margin: 8px 24px;
  padding: 16px;
  line-height: 1.5;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`
const Question = ({ children, ...props }) => {
  const textStyle = {
    fontSize: 48,
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  }

  const imageStyle = {
    position: 'absolute',
    left: -15,
    bottom: -10,
    width: 60,
    height: 60,
  }

  const bodyStyle = {
    fontSize: 48,
    padding: 24,
  }

  return (
    <QuestionContainer {...props}>
      <Text block={true} style={{ ...textStyle }}>
        Question
      </Text>
      <QuestionInner>
        <Text block={true} style={{ ...bodyStyle }}>
          {children}
        </Text>
        <Image src={imgPath} style={{ ...imageStyle }} />
      </QuestionInner>
    </QuestionContainer>
  )
}

Question.prototype = {
  children: PropTypes.string.isRequired,
}

export default Question
