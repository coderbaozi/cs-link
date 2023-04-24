import React, { useContext } from 'react'
import { ReactNode } from 'react'
import { Icon } from '@iconify/react'
import { ControlContext } from '@/pages/creation'
interface IProps {
  children?: ReactNode
}

const Control: React.FC<IProps> = () => {
  const handleControl = useContext(ControlContext)
  return (
    <div className="flex text-base space-x-2 mr-4">
      <Icon icon="ph:text-h" onClick={() => handleControl?.(1)} className="cursor-pointer hover:text-purple-700" />
      <Icon icon="ph:text-b" onClick={() => handleControl?.(2)} className="cursor-pointer hover:text-purple-700" />
      <Icon icon="ooui:italic-i" onClick={() => handleControl?.(3)} className="cursor-pointer hover:text-purple-700" />
      <Icon icon="ri:quote-text" onClick={() => handleControl?.(4)} className="cursor-pointer hover:text-purple-700" />
      <Icon icon="ph:brackets-angle" onClick={() => handleControl?.(5)} className="cursor-pointer hover:text-purple-700" />
      <Icon icon="ph:link-light" className="cursor-pointer hover:text-purple-700" />
      <Icon
        icon="material-symbols:format-list-bulleted-rounded"
        onClick={() => handleControl?.(6)}
        vFlip={true}
        className="cursor-pointer hover:text-purple-700"
      />
      <Icon icon="material-symbols:format-list-numbered" onClick={() => handleControl?.(7)} className="cursor-pointer hover:text-purple-700" />
      <Icon icon="bi:list-task" onClick={() => handleControl?.(8)} className="cursor-pointer hover:text-purple-700" />
      <Icon icon="fluent:mention-20-regular" onClick={() => handleControl?.(9)} className="cursor-pointer hover:text-purple-700" />
      <Icon icon="octicon:project-template-24" onClick={() => handleControl?.(10)} className="cursor-pointer hover:text-purple-700" />
    </div>
  )
}

export default Control
