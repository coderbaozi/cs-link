import React, { useState } from 'react'
import { ReactNode } from 'react'
import Control from './Control'

interface IProps {
  children?: ReactNode
  mode: number
  setMode: (mode: number) => void
}

const TabBar: React.FC<IProps> = ({ mode, setMode }) => {
  const handleClick = () => {
    setMode(1)
  }
  const handleCreation = () => {
    setMode(0)
  }
  return (
    <>
      <div className="flex flex-row items-center place-content-between bg-slate-100 w-1/2 rounded-t">
        <div>
          <button
            onClick={handleCreation}
            className={`transition duration-150 leading-8 text-sm ml-2 mt-2 px-3 ${
              mode == 0 ? 'border-t border-l border-slate-200 border-r bg-white rounded-t-lg' : ''
            }`}>
            Write
          </button>
          <button
            onClick={handleClick}
            className={`transition duration-150 leading-8 text-sm mt-2 px-3 ${
              mode == 1 ? 'border-t border-l border-slate-200 border-r bg-white rounded-t-lg' : ''
            }`}>
            Preview
          </button>
        </div>
        <Control />
      </div>
    </>
  )
}
export default TabBar
