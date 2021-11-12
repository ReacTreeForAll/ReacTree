import { useState } from 'react'
import useDebounce from '@hooks/useDebounce'

export default {
  title: 'Hooks/useDebounce',
}

const names = ['김다슬', '김무호', '김현석', '김홍중', '도가영', '문승희', '윤승록', '성기동']

export const Default = () => {
  const [value, setValue] = useState('')
  const [result, setResult] = useState([])

  useDebounce(
    () => {
      if (value === '') setResult([])
      else {
        setResult(names.filter((name) => name.includes(value)))
      }
    },
    300,
    [value],
  )

  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <div>
        {result.map((name) => (
          <li>{name}</li>
        ))}
      </div>
    </div>
  )
}
