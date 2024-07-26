"use server"
import { connectDb } from "@/db/db";
import user from "@/models/user"
import mongoose from "mongoose";



export const LoginRegister = async (data)=>{
//const name = 'test';
const title = data.get('title');
const UserName = data.get('userName')
const email = data.get('email');
const password = data.get('pas');
if (email == '' || password == '') {
return {data : "please filll email & password "}
    
}

//console.log(title);
await connectDb()
if (title == 'Sign-up' ) {
    try {
        const newuser = await new user({name : UserName, password : password,email : email,isAdmin : true});
        newuser.save()
        return {data : 'singup sucussful please press ESC key to continue'}

    } catch (error) {
        console.log(error);
        return {data : 'user already exist or something went wrong'}
        
        
    }
    
}else{
try {
    const userexist = await user.find({email})
    
    if (userexist.length!= 0) {
        if (password != userexist[0].password) {
            return {data : "wrong password !!"}
            
        }
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




}