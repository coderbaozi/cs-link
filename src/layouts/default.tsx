import NavBar from '@/components/NavBar'
import React, { useContext } from 'react'
import { TagContext } from './../pages/article/[id]'
interface IPros {
  children?: React.ReactNode
}

const DefaultLayout: React.FC<IPros> = ({ children }) => {
  const tags = useContext(TagContext)
  return (
    <div className="layout">
      <header aria-label="Site Header" className="shadow-sm">
        <NavBar tags={tags} />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default DefaultLayout
