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

function getComment(articleId: string) {
  return fetcher.get({ url: `/getComment/${articleId}` })
}

function login(username: string, password: string) {
  return fetcher.post({ url: '/signin', data: { username, password } })
}

function getUserInfo(token: string) {
  return fetcher.get({ url: '/getUserInfo', headers: { Authorization: token } })
}

function getAriticleCount(tagId: string) {
  return fetcher.get({ url: '/getArticleCount', params: { tagId } })
}

export { getTags, getArticleList, getUserName, getArticleInfo, getComment, login, getUserInfo, getAriticleCount }
