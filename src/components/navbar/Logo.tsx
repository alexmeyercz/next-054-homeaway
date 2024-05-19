import React, { type FC } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { LuTent } from 'react-icons/lu'

const f = '⇒ Logo.tsx (Logo):'

const Logo: FC = () => {
  return (
    <Button
      size='icon'
      asChild
    >
      <Link href='/'>
        <LuTent className='h-6 w-6 text-white' />
      </Link>
    </Button>
  )
}
export default Logo
