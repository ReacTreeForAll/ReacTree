import { useCallback, useRef, useState } from 'react'

const useRefState = (initialState) => {
  const requestAnimationFrameId = useRef(0)
  const [state, setState] = useState(initialState)

  const setRefState = useCallback((value) => {
    cancelAnimationFrame(requestAnimationFrameId.current)

    requestAnimationFrameId.current = requestAnimationFrame(() => {
      setState(value)
    })
  }, [])

  return [state, setRefState]
}

export default useRefState
