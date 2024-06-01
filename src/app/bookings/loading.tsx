import LoadingTable from '@/components/booking/LoadingTable'
import React, { type FC } from 'react'

const f = '⇒ loading.tsx (LoadingBookings):'

const LoadingBookings: FC = () => {
  return <LoadingTable rows={10} />
}
export default LoadingBookings
