import type { AppProps } from 'next/app'
import { CellProvider } from '../hooks/useCells'

import GlobalStyles from '../styles/globals'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <GlobalStyles />
    <CellProvider>
      <Component {...pageProps} />
    </CellProvider>
  </>
  )
}
