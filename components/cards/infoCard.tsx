import styles from './InfoCard.module.scss'
import Link from 'next/link'

export default function InfoCard({ image, title, information, link }) {
  return (
    <Link href={link}>
      <a className={styles.card}>
        <img
        src={image}
        draggable="false"
        />
        <h4>
          {title}
        </h4>
        <div className={styles.stat}>
          {information}
        </div>
      </a>
    </Link>
  )
}