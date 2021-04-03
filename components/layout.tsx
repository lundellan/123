import styles from './Layout.module.scss'
import Navigation from './navigation/navigation'
import Search from './search/search'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.content}>
        <div className={styles.top}>
          <Search />
        </div>
        {children}
      </div>
    </div>
  )
}