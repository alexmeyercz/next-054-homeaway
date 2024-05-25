import React, { type FC } from 'react'

const f = '⇒ CategoriesList.tsx:'

type CategoriesListProps = Readonly<{
  category?: string
  search?: string
}>

const CategoriesList: FC<CategoriesListProps> = ({ category, search }) => {
  return (
    <div>
      <h1>CategoriesList</h1>
    </div>
  )
}
export default CategoriesList
