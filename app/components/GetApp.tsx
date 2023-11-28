import React from 'react'
import Button from './Button'
import Image from 'next/image'

function GetApp() {
  return (
    <section className='flex justify-center flex-col    flex-1 items-start gap-2'>
      <div className='mx-auto max-w-[1440px] relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl'>

        <div className='z-20 flex f-full flex-1 flex-col items-start justify-center gap-12'>
          <h2 className='bold-40 lg:bold-64  xl:max-w-[360px]'>Get For  Free Now!</h2>
          <p className='text-[16px] font-[400]  text-gray-10'>Available on Android and IOS,   Download Now!</p>
          <div className='flex w-full flex-col gap-3 whitespace-nowrap'>
            <Button 
              type='button'
              title='App Store'
              variant='btn_white'
              icon='/apple.svg'
              full
            />
            <Button 
              type='button'
              title='Play Store'
              variant='btn_dark_green_outline'
              icon='/android.svg'
              full
            />
            </div>
          </div>
          <div className='flex flex-1 items-center justify-end'>
              <Image src= "/phones.png" alt="phone" width={550} height={870}/>
            </div>
      </div>
    </section>
  )
}

export default GetApp