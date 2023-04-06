import fetcher from '..'

function getTags() {
  return fetcher.get({ url: '/getTags' })
}

interface IArticleParam {
  tagId: number | string
  page: number
}
function getArticleList(param: IArticleParam) {
  return fetcher.get({ url: '/getArticleList', params: param })
}

function getUserName(userId: number) {
  return fetcher.get({ url: '/getUserName', params: { userId } })
}

function getArticleInfo(articleId: string) {
  return fetcher.get({ url: '/getArticle', params: { articleId } })
}

export { getTags, getArticleList, getUserName, getArticleInfo }
