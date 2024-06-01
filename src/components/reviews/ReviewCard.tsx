import { ReviewInfoType } from '@/utils/schemas'
import React, { type FC } from 'react'

const f = '⇒ ReviewCard.tsx:'

type ReviewCardProps = {
  reviewInfo: ReviewInfoType
}

const ReviewCard: FC<ReviewCardProps> = ({ reviewInfo }) => {
  console.log(f, 'reviewInfo →', reviewInfo)
  return (
    <div>
      <h1>ReviewCard</h1>
    </div>
  )
}
export default ReviewCard
