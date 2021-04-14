import Head from 'next/head'
import Link from 'next/link'
import styles from './Home.module.scss'

import Search from '../components/search/search'
import ArticleCard from '../components/cards/articleCard'

const pageTitle = "Home"
const pageLink = "/"

// Articles
const images = ["/images/articles/book0.png", "/images/articles/book1.png", "/images/articles/book2.png"]
const relatedTitle = "10 Inspirational Biographies That Can Steer You Towards The Right Path"
const likes = 100
const comments = 20

export default function Home() {
  return (
    <div>
      <Head>
        <title>Topping</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.home}>
        <Search pageTitle={pageTitle} link={pageLink}/>

        <div className={styles.grid}>
          <div className={styles.gridContent}>
            <ArticleCard images={images} title={relatedTitle} likes={likes} comments={comments} />
            <ArticleCard images={images} title={relatedTitle} likes={likes} comments={comments} />
            <ArticleCard images={images} title={relatedTitle} likes={likes} comments={comments} />
            <ArticleCard images={images} title={relatedTitle} likes={likes} comments={comments} />
            <ArticleCard images={images} title={relatedTitle} likes={likes} comments={comments} />
            <ArticleCard images={images} title={relatedTitle} likes={likes} comments={comments} />
            <ArticleCard images={images} title={relatedTitle} likes={likes} comments={comments} />
            <ArticleCard images={images} title={relatedTitle} likes={likes} comments={comments} />
            <ArticleCard images={images} title={relatedTitle} likes={likes} comments={comments} />
            <ArticleCard images={images} title={relatedTitle} likes={likes} comments={comments} />
            <ArticleCard images={images} title={relatedTitle} likes={likes} comments={comments} />
            <ArticleCard images={images} title={relatedTitle} likes={likes} comments={comments} />
          </div>
        </div>
      </div>
    </div>
  )
}