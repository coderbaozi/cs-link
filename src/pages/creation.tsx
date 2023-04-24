import WriteTips from '@/components/Conventions/WriteTips'
import RichEditor from '@/components/RichText/RichEditor'
import TabBar from '@/components/RichText/TabBar'
import { useTextArea } from '@/hooks/useTextArea'
import React, { ReactNode, createContext, useEffect, useState } from 'react'
interface IProps {
  children?: ReactNode
}
type TControl = (id: number) => void
type TTextChange = (id: number) => void
export const ControlContext = createContext<TControl | null>(null)
const Creation: React.FC<IProps> = () => {
  useEffect(() => {
    foucusTextArea()
  })
  const [type, setType] = useState(0)
  const [text, setText] = useState('')
  const { foucusTextArea, getCursorPosition, insertContent } = useTextArea()
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
      case 1: // add Title value is 1
        insertContent('### ', { start: 0, end: 0 })
        setText(() => text + '### ')
        foucusTextArea()
        return
      case 2: // add bold font
        insertContent('****', { start: 0, end: 0 })
        setText(() => text + '****')
        return
    }
  }
  return (
    <div className="relative">
      <div className="flex items-center flex-col justify-center w-4/5">
        <ControlContext.Provider value={handleControl}>
          <TabBar />
        </ControlContext.Provider>
        <RichEditor getCursorPosition={enhanceGetCursorPosition} text={text} setText={setText} handleChange={handleChange} />
      </div>
      <div className="fixed top-8 right-10">
        <WriteTips />
      </div>
    </div>
  )
}

export default Creation
