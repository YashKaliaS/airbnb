import React from 'react'
import Image from 'next/image'
const SmallCard = ({id,title,image,description}) => {
  return (
    <div className='relative overflow-hidden rounded-lg border border-gray-300 flex m-2 mx-auto pt-[20px] '>
    <div>
    <Image className='absolute rounded-md pt-[25px]' src="https://i.imgur.com/KeqG6r4.jpeg" height={100} width={100}
      alt="Picture of the author"/>
    </div>
    <div className=' flex flex-col  pl-[110px] justify-center w-full h-40 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 '>

            <h1>{title}</h1>
            <h1 >Product Details</h1>

    </div>
    </div>
  )
}

export default SmallCard
