import React from 'react'
import Image from 'next/image'
const LargeCard = () => {
  return (
    <div className='relative flex items-center justify-center   h-[600px]  w-min-[300px]'>
        
        <Image className=' justify-center items-center  ' src="https://img.freepik.com/premium-photo/image-close-up-outdoor-lights-string-beach-night_772924-732.jpg"   
        layout='fill'
      alt="Picture of the author"/> 
      <div className='absolute top-[150px] left-[30px]'>
        <h2 className='text-3xl'>Hi ssup?</h2>
      </div>
    </div>
  )
}

export default LargeCard
