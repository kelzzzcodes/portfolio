import React from 'react'
import HeroBG from '../../asset/herobg2.jpg'

import { SignUpForm } from '../../component/Forms'

const signup = () => {
  return (
    
    <div className='flex items-center justify-center gap-2 h-[calc(100vh-5rem)] bg-white'>
     
    <div className=' h-[600px] flex flex-col-reverse md:flex-row items-center justify-center rounded-md shadow-2xl'>
    
    <div className=' flex  flex-col p-8'>
    
    <SignUpForm/>
    
    
    </div>
    
    
    <div className=" flex authenticationimage  w-[600px] h-full  rounded-r-2xl">
  
    
    
    </div>
    </div>
    
        
    
          
          </div>

  )
}

export default signup