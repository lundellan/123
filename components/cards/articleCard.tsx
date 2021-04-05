import styles from './ArticleCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const imageHeight = 100

export default function List(/* { images, title, likes, comments }*/) {
  return (
    <Link href='/articles/list'>
      <a className={styles.card}>
        <h4>
          
        </h4>
        <div className={styles.stat}>
          
        </div>
        <div className={styles.stat}>
          
        </div>
      </a>
    </Link>
  )
}