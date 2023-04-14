import React, { useState } from 'react'
import { ReactNode } from 'react'
import { Comment } from '@/types/comment.d'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Tiptap from './TipTap'
interface IProps {
  children?: ReactNode
  comment: Comment
}

const CommentCard: React.FC<IProps> = ({ comment }) => {
  const [status, setStatus] = useState(-1)
  return (
    <div>
      <h2 className="mb-6">全部评论</h2>
      <div className="w-full p-3 flex text-xl justify-between">
        <Link href={`#`} className=" hover:underline hover:decoration-1">
          {comment.username}
        </Link>
        <span className="text-base text-gray-600">{`1天前`}</span>
      </div>
      <p className="font-mono text-xl p-6">{comment.content}</p>
      <div className="flex space-x-3 text-base px-6">
        <span className="flex items-center cursor-pointer hover:text-amber-900">
          <Icon className="mr-1" icon="solar:like-broken" /> {`点赞`}
        </span>
        <span className="flex items-center cursor-pointer hover:text-amber-900">
          <Icon className="mr-1" icon="mdi:message-processing-outline" />
          {`评论`}
        </span>
      </div>
    </div>
  )
}

export default CommentCard
