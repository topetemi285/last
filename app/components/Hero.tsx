import Image from "next/image"
import Button from './Button'


function Hero() {
  return (
    <section className='flex flex-col mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
        <div className='absolute right-0 top-0 h-screen w-screen bg-pattern-2 bg-cover bg-center md:-right-28 xl:-top-60'/>

        <div className='relative z-20 flex-1 flex-col xl:w-1/2'>
            <Image  src ="/camp.svg" alt="camp" width={50}  height={50}
            className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
            />
            <h1 className="bold-52 lg:bold-88">ECWA COMMUNITY HEALTH INITIATIVE</h1>
            <p className="text-[16px] font-[400] text-grey-30 xl:mx-w-[520px]">
                We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on adventure around the world in just one app
            </p>
            <div className="my-11 flex flex-wrap gap-5">
              <div className="flex items-center gap-2">
                {Array(5).fill(1).map((_, index)=>(
                  <Image 
                    src="/star.svg"
                    key={index}
                    height={24}
                    width={24}
                    alt = "star"
                  />
                ))}
              </div>
                  <p>
                    198k
                    <span className="text-[16px] lg:text-[20px] font-[400] ml-3 underline">Excellent Reviews</span>
                  </p>
            </div>
            <div className="flex flex-col w-full gap-3 sm:flex-row">
              <Button 
                type="button" 
                title="Download App"
                variant="border-green-50 bg-green-50 px-8 py-5 text-white" />

              <Button 
                type="button" 
                title="How we work"
                icon="/play.svg"
                variant="border-white bg-white px-8 py-3 text-gray-90" />
            </div>
        </div>
        <div className="relative flex flex-1 items-start">
          <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-950 px-7 py-8 ">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <p className="text-[16px] font-[400] text-gray-20">Location</p>
                  <Image src="/close.svg" alt = "close" height={24} width={23} />
              </div>
              <p className="bold-20 text-white">Anguas Calientes</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <p className="text-[14px] font-[400] text-gray-20">Distance</p>
                  <p className="bold-20 text-white">173.28m</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-[14px] font-[400] text-gray-20">Eleviation</p>
                  <p className="bold-20 text-white">2km</p>
                </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Hero