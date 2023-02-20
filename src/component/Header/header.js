import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { navdata } from '../../constants'
// import MenuIcon from '@mui/icons-material/Menu'
// import CloseIcon from '@mui/icons-material/Close'

function header() {
  return (
    <nav className="p-2 flex rounded-3xl justify-between items-center content-center w-full h-16  bg-[#4CD794] text-black sm:flex-col sm:space-y-4  sm:h-32 sm:p-10 sm:items-baseline sm:rounded-b-3xl  sm:rounded-t-none ">
      <div className="flex justify-center align-center items-center  sm:justify-start  ">
        <Link to='/' className="flex  items-center space-x-2 ">
          <span className="text-lg">Kelechi Otugbuali</span>
        </Link>
      </div>
      <div className="hidden sm:flex">
        <ul className="flex space-x-4 text-white">
          {navdata.map((nav, index) => (
            <li
              key={nav.id}
              className=" flex items-center justify-center space-x-2 cursor-pointer border-b-2 border-[#4CD794] hover:border-b-2 hover:border-black hover:text-gray-500"
            >
              <Link to={nav.path}>
                {nav.title} {nav.Icon}
              </Link>{' '}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default header
