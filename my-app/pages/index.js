import Head from 'next/head'
import App from '../components/App'

export default function Home() {
  return (
      <div>
          <Head>
              <title>My page title</title>
              <meta http-equiv="refresh" content="15" />
              <meta name="theme-color" content="#006400" />
          </Head>
        <App />
      </div>
  )
}
