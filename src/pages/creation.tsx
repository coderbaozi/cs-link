import WriteTips from '@/components/Conventions/WriteTips'
import RichEditor from '@/components/RichText/RichEditor'
import TabBar from '@/components/RichText/TabBar'
import { useTextArea } from '@/hooks/useTextArea'
import React, { ReactNode, createContext, useEffect, useState } from 'react'
import MarkdownIt from 'markdown-it'
import emoij from 'markdown-it-emoji'

interface IProps {
  children?: ReactNode
}
type TControl = (id: number) => void
type TTextChange = (id: number) => void
export const ControlContext = createContext<TControl | null>(null)
const Creation: React.FC<IProps> = () => {
  const md = MarkdownIt({
    html: true,
    typographer: true
  })
  md.use(emoij)
  useEffect(() => {
    foucusTextArea()
  })
  const [type, setType] = useState(0)
  const [text, setText] = useState('## h2 Heading\n### h3 Heading')
  const [mode, setMode] = useState(0)
  const { position, foucusTextArea, getCursorPosition, insertContent } = useTextArea()
  const enhanceGetCursorPosition = (textArea: HTMLTextAreaElement | null) => {
    return getCursorPosition(textArea)
  }
  const handleControl: TControl = (id: number) => {
    setType(() => id)
    handleChange(id)
  }
  const handleChange: TTextChange = (id: number) => {
    switch (id) {
      case 0: // write mode value is 0
        return
      case 1: // Title value is 1
        insertContent('### ', null, id)
        setText(() => text + '### ')
        foucusTextArea()
        return
      case 2: // bold font
        insertContent('****', { start: position.start, end: position.end }, id)
        setText(() => text + '****')
        return
      case 3: // italic font
        insertContent('**', { start: position.start, end: position.end }, id)
        setText(() => text + '**')
        foucusTextArea()
        return
      case 4: // ref clock
        insertContent('>', null, id)
        setText(() => text + '>')
        foucusTextArea()
        return
      case 5: // code block
        insertContent('``` \n\n```', null, id)
        setText(() => text + '``` \ncode\n```')
        foucusTextArea()
        return
      case 6: // super link
        insertContent(`Markdown语法](https://markdown.com.cn)`, null, id)
        setText(() => text + `[Markdown语法](https://markdown.com.cn)`)
        foucusTextArea()
        return
      case 7: // unordered list
        insertContent(`- \n- \n `, null, id)
        setText(() => text + `- \n- \n`)
        foucusTextArea()
        return
      case 8: // ordered list
        insertContent(`1. \n2. \n `, null, id)
        setText(() => text + `1. \n2. \n`)
        foucusTextArea()
        return
      case 9: // ordered list
        insertContent(`- [ ] \n- [ ] \n `, null, id)
        setText(() => text + `- [ ] \n- [ ] \n `)
        foucusTextArea()
        return
    }
  }
  return (
    <div className="relative">
      <div className="flex items-center flex-col justify-center w-4/5">
        <ControlContext.Provider value={handleControl}>
          <TabBar mode={mode} setMode={setMode} />
        </ControlContext.Provider>
        {mode === 0 ? (
          <RichEditor getCursorPosition={enhanceGetCursorPosition} text={text} setText={setText} handleChange={handleChange} />
        ) : (
          <div className='w-1/2 rounded-b-md border-x border-b border-slate-200 p-2'>
            <article className='prose' dangerouslySetInnerHTML={{ __html: md.render(text) }}></article>
          </div>
        )}
      </div>
      <div className="fixed top-8 right-10">
        <WriteTips />
      </div>
    </div>
  )
}

export default Creation
