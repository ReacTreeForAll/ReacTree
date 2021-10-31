import { createContext, useContext, useCallback } from 'react'
import useSessionStorage from '../hooks/useSessionStorage'

const UserContext = createContext()
export const useUserContext = () => useContext(UserContext)

const UserProvider = ({ children }) => {
  const [userState, setUserState] = useSessionStorage('authUser', {
    isLoggedIn: false,
    userInfo: {},
    tokenId: '',
  })
  const onLoggedIn = useCallback(({ userInfo, tokenId }) => {
    setUserState({ isLoggedIn: true, userInfo, tokenId })
  }, [])

  const onLoggedOut = useCallback(() => {
    setUserState({
      isLoggedIn: false,
      userInfo: {},
      tokenId: '',
    })
  }, [])
  return (
    <UserContext.Provider value={{ userState, onLoggedIn, onLoggedOut }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
