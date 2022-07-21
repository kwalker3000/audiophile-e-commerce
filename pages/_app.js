import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'

import useScrollRestoration from '../src/hooks/useScrollRestoration'
import { AppWrapper } from '../src/context/appContext'

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  router,
}) {
  useScrollRestoration(router)
  return (
    <SessionProvider session={session}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </SessionProvider>
  )
}
