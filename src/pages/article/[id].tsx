import React, { ReactNode } from 'react'
import DefaultLayout from '@/layouts/default'
import Head from 'next/head'
import { IArticle } from '@/types'
import { getArticleList } from '@/fetch/api'
import ArticleCard from '@/components/ArticleCard'
import { GetServerSidePropsContext } from 'next'
interface IProps {
  children?: ReactNode
  articleList: IArticle[]
}

const ArticlePage: React.FC<IProps> = ({ articleList }) => {
  return (
    <>
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
              <li className="p-2 hover:scale-110 hover:shadow-xl hover:rounded-md duration-700 transition cursor-pointer mt-auto w-1/3" key={article.articleId}>
                <ArticleCard article={article} />
              </li>
            )
            //box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
          })}
        </ul>
      </DefaultLayout>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query as { id: string }
  const articleList: IArticle[] = await getArticleList({ tagId: id, page: 1 })
  // create a hashTable to prase the userid to username
  articleList.forEach((article) => {
    const res = article.createTime.match(/\d{4}-\d{2}-\d{2}/g)
    article.createTime = res![0]
  })

  return {
    props: {
      articleList,
    },
  }
}

export default ArticlePage
