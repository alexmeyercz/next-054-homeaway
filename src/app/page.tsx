import CategoriesList from '@/components/home/CategoriesList'
import PropertiesContainer from '@/components/home/PropertiesContainer'
import React, { type FC } from 'react'

const f = '⇒ page.tsx (HomePage):'

type HomePageProps = Readonly<{
  searchParams: { category?: string; search?: string }
}>
const HomePage: FC<HomePageProps> = ({ searchParams }) => {
  console.log(f, 'searchParams →', searchParams)
  return (
    <section>
      <CategoriesList
        category={searchParams.category}
        search={searchParams.search}
      />
      <PropertiesContainer
        category={searchParams.category}
        search={searchParams.search}
      />
    </section>
  )
}
export default HomePage
