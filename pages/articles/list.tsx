import Head from 'next/head'
import Image from 'next/image'
import styles from './List.module.scss'

import Search from '../../components/search/search'
import ArticleCard from '../../components/cards/articleCard'
import InfoCard from '../../components/cards/infoCard'

const category = "Books"
const categoryLink = "/"
const authorLink = "/profile/profile"

// Article
const title = "10 Inspirational Biographies That Can Steer You Towards The Right Path"
const wallpaper = "/images/articles/wallpaper.png"
const text0 = "Everyone out there has had days when they lose all self confidence and feel like they are going nowhere. All your ideas start sounding stupid and you don’t know why you’re still trying in the first place. This is where these inspirational biographies come into play."

const image0 = "/images/articles/stevejobs.png"
const subtitle0 = "Steve Jobs by Walter Isaacson"
const text1 = "The extraordinary and inspiring account of both the professional and personal life of Steve Jobs. Based on three years of exclusive interviews conducted by Isaacson with both Jobs and his family, colleagues and competitors. A great insight into Jobs’s life and thoughts making it a very motivational and inspirational read, one of the best inspirational biographies out there."

const author = "Jacob Lundell"

// Related
const images = ["/images/articles/book0.png", "/images/articles/book1.png", "/images/articles/book2.png"]
const relatedTitle = "10 Inspirational Biographies That Can Steer You Towards The Right Path"
const likes = 100
const comments = 20


export default function List() {
  return (
    <div>
      <Head>
        <title>{title} | {category} | Topping</title>
      </Head>

      <div className={styles.article}>
        <Search pageTitle={category} link={categoryLink}/>

        <main role="main">
          <article vocab="https://schema.org/" typeof="ItemList">
            
            <header className={styles.intro}>
              <h1 property="name">
                {title}
              </h1>
              <div className={styles.wallpaper}>
                <Image
                  src={wallpaper}
                  layout="fill"
                  alt="Create a new article"
                  draggable="false"
                />
              </div>
              <p>
                {text0}
              </p>
            </header>
            
            <link property="itemListOrder" href="https://schema.org/ItemListOrderDescending" />
            
            <section className={styles.entry}>
              <div className={styles.number}>1</div>
              
              <span property="itemListElement">
                <div className={styles.wallpaper}>
                  <Image
                    src={image0}
                    layout="fill"
                    alt="Create a new article"
                    draggable="false"
                  />
                </div>
                <h2>
                  {subtitle0}
                </h2>
                <p>
                  {text1}
                </p>
              </span>
            </section>

          </article>
        </main>
      </div>

      <section className={styles.related}>
        <div className={styles.relatedContent}>
          <InfoCard title={author} information="Author" link={authorLink} />
          {/* <InfoCard title={categoryName} information={category} /> */}
          <ArticleCard images={images} title={relatedTitle} likes={likes} comments={comments} />
          <ArticleCard images={images} title={relatedTitle} likes={likes} comments={comments} />
          <ArticleCard images={images} title={relatedTitle} likes={likes} comments={comments} />
        </div>
      </section>
    </div>
  )
}