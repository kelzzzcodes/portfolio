import React from 'react'
import Heroimg from '../../asset/Heroimage.jpg'
import { latestdata } from '../../constants'

function latest() {
  return (
    <div className='mt-5'>
     <div  className='flex  justify-between align-center items-center  '>
     <h2 className='text-xl font-bold sm:text-3xl'>Latest Post</h2>
     <button className='bg-[#252525] rounded-md px-6 py-2 flex align-center justify-center text-white hover:outline hover:outline-offset-0 hover:outline-1 hover:outline-gray-500'>View all</button>
     </div>

     <div className='mt-8 '>
      {latestdata.map((post)=>(
          
          <div key={post.id} className='cursor-pointer flex  justify-between items-center py-2  border-b border-gray-700 ' >
          <p className='sm:text-base md:text-lg'>{post.tittle}</p>
            <p className=' hidden text-[#4CD794]  sm:flex'>{post.date}</p>
          </div>
      
            
            

      ))}
      
      

     
    
     </div>
    </div>
  )
}

export default latest