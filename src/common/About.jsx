'use client'
import React from 'react'

export const AboutDilog = ()=> {
  return (
    <div>{/* You can open the modal using document.getElementById('ID').showModal() method */}
    
    <dialog id="AboutD" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">About The Project</h3>
        <p className="py-4">Welcome to our  Hoody.com Store, a simple yet fully functional ecommerce website built with Next.js. This project was created to practice and demonstrate the powerful capabilities of Next.js, including server-side rendering, static site generation, API routes, and more. Our goal is to provide a seamless and efficient shopping experience while showcasing the potential of modern web development technologies. Explore our collection and enjoy the smooth performance and dynamic features of our website. Thank you for visiting!</p>
        <div className="modal-action w-full">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn  btn-neutral w-full rounded-none  bg-red-500">Close</button>
          </form>
        </div>
      </div>
    </dialog></div>
  )
}
export const AboutButton = ()=>{
    return (
        <button className="btn  rounded-none border-none forced-color-adjust-none btn-link mr-5  text-white no-underline" onClick={()=>document.getElementById('AboutD').showModal()}>About</button>
    )
}
