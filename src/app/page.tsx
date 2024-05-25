import CategoriesList from '@/components/home/CategoriesList'
import PropertiesContainer from '@/components/home/PropertiesContainer'
import { SearchParamsType } from '@/utils/types'
import React, { type FC } from 'react'

const f = '⇒ page.tsx (HomePage):'

type HomePageProps = Readonly<{
  searchParams: SearchParamsType
}>
const HomePage: FC<HomePageProps> = ({ searchParams }) => {
  const { category, search } = searchParams

  return (
    <section>
      <CategoriesList
        category={category}
        search={search}
      />
      <PropertiesContainer
        category={category}
        search={search}
      />
    </section>
  )
}
export default HomePage
