
import React from 'react'
import item from "../assets/ic_logo.png"
import { log } from 'console'

export default function Item() {
  return (
    <div className='flex flex-col justify-start items-center w-96 h-96 rounded-lg'>
        <div className=' w-full h-64 rounded-lg bg-purple-100 relative p-10 justify-center items-center flex'>
            <img src={item} className=' w-auto h-full' alt="" />
            <div className='w-10 h-10 bg-white rounded-full absolute top-5 right-5 justify-center items-center flex cursor-pointer'>
            <i className=" text-gray-600 text-xl fa-regular fa-heart"></i>
            </div>
        </div>
        <div className=' w-full mt-2'>
            <h1 className=' text-lg font-bold'>Item name, Anything about...</h1>
            <p className='text-sm text-gray-400'>Anything about the product, description of the product quality.</p>
            <div className='flex space-x-2 mt-2'>
            <i className=" text-green-500 fa-solid fa-star"></i>
            <i className=" text-green-500 fa-solid fa-star"></i>
            <i className=" text-green-500 fa-solid fa-star"></i>
            <i className=" text-green-500 fa-regular fa-star"></i>
            <i className=" text-green-500 fa-regular fa-star"></i>
            </div>
            <button className='mt-2 py-2 px-4 border bg-transparent text-black font-bold text-sm rounded-full border-gray-800'>Add to Cart</button>
        </div>
    </div>
  )
}
