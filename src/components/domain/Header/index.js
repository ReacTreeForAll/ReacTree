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
  z-index: 999;
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

const A = styled.a`
  color: #2b2b2b;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  margin: 0 24px;
  padding: 16px 0;
  display: block;
  :hover {
    color: #14bd7e;
    border-bottom: 2px solid #14bd7e;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderMain>
        <HeaderStart href="/main">
          <Logo size={76} />
          <Text block={true}>ReacTree</Text>
        </HeaderStart>
        <HeaderEnd>
          <A href="/main">Main</A>
          <A href="/feed">Feed</A>
          <A href="/mytree">MyTree</A>
          <A href="/settings">Settings</A>
          <A href="#" onClick={() => alert('모달')}>
            Friends
          </A>
        </HeaderEnd>
      </HeaderMain>
      <Divider type="horizontal" />
    </HeaderWrapper>
  )
}

export default Header
