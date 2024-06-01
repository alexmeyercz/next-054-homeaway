'use client'
import { Input } from '../ui/input'
import React, { type FC, type ChangeEvent } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { useState, useEffect } from 'react'
import { paths } from '@/utils/paths'

const f = '⇒ NavSearch.tsx (NavSearch):'

const NavSearch: FC = () => {
  const searchParams = useSearchParams() as URLSearchParams
  const router = useRouter()
  const { replace } = router
  const [search, setSearch] = useState<string>(
    searchParams.get('search')?.toString() || '',
  )

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    handleSearch(e.target.value)
  }
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set('search', value)
    } else {
      params.delete('search')
    }
    replace(`/?${params.toString()}`)
  }, 500)

  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearch('')
    }
  }, [searchParams])
  return (
    <Input
      type='text'
      placeholder='find a property...'
      className='max-w-xs dark:bg-muted'
      value={search}
      onChange={handleInputChange}
    />
  )
}
export default NavSearch
