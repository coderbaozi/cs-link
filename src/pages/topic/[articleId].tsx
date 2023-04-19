import React, { ReactNode } from 'react'
import { GetServerSidePropsContext } from 'next'
import DefaultLayout from '@/layouts/default'
import { getArticleInfo, getComment } from '@/fetch/api'
import { IArticle } from '@/types'
import ArticleContent from '@/components/ArticleContent'
import Head from 'next/head'
import CommentList from '@/components/CommentList'
import { Comment } from '@/types/comment'
interface IProps {
  children?: ReactNode
  articleContent: IArticle
  commentList: Comment[]
}
const Topic: React.FC<IProps> = ({ articleContent, commentList }) => {
  return (
    <>
      <Head>
        <title>{articleContent.title}</title>
      </Head>
      <DefaultLayout>
        <ArticleContent articleContent={articleContent}></ArticleContent>
        <CommentList commentList={commentList} />
      </DefaultLayout>
    </>
  )
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { articleId } = context.query as { articleId: string }
  const articleContent = await getArticleInfo(articleId)
  const commentList = await getComment(articleId)
  return {
    props: {
      articleContent,
      commentList,
    },
  }
}
export default Topic
