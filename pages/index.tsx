import Head from 'next/head'
import Link from 'next/link'
import styles from './Home.module.scss'

import Search from '../components/search/search'
import ArticleCard from '../components/cards/articleCard'

const pageTitle = "Home"
const pageLink = "/"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Topping</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Search pageTitle={pageTitle} link={pageLink}/>

        <div className={styles.grid}>
          <div className={styles.gridContent}>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </div>
    </div>
  )
}