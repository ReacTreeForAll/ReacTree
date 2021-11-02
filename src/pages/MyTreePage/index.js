import React from 'react'
import Header from '../../components/domain/Header'
import UnitContentsContainer from '../../components/domain/UnitContentsContainer'
import { Div1, Div2, Div3 } from './style'

const MyTreePage = () => {
  return (
    <Div1>
      <Header />
      <Div2>
        <UnitContentsContainer />
      </Div2>
    </Div1>
  )
}

export default React.memo(MyTreePage)
