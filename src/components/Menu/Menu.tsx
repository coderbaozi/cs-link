import React, { useState } from 'react'
import { Icon } from '@iconify/react'

interface IProps{
  children?: React.ReactNode
}
const Menu:React.FC<IProps> = ({ children }) => {
  const [dropdownOpen, setDropDownOpen] = useState<boolean>(false)
  return (
    <div className='w-40'>
      <Icon onClick={() => setDropDownOpen(!dropdownOpen)} className='cursor-pointer' icon="mdi-light:menu" />
      { dropdownOpen && 
      <div className='rounded-md space-y-1 absolute w-full bg-slate-50 left-0 bottom-[36px]'>
        {children}
      </div>}
      
    </div>
  ) 

}

export default Menu