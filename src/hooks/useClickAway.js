import { useEffect, useRef } from 'react'

const events = ['mousedown', 'touchstart']

const useClickAway = (handler) => {
  const ref = useRef(null)
  const saveHandler = useRef(handler)

  useEffect(() => {
    saveHandler.current = handler
  }, [handler])

  useEffect(() => {
    const selectedElement = ref.current
    if (!selectedElement) return

    const handleEvent = (e) => {
      !selectedElement.contains(e.target) && saveHandler.current(e)
    }

    for (const eventName of events) {
      document.addEventListener(eventName, handleEvent)
    }

    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, handleEvent)
      }
    }
  }, [ref])
  return ref
}

export default useClickAway
