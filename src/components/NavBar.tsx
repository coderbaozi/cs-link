import { ITag } from '@/types'
import React, { ReactNode } from 'react'

interface ITagProps {
  children?: ReactNode
  tags: ITag[]
}
const NavBar: React.FC<ITagProps> = ({ tags }) => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1">
            <a href="#">
              <span className="inline-block h-10 w-22 rounded-lg">
                <img className="w-full h-full" src="/cslink.png" alt="cslink for you" />
              </span>
            </a>
          </div>
          <nav aria-label="Site Nav" className="hidden gap-8 text-sm font-medium md:flex">
            {tags.map((tag) => {
              return (
                <div key={tag.tagId} className="text-gray-500">
                  {tag.name}
                </div>
              )
            })}
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
            <a className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500" href="">
              Log in
            </a>

            <a className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white" href="">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
