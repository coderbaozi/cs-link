import React, { ReactNode } from 'react'
import { GetServerSidePropsContext } from 'next'
import DefaultLayout from '@/layouts/default'
import { getTags, getArticleInfo } from '@/fetch/api'
import { IArticle, ITag } from '@/types'
import { TagContext } from '../article/[id]'
import ArticleContent from '@/components/ArticleContent'
import Head from 'next/head'
interface IProps {
  children?: ReactNode
  tags: ITag[]
  articleContent: IArticle
}
const Topic: React.FC<IProps> = ({ tags, articleContent }) => {
  return (
    <>
      <Head>
        <title>{articleContent.title}</title>
      </Head>
      <TagContext.Provider value={tags}>
        <DefaultLayout>
          <ArticleContent articleContent={articleContent}></ArticleContent>
        </DefaultLayout>
      </TagContext.Provider>
    </>
  )
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const tags = await getTags()
  const { articleId } = context.query as { articleId: string }
  const articleContent = await getArticleInfo(articleId)
  return {
    props: {
      tags,
      articleContent,
    },
  }
}
export default Topic
