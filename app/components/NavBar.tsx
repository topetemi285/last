import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Button from './Button'
import GoogleSignInButton from './signIn/googleSignInButton'

export const  NavBar = () => {
  return (
    <nav className='flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5 ' >
        <Link href="/"> 
            <Image src="/hilink-logo.svg" alt='logo' width={74} height={23}/>
        </Link>

        <ul className='hidden h-full gap-12 lg:flex'>
            {
                NAV_LINKS.map((links)=>(
                        <Link className='text-[14px] font-[400] text-gray-600 flex items-center justify-center cursor-pointer pb-2 transition-all hover:font-bold' href={links.href} key={links.key}>{links.label}
                        </Link>
                    )
                )
            }
        </ul>

        <div className='lg:flex items-center justify-center hidden'>
            {/* <Button 
                type = "button"
                title = "Login"
                icon = "/user.svg"
                variant = "bg-green-90 px-8 py-4 text-white transition-all hover:bg-black"
            /> */}
            <GoogleSignInButton/>
        </div>
        <Image  
            className='inline-block cursor-pointer lg:hidden'
            src="menu.svg" 
            alt='menu'
            height={32}
            width={32}
            />
    </nav>
  )
}
