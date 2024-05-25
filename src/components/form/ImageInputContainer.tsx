'use client'
import React, { type FC } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ImageInput from '@/components/form/ImageInput'
import { SubmitButton } from '@/components/form/Buttons'
import { type actionFunction } from '@/utils/types'
import { LuUser2 } from 'react-icons/lu'
import FormContainer from './FormContainer'

const f = '⇒ ImageInputContainer.tsx (ImageInputContainer):'

type ImageInputContainerProps = {
  image: string
  name: string
  action: actionFunction
  text: string
  children?: React.ReactNode
}

const ImageInputContainer: FC<ImageInputContainerProps> = (props) => {
  const { image, name, action, text, children } = props
  const [isUpdateFormVisible, setUpdateFormVisible] = useState<boolean>(false)
  const userIcon = (
    <LuUser2 className='mb-4 h-24 w-24 rounded bg-primary text-white' />
  )
  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className='mb-4 h-24 w-24 rounded object-cover'
        />
      ) : (
        userIcon
      )}
      <Button
        variant='outline'
        size='sm'
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className='mt-4 max-w-lg'>
          <FormContainer action={action}>
            {children}
            <ImageInput name='image' />
            <SubmitButton
              size='sm'
              text='Upload image'
            />
          </FormContainer>
        </div>
      )}
    </div>
  )
}
export default ImageInputContainer
