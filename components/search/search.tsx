import Link from 'next/link'
import styles from './Search.module.scss'

export default function Search({ pageTitle, link }) {
  return (
    <div className={styles.searchSection}>     
      <Link href={link}>
        <a>
          {pageTitle}
        </a>
      </Link>

      <input 
        type="search" 
        placeholder="Search" 
        spellCheck="false"
      />
    </div>
  )
}