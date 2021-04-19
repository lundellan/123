import styles from './Navigation.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const iconSizeProfile = 50

export default function Navigation() {
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <Link href="/">
          <div className={styles.logo}>
            <img
              src="/images/logo.svg"
              alt="Topping"
              draggable="false"
            />
          </div>
        </Link>
        
        <Link href="/">
          <a>
            <svg 
              width="26" 
              height="26" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M100 0L200 70V200H133V133C133 114.775 118.225 100 100 100C81.7746 100 67 114.775 67 133V200H0V70L100 0Z" 
              />
            </svg>
          </a>
        </Link>

        <Link href="/">
          <a>
            <svg 
              width="26" 
              height="26" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90ZM45 200C69.8528 200 90 179.853 90 155C90 130.147 69.8528 110 45 110C20.1472 110 0 130.147 0 155C0 179.853 20.1472 200 45 200ZM200 45C200 69.8528 179.853 90 155 90C130.147 90 110 69.8528 110 45C110 20.1472 130.147 0 155 0C179.853 0 200 20.1472 200 45ZM155 200C179.853 200 200 179.853 200 155C200 130.147 179.853 110 155 110C130.147 110 110 130.147 110 155C110 179.853 130.147 200 155 200Z" />
            </svg>
          </a>
        </Link>

        <Link href="/">
          <a>
            <svg 
              width="26" 
              height="26" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M100 0C85.0883 0 73 12.0883 73 27V73H27C12.0883 73 0 85.0883 0 100C0 114.912 12.0883 127 27 127H73V173C73 187.912 85.0883 200 100 200C114.912 200 127 187.912 127 173V127H173C187.912 127 200 114.912 200 100C200 85.0883 187.912 73 173 73H127V27C127 12.0883 114.912 0 100 0Z" />
            </svg>
          </a>
        </Link>

        <Link href="/">
          <a>
            <img
              src="/images/profile.jpeg"
              height={iconSizeProfile}
              width={iconSizeProfile}
              alt="Profile"
              draggable="false"
            />
          </a>
        </Link>
      </nav>
    </div>
  )
}