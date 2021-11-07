import Question from '@domain/MainContentsContainer/Question'

export default {
  title: 'Components/base/Question',
  component: Question,
}

export const Default = (args) => {
  return (
    <Question {...args}>What is Context API?? What is Context API??What is Context API??</Question>
  )
}
