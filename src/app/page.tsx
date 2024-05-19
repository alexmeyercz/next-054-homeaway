import { Button } from '@/components/ui/button'
import React, { type FC } from 'react'

const f = '⇒ page.tsx (HomePage):'

const HomePage: FC = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Button
        variant='outline'
        size='lg'
        className='m-8 capitalize'
      >
        Click me
      </Button>
    </div>
  )
}
export default HomePage
