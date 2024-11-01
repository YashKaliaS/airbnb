import React from 'react'
import { FaSearch } from "react-icons/fa";
import Image from 'next/image'
import { CgProfile } from "react-icons/cg";
import { FaGlobe } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
const Header = () => {
  return (
    //i want to equally space the 3 components
    <div className=' relative flex justify-between items-center shadow-md'>
   <div className='flex-shrink-0'>
      <Image src="/airbnb.png"  width={45}
      height={45}
      alt="Picture of the author"/>
        </div>
        {/* Seacrch Bar */}
<div className='relative flex items-center flex-grow mx-4 md:mx-20  justify-center'>
        <div className='relative flex flex-row '>
      <input type="text" className='rounded-2xl bg-slate-70 px-[100px] shadow-md self-center' placeholder='Search what you want to'/>
      <FaSearch className='hidden md:inline-flex absolute right-3  text-gray-400 items-center'/>
      </div>
</div>

{/* //Right seciont */}
<div className='flex items-center gap-3 flex-grow'>
  {/* Become a host - Hidden on smaller screens */}
  <div className='hidden md:inline-flex'>
    <p>Become a host</p>
  </div>

  {/* Globe Icon - Hidden on smaller screens */}
  <FaGlobe className='hidden md:inline-block' />

  {/* Menu Burger and Profile Icons - Always Visible */}
  <div className='flex items-center bg-slate-200 p-2 rounded-sm shadow-xl gap-1'>
    <CiMenuBurger className='flex-shrink-0' />
    <CgProfile className='flex-shrink-0' />
  </div>
</div>

    </div>
  )
}

export default Header
