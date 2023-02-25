import React from 'react'

import Hero from '../../component/Hero/hero'
import Latest from '../../component/Latest/latest'

function home() {
  return (
    <div className=' p-4 md:px-16 mt-8'>
     
        <Hero/>
        <Latest/>
    </div>
  )
}

export default home