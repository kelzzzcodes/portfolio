import React from 'react'
import { populardata } from '../../constants'

function popular() {
  return (
    <div>
      <div className="flex justify-between align-center items-center  ">
        <h2 className="text-xl font-bold sm:text-3xl ">Popular </h2>
      </div>
      <div className="mt-8">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {
            populardata.map((popular)=>(

              <div key={popular.id} className="outline outline-offset-0 outline-1 outline-gray-700 rounded-md p-2">
              <div className="flex justify-start items-center align-center space-x-4 p-4 ">
                <div className="w-12 h-12 ">
                  <img className="w-full" src={popular.imgUrl}/>
                </div>
                <div className='flex flex-col'>
                 
                  <p className='text-gray-500'>{popular.date}</p>
                  <p className='text-lg'>{popular.title}</p>
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

export default popular
