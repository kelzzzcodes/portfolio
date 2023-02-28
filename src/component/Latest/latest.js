import React from 'react'
import Heroimg from '../../asset/Heroimage.jpg'

function latest() {
  return (
    <div className='mt-5'>
     <div  className='flex  justify-between align-center items-center  '>
     <h2 className='text-3xl font-semibold'>Latest Post</h2>
     <button className='bg-[#252525] rounded-md px-6 py-2 flex align-center justify-center text-white hover:outline hover:outline-offset-0 hover:outline-1 hover:outline-gray-500'>View all</button>
     </div>

     <div>
      <img src={Heroimg}/>
     </div>
    </div>
  )
}

export default latest