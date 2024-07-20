'use client'
import React from 'react'
let signuporLogin = ''

export const  Login = ({title})=> {
  return (
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id={title} className="modal">
  <div className="modal-box w-full ">
    <h3 className="font-bold text-lg"> {title}</h3>
    

    <div  className="modal-action flex flex-col w-full gap-10">
    <input type="email" placeholder="Email" className=" rounded-none  input input-bordered w-full " />
    <input type="password" placeholder="Password" className=" rounded-none input input-bordered w-full " />
      <form method="dialog">
        <button className="btn  btn-neutral w-full rounded-none  bg-red-500">{title}</button>
      </form>
    </div>
  </div>
</dialog>
        
    </div>
  )
}



export const LoginButton = ({title})=> {
  //console.log(title);
  signuporLogin = title
  
  return (
    <div>
        <button className="btn  rounded-none border-none forced-color-adjust-none btn-link mr-5  text-white no-underline" onClick={()=>document.getElementById(title).showModal()}>{signuporLogin}</button>
    </div>
  )
}
