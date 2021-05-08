import useSetAccessToken from 'hooks/useSetAccessToken'
import useSetUserId from 'hooks/useSetUserId'

const useSetUserAuth = (): ((
  auth: { accessToken: string; userId: number },
  date: { tokenCreatedAt: number; expiresIn?: number },
) => void) => {
  const setAccessToken = useSetAccessToken()
  const setUserId = useSetUserId()
  return ({ accessToken, userId }, { tokenCreatedAt, expiresIn }) => {
    setAccessToken(accessToken, tokenCreatedAt, expiresIn)
    setUserId(userId, tokenCreatedAt, expiresIn)
  }
}

export default useSetUserAuth
