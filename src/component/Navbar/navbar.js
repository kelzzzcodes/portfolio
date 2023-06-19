import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CiLinkedin } from 'react-icons/ci'
import { BsGithub } from 'react-icons/bs'
import {RxAvatar} from 'react-icons/rx'
import Shake from 'react-reveal/Shake'
import Logo from '../../asset/logo.jpg'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'


 import UseAuth from '../../custom-hooks/UseAuth'
import { useNavigate } from 'react-router-dom'
import { navdata } from '../../constants'



function navbar() {


  const MobileMenu = () => (
    <div className="p-6 absolute top-20 right-0 mx-4 my-2 min-w-[240px] flex bg-[#1b1b1b] rounded-xl tilt-in-fwd-tr shadow-md z-10 ">
      <ul className="flex flex-col space-y-8 text-white align-center justify-center items-start align-center    ">
        {navdata.map((nav, index) => (
          <li
            key={nav.id}
            className={`flex items-center cursor-pointer text-xl border-b-2 border-transparent text-white
          hover:border-b-2 hover:border-gray-700 hover:text-gray-500
          ${active === nav.title ? 'text-[#ee5c5d]' : 'text-white'}
          
          `}
          >
            <Link to={nav.path}>{nav.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )

  const [active, setActive] = useState('')
  const [toggleMenu, setToggleMenu] = useState(false);
  const currentUser = UseAuth();
  

 
  return (
    <nav className=" w-full px-4 md:px-10  flex justify-between items-center  h-[5rem] bg-[#24262a]  shadow-2xl sticky top-0  z-10">
      <div className="flex">
        <Link to="/">
          <img className="h-14  rounded-full  object-contain " src={Logo} />
        </Link>
      </div>
      <div className="hidden  gap-4 lg:flex">
        <ul className="flex align-center justify-start space-x-8 text-white mr-4">
          {navdata.map((nav) => (
            <li
              key={nav.id}
              className={`flex items-center cursor-pointer text-xl border-b-2 border-transparent text-white
                hover:border-b-2 hover:border-white hover:text-gray-500
                ${active === nav.title ? 'text-[#ee5c5d]' : 'text-white'}
                
                `}
              onClick={() => setActive(nav.title)}
            >
              <a href={nav.path}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          {currentUser ? (
            
            <div className="">
              <Link className='text-white flex flex-col items-center justify-center gap-1' to="/dashboard">
                <RxAvatar  size={36}/>
                  <span className=''>{currentUser.email}</span>
              </Link>
             
            </div>
          ) : (
         <Link to='/signin'>
          <button
              type="button"
              className="rounded  px-4 py-2 text-sm font-medium leading-normal text-white transition duration-150 ease-in-out  border-2 border-gray-300 hover:bg-yellow-600 hover:text-black  hover:border-2 hover:border-white"
             
            >
           Sign in
            </button>
         </Link>
          )}

        

          <ul className="list-none flex space-x-2 text-white items-center">
            <li title="Lnkedln" className="hover:text-sky-400">
              <Link
                to="https://www.linkedin.com/in/kelzzzcodes/"
                target="_blank"
              >
                <CiLinkedin size={32} />
              </Link>
            </li>
            <li title="Github" className="hover:text-gray-400">
              <Link to="https://github.com/kelzzzcodes" target="_blank">
                <BsGithub size={26} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex  lg:hidden ">
        {toggleMenu ? (
          <CloseIcon
            className="cursor-pointer text-white"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <MenuIcon
            className="cursor-pointer text-white"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
        <div className={`${!toggleMenu ? 'hidden' : 'flex'}`}>
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}

export default navbar
