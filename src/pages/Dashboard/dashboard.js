import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../../firebase.config'
import UseAuth from '../../custom-hooks/UseAuth';
import {RxAvatar} from 'react-icons/rx'

const dashboard = () => {
 

  const currentUser = UseAuth();
  
  const navigate = useNavigate()
  if (!currentUser){
    navigate('/');
  }

  return (
    <div className=' bg-gray-200 flex '>
<div className=' flex flex-col gap-8 max-w-350px border-r-2  border-sky-700  h-screen p-16'>
<div>
{
  currentUser ? (
  <div className='flex flex-col items-center gap-1'>
    <RxAvatar size={32}/>
    <span>{currentUser.email}</span>
  </div>) :'person'
}
</div>


<Link  to='/projectform'>Project Form</Link>

</div>
 <div className='flex items-center justify-center mx-auto '>
        <button   className="bg-black inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] "
 onClick={()=> auth.signOut()}>Sign out</button>
          </div> 
    </div>
  )
}

export default dashboard