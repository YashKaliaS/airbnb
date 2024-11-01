'use client'
import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Banner from './components/banner'
import SmallCard from './components/SmallCard'
import LargeCard from './components/LargeCard'
import Footer from './components/Footer'
const page = () => {
  const [data,setData]=useState([]);
   useEffect(() =>{
      const fetchData=async ()=>{
        const res=await fetch('https://api.escuelajs.co/api/v1/products');
        const data=await res.json();
        setData(data);
      }
      fetchData();
 
   },[])
    
  return (
    <div>
      <Header />
      <Banner/>
      <main className='max-w-7xl  ' >
        <section className=' mt-[30px] pt-6'>
          <h2 className='text-4xl mt-[30px] pb-5'>Explore Nearby</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mx-auto">
          {/* Add your content here */}
            
            {
              data?.map((item)=>(
                
                <SmallCard className='' key={item.id} id={item.id} title={item.title} image={item.images[0]} description={item.description}/>
                
      
              ))          
                

            }
            
            </div>
            <div className=' bottom-0 bg-red-400'>
            </div>
        </section>
      </main>
              <LargeCard />
            <Footer className='w-full'/>
    </div>
  )
}

export default page
