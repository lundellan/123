import styles from './ListParagraph.module.scss'

export default function ListParagraph({ 
  content
}) {
  return (
    <div className={styles.paragraph}>
      <p>{content}</p>
      {/* <p>{content}</p> */}
    </div>
  )
}