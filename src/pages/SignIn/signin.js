import React from 'react'
import HeroBG from '../../asset/herobg2.jpg'
import {signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import {auth, googleProvider } from '../../firebase.config';
import { SignInForm } from '../../component/Forms'

const signin = () => {
  const navigate= useNavigate()
  const GoogleLogin=async() =>{

    try {
    await signInWithPopup(auth,googleProvider)
      
      navigate('/dashboard')
    } catch (error) {
    
    }
  }


  return (
    <div className='flex items-center justify-center gap-2 h-[calc(100vh-5rem)] bg-white'>
     



<div className=' h-[600px] flex items-center justify-center rounded-md   shadow-2xl'>

<div className=' flex  flex-col p-8'>

<SignInForm/>


</div>


<div className=" authenticationimage  flex flex-1 w-[600px] h-full   rounded-r-2xl  ">



</div>
</div>

    

      
      </div>
    
  )
}

export default signin





