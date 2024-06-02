import { paths } from './paths'

type NavLink = {
  href: string
  label: string
}

export const links: NavLink[] = [
  { href: paths.home(), label: 'home' },
  { href: paths.favorites(), label: 'favorites' },
  { href: paths.bookings(), label: 'bookings' },
  { href: paths.reviews(), label: 'reviews' },
  { href: paths.reservations(), label: 'reservations' },
  { href: paths.rentalsCreate(), label: 'create rental' },
  { href: paths.rentals(), label: 'my rentals' },
  { href: paths.admin(), label: 'admin' },
  { href: paths.profile(), label: 'profile' },
]
