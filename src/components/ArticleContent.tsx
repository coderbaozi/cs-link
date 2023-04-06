import { IArticle } from '@/types'
import React, { ReactNode } from 'react'
import Link from 'next/link'
import PullStepper from './Pullstepper'
interface IProps {
  children?: ReactNode
  articleContent: IArticle
}
const ArticleContent: React.FC<IProps> = ({ articleContent }) => {
  function formateTime(str: string) {
    return /\d{4}-\d{2}-\d{2}/g.exec(str)
  }
  return (
    <>
      <main className="max-w-2xl m-auto">
        <h1>{articleContent.title}</h1>
        <div className="flex space-between font-mono">
          <p className="w-full space-x-2">
            <Link className="text-xs hover:underline hover:decoration-1" href={'#'}>
              {articleContent.username}
            </Link>
            <span className="text-xs">{formateTime(articleContent.createTime)}</span>
            <span className="text-xs">{`${articleContent.browseCount}次点击`}</span>
          </p>
          <div className="flex flex-row space-x-2">
            <PullStepper />
          </div>
        </div>

        <section className="text-lg w-full mt-3 font-sans">
          <p>{articleContent.articleContent.content}</p>
        </section>
      </main>
    </>
  )
}
export default ArticleContent
