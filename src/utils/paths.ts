// Define all the paths in the application
// so if the path changes, you only need to update it in one place.
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
  propertyEdit(id: string) {
    return `/properties/${id}/edit`
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
