import { USER_ID_KEY } from '@/config'
import { useCookie } from 'next-universal-cookie'

const useSetUserId = (): ((
  userId: number,
  tokenCreatedAt: number,
  expiresIn?: number,
) => void) => {
  const [, setCookie] = useCookie()
  return (userId, tokenCreatedAt, expiresIn) => {
    if (!expiresIn) {
      setCookie(USER_ID_KEY, userId, { sameSite: true })
      return
    }
    const timePassed = Math.round(
      (new Date().getTime() - tokenCreatedAt) / 1000,
    )
    const maxAge = expiresIn - timePassed
    setCookie(USER_ID_KEY, userId, { maxAge, sameSite: true })
  }
}

export default useSetUserId
