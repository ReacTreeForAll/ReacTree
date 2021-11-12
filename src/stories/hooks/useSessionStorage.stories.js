import useSessionStorage from '@hooks/useSessionStorage'

export default {
  title: 'Hooks/useSessionStorage',
}

export const Default = () => {
  const [answer, setAnswer] = useSessionStorage('answer', '안녕하세요!')

  return (
    <div>
      <button onClick={() => setAnswer('답변을 작성하는 중입니다')}>제출</button>
      {answer}
    </div>
  )
}
