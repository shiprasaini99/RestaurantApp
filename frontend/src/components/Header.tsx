import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className='border-b-2 border-b-orange-500 py-6'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link to='/' className='text-2xl font-bold tracking-tight text-orange-500'>Veg Delights</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
