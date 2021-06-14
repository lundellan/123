import Link from 'next/link'
import styles from './ListSearch.module.scss'

export default function ListSearch({ category, link, icon }) {
  return (
    <div className={styles.searchSection}>
      <img 
        className={styles.icon} 
        src={icon}
      />
      
      <Link href={link}>
        <a>
          {category}
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