import '../styles/globals.css'
import { AppType } from 'next/dist/next-server/lib/utils'
// eslint-disable-next-line import/no-unresolved
import 'windi.css'

const MyApp: AppType = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default MyApp
