import  {useState} from 'react'
import { Link } from 'react-router-dom';

import {CiTwitter,CiInstagram,CiLinkedin} from "react-icons/ci";
import {BsGithub} from 'react-icons/bs'

const Footer = () => {

  return (
<footer className="w-ful  flex flex-col  bg-[#24262a] h-[20rem] ">


<div className='flex flex-col items-center gap-4 pt-16 text-white'>
<ul className='list-none flex gap-2 '>
 
 <li title='Twitter' className='hover:text-blue-500 '><Link to='/'><CiTwitter size={52} /></Link></li>
 <li title='Instagram' className='hover:text-red-500'><Link to='/'><CiInstagram size={52}/></Link></li>
 <li title='Linkedln' className='hover:text-sky-400'><Link to='/'><CiLinkedin size={52}/></Link></li>
 <li title='Github' className='hover:text-gray-400'><Link to='/'><BsGithub size={52}/></Link></li>
 
 </ul>

 <p className='  p-4 flex flex-col  items-center gap-2 md:flex-row '><span className=' text-yellow-300 font-bold'>With Love </span>© 2023 kelzzzcodes.<span>All rights reserved.</span></p>

</div>








</footer>
  )
}

export default Footer





