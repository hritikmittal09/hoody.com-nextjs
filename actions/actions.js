"use server"
import { connectDb } from "@/db/db";
import user from "@/models/user"
import mongoose from "mongoose";
export const LoginRegister = async (data)=>{
const name = 'test';
const email = data.get('email');
const password = data.get('pas');
if (email == '' || password == '') {
return {data : "please filll email & password "}
    
}

await connectDb()
try {
    const userexist = await user.find({email})
    
    if (userexist.length!= 0) {
        //console.log("user exist");
        return {data : 'Login sucussful please press ESC key to continue'}
    
    }else if(userexist.length ==0){
        //console.log("user doest exist ");
        return { data :'user doest exist'}
    
    }
    
    
} catch (error) {
    console.log(error);
    return {data : "something went wrong !"}
    
}




}