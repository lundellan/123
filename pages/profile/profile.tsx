import Head from 'next/head'
import Link from 'next/link'

import styles from './Profile.module.scss'

import Search from '../../components/search/search'
import ArticleCard from '../../components/cards/articleCard'

const pageTitle = "Home"
const pageLink = "/"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Topping</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Search pageTitle={pageTitle} link={pageLink}/>

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
      </div>
    </div>
  )
}