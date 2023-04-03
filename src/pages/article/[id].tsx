import React, { ReactNode } from 'react'
import DefaultLayout from '@/layouts/default'
import Head from 'next/head'
import { ITag } from '@/types'
import { getTags } from '@/fetch/api'
interface IProps {
  children?: ReactNode
  tags: ITag[]
}

export const TagContext = React.createContext([] as ITag[])
const ArticlePage: React.FC<IProps> = ({ tags }) => {
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
        </DefaultLayout>
      </TagContext.Provider>
    </>
  )
}

export async function getServerSideProps() {
  const tags = await getTags()
  return {
    props: {
      tags,
    },
  }
}

export default ArticlePage
