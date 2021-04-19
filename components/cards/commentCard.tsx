import styles from './CommentCard.module.scss'
import Link from 'next/link'

const imageHeight = 100

export default function ArticleCard({ 
  authorProfileLink, 
  authorProfileImage, 
  authorName, 
  /* pinned, */ 
  time, 
  text, 
  likes, 
  replies 
}) {
  return (
    <div className={styles.comment}>
      <div className={styles.card}>
      <Link href={authorProfileLink}>
        <a>
          <img
            src={authorProfileImage}
            draggable="false"
          />
          <h4>
            {authorName}
          </h4>
        </a>
        </Link>
        <div className={styles.stat}>
          {time} ago
        </div>
        <p>
          {text}
        </p>
      </div>
      <div className={styles.buttons}>
        <button>
          <span className={styles.text}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.42228 14.1116L7.4226 14.1118L8.52887 15.1113L8.62981 15.2025L8.7304 15.1109L9.83646 14.104L9.83667 14.1038L9.85411 14.088C11.8079 12.3164 13.442 10.8346 14.5868 9.43489C15.7368 8.02887 16.4089 6.68742 16.4089 5.19619C16.4089 2.76348 14.4954 0.85 12.0627 0.85C10.7492 0.85 9.48845 1.43428 8.62943 2.36828C7.7704 1.43428 6.50964 0.85 5.19619 0.85C2.76348 0.85 0.85 2.76348 0.85 5.19619C0.85 6.68742 1.52201 8.02886 2.67201 9.4358C3.81289 10.8316 5.43968 12.3099 7.38449 14.0772L7.42228 14.1116ZM8.62943 12.7305C6.82198 11.0939 5.3322 9.74206 4.29162 8.52617C3.24491 7.30312 2.67589 6.24327 2.67589 5.19619C2.67589 3.75314 3.75314 2.67589 5.19619 2.67589C6.31332 2.67589 7.39945 3.39689 7.77999 4.38055L7.81709 4.47643H7.91989H9.34659H9.4501L9.48683 4.37966C9.85982 3.39698 10.9453 2.67589 12.0627 2.67589C13.5057 2.67589 14.583 3.75314 14.583 5.19619C14.583 6.24327 14.0139 7.30312 12.9672 8.52617C11.9267 9.74206 10.4369 11.0939 8.62943 12.7305Z" />
            </svg>
            {likes}
          </span>
        </button>
        <button>
          <span className={styles.text}>
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.39826 15.1102L7.5 15.2041L7.60174 15.1102L9.72531 13.15H12.5556C13.4213 13.15 14.15 12.4939 14.15 11.6667V2.33333C14.15 1.50608 13.4213 0.85 12.5556 0.85H2.44444C1.57869 0.85 0.85 1.50608 0.85 2.33333V11.6667C0.85 12.4939 1.57869 13.15 2.44444 13.15H5.27469L7.39826 15.1102ZM5.93278 11.5167H2.59444V2.48333H12.4056V11.5167H9.06722H9.00857L8.96548 11.5564L8.53937 11.9498L7.5 12.9092L6.45341 11.9431L6.03452 11.5564L5.99143 11.5167H5.93278Z" />
            </svg>
            {replies}
          </span>
        </button>
        <button className={styles.more}>
          <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" fill="#333333"/>
            <path d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z" stroke="#333333"/>
          </svg>
        </button>
        <button className={styles.replies}>
          View replies ↓
        </button>
      </div>
    </div>
  )
}