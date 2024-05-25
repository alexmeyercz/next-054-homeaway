import React, { type FC } from 'react'

const f = '⇒ PropertiesContainer.tsx:'

type PropertiesContainerProps = { category?: string; search?: string }

const PropertiesContainer: FC<PropertiesContainerProps> = ({
  category,
  search,
}) => {
  return (
    <div>
      <h1>PropertiesContainer</h1>
    </div>
  )
}
export default PropertiesContainer
