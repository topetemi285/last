import React from 'react'
 import Image from 'next/image'
import { FEATURES } from '@/constants'
function Features() {
  return (
    <section className='flex-col flex items-center justify-center overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className='mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative justify-end flex w-full'>
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image 
            src = "/phone.png"
            alt="phone"
            height={1000}
            width={440}
            className = "absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20"
          />
        </div>  
        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative'>
          <Image  
          src="/camp.svg" 
          alt = "camps" 
          height={50} 
          width={50}
          className='absolute left[-5px] top-[-28px]  w-10 lg:w-[s0px]'
          />

            <h2 className='bold-40 lg:bold-64'>OUR FEATURES</h2>
        </div>
        <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20'>
          {[FEATURES.map((feature)=>(
            <FeatureItem 
              key={feature.title} 
              title={feature.title}
              icon={feature.icon}
              variant={feature.variant}
              description={feature.description}
              />
          ))]}
        </ul>
      </div>
      </div>
    </section>
  )
}

type FeatureItemProps ={
  title:string,
  icon:string,
  variant:string,
  description:string
}
const FeatureItem = (
  {title, icon, variant,description}:FeatureItemProps) =>{
  return(
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className='rounded-full p-4 lg:p-7 bg-green-900'>
        <Image src={icon} alt="map" height={28} width={28}/>
      </div>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'> 
        {title}
      </h2>
      <p className='text-[16px] font-[400] mt-5 bg-white/80 text-grey-30 lg:mt-[30px] lg:bg-none'>
        {description}
      </p>
    </li>
  )
}

export default Features