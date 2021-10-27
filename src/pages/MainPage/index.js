import styled from '@emotion/styled'
import Header from '../../components/domain/Header'
import MainContentsContainer from '../../components/domain/MainContentsContainer'
import NavChannel from '../../components/domain/NavChannel'

const Div1 = styled.div`
  margin: 0 32px;
`

const Div2 = styled.div`
  display: flex;
  background-color: #f3f3f5;
`

const Div3 = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 32px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`

const MainPage = () => {
  return (
    <Div1>
      <Header />
      <Div2>
        <NavChannel userstep={5} />
        <Div3>
          <MainContentsContainer />
        </Div3>
      </Div2>
    </Div1>
  )
}
// Header -추가 - z-index
export default MainPage
