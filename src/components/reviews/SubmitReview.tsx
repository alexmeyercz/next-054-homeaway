'use client'
import { useState } from 'react'
import { SubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import { Card } from '@/components/ui/card'
import RatingInput from '@/components/form/RatingInput'
import TextAreaInput from '@/components/form/TextAreaInput'
import { Button } from '@/components/ui/button'
import { createReviewAction } from '@/utils/actions'
import React, { type FC } from 'react'

const f = '⇒ SubmitReview.tsx:'

type SubmitReviewProps = {
  propertyId: string
}

const SubmitReview: FC<SubmitReviewProps> = ({ propertyId }) => {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState<boolean>(false)
  return (
    <div className='mt-8'>
      <Button onClick={() => setIsReviewFormVisible((prev) => !prev)}>
        Leave a Review
      </Button>
      {isReviewFormVisible && (
        <Card className='mt-8 p-8'>
          <FormContainer action={createReviewAction}>
            <input
              type='hidden'
              name='propertyId'
              value={propertyId}
            />
            <RatingInput name='rating' />
            <TextAreaInput
              name='comment'
              label='feedback'
              defaultValue='Amazing place !!!'
              rows={3}
            />
            <SubmitButton
              text='Submit'
              className='mt-4'
            />
          </FormContainer>
        </Card>
      )}
    </div>
  )
}
export default SubmitReview
