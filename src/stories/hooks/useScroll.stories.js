import styled from '@emotion/styled'
import useScroll from '../../hooks/useScroll'

export default {
  title: 'Hooks/useScroll',
  component: useScroll,
}

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
  overflow: auto;
`

const Inner = styled.div`
  width: 5000px;
  height: 5000px;
  background-image: linear-gradient(180deg, #000 0%, #fff 100%);
`
export const Default = () => {
  const [ref, state] = useScroll()
  return (
    <>
      <Box ref={ref}>
        <Inner />
      </Box>
      {state.x},{state.y},{console.log(ref)}
    </>
  )
}
