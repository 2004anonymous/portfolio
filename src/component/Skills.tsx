import Heading from './Heading'
import { navItems } from '../constants/navItems'
import {Pencil, PenOff, Trash } from 'lucide-react'

const Skills = () => {
  return (
    <div className='px-0 lg:px-24 py-10 mb-10'>

        <Heading name='Skills & Languages'/>
        <div className='flex flex-wrap mt-10'>
        {navItems.map((item, index) => (
                <div key={index} className='text-white py-2 px-5 rounded-full mt-5 mx-5 flex items-center' style={{background:item.color}}>
                    <p className='text-sm'>{item.skill}</p>
                    <button className='p-1 rounded-full ms-2'><PenOff color='#ffffff' size={15}/></button>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Skills