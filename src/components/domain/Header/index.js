import Logo from '../../base/Logo'
import Text from '../../base/Text'
import styled from '@emotion/styled'
import Divider from '../../base/Divider'

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;
`

const HeaderMain = styled.div`
  display: flex;
`

const HeaderStart = styled.a`
  display: flex;
  margin-right: auto;
  align-items: center;
  text-decoration: none;
  color: black;
`

const HeaderEnd = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: auto;
`

const MyBtn = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 4px;
  padding: 24px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderMain>
        <HeaderStart href="#">
          <Logo size={76} />
          <Text block={true}>ReacTree</Text>
        </HeaderStart>
        <HeaderEnd>
          <MyBtn>Menu</MyBtn>
          <MyBtn>Feed</MyBtn>
          <MyBtn>MyTree</MyBtn>
          <MyBtn>Settings</MyBtn>
        </HeaderEnd>
      </HeaderMain>
      <Divider type="horizontal" />
    </HeaderWrapper>
  )
}

export default Header
