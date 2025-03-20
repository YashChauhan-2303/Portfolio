import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full md:h-12 sm:h-14 h-18 flex justify-between items-center xl:px-36 lg:px-12 md:px-12 sm:px-6 px-4 fixed top-0 bg-gray-900'>
        <div className='flex item-center sm:gap-x-4 gap-x-2'>
            <a href='#' className='md:text-2xl sm:text-xl text-lg text-yellow-500'>
                Yash Chauhan
            </a>
            <i className='bx bx-sun md:text-3xl sm:text-2xl text-xl text-gray-200 sm:ml-4 ml-2 cursor-pointer'></i>
         </div>
         <div>
            <a href='#' className='group lg:text-lg md:text-base text-sm font-light text-yellow-500 lg:mr-12 mr-8 tracking-wide relative'>
            Home
            <span className='absolute -bottom-1 left-0 w-full h-[1px] bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300'></span>
            </a>
            <a href='#' className='group lg:text-lg md:text-base text-sm font-light text-white lg:mr-12 mr-8 tracking-wide relative'>
            About Me
            <span className='absolute -bottom-1 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300'></span>
            </a>
            <a href='#' className='group lg:text-lg md:text-base text-sm font-light text-white lg:mr-12 mr-8 tracking-wide relative'>
            Contact
            <span className='absolute -bottom-1 left-0 w-full h-[1px] bg-white transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300'></span>
            </a>
         </div>
    </div>
  )
}

export default Navbar
