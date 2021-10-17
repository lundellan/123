import RelatedArticleCard from '../cards/relatedArticleCard'

// Placeholder GraphQL data
const data = {
  title: "10 Inspirational Biographies That Can Steer You Towards The Right Path",
  url: "/",
  thumbnails: [
    "/images/articles/book0.png",
    "/images/articles/book1.png",
    "/images/articles/book2.png"
  ],
  author: {
    name: "Jacob Lundell",
    picture: "/images/profile.jpeg",
    url: "/profile/profile"
  },
  stats: {
    likes: 200,
    comments: 20
  }
}

export default function RelatedArticles() {
  return (
    <div>
      {/* Gör inladdning dynamisk */}
      <RelatedArticleCard content={data} />
      <RelatedArticleCard content={data} />
      <RelatedArticleCard content={data} />
      <RelatedArticleCard content={data} />
      <RelatedArticleCard content={data} />
      <RelatedArticleCard content={data} />
      <RelatedArticleCard content={data} />
      <RelatedArticleCard content={data} />
    </div>
  )
}