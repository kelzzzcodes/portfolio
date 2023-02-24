import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { navdata } from '../../constants'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Menu =()=>(
  <div className=" w-full flex justify-center align-center p-8 bounce-in-fwd md:hidden">
  <ul className="flex flex-col space-y-8 text-white align-center justify-center ">
    {navdata.map((nav, index) => (
      <li
        key={nav.id}
        className=" flex items-center cursor-pointer border-b-2 border-[#4CD794] hover:border-b-2 hover:border-black hover:text-gray-500"
      >
        <Link to={nav.path}>
          {nav.title} {nav.Icon}
        </Link>{' '}
      </li>
    ))}
  </ul>
</div>

)

function header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
   <nav className=' bg-[#4CD794]  w-full h-16 flex flex-col p-4 space-y-4 rounded-3xl sm:rounded-t-lg md:h-32 md:p-8  '>
    <div className='flex justify-between'>
    <div className='text-black'>
    <Link to='/'>KELECHI OTUGBUALI</Link>
    </div>
      <div className='flex  md:hidden'>
      {toggleMenu ? (
            <CloseIcon
              onClick={() => setToggleMenu(false)}
              className="cursor-pointer"
            />
          ) : (
            <MenuIcon
              onClick={() => setToggleMenu(true)}
              className="cursor-pointer"
            />
          )}

          

      </div>
    
    </div>

    <div className='hidden md:flex'>
    <ul className="flex align-center justify-start space-x-4 text-white">
    {navdata.map((nav, index) => (
      <li
        key={nav.id}
        className=" flex items-center cursor-pointer border-b-2 border-[#4CD794] hover:border-b-2 hover:border-black hover:text-gray-500"
      >
        <Link to={nav.path}>
          {nav.title} {nav.Icon}
        </Link>{' '}
      </li>
    ))}
  </ul>

    </div>
    {toggleMenu ? <Menu /> : null}
   </nav>
  )
}

export default header
