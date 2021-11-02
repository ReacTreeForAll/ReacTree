import { useState } from 'react'
import useClickAway from '../../hooks/useClickAway'
import styled from '@emotion/styled'

export default {
  title: 'Hooks/useClickAway',
}

const Provider = styled.div`
  width: 200px;
  height: 200px;
  background-color: #eee;
  border: 2px solid black;
`

export const Default = () => {
  const [show, setShow] = useState(false)
  const ref = useClickAway((e) => {
    if (e.target.id !== 'btn') {
      setShow(false)
    }
  })

  const handleClick = () => {
    setShow(true)
  }

  return (
    <div>
      <button id="btn" onClick={handleClick}>
        Show
      </button>
      <Provider ref={ref} style={{ display: show ? 'block' : 'none' }}>
        Providder
      </Provider>
    </div>
  )
}
