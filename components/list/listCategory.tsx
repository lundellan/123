import Link from 'next/link' 
import styles from './ListCategory.module.scss'

export default function ListCategory({ 
  category,
  categoryLink,
  categoryIcon
}) {
  return (
    <Link href={categoryLink}>
      <a className={styles.category}>
        <img
          src={categoryIcon}
          draggable="false"
          alt={category + " category"}
        />

        Published in&nbsp;

        <span className={styles.name}>
          {category}
        </span>
      </a>
    </Link>
  )
}