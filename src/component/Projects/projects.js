import React from 'react'
import { Link } from 'react-router-dom'
import projectdata from '../../constants/projectsdata';

function projects() {
  return (
    <div>
      <div className="flex justify-between align-center items-center  ">
        <h2 className="text-xl font-bold sm:text-3xl ">Projects </h2>
      </div>

      <div className="mt-8">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
            {
              projectdata.map((data)=>(
                <div key={data.Id} className='bg-[#1f1f1f] rounded-md p-2 outline outline-offset-0 outline-1 outline-gray-700 '>
                <div className='p-4 flex flex-col space-y-2 justify-start align-center  '>
                <div className="flex flex-col">
                   <p className='text-[#ee5c5d]'>{data.Date}</p>
                   <Link className=' text-lg font-semibold hover:underline'>{data.Title}</Link>
                 </div>
                 
                   <p>{data.Description}</p>
     
                   <div className="flex space-x-2">
                     <button className="bg-[#252525] rounded-md p-2 items-center flex align-center justify-center text-white text-sm  outline outline-1 outline-gray-700 outline-offset-0 hover:outline hover:outline-offset-0 hover:outline-1 hover:outline-gray-500">
                       Article
                     </button>
                     <button className="bg-[#252525] rounded-md p-2 items-center flex align-center justify-center text-white text-sm outline outline-1 outline-gray-700 outline-offset-0 hover:outline hover:outline-offset-0 hover:outline-1 hover:outline-gray-500">
                       Demo
                     </button>
                   
                    
                   </div>
                 
                </div>
                </div>
              ))

            }
          
         
        </div>
      </div>
    </div>
  )
}

export default projects
