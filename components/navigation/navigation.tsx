import styles from './Navigation.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const logoHeight = 74
const logoWidth = 66
const iconSize = 26
const iconSizeProfile = 50

export default function Navigation() {
  return (
    <div className={styles.container}>
      <div className={styles.navigation}>
        <Link href="/">
          <div className={styles.logo}>
            <Image
              src="/images/logo.svg"
              height={logoHeight}
              width={logoWidth}
              alt="Topping"
              draggable="false"
            />
          </div>
        </Link>
        
        <Link href="/">
          <a>
            <Image
              src="/images/home.svg"
              height={iconSize}
              width={iconSize}
              alt="Home"
              draggable="false"
            />
          </a>
        </Link>

        <Link href="/">
          <a>
            <Image
              src="/images/team.svg"
              height={iconSize}
              width={iconSize}
              alt="From the Team"
              draggable="false"
            />
          </a>
        </Link>

        <Link href="/">
          <a>
            <Image
              src="/images/browse.svg"
              height={iconSize}
              width={iconSize}
              alt="Browse categories and topics"
              draggable="false"
            />
          </a>
        </Link>

        <Link href="/">
          <a>
            <Image
              src="/images/create.svg"
              height={iconSize}
              width={iconSize}
              alt="Create a new article"
              draggable="false"
            />
          </a>
        </Link>

        <Link href="/">
          <a>
          <Image
              src="/images/profile.png"
              height={iconSizeProfile}
              width={iconSizeProfile}
              alt="Jacob Lundell"
              draggable="false"
            />
          </a>
        </Link>
      </div>
    </div>
  )
}