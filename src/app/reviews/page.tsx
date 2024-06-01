import React, { type FC } from 'react'
import EmptyList from '@/components/home/EmptyList'
import { deleteReviewAction, fetchPropertyReviewsByUser } from '@/utils/actions'
import ReviewCard from '@/components/reviews/ReviewCard'
import Title from '@/components/properties/Title'
import FormContainer from '@/components/form/FormContainer'
import { IconButton } from '@/components/form/Buttons'
import { ReviewInfoType, ReviewPropertyType } from '@/utils/schemas'

const f = '⇒ page.tsx:'

type ReviewsPageProps = {}

const ReviewsPage: FC<ReviewsPageProps> = async () => {
  const reviews: ReviewPropertyType[] = await fetchPropertyReviewsByUser()
  if (reviews.length === 0) {
    return <EmptyList />
  }
  return (
    <div>
      <Title text='My Reviews' />
      <section className='mt-4 grid gap-8 md:grid-cols-2'>
        {reviews.map((review) => {
          const { comment, rating } = review
          const { name, image } = review.property
          const reviewInfo: ReviewInfoType = {
            comment,
            rating,
            name,
            image,
          }
          return (
            <ReviewCard
              key={review.id}
              reviewInfo={reviewInfo}
            >
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          )
        })}
      </section>
    </div>
  )
}

type DeleteReviewProps = {
  reviewId: string
}
const DeleteReview: FC<DeleteReviewProps> = ({ reviewId }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId })
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType='delete' />
    </FormContainer>
  )
}

export default ReviewsPage
