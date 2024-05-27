import { findCountryByCode } from '@/utils/countries'
import React, { type FC } from 'react'

const f = '⇒ CountryFlagAndName.tsx:'

type CountryFlagAndNameProps = Readonly<{
  countryCode: string
}>

const CountryFlagAndName: FC<CountryFlagAndNameProps> = ({ countryCode }) => {
  const validCountry = findCountryByCode(countryCode)!
  const countryName =
    validCountry.name.length > 20
      ? `${validCountry.name.substring(0, 20)}...`
      : validCountry.name
  return (
    <span className='flex items-center justify-between gap-2 text-sm'>
      {validCountry.flag} {countryName}
    </span>
  )
}
export default CountryFlagAndName
