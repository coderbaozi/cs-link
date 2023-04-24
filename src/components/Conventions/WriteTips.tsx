import React from 'react'
import { ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const WriteTips: React.FC<IProps> = () => {
  return (
    <div className="w-80">
      <p className="text-lg">发帖提示</p>
      <p>please not publish some info about ....</p>
    </div>
  )
}

export default WriteTips
