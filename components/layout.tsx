import styles from './Layout.module.scss'
import Navigation from './navigation/navigation'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}