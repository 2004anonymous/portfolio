

import { LoaderCircle } from 'lucide-react';


const Loader = () => {
  return (
    <div
    className="fixed inset-0 z-50 flex justify-center items-center">
        <div className='p-5 rounded-full bg-slate-50 shadow-md'>
        <LoaderCircle className=' animate-spin delay-200 duration-200' strokeWidth={2}/>
        </div>
  </div>
  )
}

export default Loader