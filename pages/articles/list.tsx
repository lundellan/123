import Head from 'next/head'
import Link from 'next/link'
import styles from './List.module.scss'

import ListNavigation from '../../components/navigation/listNavigation'
import ListCategory from '../../components/list/listCategory'
import ListAuthor from '../../components/list/listAuthor'
import ListHeader from '../../components/list/listHeader'
import ListImage from '../../components/list/listImage'
import ListParagraph from '../../components/list/listParagraph'
import RelatedArticleCard from '../../components/cards/relatedArticleCard'
import AdvertisementCard from '../../components/cards/advertisementCard'
import InfoCard from '../../components/cards/infoCard'
import CommentCard from '../../components/cards/commentCard'


// Article
const title = "10 Inspirational Biographies"
const description = "Everyone out there has had days when they lose all self confidence and feel like they are going nowhere. All your ideas start sounding stupid and you don’t know why you’re still trying in the first place. This is where these inspirational biographies come into play."
const wallpaper = "/images/articles/wallpaper.jpeg"
const wallpaperCaption = "A happy Jeff Bezos getting lots of money."
const datePublished = "2021-01-05 09:31:10 -0700 -0700"
const dateModified = "2021-01-05 09:31:10 -0700 -0700"

const text0 = "Everyone out there has had days when they lose all self confidence and feel like they are going nowhere. All your ideas start sounding stupid and you don’t know why you’re still trying in the first place. This is where these inspirational biographies come into play."

const image0 = "/images/articles/oneclick.png"
const subtitle0 = "One Click by Richard Brandt"
const text1 = "The extraordinary and inspiring account of both the professional and personal life of Steve Jobs. Based on three years of exclusive interviews conducted by Isaacson with both Jobs and his family, colleagues and competitors. A great insight into Jobs’s life and thoughts making it a very motivational and inspirational read, one of the best inspirational biographies out there."

// Author
const author = "Jacob Lundell"
const authorLink = "/profile/profile"
const authorPicture = "/images/profile.jpeg"

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

      <ListNavigation 
        // lägg till thumbnails
      />

      <div className={styles.layout}>
        <div className={styles.article}>
          <main role="main">
            <article 
              vocab="https://schema.org/" 
              typeof="ItemList"
            >
              <meta 
                itemProp="datePublished" 
                content={datePublished}
              />
              <meta 
                itemProp="dateModified"
                content={dateModified}
              />
              <meta
                itemProp="image"
                content={wallpaper}
              />
              <meta 
                itemProp="publisher"
                content="Topping"
              />
              
              <ListCategory 
                category={category}
                categoryLink={categoryLink}
                categoryIcon={categoryIcon}
              />

              <ListAuthor 
                author={author}
                authorLink={authorLink}
                authorPicture={authorPicture}
              />

              <ListHeader 
                title={title}
                description={description}
                wallpaper={wallpaper}
                wallpaperCaption={wallpaperCaption}
              />

              {/* Ska inte vara "ItemListOrderDescending" för guider, bara numeriska topplistor */}
              <link property="itemListOrder" href="https://schema.org/ItemListOrderDescending" />

              <ListParagraph 
                text={text0}
              />

              {/* ListEntry   */}
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
          </div>

          <div className={styles.relatedArticles}>
            <RelatedArticleCard
              authorImage={articleAuthorProfileImage}
              authorName={articleAuthorName}
              authorLink={articleAuthorLink}
              images={images}
              title={relatedTitle}
              likes={likes}
              comments={comments}
            />
            <RelatedArticleCard
              authorImage={articleAuthorProfileImage}
              authorName={articleAuthorName}
              authorLink={articleAuthorLink}
              images={images}
              title={relatedTitle}
              likes={likes}
              comments={comments}
            />
            <RelatedArticleCard
              authorImage={articleAuthorProfileImage}
              authorName={articleAuthorName}
              authorLink={articleAuthorLink}
              images={images}
              title={relatedTitle}
              likes={likes}
              comments={comments}
            />
          </div>

          {/* <section className={styles.comments}>
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
          </section> */}
        </section>
      </div>
    </div>
  )
}