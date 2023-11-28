import type { Metadata } from 'next'
import './globals.css'
import { NavBar } from './components/NavBar'
import Footer from './components/Footer'
import { NextAuthProvider } from './components/signIn/providers'



export const metadata: Metadata = {
  title: 'Travel',
  description: 'ECWA Community Health Initiative',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <NextAuthProvider >
        <NavBar/>
        <main className='relative overflow-hidden'>
          {children} 
        </main>
        <Footer/>
        </NextAuthProvider >
      </body>
    </html>
  )
}
