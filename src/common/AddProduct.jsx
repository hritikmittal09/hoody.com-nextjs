'use client'
import Link from 'next/link'
import React from 'react'


 export const AddProductBut = ()=> {
  return (
    <div className=' bg-black w-full' >
    <div className=' bg-black  flex   flex-wrap'>
        <Link href={"/addProduct"} className="btn btn-accent rounded-none m-5">ADD Product</Link>

    </div>
    </div>
  )
}


