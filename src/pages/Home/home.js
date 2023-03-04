import React from 'react'

import {Hero ,Latest,Popular}from '../../component'


function home() {
  return (
    <div className=' p-4 flex flex-col space-y-8 md:px-16 mt-8'>
     
        <Hero/>
        <Latest/>
        <Popular/>
    </div>
  )
}

export default home