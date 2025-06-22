import React from 'react'

interface Heading{
    name: string
}
const Heading = (headingName:Heading) => {
  return (
    <div className=' relative flex justify-center after:content[""] after:border-b-2 after:w-10 after:h-2 after:border-slate-400 after:absolute after:-bottom-3'>
    <h1 className="text-start text-xl lg:text-3xl md:text-2xl font-extrabold">
    <span className="bg-gradient-to-r to-purple-500 from-pink-500 text-transparent bg-clip-text font-bold mb-10">
      {headingName.name}
    </span>
  </h1>
    </div>
  )
}

export default Heading