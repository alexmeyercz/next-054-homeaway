import React, { type FC } from 'react'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from '@/components/ui/select'

const f = '⇒ RatingInput.tsx:'

type RatingInputProps = {
  name: string
  labelText?: string
}

const RatingInput: FC<RatingInputProps> = ({ name, labelText }) => {
  const numbers = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1
    return value.toString()
  }).reverse()
  return (
    <div className='mb-2 max-w-xs'>
      <Label
        htmlFor={name}
        className='capitalize'
      >
        {labelText || name}
      </Label>
      <Select
        defaultValue={numbers[0]}
        name={name}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {numbers.map((number) => {
            return (
              <SelectItem
                key={number}
                value={number}
              >
                {number}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}
export default RatingInput
