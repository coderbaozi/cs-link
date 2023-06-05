import React from 'react'
import { Icon } from '@iconify/react'
import Menu from './Menu/Menu'
import MenuItem from './Menu/MenuItem'

interface IProps{
  children?: React.ReactNode
}
const ToolBar:React.FC<IProps> = () => {
  const menuItems = ['PREVIEW','COPY AS HTML','SAVE FILE','SAVE AS PDF','SAVE AS IMG']

  return (
    <div className='relative w-40 bg-slate-200 h-8 flex p-3 items-center rounded-md justify-between'>
      <Menu>
        {menuItems.map(menuItem =>{
         return <MenuItem key={menuItem}>{menuItem}</MenuItem>
        })}
      </Menu>
      <div className='flex gap-2'>
        <div>
          <Icon className='cursor-pointer' icon="iconamoon:copy-thin" />
        </div>
        <div>⌘</div>
      </div>
  </div>
  ) 

}

export default ToolBar