import React, { ReactNode, useRef } from 'react'
import DefaultLayout from '@/layouts/default'
import Head from 'next/head'
import { IArticle } from '@/types'
import { getAriticleCount, getArticleList } from '@/fetch/api'
import ArticleCard from '@/components/ArticleCard'
import { GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { Pagination } from 'antd'

interface IProps {
  children?: ReactNode,
  tagId: number,
  articleList: IArticle[],
  articleCount: number
}

const ArticlePage: React.FC<IProps> = ({tagId, articleList, articleCount }) => {
  const router = useRouter()
  const handlePageChange = (current: number) => {
    router.push(`/article/${tagId}/${current}`)
  }
  const scrollRef = useRef<HTMLUListElement>(null)
  return (
      <DefaultLayout>
        <Head>
          <title>cslink</title>
          <meta name="description" content="cslink a useful area" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='relative overflow-auto w-full h-screen text-center'>
            <ul ref={scrollRef} className="flex flex-col justify-center items-center">
              {articleList.map((article) => {
                return (
                  <li className="p-2 hover:scale-110 hover:shadow-xl hover:rounded-md duration-700 transition cursor-pointer mt-auto w-1/3" key={article.articleId}>
                    <ArticleCard article={article} />
                  </li>
                )
              })}
            </ul>
            <div className="mt-3">
              <Pagination onChange={handlePageChange} defaultCurrent={1} total={articleCount}/>
            </div>
            <div className='h-20'></div>
        </div>
      </DefaultLayout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query
  // @ts-expect-error let me see see
  const [tagId, page = 1] = id
  const articleList: IArticle[] = await getArticleList({ tagId, page })
  const articleCount = await getAriticleCount(tagId)
  return {
    props: {
      tagId,
      articleList,
      articleCount
    },
  }
}

export default ArticlePage
