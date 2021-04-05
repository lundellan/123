import styles from './InfoCard.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const imageHeight = 100
const imageWidth = 60

export default function List({ /*image, */title, information }) {
  return (
    <Link href='/articles/list'>
      <a className={styles.card}>
        <div className={styles.image}>
          {/* <Image
          src={image}
          height={imageHeight}
          width={imageWidth}
          alt="Create a new article"
          draggable="false"
        /> */}
        </div>
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