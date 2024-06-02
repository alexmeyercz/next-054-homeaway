'use client'
import { type Amenity, amenities } from '@/utils/amenities'
import React, { type FC } from 'react'
import { useState } from 'react'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

const f = '⇒ AmenitiesInput.tsx:'

type AmenitiesInputProps = Readonly<{
  defaultValue?: Amenity[]
}>

const AmenitiesInput: FC<AmenitiesInputProps> = ({
  defaultValue = amenities,
}) => {
  const amenitiesWithIcons = defaultValue?.map(({ name, selected }) => ({
    name,
    selected,
    icon: amenities.find((amenity) => amenity.name === name)!.icon,
  }))
  const [selectedAmenities, setSelectedAmenities] = useState<Amenity[]>(
    amenitiesWithIcons || amenities,
  )

  const handleChange: (amenity: Amenity) => void = (amenity) => {
    setSelectedAmenities((prev) => {
      return prev.map((a) => {
        if (a.name === amenity.name) {
          return {
            ...a,
            selected: !a.selected,
          }
        }
        return a
      })
    })
  }
  return (
    <section>
      <input
        type='hidden'
        name='amenities'
        value={JSON.stringify(selectedAmenities)}
      />
      <div className='grid grid-cols-2 gap-4'>
        {selectedAmenities.map((amenity: Amenity) => {
          const { name, selected } = amenity
          return (
            <div
              key={name}
              className='flex items-center space-x-2'
            >
              <Checkbox
                id={name}
                checked={selected}
                onCheckedChange={() => handleChange(amenity)}
              />
              <Label
                htmlFor={name}
                className='flex items-center gap-x-2 text-sm font-medium capitalize leading-none'
              >
                {name}
              </Label>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default AmenitiesInput
