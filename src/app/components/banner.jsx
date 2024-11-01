import React from 'react'
import Image from 'next/image'
const banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]'>
      <Image className='bg-red-500 ' src="/airbnb_bg.jpg"  layout='fill'
      alt="Picture of the author"/>
    <div className='absolute top-1/2 w-full text-center'> 
      <p>Hi there am i visible?</p>
      <button className=' text-purple-500 bg-slate-50 shadow-2xl rounded-xl w-[100px] hover:selection:'>I'm Flexible</button>
    </div>
    </div>
  )
}

export default banner
