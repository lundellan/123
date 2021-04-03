import styles from './Search.module.scss'

export default function Search() {
  return (
    <div className={styles.searchbar}>
      <input type="search" placeholder="Search"></input>
    </div>
  )
}