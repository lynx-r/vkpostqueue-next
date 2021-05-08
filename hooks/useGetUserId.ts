import { USER_ID_KEY } from '@/config'
import { useCookie } from 'next-universal-cookie'

const useGetAccessToken = (): (() => string) => {
  const [cookies] = useCookie([USER_ID_KEY])
  return () => {
    return cookies[USER_ID_KEY]
  }
}

export default useGetAccessToken
