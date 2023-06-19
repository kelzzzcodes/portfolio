import React from 'react'
import { Link } from 'react-router-dom'
import Herobg from '../asset/herobg.png'

import Typed from 'react-typed'


import { MdPerson4 } from 'react-icons/md'


function hero() {
  return (
    <div className=" bg-image  w-full  h-[100vh] bg-[#212226] mt-[-4.1em]">
    
      <div className="text-white flex flex-col justify-center h-full gap-8  w-full my-auto  items-baseline p-8  md:p-16  ">
        <div className='flex  '>
          <h2 className=" text-4xl w-full md:w-[50%] md:text-6xl flex font-extrabold leading-tight">
            I love to create responsive and dynamic websites
          </h2>
        </div>
        <div className="flex gap-2">
          <a className="bg-blue-800 cursor-pointer hover:bg-transparent border-[1px] border-transparent  hover:border-[#FFFDD0] text-white font-bold py-2 px-4 md:py-6 md:px-16 transition duration-1000 rounded-md">
            Discover
          </a>

          <a href='#contactus-section' className="flex space-x-1 cursor-pointer items-center bg-transparent hover:text-gray-500 lg:text-xl text-white font-bold py-2 px-2 md:px-4 transition duration-500 rounded">
            <MdPerson4 />
          <span>  Contact Me</span>
          </a>
        </div>
      </div>

   
    </div>
  )
}

export default hero
