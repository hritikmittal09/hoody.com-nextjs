'use client'
import React from 'react'

export const  Login = ()=> {
  return (
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-full ">
    <h3 className="font-bold text-lg">Login</h3>

    <div  className="modal-action flex flex-col w-full gap-10">
    <input type="email" placeholder="Email" className=" rounded-none  input input-bordered w-full " />
    <input type="password" placeholder="Password" className=" rounded-none input input-bordered w-full " />
      <form method="dialog">
        <button className="btn  btn-neutral w-full rounded-none  bg-red-500">Login</button>
      </form>
    </div>
  </div>
</dialog>
        
    </div>
  )
}



export const LoginButton = ()=> {
  return (
    <div>
        <button className="btn  rounded-none border-none forced-color-adjust-none btn-link mr-5  text-white" onClick={()=>document.getElementById('my_modal_4').showModal()}>Login</button>
    </div>
  )
}
