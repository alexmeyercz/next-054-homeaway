import React, { type FC } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const f = '⇒ ImageInput.tsx (ImageInput):'
type ImageInputProps = {
  name: string
  required?: boolean
}
const ImageInput: FC<ImageInputProps> = ({ name, required }) => {
  return (
    <div className='mb-2'>
      <Label
        htmlFor={name}
        className='capitalize'
      >
        Image
      </Label>
      <Input
        type='file'
        name={name}
        id={name}
        required={required}
        accept='image/*'
        className='max-w-xs'
      />
    </div>
  )
}
export default ImageInput
