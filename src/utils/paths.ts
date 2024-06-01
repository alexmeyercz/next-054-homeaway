export const paths = {
  home() {
    return '/'
  },
  profile() {
    return '/profile'
  },
  profileCreate() {
    return '/profile/create'
  },
  rentals() {
    return '/rentals'
  },
  rentalsCreate() {
    return '/rentals/create'
  },
  property(id: string) {
    return `/properties/${id}`
  },
  reviews() {
    return '/reviews'
  },
  favorites() {
    return '/favorites'
  },
  bookings() {
    return '/bookings'
  },
}
