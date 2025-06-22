import React from 'react'
import profile from "../assets/profile.png"
import Heading from './Heading'
import { Facebook, FacebookIcon, Instagram, Linkedin } from 'lucide-react'

const About = () => {
  return (
    <div className='text-white lg:text-black md:text-black py-10 px-5 lg:px-24'>
       <div className='flex justify-between bg-transparent flex-col-reverse lg:flex-row md:flex-row lg:bg-slate-300 md:bg-slate-300 rounded-lg'>
        <div className=' md:w-1/2 w-full lg:w-1/2 p-0 lg:p-8 md:p-6 flex-1 mt-5 lg:mt-0'>
            <h1 className=' md:text-2xl text-xl lg:text-3xl font-black'>It's Rahul Gogoi</h1>
            
            <p className=' mt-5 text-gray-300 md:text-gray-500 lg:text-gray-500 text-sm leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate, ullam totam dicta cumque quis magni error corporis veniam fugit praesentium! Facilis labore, maxime consequuntur nulla esse voluptatum maiores aperiam.</p>
            <p className=' mt-5 text-gray-300 md:text-gray-500 lg:text-gray-500 text-sm leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi cupiditate, ullam totam dicta cumque quis magni error corporis veniam fugit praesentium! Facilis labore, maxime consequuntur nulla esse voluptatum maiores aperiam.</p>
            <div className='flex space-x-4 mt-8 divide-x-2 divide-gray-500'>
                <button className='py-2 md:py-3 lg:py-3 hover:bg-gray-800 duration-200 px-5 rounded-full hover:text-white bg-white text-black lg:bg-black lg:text-white  md:bg-black md:text-white text-sm '>Let's talk</button>
                <div className='flex px-8 items-center space-x-5'>
                    <Linkedin color='#6b7280'/>
                    <Instagram  color='#6b7280'/>
                    <FacebookIcon color='#6b7280'/>
                </div>
            </div>
        </div>
        <div className='flex h-auto w-full md:w-1/2 lg:h-1/2 flex-1 items-center lg:flex-none bg-[#431c61] lg:bg-transparent justify-center md:bg-transparent rounded-xl'>
        <img src={profile} className='w-auto h-60 md:h-96 lg:h-96 object-fill' alt="" />
        </div>
        {/* <img src={profile} className='hidden lg:flex h-auto w-1/3 object-fill flex-1 lg:flex-none' alt="" /> */}
       </div>
    </div>
  )
}

export default About