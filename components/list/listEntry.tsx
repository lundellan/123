import styles from './ListEntry.module.scss'

export default function ListEntry({ 
  titleMain,
  titleSecondary,
  description,
  image
}) {
  return (
    <section className={styles.entry}>
      <span property="itemListElement">
        <div className={styles.image}>
          <img
            src={image}
            draggable="false"
            alt={"Image of " + titleMain}
          />
        </div>

        <h3>
          <span>
            {/* Lägg till siffra om det är en numerisk topplista */}
          </span>
          {titleMain}
        </h3>
        
        <h4>{titleSecondary}</h4>
        <p>{description}</p>
      </span>
    </section>
  )
}