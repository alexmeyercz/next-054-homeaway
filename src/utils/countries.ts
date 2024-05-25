import countries from 'world-countries'

const f = '⇒ countries.ts:'

export const formattedCountries = countries.map((country) => {
  return {
    code: country.cca2,
    name: country.name.common,
    flag: country.flag,
    location: country.region,
    region: country.region,
  }
})
export const findCountryByCode = (code: string) => {
  return formattedCountries.find((country) => {
    return country.code === code
  })
}
