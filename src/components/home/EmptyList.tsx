import React, { type FC } from 'react'
import { Button } from '../ui/button'
import Link, { type LinkProps } from 'next/link'

const f = '⇒ EmptyList.tsx:'

type EmptyListProps = Readonly<{
  heading?: string
  message?: string
  btnText?: string
}>

const EmptyList: FC<EmptyListProps> = ({
  heading = 'No items in the list',
  message = 'Keep exploring our properties',
  btnText = 'back home',
}) => {
  const linkProps: LinkProps = { href: '/' }
  return (
    <div className='mt-4'>
      <h2>{heading}</h2>
      <p>{message}</p>
      <Button
        asChild
        className='mt-4 capitalize'
      >
        <Link {...linkProps}>{btnText}</Link>
      </Button>
    </div>
  )
}
export default EmptyList
