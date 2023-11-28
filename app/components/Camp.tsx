import React from 'react'
import Image from 'next/image'
import { PEOPLE_URL } from '@/constants'
import { url } from 'inspector'

interface CampSiteProps{
  backgroundImage:string,
  title:string,
  subtitle: string,
  peopleJoined:string
}

const CampSite=({backgroundImage,title,subtitle,peopleJoined}:CampSiteProps)=>{
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} 
      bg-cover bg-no-repeat lg:rounded-r-5x 2xl:rounded-5xl`}>
     <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 border-2 border-blue-500'>
      <div className='flex items-center justify-center'>
        <div className='rounded-full bg-green-50 p-4'>
          <Image 
            src = "/folded-map.svg"
            alt ="map"
            width={28}
            height={28}
            />
        </div>
          <div className='flex flex-col gap-1'>
            <h4 className='bold-18 text-white'>{title}</h4>
            <p className='text-[14px] font-[400] text-white'>{subtitle}</p>
          </div>
      </div>
      <div className='flex items-center justify-center'>
        <span className='flex -space-x-4 overflow-hidden'>
          {
            PEOPLE_URL.map((person)=>(
              <Image className='inline-block h-10 rounded-full w-10' src={person} alt='person' 
              key={person}
              width={52}
              height={52}
              />
            ))
          }
        </span>
        <p className='bold-16 md:bold-20 text-white gap-2 ml-3'>{peopleJoined}</p>
      </div>

     </div>
    </div>
  )
}
function Camp() {
  return (
    <div className='2xl:mx-auto max-w-[1440px] relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='-ms-overflow-style: none scrollbar-width: none flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite 
          backgroundImage='bg-bg-img-1'
          title='Putuk Truno Camp'
          subtitle='Prigen, Pasuruan'
          peopleJoined='50+ Joined'
        />
        <CampSite 
          backgroundImage='bg-bg-img-2'
          title='Mountain View Camp'
          subtitle='Shere Hills,Jos'
          peopleJoined='30+ Joined'
        />
                <CampSite 
          backgroundImage='bg-bg-img-1'
          title='Putuk Truno Camp'
          subtitle='Prigen, Pasuruan'
          peopleJoined='50+ Joined'
        />
        <CampSite 
          backgroundImage='bg-bg-img-2'
          title='Mountain View Camp'
          subtitle='Shere Hills,Jos'
          peopleJoined='30+ Joined'
        /> 
        {/* <CampSite /> */}
      </div>
      <div className='flex items-center justify-end mt-10 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <h2 className='text-[24px] md:text-[32px] 2xl:text-[64px] font-[400] capitalize text-white'>
            <strong>Feeling Lost</strong> and Not Knowing the way?
          </h2>
            <p className='text-[14px] xl:text-[16px] font-[400] mt-5 text-white '>
              Starting from the anxiety of the climbers when visiting a 
              new climbeing location, the possiblity of getting lost is 
              very large. That why we are here gor those of you who want 
              to start an adventure</p>
            <Image 
              src="/qoute.svg"
              alt=" "
              width={186}
              height={219}
              className='absolute -right-6 bottom-4 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px] 3xl:right-0'
              />
        </div>

      </div>
    </div>
  )
}

export default Camp