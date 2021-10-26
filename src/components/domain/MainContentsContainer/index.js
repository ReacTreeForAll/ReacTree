import Question from './Question'
import MyAnswer from './MyAnswer'
import React, { useState } from 'react'

const MOCK_DATA = [
  {
    _id: 1,
    name: 'Context API',
    description: 'What is Context API???',
  },
  {
    _id: 2,
    name: 'useLocalStorage',
    description: 'What is useLocalStorage???',
  },
  {
    _id: 3,
    name: 'useCallback',
    description: 'What is useCallback???',
  },
  {
    _id: 4,
    name: 'useState',
    description: 'What is useState???',
  },
  {
    _id: 5,
    name: 'useEffect',
    description: 'What is useEffect???',
  },
]
const MainContentsContainer = ({ userstep = 1 }) => {
  const [list, setList] = useState(MOCK_DATA)
  return (
    <>
      <Question>What is Context API?</Question>
      <MyAnswer />
    </>
  )
}

export default MainContentsContainer
