import React, { type FC } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const f = '⇒ FormInput.tsx (FormInput):'

type FormInputProps = {
  name: string
  type: string
  label?: string
  defaultValue?: string
  placeholder?: string
  required?: boolean
}
const FormInput: FC<FormInputProps> = ({
  name,
  type,
  label,
  defaultValue,
  placeholder,
  required,
}) => {
  return (
    <div className='space-y-2'>
      <Label
        htmlFor={name}
        className='capitalize'
      >
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
      />
    </div>
  )
}
export default FormInput
