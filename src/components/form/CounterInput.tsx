'use client'
import React, { type FC } from 'react'
import { Card, CardHeader } from '@/components/ui/card'
import { LuMinus, LuPlus } from 'react-icons/lu'

import { Button } from '../ui/button'
import { useState } from 'react'

const f = '⇒ CounterInput.tsx:'

type CounterInputProps = Readonly<{
  detail: string
  defaultValue?: number
}>

const CounterInput: FC<CounterInputProps> = ({ detail, defaultValue = 0 }) => {
  const [count, setCount] = useState<number>(defaultValue || 0)
  const increaseCount: () => void = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const decreaseCount: () => void = () => {
    setCount((prevCount) => {
      return prevCount > 0 ? prevCount - 1 : 0
    })
  }

  return (
    <Card className='mb-4'>
      <input
        type='hidden'
        name={detail}
        value={count}
      />
      <CardHeader className='gapy-5 flex flex-col'>
        <div className='flex flex-wrap items-center justify-between'>
          <div className='flex flex-col'>
            <h2 className='font-medium capitalize'>{detail}</h2>
            <p className='text-sm text-muted-foreground'>
              Specify the number of {detail}
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <Button
              variant='outline'
              size='icon'
              type='button'
              onClick={decreaseCount}
            >
              <LuMinus className='h-5 w-5 text-primary' />
            </Button>
            <span className='w-5 text-center text-xl font-bold'>{count}</span>
            <Button
              variant='outline'
              size='icon'
              type='button'
              onClick={increaseCount}
            >
              <LuPlus className='h-5 w-5 text-primary' />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
export default CounterInput
