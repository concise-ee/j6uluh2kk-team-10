import Head from 'next/head'
import App from '../components/App'

export default function Home() {
  return (
      <div>
          <Head>
              <title>T2 best team</title>
              <meta name="theme-color" content="#006400" />
          </Head>
        <App />
      </div>
  )
}
