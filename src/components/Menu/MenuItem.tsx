import React from 'react'

interface IProps{
  children?: React.ReactNode

}
const MenuItem:React.FC<IProps> = ({ children }) => {
  return (
    <div className='rounded p-1 transition font-mono cursor-pointer hover:bg-slate-200'>{children}</div>
  ) 
}

export default MenuItem