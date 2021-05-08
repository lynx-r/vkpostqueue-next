import '@/styles/globals.css'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
// eslint-disable-next-line import/no-unresolved
import 'windi.css'
import { AppProps } from 'next/app'
import { FC } from 'react'
import { NextCookieProvider } from 'next-universal-cookie'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <NextCookieProvider cookie={pageProps.cookie}>
    <div className="h-full flex flex-col">
      <Header className="flex-none" />
      <main className="container mx-auto flex-grow bg-gray-50 p-4 shadow-sm">
        <Component {...pageProps} />
      </main>
      <Footer className="flex-none" />
    </div>
  </NextCookieProvider>
)

export default MyApp
