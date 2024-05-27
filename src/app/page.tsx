import LoadingCards from '@/components/card/LoadingCards'
import CategoriesList from '@/components/home/CategoriesList'
import PropertiesContainer from '@/components/home/PropertiesContainer'
import { SearchParamsType } from '@/utils/types'
import React, { Suspense, type FC } from 'react'

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
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={category}
          search={search}
        />
      </Suspense>
    </section>
  )
}
export default HomePage
