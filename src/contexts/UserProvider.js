import { createContext, useContext, useCallback, useState } from 'react'
import useSessionStorage from '../hooks/useSessionStorage'

const UserContext = createContext()
export const useUserContext = () => useContext(UserContext)

const UserProvider = ({ children }) => {
  const [userState, setUserState] = useSessionStorage('userState', {})
  // const [userState, setUserState] = useState({})
  // 리렌더링 되는 시점에 바뀐다
  const updateUserState = (user) => {
    setUserState(user)
  }
  const resetUserState = useCallback(() => {
    setUserState({})
  }, [])
  return (
    <UserContext.Provider value={{ userState, updateUserState, resetUserState }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
