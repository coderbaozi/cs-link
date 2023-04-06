export interface IArticle {
  articleId: number
  title: string
  status: number
  createTime: string
  userId: number
  tagId: number
  hotArticle: number
  browseCount: number
  likeCount: number
  commentCount: number
  cover: string
  username: string
  articleContent: ArticleContent
}

export interface ArticleContent {
  id: number
  content: string
  articleId: number
  thankCount: number
  trampleCount: number
}
