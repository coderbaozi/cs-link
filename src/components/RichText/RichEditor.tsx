import React, { useEffect } from 'react'
import { ReactNode } from 'react'
import { Icon } from '@iconify/react'
import { ICursorPosition } from '@/hooks/useTextArea'
import ToolBar from '../toolBar'
interface IProps {
  children?: ReactNode
  text: string
  handleChange: (id: number) => void
  setText: React.Dispatch<React.SetStateAction<string>>
  getCursorPosition: (textarea: HTMLTextAreaElement) => ICursorPosition
}
const RichEditor: React.FC<IProps> = ({ handleChange, text, setText, getCursorPosition }) => {
  // TODO: auto save
  useEffect(() => {
    const textarea = document.getElementsByTagName('textarea')[0]
    textarea.addEventListener('input', () => {
      textarea.style.height = 'auto'
      const textHeight = textarea.scrollHeight
      textarea.style.height = textHeight < 256 ? '256px' : `${textHeight}px`
    })
  }, [])

  return (
    <div className="w-1/2 rounded-b-md border-x border-b border-slate-200 p-2">
      <div className="relative rounded-md bg-slate-100">
        {/* TODO: autoFocus should be cursor position at the last */}
        <textarea
          placeholder="start your creation"
          value={text}
          autoFocus
          onChange={(e) => {
            // write mode value is 0
            handleChange(0)
            getCursorPosition(document.getElementsByTagName('textarea')[0])
            setText(() => e.target.value)
          }}
          className="font-mono text-gray-600 leading-relaxed block overflow-y-hidden h-64 bg-slate-100 w-full p-2 placeholder:text-zinc-600 focus:bg-white rounded-t-md focus:border focus:transition focus:border-b-dash focus:border-blue-600 focus:outline-none"></textarea>
        <div className="font-mono flex flex-row place-content-between items-center">
          <a href="" className="text-gray-400  text-sm px-2">
            Attach files by dragging & dropping, selecting or pasting them.
          </a>
          <a href="">
            <Icon icon="quill:markdown" />
          </a>
        </div>
        <div className='absolute bottom-14 left-1/3'>
          <ToolBar>
          </ToolBar>
        </div>
      </div>
    </div>
  )
}

export default RichEditor
