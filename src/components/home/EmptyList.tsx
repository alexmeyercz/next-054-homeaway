import React, { type FC } from 'react'

const f = '⇒ EmptyList.tsx:'

type EmptyListProps = Readonly<{}>

const EmptyList: FC<EmptyListProps> = () => {
  return (
    <div>
      <h1>EmptyList</h1>
    </div>
  )
}
export default EmptyList
