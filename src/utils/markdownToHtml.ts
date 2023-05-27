function markdownToHtml(markdown: string) {
  // 解析标题
  let html = markdown.replace(/^(#{1,6})(.*)#*\s*$/gm, (_, p1, p2) => {
    return `<h${p1.length}>${p2.trim()}</h${p1.length}> \n`
  })

  // 解析段落
  // html = html.replace(/(^|\n\n)(?! )(.+?)(\n\n|$)/gm, '<p>$2</p>\n')

  // 解析列表
  html = html.replace(/^- (.+)/gm, '<li>$1</li>')

  // 有序列表
  html = html.replace(/^\d+\. (.+)/gm,'<li>$1</li>')

  // 解析代码块
  html = html.replace(/^```([^]+?)```/gm, '<pre><code>$1</code></pre>')

  // 解析图片
  html = html.replace(/!\[([^\]]+)\]\(([^ "]+)(?: "([^"]+)")?\)/gm, '<img src="$2" alt="$1">')

  // 解析链接
  html = html.replace(/\[([^\]]+)\]\(([^ "]+)(?: "([^"]+)")?\)/g, '<a href="$2">$1</a>')

  // 解析加粗
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')

  // 解析斜体
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>')

  // 解析行内代码
  html = html.replace(/`([^`]+?)`/g, '<code>$1</code>')

  // 解析表格
  
  // 解析换行符
  html = html.replace(/  +\n/g, '<br>')

  return html
}

export { markdownToHtml }
