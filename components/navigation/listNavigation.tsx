import styles from './ListNavigation.module.scss'
import Link from 'next/link'

const iconSizeProfile = 50

const book0 = "/images/articles/book0.png"
const book1 = "/images/articles/book1.png"
const book2 = "/images/articles/book2.png"
const book3 = "/images/articles/book3.png"
const book4 = "/images/articles/book4.png"
const book5 = "/images/articles/book5.png"

export default function ListNavigation() {
  return (
    <div className={styles.container}>

      <div className={styles.topShadow}></div>

      <nav className={styles.navigation}>
        <Link href="#">
          <div>
            <div className={styles.number}></div>

            <img 
              className={styles.thumbnail}
              src={book0} 
            />
          </div>
        </Link>

        <Link href="#">
          <div>
            <div className={styles.number}></div>

            <img 
              className={styles.thumbnail}
              src={book1} 
            />
          </div>
        </Link>

        <Link href="#">
          <div>
            <div className={styles.number}></div>

            <img 
              className={styles.thumbnail}
              src={book2} 
            />
          </div>
        </Link>

        <Link href="#">
          <div>
            <div className={styles.number}></div>

            <img 
              className={styles.thumbnail}
              src={book3} 
            />
          </div>
        </Link>

        <Link href="#">
          <div>
            <div className={styles.number}></div>

            <img 
              className={styles.thumbnail}
              src={book4} 
            />
          </div>
        </Link>

        <Link href="#">
          <div>
            <div className={styles.number}></div>

            <img 
              className={styles.thumbnail}
              src={book5} 
            />
          </div>
        </Link>
      </nav>

      <div className={styles.bottomShadow}></div>

    </div>
  )
}