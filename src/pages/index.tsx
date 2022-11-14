import Head from 'next/head'
import Cellgrid from '../components/Cellgrid'
import Header from '../components/Header'
import { Footer } from '../styles/styles'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Conway&apos;s Game of Life</title>
        <meta name="description" content="A interactive Conway's Game of Life" />
      </Head>

      <Header />

      <main>
        <Cellgrid />
      </main>

      <Footer>
        <a
          href="https://casali.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Casali.Dev 💜
        </a>
      </Footer>
    </div>
  )
}
