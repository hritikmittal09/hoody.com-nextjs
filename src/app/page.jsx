'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { getUsers } from '@/lib/getUsers'
import ProductCard from '@/common/ProductCard'
import { connectDb } from '@/db/db'
import axios from 'axios'
import { useState,useEffect } from 'react'
import HeroSection from '@/common/HeroSection'
import { Login } from '@/common/Login'
import { revalidatePath } from 'next/cache'
import { AddProductBut } from '@/common/AddProduct'
const inter = Inter({ subsets: ['latin'] })

export default  function  Home() {
  const [ProductsList,setProducts] =  useState([]);
  const [isAdmin,setIsamin] = useState(false)

  useEffect( ()=>{
    const getproduct = async ()=>{
   // await connectDb()
   //revalidatePath("/")
    try{
      
    const res = await axios.get('/api/Products')
    const Admin = await axios.get("/api/adminAuth")


//console.log(res.data);

setProducts(res.data)
setIsamin(Admin.data)
//console.log(Admin.data);
    }catch(error){
      console.log(error);
    }
  }
  getproduct()
  },[])
  

  
  return (
    <>
    {isAdmin && <AddProductBut/>}
    <HeroSection/>
    
  <div className=' flex flex-row gap-52 flex-wrap justify-center' >
  {ProductsList.map((product,i)=>{
    return <ProductCard key={i} image = {product.image}
    title = {product.title} dis = {product.dis} price = {product.price} id = {product._id.toString()}/>
  })}
  </div>
  </>
  )  
  
}
