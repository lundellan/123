import Head from 'next/head'
import Link from 'next/link'
import styles from './List.module.scss'

import Search from '../../components/search/listSearch'
import ArticleCard from '../../components/cards/articleCard'
import AdvertisementCard from '../../components/cards/advertisementCard'
import InfoCard from '../../components/cards/infoCard'
import CommentCard from '../../components/cards/commentCard'
import DesktopActions from '../../components/actions/desktopActions'


// Article
const title = "10 Inspirational Biographies That Can Steer You Towards The Right Path"
const date = "5h ago"
const wallpaper = "/images/articles/wallpaper.jpeg"
const text0 = "Everyone out there has had days when they lose all self confidence and feel like they are going nowhere. All your ideas start sounding stupid and you don’t know why you’re still trying in the first place. This is where these inspirational biographies come into play."

const image0 = "/images/articles/oneclick.png"
const subtitle0 = "One Click by Richard Brandt"
const text1 = "The extraordinary and inspiring account of both the professional and personal life of Steve Jobs. Based on three years of exclusive interviews conducted by Isaacson with both Jobs and his family, colleagues and competitors. A great insight into Jobs’s life and thoughts making it a very motivational and inspirational read, one of the best inspirational biographies out there."

// Author
const authorLink = "/profile/profile"
const author = "Jacob Lundell"
const authorProfilePicture = "/images/profile.jpeg"

// Category
const category = "Books"
const categoryLink = "/"
const categoryIcon = "/images/categories/books.png"

// Related
const articleAuthorLink = "/profile/profile"
const articleAuthorProfileImage = "/images/profile.jpeg"
const articleAuthorName = "Jacob Lundell"
const images = ["/images/articles/book0.png", "/images/articles/book1.png", "/images/articles/book2.png"]
const relatedTitle = "10 Inspirational Biographies That Can Steer You Towards The Right Path"
const likes = 100
const comments = 20

// Comments 
const commentAuthorLink = "/profile/profile"
const commentAuthorProfileImage = "/images/profile.jpeg"
const commentAuthorName = "Jacob Lundell"
const commentTime = "5h"
const commentText = "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."
const commentLikes = "120"
const commentReplies = "20"


export default function List() {
  return (
    <div>
      <Head>
        <title>{title} | {category} | Topping</title>
      </Head>

      {/* <DesktopActions /> */}

      <div className={styles.articleGrid}>
        
        <div className={styles.article}>
          <Search 
            category={category} 
            link={categoryLink}
            icon={categoryIcon}
          />

          <main role="main">
            <article vocab="https://schema.org/" typeof="ItemList">
              
              <header className={styles.intro}>
                <h1 property="name">
                  {title}
                </h1>

                <time>
                  <img src={authorProfilePicture} />
                  Written by&nbsp;
                  <Link href={authorLink}>
                    <a className={styles.author}>
                      {author}
                    </a>
                  </Link>
                  {/* &nbsp;in&nbsp;
                  <Link href={authorLink}>
                    <a className={styles.author}>
                      {category}
                    </a>
                  </Link> */}
                  &nbsp;&#xb7;&nbsp;
                  {date}
                </time>

                <div className={styles.wallpaper}>
                  <img
                    src={wallpaper}
                    draggable="false"
                  />
                </div>

                <p>
                  {text0}
                </p>
              </header>
              
              <link property="itemListOrder" href="https://schema.org/ItemListOrderDescending" />
              
              <section className={styles.entry}>
                <span property="itemListElement">
                <div className={styles.number}>1</div>
                  <div className={styles.wallpaper}>
                    <img
                      src={image0}
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

              <section className={styles.entry}>
                <span property="itemListElement">
                <div className={styles.number}>1</div>
                  <div className={styles.wallpaper}>
                    <img
                      src={image0}
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
            <AdvertisementCard />
            {/* <InfoCard 
              image={authorProfilePicture} 
              title={author} 
              information="Author" 
              link={authorLink} 
            /> */}
            <ArticleCard
              authorImage={articleAuthorProfileImage} 
              authorName={articleAuthorName}
              authorLink={articleAuthorLink}
              images={images} 
              title={relatedTitle} 
              likes={likes} 
              comments={comments} 
            />
            <ArticleCard
              authorImage={articleAuthorProfileImage} 
              authorName={articleAuthorName}
              authorLink={articleAuthorLink} 
              images={images} 
              title={relatedTitle} 
              likes={likes} 
              comments={comments} 
            />
            <ArticleCard 
              authorImage={articleAuthorProfileImage} 
              authorName={articleAuthorName}
              authorLink={articleAuthorLink}
              images={images} 
              title={relatedTitle} 
              likes={likes} 
              comments={comments} 
            />
          </div>

          <section className={styles.comments}>
            <CommentCard 
              authorProfileLink={commentAuthorLink} 
              authorProfileImage={commentAuthorProfileImage}
              authorName={commentAuthorName} 
              time={commentTime}
              text={commentText} 
              likes={commentLikes}
              replies={commentReplies}
            />
            <CommentCard 
              authorProfileLink={commentAuthorLink} 
              authorProfileImage={commentAuthorProfileImage}
              authorName={commentAuthorName} 
              time={commentTime}
              text={commentText} 
              likes={commentLikes}
              replies={commentReplies}
            />
            <CommentCard 
              authorProfileLink={commentAuthorLink} 
              authorProfileImage={commentAuthorProfileImage}
              authorName={commentAuthorName} 
              time={commentTime}
              text={commentText} 
              likes={commentLikes}
              replies={commentReplies}
            />
            <CommentCard 
              authorProfileLink={commentAuthorLink} 
              authorProfileImage={commentAuthorProfileImage}
              authorName={commentAuthorName} 
              time={commentTime}
              text={commentText} 
              likes={commentLikes}
              replies={commentReplies}
            />
            <CommentCard 
              authorProfileLink={commentAuthorLink} 
              authorProfileImage={commentAuthorProfileImage}
              authorName={commentAuthorName} 
              time={commentTime}
              text={commentText} 
              likes={commentLikes}
              replies={commentReplies}
            />
            <CommentCard 
              authorProfileLink={commentAuthorLink} 
              authorProfileImage={commentAuthorProfileImage}
              authorName={commentAuthorName} 
              time={commentTime}
              text={commentText} 
              likes={commentLikes}
              replies={commentReplies}
            />
            <CommentCard 
              authorProfileLink={commentAuthorLink} 
              authorProfileImage={commentAuthorProfileImage}
              authorName={commentAuthorName} 
              time={commentTime}
              text={commentText} 
              likes={commentLikes}
              replies={commentReplies}
            />
          </section>
        </section>
      </div>
    </div>
  )
}