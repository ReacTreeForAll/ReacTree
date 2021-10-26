// import Question from '@components/base/Question'
import Question from '../../components/domain/MainContentsContainer/Question'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/base/Question',
  component: Question,
}

export const Default = (args) => {
  return (
    <Question {...args}>What is Context API?? What is Context API??What is Context API??</Question>
  )
}
