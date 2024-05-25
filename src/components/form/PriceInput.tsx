import React, { type FC } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Prisma } from '@prisma/client'

// const name = Prisma.PropertyScalarFieldEnum.price

const f = '⇒ PriceInput.tsx:'

type PriceInputProps = {
  defaultValue?: number
  required?: boolean
}
const PriceInput: FC<PriceInputProps> = (defaultValue, required) => {
  const name = 'price'
  return (
    <div className='mb-2'>
      <Label
        htmlFor={name}
        className='capitalize'
      >
        Price ($)
      </Label>
      <Input
        id={name}
        type='number'
        name={name}
        min={0}
        defaultValue={defaultValue?.defaultValue || 100}
        required={required}
      />
    </div>
  )
}
export default PriceInput
