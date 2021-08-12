import styles from './ListParagraph.module.scss'

export default function ListParagraph({ 
  text
}) {
  return (
    <div className={styles.paragraph}>
      <p>
        {text}
      </p>
    </div>
  )
}