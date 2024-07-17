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

const inter = Inter({ subsets: ['latin'] })

export default  function  Home() {
  const [ProductsList,setProducts] =  useState([]);
  useEffect( ()=>{
    const getproduct = async ()=>{
   // await connectDb()
    try{
      
    const res = await axios.get('/api/Products')

//console.log(res.data);

setProducts(res.data)
    }catch(error){
      console.log(error);
    }
  }
  getproduct()
  },[])
  

  
  return (
    <>
    <HeroSection/>
  <div className=' flex flex-row gap-52 flex-wrap justify-center' >
  {ProductsList.map((product,i)=>{
    return <ProductCard key={i} image = {product.image}
    title = {product.title} dis = {product.dis} price = {product.price}/>
  })}
  </div>
  </>
  )  
  
}
