import React from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import MainNav from './MainNav'

function Header() {
  return (
    <div>
      <div className='border-b-2 border-b-orange-500 py-6'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link to='/' className='text-2xl font-bold tracking-tight text-orange-500'>Veg Delights</Link>
            <div className='md:hidden'><MobileNav/></div>
            <div className='hidden md:block'> <MainNav/></div>
        </div>
      </div>
    </div>
  )
}

export default Header
