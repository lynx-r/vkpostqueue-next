import { ACCESS_TOKEN_KEY, AUTH_EXPIRES_IN_KEY } from '@/config'
import { useCookie } from 'next-universal-cookie'

const useSetAccessToken = (): ((
  accessToken: string,
  createdAt: number,
  expiresIn?: number,
) => void) => {
  const [cookies, setCookie, removeCookie] = useCookie([ACCESS_TOKEN_KEY])
  return (accessToken, createdAt, expiresIn) => {
    const sameSite = true
    if (!expiresIn) {
      setCookie(ACCESS_TOKEN_KEY, accessToken, { sameSite })
      return
    }
    const tokenCreatedAt: number = cookies[accessToken]
    if (!tokenCreatedAt) {
      const timePassed = Math.round((new Date().getTime() - createdAt) / 1000)
      const maxAge = expiresIn - timePassed
      setCookie(AUTH_EXPIRES_IN_KEY, expiresIn, {
        maxAge,
        sameSite,
      })
      setCookie(accessToken, createdAt, { maxAge, sameSite })
      const oldAccessToken = cookies[ACCESS_TOKEN_KEY]
      if (oldAccessToken) {
        removeCookie(oldAccessToken)
      }
      setCookie(ACCESS_TOKEN_KEY, accessToken, {
        maxAge,
        sameSite,
      })
    } else {
      const timePassed = Math.round(
        (new Date().getTime() - tokenCreatedAt) / 1000,
      )
      const maxAge = expiresIn - timePassed
      setCookie(AUTH_EXPIRES_IN_KEY, expiresIn, {
        maxAge,
        sameSite,
      })
      setCookie(ACCESS_TOKEN_KEY, accessToken, {
        maxAge,
        sameSite,
      })
    }
  }
}

export default useSetAccessToken
