import useToggle from '../../hooks/useToggle'

export default {
  title: 'Hooks/useToggle',
}

export const Default = () => {
  const [toggle, setToggle] = useToggle(false)
  const handleClick = () => {
    setToggle((toggle) => !toggle)
  }
  return (
    <>
      <div>useToggle 테스트</div>
      <button onClick={handleClick}>{'Click!'}</button>
      <div>{`현재 버튼의 상태는 ${toggle}`}</div>
    </>
  )
}
