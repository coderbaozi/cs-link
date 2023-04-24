import { useState } from 'react'

export interface ICursorPosition {
  start: number
  end: number
}
export function useTextArea() {
  const [position, setPosition] = useState({ start: 0, end: 0 })
  const getCursorPosition = (textarea?: HTMLTextAreaElement | null) => {
    let curPosition: ICursorPosition = { start: 0, end: 0 }
    if (textarea) {
      curPosition = { start: textarea.selectionStart, end: textarea.selectionEnd }
      setPosition(() => curPosition)
    }
    return curPosition
  }
  const setCursorPosition = (textarea: HTMLTextAreaElement | null, cursorPosition: ICursorPosition) => {
    if (textarea) {
      textarea.focus()
      textarea.selectionStart = cursorPosition.start
      textarea.selectionEnd = cursorPosition.end
      setPosition(() => ({ ...cursorPosition }))
    }
    return cursorPosition
  }
  const foucusTextArea = () => {
    const textarea = document.getElementsByTagName('textarea')[0]
    if (textarea) {
      textarea.focus()
    }
    return
  }
  const recordCursorPosition = (textarea: HTMLTextAreaElement | null) => {
    if (textarea) {
      setPosition(() => ({ start: textarea.selectionStart, end: textarea.selectionEnd }))
    }
    return
  }
  const insertContent = (text: string, position: ICursorPosition) => {
    const textarea = document.getElementsByTagName('textarea')[0]
    if (textarea) {
      textarea.value = textarea.value.substring(0, position.start) + text + textarea.value.substring(position.end, textarea.value.length)
      // TODO 柯里化
      textarea.setSelectionRange(position.start + 2, position.start + 2)
    }
  }
  return {
    position,
    foucusTextArea,
    getCursorPosition,
    setCursorPosition,
    recordCursorPosition,
    insertContent,
  }
}
