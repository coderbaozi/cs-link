// import React from 'react'
// import { ReactNode } from 'react'
// import { getArticleList } from '@/fetch/api/'
// interface IProps {
//   children?: ReactNode
//   articleId: number
// }

// const ArticleList: React.FC<IProps> = ({ articleList }) => {
//   return (
//     <>
//       <ul>
//         {articleList.map((article) => {
//           return <li key={article.articleId}>{article.title}</li>
//         })}
//       </ul>
//     </>
//   )
// }

// export const getStaticProps = async () => {
//   const articleList = await getArticleList()
//   return {
//     props: {
//       articleList,
//     },
//   }
// }

// export default ArticleList
