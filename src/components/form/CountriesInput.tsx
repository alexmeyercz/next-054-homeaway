import React, { type FC } from 'react'
import { Label } from '@/components/ui/label'
import { formattedCountries } from '@/utils/countries'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const f = '⇒ CountriesInput.tsx:'

type CountriesInputProps = Readonly<{
  defaultValue?: string
  name?: string
  required?: boolean
}>

const CountriesInput: FC<CountriesInputProps> = ({
  name = 'country',
  defaultValue,
  required,
}) => {
  return (
    <div>
      <Label
        htmlFor={name}
        className='capitalize'
      >
        country
      </Label>
      <Select
        defaultValue={defaultValue || formattedCountries[0].code}
        name={name}
        required={required}
      >
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {formattedCountries.map((country) => {
            const { code, name, flag } = country
            return (
              <SelectItem
                key={code}
                value={code}
              >
                <span className='flex items-center gap-2'>
                  {flag} {name}
                </span>
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}
export default CountriesInput
