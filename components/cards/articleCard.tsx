import styles from './ArticleCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const imageHeight = 100

export default function ArticleCard({ images, title, likes, comments }) {
  return (
    <Link href='/articles/list'>
      <a className={styles.card}>
        <div className={styles.imageSection}>
          <img className={styles.image} src={images[0]}></img>
          <img className={styles.image} src={images[1]}></img>
          <img className={styles.image} src={images[2]}></img>
        </div>
        <h4>
          {title}
        </h4>
        <div className={styles.stat}>
          {likes} likes
        </div>
        <div className={styles.stat}>
          {comments} comments
        </div>
      </a>
    </Link>
  )
}