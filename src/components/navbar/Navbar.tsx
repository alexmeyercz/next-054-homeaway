import React, { type FC } from 'react'
import NavSearch from './NavSearch'
import LinksDropdown from './LinksDropdown'
import DarkMode from './DarkMode'
import Logo from './Logo'

const f = '⇒ Navbar.tsx (Navbar):'

const Navbar: FC = () => {
  return (
    <nav className='border-b'>
      <div className='container flex flex-col flex-wrap gap-4 py-8 sm:flex-row sm:items-center sm:justify-between'>
        <Logo />
        <NavSearch />
        <div className='flex items-center gap-4 '>
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
