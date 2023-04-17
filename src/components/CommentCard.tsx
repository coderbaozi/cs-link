import React, { useEffect, useState } from 'react'
import { ReactNode } from 'react'
import { Comment } from '@/types/comment.d'
import Link from 'next/link'
import { Icon } from '@iconify/react'
interface IProps {
  children?: ReactNode
  comment: Comment
}

const CommentCard: React.FC<IProps> = ({ comment }) => {
  const [status, setStatus] = useState(-1)
  useEffect(() => {
    console.log(comment)
  }, [])
  return (
    <div>
      <div className="w-full flex flex-row mt-10">
        <img
          src="https://i.postimg.cc/dtCQKRff/images.jpg"
          className="inline w-16 h-16 rounded-full mr-6"
          alt="avater"></img>
        <div className="flex w-full flex-col flex-wrap">
          <div className="flex space-x-2 mb-2">
            <Link href={`#`} className="font-bold hover:underline hover:decoration-1">
              {comment.username}
            </Link>
            <div className="relative text-slate-500">
              <p className="absolute -top-1">.</p>
            </div>
            <span className="text-slate-500">{`1天前`}</span>
          </div>

          <p className="font-mono text-xl break-all mb-2">{comment.content}</p>

          <div className="flex space-x-4 text-base">
            <span className="cursor-pointer hover:text-amber-900">
              <Icon icon="solar:like-broken" />
            </span>
            <span className="cursor-pointer hover:text-amber-900">
              <Icon icon="ant-design:like-outlined" rotate={2} />
            </span>
            <span className="cursor-pointer hover:text-amber-900">
              <Icon icon="mdi:message-processing-outline" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentCard
