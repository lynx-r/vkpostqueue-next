import '../styles/globals.css'
import { AppType } from 'next/dist/next-server/lib/utils'

const MyApp: AppType = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default MyApp
