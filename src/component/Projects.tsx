import React, { useState } from 'react'
import Heading from './Heading'
import { getResult } from '../constants/Projects'

const Projects = () => {

    const [projectType, setProjectType] = useState<string>("Android");
    const result = getResult(projectType)
  return (
    <div className=' my-10 py-10 px-0 lg:px-24'>
        <Heading name='My Projects'/>
        <div className='flex justify-center items-center space-x-5 mt-10'>
            <button className='py-2 px-5 rounded-full bg-slate-800 text-gray-300 duration-300 text-sm hover:bg-gray-900 hover:text-white'>All</button>
            <button className='py-2 px-5 rounded-full bg-slate-800 text-gray-300 duration-300 text-sm hover:bg-gray-900 hover:text-white'>Android</button>
            <button className='py-2 px-5 rounded-full bg-slate-800 text-gray-300 duration-300 text-sm hover:bg-gray-900 hover:text-white'>Web</button>

        </div>
        <div className='flex flex-wrap justify-center items-center mt-8'>
            {result}
        </div>
    </div>
  )
}

export default Projects