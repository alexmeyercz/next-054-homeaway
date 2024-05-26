import React, { type FC } from 'react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { categories } from '@/utils/categories'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const f = '⇒ CategoriesList.tsx:'

type CategoriesListProps = Readonly<{
  category?: string
  search?: string
}>

const CategoriesList: FC<CategoriesListProps> = ({ category, search }) => {
  const searchTerm = search ? `&search=${search}` : ''
  console.log(f, 'searchTerm →', searchTerm)
  console.log(f, 'category →', category)
  return (
    <section>
      <ScrollArea className='py-6'>
        <div className='flex gap-x-4'>
          {categories.map((item) => {
            const { label } = item
            const isActive = label === category
            return (
              <Link
                key={label}
                href={`/?category=${label}${searchTerm}`}
              >
                <article
                  className={cn(
                    'items-cent flex w-[100px] cursor-pointer flex-col p-3 duration-300 hover:text-primary',
                    isActive ? 'text-primary' : 'text-gray-600',
                  )}
                >
                  <item.icon className='h-8 w-8' />
                  <p className='mt-1 text-sm capitalize'>{label}</p>
                </article>
              </Link>
            )
          })}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </section>
  )
}
export default CategoriesList
