import { paths } from './paths'

type NavLink = {
  href: string
  label: string
}

export const links: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/favorites ', label: 'favorites' },
  { href: '/bookings ', label: 'bookings' },
  { href: '/reviews ', label: 'reviews' },
  { href: paths.rentalsCreate(), label: 'create rental' },
  { href: paths.rentals(), label: 'my rentals' },
  { href: paths.profile(), label: 'profile' },
]
