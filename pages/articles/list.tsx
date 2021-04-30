import Head from 'next/head'
import Link from 'next/link'
import styles from './List.module.scss'

import Search from '../../components/search/search'
import ArticleCard from '../../components/cards/articleCard'
import AdvertisementCard from '../../components/cards/advertisementCard'
import InfoCard from '../../components/cards/infoCard'
import CommentCard from '../../components/cards/commentCard'


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

      <div className={styles.actions}>
        <button>
          <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.079 3.13679C12.5836 1.57272 10.4334 0.6 8.19346 0.6C3.94421 0.6 0.6 3.94421 0.6 8.19346C0.6 10.7968 1.77442 13.1278 3.75569 15.5518C5.71823 17.9528 8.51355 20.493 11.8416 23.5173L11.9135 23.5827L11.9144 23.5835L13.8109 25.2968L14.08 25.54L14.3483 25.2958L16.2442 23.5699L16.2447 23.5694L16.2818 23.5357C19.6251 20.5041 22.4329 17.958 24.4023 15.5503C26.3836 13.1279 27.558 10.7968 27.558 8.19346C27.558 3.94421 24.2138 0.6 19.9646 0.6C17.7247 0.6 15.5744 1.57272 14.079 3.13679ZM14.079 20.9167C11.0215 18.148 8.5096 15.8636 6.75131 13.8091C4.96281 11.7193 4.0158 9.93573 4.0158 8.19346C4.0158 5.79857 5.79857 4.0158 8.19346 4.0158C10.0535 4.0158 11.8599 5.21913 12.4896 6.84677L12.5885 7.10245H12.8627H15.3084H15.5845L15.6824 6.8444C16.2992 5.21939 18.1039 4.0158 19.9646 4.0158C22.3595 4.0158 24.1422 5.79857 24.1422 8.19346C24.1422 9.93573 23.1952 11.7193 21.4067 13.8091C19.6484 15.8636 17.1365 18.148 14.079 20.9167Z" fill="black" stroke="black" stroke-width="0.8"/>
          </svg>
        </button>
        <button>
          <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8715 25.2939L12.1429 25.5444L12.4142 25.2939L16.0135 21.9714H20.8095C22.3616 21.9714 23.6857 20.7933 23.6857 19.2857V3.28571C23.6857 1.77811 22.3616 0.6 20.8095 0.6H3.47619C1.92412 0.6 0.6 1.77811 0.6 3.28571V19.2857C0.6 20.7933 1.92412 21.9714 3.47619 21.9714H8.27218L11.8715 25.2939ZM9.45619 18.8857H3.87619V3.68571H20.4095V18.8857H14.8295H14.6731L14.5582 18.9918L13.8277 19.6661L12.1429 21.2214L10.4456 19.6547L9.7275 18.9918L9.61258 18.8857H9.45619Z" fill="black" stroke="black" stroke-width="0.8"/>
          </svg>
        </button>
        <button>
          <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 0.25C2.43693 0.25 0.75 1.93693 0.75 4C0.75 6.06307 2.43693 7.75 4.5 7.75C6.56307 7.75 8.25 6.06307 8.25 4C8.25 1.93693 6.56307 0.25 4.5 0.25ZM25.5 0.25C23.4369 0.25 21.75 1.93693 21.75 4C21.75 6.06307 23.4369 7.75 25.5 7.75C27.5631 7.75 29.25 6.06307 29.25 4C29.25 1.93693 27.5631 0.25 25.5 0.25ZM15 0.25C12.9369 0.25 11.25 1.93693 11.25 4C11.25 6.06307 12.9369 7.75 15 7.75C17.0631 7.75 18.75 6.06307 18.75 4C18.75 1.93693 17.0631 0.25 15 0.25Z" fill="black" stroke="black" stroke-width="0.5"/>
          </svg>
        </button>
      </div>

      <div className={styles.articleGrid}>
        <div className={styles.article}>
          <Search pageTitle={category} link={categoryLink}/>

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
                  <div className={styles.wallpaper}>
                    <img
                      src={image0}
                      draggable="false"
                    />
                  </div>
                  <div className={styles.number}>1</div>
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
          </section>
        </section>
      </div>
    </div>
  )
}