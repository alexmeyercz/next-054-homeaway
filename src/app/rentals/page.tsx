import React, { type FC } from 'react'
import EmptyList from '@/components/home/EmptyList'
import { fetchRentals, deleteRentalAction } from '@/utils/actions'
import Link from 'next/link'

import { formatCurrency } from '@/utils/format'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import FormContainer from '@/components/form/FormContainer'
import { IconButton } from '@/components/form/Buttons'
import { paths } from '@/utils/paths'

const f = '⇒ page.tsx (RentalsPage):'

const RentalsPage: FC = async () => {
  const rentals = await fetchRentals()
  if (rentals.length === 0) {
    return (
      <EmptyList
        message="Don't heistate to create a rental"
        heading='No rentals to display'
      />
    )
  }
  return (
    <div className='mt-16'>
      <h4 className='mb-4 capitalize'>active properties:</h4>
      <Table>
        <TableCaption>A list of all your properties.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Property Name</TableHead>
            <TableHead>Nightly Rate </TableHead>
            <TableHead>Nights Booked</TableHead>
            <TableHead>Total Income</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rentals.map((rental) => {
            const { id: propertyId, name, price } = rental
            const { totalNightsSum, orderTotalSum } = rental
            return (
              <TableRow key={propertyId}>
                <TableCell>
                  <Link
                    href={paths.property(propertyId)}
                    className='tracking-wide text-muted-foreground underline'
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>{formatCurrency(price)}</TableCell>
                <TableCell>{totalNightsSum || 0}</TableCell>
                <TableCell>{formatCurrency(orderTotalSum)}</TableCell>

                <TableCell className='flex items-center gap-x-2'>
                  <Link href={paths.propertyEdit(propertyId)}>
                    <IconButton actionType='edit'></IconButton>
                  </Link>
                  <DeleteRental propertyId={propertyId} />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
type DeleteRentalProps = { propertyId: string }
const DeleteRental = ({ propertyId }: DeleteRentalProps) => {
  const deleteRental = deleteRentalAction.bind(null, { propertyId })
  return (
    <FormContainer action={deleteRental}>
      <IconButton actionType='delete' />
    </FormContainer>
  )
}

export default RentalsPage
