import React, { ReactNode } from 'react'
import DefaultLayout from '@/layouts/default'
import Head from 'next/head'
import { ITag, IArticle } from '@/types'
import { getTags, getArticleList, getComment } from '@/fetch/api'
import ArticleCard from '@/components/ArticleCard'
import { GetServerSidePropsContext } from 'next'
import { Comment } from '@/types/comment.d'
import CommentList from '@/components/CommentList'
interface IProps {
  children?: ReactNode
  tags: ITag[]
  articleList: IArticle[]
}

export const TagContext = React.createContext([] as ITag[])
const ArticlePage: React.FC<IProps> = ({ tags, articleList }) => {
  return (
    <>
      <TagContext.Provider value={tags}>
        <DefaultLayout>
          <Head>
            <title>cslink</title>
            <meta name="description" content="cslink a useful area" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <ul className="flex flex-col justify-center items-center">
            {articleList.map((article) => {
              return (
                <li className="mt-auto w-1/2" key={article.articleId}>
                  <ArticleCard article={article} />
                </li>
              )
            })}
          </ul>
        </DefaultLayout>
      </TagContext.Provider>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query as { id: string }
  const tags = await getTags()
  const articleList: IArticle[] = await getArticleList({ tagId: id, page: 1 })
  // create a hashTable to prase the userid to username
  articleList.forEach((article) => {
    const res = article.createTime.match(/\d{4}-\d{2}-\d{2}/g)
    article.createTime = res![0]
  })
  return {
    props: {
      tags,
      articleList,
    },
  }
}

export default ArticlePage
