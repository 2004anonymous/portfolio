import { ChangeEvent, KeyboardEvent, useState } from 'react'
import mainLogo from '../assets/logo.png'
import searchLogo from '../assets/search.png'
import { Link } from 'react-router-dom'

export const Header = () => {

    const [mainMenuState, setMainMenuState] = useState(false)
    const [searchState, setSearchState] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value)
    }

    const closeSearch = () => {
      setSearchValue('')
      setSearchState(false)
    }
    const searchForInput = (event:KeyboardEvent<HTMLInputElement>) => {
      if(event.key === 'Enter'){
        console.log(searchValue)
        setSearchValue('')
      }
    }

    return(
        <>
        <header className="inset-x-0 top-0 z-40">
        <nav className="flex items-center justify-between p-6 lg:px-20" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={mainLogo} alt=""/>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={()=> setMainMenuState(true)}>
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-14">
            <Link to="/" className="text-sm leading-6 font-medium  cursor-pointer text-gray-700 hover:text-green-400 duration-200">Home</Link>
           <Link to="#" className="text-sm leading-6 font-medium  cursor-pointer text-gray-700 hover:text-green-400 duration-200">Features</Link>
           <Link to="#" className="text-sm leading-6 font-medium  cursor-pointer text-gray-700 hover:text-green-400 duration-200">Candidates</Link>
           <Link to="/contact" className="text-sm leading-6 font-thin  cursor-pointer text-gray-700 hover:text-green-400 duration-200">contact us</Link>
         </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-400 duration-200">Log in <span aria-hidden="true">&rarr;</span></a>
            <img className="h-8 w-auto ms-5 cursor-pointer" src={searchLogo} alt="" onClick={()=> setSearchState(true)}/>
          </div>
        </nav>
        <div className={mainMenuState? "flex lg:hidden md:hidden": "hidden lg:hidden md:hidden"} role="dialog" aria-modal="true" id="mobileMenu">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={mainLogo} alt=""/>
              </a>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMainMenuState(false)}>
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                </div>
                <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={searchState? 'flex':'hidden'} onDoubleClick={closeSearch}>
      <div className="flex fixed inset-0 bg-gray-100 bg-opacity-20 backdrop-filter backdrop-blur-lg z-50">
        <div className="h-4/6 w-screen flex justify-center items-center">
          <div className="w-96 relative">
            <input type="text" className="text-sm shadow-md bg-transparent w-full pl-10 ps-14 py-4 rounded-full border border-gray-300 focus:shadow-green-500  focus:outline-none"
            placeholder="Search..."
            value={searchValue}
            onKeyDown={searchForInput}
            onChange={handleSearch}/>
            <img src={searchLogo} className="w-8 h-8 left-3 absolute top-3"/>
          </div>
        </div>
        <button type="button" className=" rounded-md text-gray-700 absolute top-0 right-0 me-20 mt-6" onClick={() => setSearchState(false)}>
          <span className="sr-only">Close menu</span>
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      </div>
      </>
    )
}