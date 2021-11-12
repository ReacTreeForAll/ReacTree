import useLocalStorage from '@hooks/useLocalStorage'

export default {
  title: 'Hooks/useLocalStorage',
}

export const Default = () => {
  const [answer, setAnswer] = useLocalStorage('answer', '안녕하세요!')

  return (
    <div>
      <button onClick={() => setAnswer('답변을 작성하는 중입니다')}>제출</button>
      {answer}
    </div>
  )
}
