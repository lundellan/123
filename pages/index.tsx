import Head from 'next/head'
import Link from 'next/link'
import ArticleCard from '../components/articleCard/articleCard'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className={styles.colLeft}>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
        <div className={styles.colMiddle}>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
        <div className={styles.colRight}>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </main>
    </div>
  )
}