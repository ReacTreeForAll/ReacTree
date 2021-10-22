import useTimeout from '../../hooks/useTimeout'

/* eslint-disable */
export default {
  title: 'Hooks/useTimeout',
}

export const Default = () => {
  const clear = useTimeout(() => {
    alert('3초 뒤 실행!')
  }, 3000)

  return (
    <>
      <div>useTimeout 테스트</div>
      <button onClick={clear}>실행 멈추기</button>
    </>
  )
}
