import styled from '@emotion/styled'
import Text from '../../base/Text'

const MyAnswerContainer = styled.div`
  width: 600px;
  height: 800px;
  background-color: #fff8bc;
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
  margin-top: 100px;
  outline: none;
  border: none;
  resize: none;
  box-sizing: border-box;
  border-radius: 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
`

const MyBtn = styled.button`
  background-color: #eef2bb;
  border: none;
  border-radius: 16px;
  padding: 24px;
  margin-top: 48px;
  font-size: 16px;
  float: right;
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

const MyAnswer = () => {
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
        <form>
          <label id="textarea"></label>
          <Textarea id="textarea" name="textarea" placeholder="textreaaaa" />
        </form>
        <MyBtn>저장</MyBtn>
      </MyAnswerInner>
    </MyAnswerContainer>
  )
}

export default MyAnswer
