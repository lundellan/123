import Link from 'next/link' 
import styles from './ListAuthor.module.scss'

export default function ListAuthor({ 
  author,
  authorLink,
  authorPicture
}) {
  return (
    <Link href={authorLink}>
      <a 
        itemProp='author' 
        // name='{author}'
        className={styles.author}
      >
        <img
          src={authorPicture}
          draggable="false"
          alt={"The avatar of author " + author}
        />

        Written by&nbsp;

        <span className={styles.name}>
          {author}
        </span>
      </a>
    </Link>
  )
}