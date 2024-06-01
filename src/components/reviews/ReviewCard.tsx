import { type ReviewInfoType } from '@/utils/schemas'
import React, { type FC } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Rating from '@/components/reviews/Rating'
import Comment from '@/components/reviews/Comment'

const f = '⇒ ReviewCard.tsx:'

type ReviewCardProps = {
  reviewInfo: ReviewInfoType
  children?: React.ReactNode
}

const ReviewCard: FC<ReviewCardProps> = ({ reviewInfo, children }) => {
  const { comment, rating, name, image } = reviewInfo
  return (
    <Card className='relative'>
      <CardHeader>
        <div className='flex items-center'>
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className='h-12 w-12 rounded-full object-cover'
          />
          <div className='ml-4'>
            <h3>{name}</h3>
            <Rating rating={rating} />
          </div>
          {children}
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={comment} />
      </CardContent>
      {/* delete button later */}
      <div className='absolute right-3 top-3'></div>
    </Card>
  )
}
export default ReviewCard
