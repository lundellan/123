import styles from './ListImage.module.scss'

export default function ListImage({ 
  image,
  caption,
}) {
  return (
    <div className={styles.image}>
      <img
        src={image}
        draggable="false"
        alt={caption}
      />
      <caption>
        {caption}
      </caption>
    </div>
  )
}