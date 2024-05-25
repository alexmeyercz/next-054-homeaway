import React, { type FC } from 'react'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const f = '⇒ TextAreaInput.tsx:'

const tempDefaultDescription =
  'Glamping Tuscan Style in an Aframe Cabin Tent, nestled in a beautiful olive orchard. AC, heat, Queen Bed, TV, Wi-Fi and an amazing view. Close to Weeki Wachee River State Park, mermaids, manatees, Chassahwitzka River and on the SC Bike Path. Kayaks available for rivers. Bathhouse, fire pit, Kitchenette, fresh eggs. Relax & enjoy fresh country air. No pets please. Ducks, hens and roosters roam the grounds. We have a Pot Cake Rescue from Bimini, Retriever and Pom dog. The space is inspiring and relaxing. Enjoy the beauty of the orchard. Spring trees are in blossom and harvested in Fall. We have a farm store where we sell our farm to table products'

type TextAreaInputProps = Readonly<{
  name: string
  label?: string
  defaultValue?: string
  required?: boolean
  rows?: number
}>

const TextAreaInput: FC<TextAreaInputProps> = (props) => {
  const { name, label, defaultValue, required, rows } = props
  return (
    <div className='mb-2'>
      <Label
        htmlFor={name}
        className='capitalize'
      >
        {label || name}
      </Label>
      <Textarea
        name={name}
        defaultValue={defaultValue || tempDefaultDescription}
        required={required}
        rows={rows || 5}
        className='leading-loose'
      />
    </div>
  )
}
export default TextAreaInput
