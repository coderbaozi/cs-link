import fetcher from '..'

function getTags() {
  return fetcher.get({ url: '/getTags' })
}

interface IArticleParam {
  tagId: number
  page: number
}
function getArticleList(param: IArticleParam) {
  return fetcher.get({ url: '/getArticleList', params: param })
}

export { getTags, getArticleList }
