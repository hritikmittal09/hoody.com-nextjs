'use client'
import { LoginRegister } from 'actions/actions'
import React, { useState } from 'react'
import { Alert } from './Alerts'
import { ToastContainer, toast } from 'react-toastify';
  //import 'react-toastify/dist/ReactToastify.css';
  
let signuporLogin = ''


export const  Login = ({title})=> {
  const [notification ,setnotification] = useState(null)
  const registerOrFail = async(data)=>{
    const res = await LoginRegister(data)
    if (res.data) {
      setnotification(res.data)
      setTimeout(()=>{
        setnotification(null)
      },5000)
    }
      
      
    //  document.querySelector("#email").value = "" 
      //document.get("#pas").value = ''
      
    
    
    
  
  
  }
  
  
  return (
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id={title} className="modal z-10">
  <div className="modal-box w-full ">
    <h3 className="font-bold text-lg"> {title}</h3>
    

    <div  className="modal-action flex flex-col w-full gap-10">
    
    
      <form  action={ registerOrFail} className=' gap-3'> 
        {notification && <Alert message={notification}/>}
      { title=="Sign-up" && <input type="text" placeholder="Name" name='userName' className=" rounded-none  input input-bordered w-full  mt-5" />}
      <input type="email" placeholder="Email" name='email' className=" rounded-none  input input-bordered w-full  mt-5" />
      <input type="password" placeholder="Password"  name='pas' className=" rounded-none input input-bordered w-full  mt-5 mb-5" />
      <input type="hidden" placeholder=""  name='title' value={title} className=" rounded-none input input-bordered w-full  mt-5 mb-5" />
        <button className="btn  btn-neutral w-full rounded-none  bg-red-500" >{title}</button>
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
