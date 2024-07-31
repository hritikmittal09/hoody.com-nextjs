
import React from 'react'
import Link from 'next/link'
import { LoginButton } from './Login'
import { AboutButton } from './About'

function Headers() {
  return (
    <div className=' bg-black text-white sticky top-0 z-10'>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-3 text-xl text-white">Hoddy.com </span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5  text-white">Products</Link>
      <LoginButton title = "Log-in"/>
      <LoginButton title = "Sign-up" />
      <AboutButton/>
    </nav>
    
  </div>
</header>
    </div>
  )
}

export default Headers