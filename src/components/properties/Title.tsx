import React, { type FC } from 'react'

const f = '⇒ Title.tsx:'

type TitleProps = { text: string }

const Title: FC<TitleProps> = ({ text }) => {
  return <h3 className='mb-2 text-lg font-bold'>{text}</h3>
}
export default Title
