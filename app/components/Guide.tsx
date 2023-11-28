import React from 'react'
import Image from 'next/image'

function Guide() {
  return (
    <section className='flex flex-col items-center justify-center'>
      <div className='pb-24 px-6 lg:px-20 3xl:px-0 mx-auto max-w-[1440px] w-full'>
        <Image src = "/camp.svg" alt = "camp" width = {50} height={50}/>
        <p className='uppercase text-[18px] font-[400] -mt-1 mb-3 text-green-95'>
          We are here for you
        </p>
        <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-60 xl:max-w-[390px]'>Guide You to Easy Path</h2>
          <p className='text-[16px] font-[400] text-gray-30 xl:max-w-[520px] '>
            Only with the ECHI application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field.
            Invite yur friends, relatives and friends to have fun in the wilderness through the vally and react the top of the mountai 
          </p>
        </div>
      </div>
      <div className='flex items-center justify-center mx-auto max-w-[1440px] relative w-full'>
        <Image 
          src="/boat.png" 
          alt='camp' 
          height={144} 
          width={253}
          className='w-full object-cover object-center 2xl:rounded-5xl'
          />
          <div className='flex absolute bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
            <Image  
            src="/meter.svg"
            alt='meter'
            height={160}
            width={16}
            className='h-full w-auto'
            />
            <div className='flex items-center justify-between flex-col'>
              <div className='flex w-full flex-col'>
                <div className='flex items-center justify-between w-full'>
                  <p className='text-[16px] font-[400] text-grey-20'>Destination</p>
                  <p className='bold-16 text-green-50'>48 minutes</p>
                </div>
                <p className='bold-20 mt-20'>Aguas Calientes</p>
              </div>

              <div className='flex w-full flex-col'>
               
                  <p className='text-[16px] font-[400] text-grey-20'>Start track</p>
                <h4 className='bold-20 mt-2 whitespace-nowrap'>Wonorejo Pasuruan</h4>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Guide