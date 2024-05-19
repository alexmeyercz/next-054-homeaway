import { Input } from '../ui/input'
import React, { type FC } from 'react'

const f = '⇒ NavSearch.tsx (NavSearch):'

const NavSearch: FC = () => {
  return (
    <Input
      type='text'
      placeholder='find a property...'
      className='max-w-xs dark:bg-muted'
    />
  )
}
export default NavSearch
