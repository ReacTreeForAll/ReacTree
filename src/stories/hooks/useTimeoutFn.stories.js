import useTimeoutFn from '../../hooks/useTimeoutFn'

/* eslint-disable */
export default {
  title: 'Hooks/useTimeoutFn',
}

export const Default = () => {
  const [run, clear] = useTimeoutFn(() => {
    alert('3초 뒤 실행!')
  }, 3000)

  return (
    <>
      <div>useTimeoutFn 테스트</div>
      <button onClick={run}>3초 뒤 alert창 실행</button>
      <button onClick={clear}>실행 멈추기</button>
    </>
  )
}
