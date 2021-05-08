import { ACCESS_TOKEN_KEY } from '@/config'
import { useCookie } from 'next-universal-cookie'

const useGetAccessToken = (): (() => string) => {
  const [cookies] = useCookie([ACCESS_TOKEN_KEY])
  return () => {
    return cookies[ACCESS_TOKEN_KEY]
  }
}

export default useGetAccessToken
