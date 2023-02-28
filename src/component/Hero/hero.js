import React from 'react'
import { Link } from 'react-router-dom'
import Heroimg from '../../asset/Heroimage.jpg'

function hero() {
  return (
    <div>

     <div className='grid gap-8 grid-cols-1 md:grid-cols-2'>
     <div className='flex flex-col justify-center align-center m-auto space-y-8 '>
        <div className=' flex flex-col justify-center align-center space-y-4'>
        <h1 className='font-extrabold text-lg md:text-5xl '>Hey I'm Kelechi!</h1>
        <p>Welcome to my digital world.</p>
        </div>
        <div className='flex justify-center align-center'>
        <p >I'm a software developer in Port Harcourt,Rivers State Nigeria. I make <Link className='underline decoration-solid text-[#839efa] hover:no-underline' to=''>open-source projects</Link> and write about code, design, and life. I like accordions, drawing, sci-fi, reading, and gaming.</p>
        </div>
      </div>
      <div>
      <div className='flex h-[20rem] justify-center align-center md:h-[25rem]'>
      <img src={Heroimg} 
      className='rounded-full opacity-50 border-2 border-[#4CD794]  '
    />
      </div>
      </div>

     </div>
    </div>
  )
}

export default hero