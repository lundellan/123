import Head from 'next/head'
import Navigation from '../components/navigation'

/* Styles */
import page from '../styles/page.scss'

export default function Home() {
  return (
    <div className={page.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
    </div>
  )
}