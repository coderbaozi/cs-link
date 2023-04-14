import React, { ReactNode } from 'react'
import { GetServerSidePropsContext } from 'next'
import DefaultLayout from '@/layouts/default'
import { getTags, getArticleInfo, getComment, getUserName } from '@/fetch/api'
import { IArticle, ITag } from '@/types'
import { TagContext } from '../article/[id]'
import ArticleContent from '@/components/ArticleContent'
import Head from 'next/head'
import CommentList from '@/components/CommentList'
import { Comment } from '@/types/comment'
interface IProps {
  children?: ReactNode
  tags: ITag[]
  articleContent: IArticle
  commentList: Comment[]
}
const Topic: React.FC<IProps> = ({ tags, articleContent, commentList }) => {
  return (
    <>
      <Head>
        <title>{articleContent.title}</title>
      </Head>
      <TagContext.Provider value={tags}>
        <DefaultLayout>
          <ArticleContent articleContent={articleContent}></ArticleContent>
          <CommentList commentList={commentList} />
        </DefaultLayout>
      </TagContext.Provider>
    </>
  )
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const tags = await getTags()
  const { articleId } = context.query as { articleId: string }
  const articleContent = await getArticleInfo(articleId)
  const commentList = await getComment(articleId)
  return {
    props: {
      tags,
      articleContent,
      commentList,
    },
  }
}
export default Topic
