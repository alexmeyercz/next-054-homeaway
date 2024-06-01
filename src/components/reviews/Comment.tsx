'use client'
import React, { type FC } from 'react'
import { useState } from 'react'
import { Button } from '../ui/button'

const f = '⇒ Comment.tsx:'

type CommentProps = {
  comment: string
}

const Comment: FC<CommentProps> = ({ comment }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = () => setIsExpanded((prev) => !prev)
  const longComment = comment.length > 130
  const displayComment =
    longComment && !isExpanded ? `${comment.slice(0, 130)}...` : comment

  return (
    <div>
      <p className='text-sm'>{displayComment}</p>
      {longComment && (
        <Button
          variant='link'
          className='pl-0 text-muted-foreground'
          onClick={toggleExpand}
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </Button>
      )}
    </div>
  )
}
export default Comment
