import React, { ReactNode } from 'react'
import { IArticle } from '@/types'
import Link from 'next/link'
interface IProps {
  children?: ReactNode
  article: IArticle
}
const ArticleCard: React.FC<IProps> = ({ article }) => {
  const formatTime = () => {
    const res = article.createTime.match(/\d{4}-\d{2}-\d{2}/g)
    return res
  }
  return (
    <article className="font-mono py-4">
      <Link className="text-xl hover:underline hover:decoration-1" href={`/topic/${article.articleId}`}>
        {article.title}
      </Link>
      <p className="space-x-4 mt-2">
        <Link className="hover:bg-neutral-200 bg-neutral-100 rounded-sm" href="#">
          <span className="m-1 text-sm hover:text-gray-700 text-gray-500"> {`Java`}</span>
        </Link>
        <Link href="#" className="text-xs text-dark-100 hover:underline hover:decoration-1 hover:text-blue-600">
          {article.username}
        </Link>
        <span className="text-neutral-400">{formatTime()}</span>
        {article.lastCommentUsername && 
          <span className="text-neutral-400">{`最后回复来自${article.lastCommentUsername}`}</span>
        }

      </p>
    </article>
  )
}

export default ArticleCard
