import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
// import KelzzzCodes from '../../asset/Kelzzz.codes.jpeg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';






function header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='p-2 flex rounded-3xl justify-between items-center content-center w-full h-16  bg-[#4CD794] text-black sm:flex-col sm:space-y-4  sm:h-32 sm:p-10 sm:items-baseline sm:rounded-b-3xl  sm:rounded-t-none'>
 

      <div>
      <a href='####' className='flex  items-center space-x-2  '>  
        <span className='text-lg'>Kelechi Otugbuali</span></a>
      </div>
      <div className='hidden sm:flex'>
       
          <ul className='flex space-x-4 text-white'>
  
            <li className=' cursor-pointer border-b-2 border-[#4CD794] hover:border-b-2 hover:border-black hover:text-gray-500'><a>About</a></li>
            <li className=' cursor-pointer border-b-2 border-[#4CD794] hover:border-b-2 hover:border-black hover:text-gray-500'><a>Project</a></li>
            <li className=' flex items-center justify-center space-x-2 cursor-pointer border-b-2 border-[#4CD794] hover:border-b-2 hover:border-black hover:text-gray-500'><a href='mm'><LinkedInIcon/></a> </li>
            <li className=' flex items-center justify-center space-x-2 cursor-pointer border-b-2 border-[#4CD794] hover:border-b-2 hover:border-black hover:text-gray-500'><a><TwitterIcon/></a></li>
            <li className=' flex items-center justify-center space-x-2 cursor-pointer border-b-2 border-[#4CD794] hover:border-b-2 hover:border-black hover:text-gray-500'><a><GitHubIcon/></a></li>

          </ul>
        </div>
     
      

      

  
  

    
   
       
        </nav>


  
  )
}

export default header