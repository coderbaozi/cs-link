import React, { useEffect } from 'react'
import { ReactNode } from 'react'
import { Comment } from '@/types/comment'
import CommentCard from './CommentCard'
interface IProps {
  children?: ReactNode
  commentList: Comment[]
}

const CommentList: React.FC<IProps> = ({ commentList }) => {
  useEffect(() => {
    console.log(commentList)
  }, [])
  return (
    <main className="max-w-2xl m-auto mt-20">
      {commentList.map((comment) => {
        return <CommentCard key={comment.id} comment={comment} />
      })}
    </main>
  )
}

export default CommentList
