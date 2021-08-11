import Link from 'next/link' 
import styles from './ListAuthor.module.scss'

export default function ListAuthor({ 
  author,
  authorLink,
  authorPicture
}) {
  return (
    <Link href={authorLink}>
      <a className={styles.author}>
        <img
          src={authorPicture}
          draggable="false"
        />

        Written by&nbsp;

        <span className={styles.name}>
          {author}
        </span>
      </a>
    </Link>
  )
}