import React from 'react'
import { ReactNode } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
interface IProps {
  children?: ReactNode
}

const UserSetting: React.FC<IProps> = () => {
  return (
    <div className="absolute rounded-lg border border-gray-100  shadow-xl">
      <div className="px-3 py-5">
        <p className="text-xs">Settings</p>

        <div className="mt-4 space-y-2">
          <a className="block  py-1 text-sm text-blue-600" href="">
            个人中心
          </a>
          <a className="block border-gray-500 py-1 text-sm font-medium text-gray-600" href="">
            退出登录
          </a>
        </div>

        <p className="mt-4 inline-flex items-center">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500"></span>
          <span className="ml-1.5 text-xs font-medium text-green-700">Chat with us</span>
        </p>
      </div>

      <div className="flex justify-center gap-4 border-t border-gray-100 px-6 py-5">
        <a
          href="https://github.com/coderbaozi/cs-link"
          className="rounded-full border border-gray-200 p-2 text-gray-900">
          <span className="sr-only">Github</span>
          <Icon icon="vscode-icons:folder-type-github" />
        </a>
        <a className="rounded-full border border-gray-200 p-2 text-gray-900">
          <span className="sr-only">Q</span>
          <Icon icon="arcticons:qq" />
        </a>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

export default UserSetting
