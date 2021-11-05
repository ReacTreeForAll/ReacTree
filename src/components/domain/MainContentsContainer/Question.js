import styled from '@emotion/styled'
import Text from '../../base/Text'
import Image from '../../base/Image'
import imgPath from '../../../assets/leaf.png'
import PropTypes from 'prop-types'

const Question = ({ children = '', ...props }) => {
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

  return (
    <QuestionContainer {...props}>
      <Text block={true} style={{ ...textStyle }}>
        Question
      </Text>
      <QuestionInner>
        <Text
          block={true}
          fontSize={'2em'}
          style={{ width: '70%', whiteSpace: 'break-spaces', wordBreak: 'keep-all' }}>
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

const QuestionContainer = styled.div`
  width: 50%;
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
const QuestionInner = styled.div`
  margin: 8px 24px;
  padding: 40px;
  height: 80%;
  line-height: 1.5;
  border-radius: 16px;
  text-align: center;
  word-break: keep-all;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  @media (max-width: 1200px) {
    min-height: 200px;
    width: 90%;
    min-width: 200px;
    font-size: 10px;
  }
`

export default Question
