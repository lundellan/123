import Head from 'next/head'
import styles from './List.module.scss'

import ArticleCard from '../../components/articleCard/articleCard'

// Article
const title = "10 Inspirational Biographies That Can Steer You Towards The Right Path"
const text0 = "Everyone out there has had days when they lose all self confidence and feel like they are going nowhere. All your ideas start sounding stupid and you don’t know why you’re still trying in the first place. This is where these inspirational biographies come into play."

// Related
const relatedTitle0 = "10 Inspirational Biographies That Can Steer You Towards The Right Path"
const relatedTitle1 = "10 Inspirational Biographies That Can Steer You Towards The Right Path"
const relatedTitle2 = "10 Inspirational Biographies That Can Steer You Towards The Right Path"
const relatedTitle3 = "10 Inspirational Biographies That Can Steer You Towards The Right Path"
const likes = 100
const comments = 20

export default function List() {
  return (
    <div>
      <Head>
        <title>List</title>
      </Head>

      <main className={styles.article}>
        <h1>{title}</h1>
        <p>{text0}</p>

      </main>

      <section className={styles.related}>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      </section>
    </div>
  )
}