import React, { type FC } from 'react'
import { Label } from '@/components/ui/label'
import { categories } from '@/utils/categories'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const f = '⇒ CategoriesInput.tsx:'

type CategoriesInputProps = {
  name: string
  label?: string
  defaultValue?: string
}
const CategoriesInput: FC<CategoriesInputProps> = ({
  name,
  label,
  defaultValue,
}) => {
  return (
    <div className='mb-2'>
      <Label htmlFor={name}>{label || name}</Label>
      <Select
        defaultValue={defaultValue || categories[0].label}
        name={name}
        required
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {categories.map((item) => {
            return (
              <SelectItem
                key={item.label}
                value={item.label}
              >
                <span className='flex items-center gap-2'>
                  <item.icon />
                  {item.label}
                </span>
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}
export default CategoriesInput
