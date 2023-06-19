import {useEffect} from 'react'
import Getintouchform from '../Forms/getintouchform';

import AOS from "aos";
import "aos/dist/aos.css";

const getintouch = () => {
 
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='flex flex-col w-full' id='contactus-section'>


    <div  className='flex flex-col items-center justify-center  py-16 '>
     <div  className='flex flex-col px-10 md:items-center md:justify-center gap-2'>  
       <h4 className='font-bold text-3xl sm:text-4xl'>Get In Touch</h4>
       <p className='   text-lg sm:text-2xl md:text-4xl'>Have A Project In Mind ?</p>
        
        <p className=' flex flex-wrap text-sm sm:text-xl md:text-2xl'>Reach out to us.we can make something awesome together</p>
     
     </div>
     <div data-aos="fade-up"
      data-aos-offset="10"
      data-aos-delay="400"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
     data-aos-anchor-placement="top-bottom"
     className='   w-3/4 flex flex-col gap-4'>

<div className=' flex flex-col gap-4 items-center'>
        
       

    </div>
     
     <Getintouchform />
    
     
        </div>
    </div>


    </div>
  )
}

export default getintouch