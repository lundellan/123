import styles from './ListHeader.module.scss'

import ListParagraph from './listParagraph'
import ListImage from './listImage'

export default function ListHeader({ 
  title,
  description,
  wallpaper,
  wallpaperCaption
}) {
  return (
    <header className={styles.header}>
      <h1 itemProp="name headline">
        {title}
      </h1>

      <ListParagraph 
        text={description}
      />

      <ListImage 
        image={wallpaper}
        caption={wallpaperCaption}
      />
    </header>
  )
}