import { fetchPropertyReviews } from '@/utils/actions'
import React, { type FC } from 'react'
import Title from '@/components/properties/Title'
import ReviewCard from '@/components/reviews/ReviewCard'
import { type ReviewInfoType } from '@/utils/schemas'

const f = '⇒ PropertyReviews.tsx:'

type PropertyReviewsProps = {
  propertyId: string
}

const PropertyReviews: FC<PropertyReviewsProps> = async ({ propertyId }) => {
  const reviews = await fetchPropertyReviews(propertyId)
  console.log(f, 'reviews →', reviews)
  if (reviews.length === 0) {
    return null
  }
  return (
    <div className='mt-8'>
      <Title text='Reviews' />
      <div className='mt-4 grid gap-8 md:grid-cols-2 '>
        {reviews.map((review) => {
          const { comment, rating } = review
          const { firstName, profileImage } = review.profile
          const reviewInfo: ReviewInfoType = {
            comment,
            rating,
            name: firstName,
            image: profileImage,
          }

          return (
            <ReviewCard
              key={review.id}
              reviewInfo={reviewInfo}
            />
          )
        })}
      </div>
    </div>
  )
}
export default PropertyReviews
