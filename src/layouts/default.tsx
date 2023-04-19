import NavBar from '@/components/NavBar'
import React from 'react'
interface IPros {
  children?: React.ReactNode
}

const DefaultLayout: React.FC<IPros> = ({ children }) => {
  return (
    <div className="layout">
      <header aria-label="Site Header" className="shadow-sm">
        <NavBar />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default DefaultLayout
