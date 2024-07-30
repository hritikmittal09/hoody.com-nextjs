"use server"
import { connectDb } from "@/db/db";
import product from "@/models/prodcts";
import user from "@/models/user"
import { data } from "autoprefixer";
import  jwt from 'jsonwebtoken' 
import { cookies } from "next/headers";



export const LoginRegister = async (data)=>{
//const name = 'test';
const title = data.get('title');
const UserName = data.get('userName')
const email = data.get('email');
const password = data.get('pas');
let isAdmin = data.get("isAdmin");
if (isAdmin== 'on') {
    isAdmin = true
} else {
    isAdmin = false
}

if (email == '' || password == '') {
return {data : "please filll email & password "}
    
}

//console.log(title);
await connectDb()
if (title == 'Sign-up' ) {
    try {
        const newuser = await new user({name : UserName, password : password,email : email,isAdmin : isAdmin});
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
        const {id,isAdmin} =userexist[0]
        const payload = {
            id,
            isAdmin
        }
       const token =  await jwt.sign(payload,process.env.SECRET_KEY)
       //console.log(token);
       cookies().set("auth", token)
       


        
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
export const AddProductionAction =async (Product)=>{
try {
    const img =Product.get('imageUrl')
    const title = Product.get('title')
    const price = Product.get('price')
    const dis = Product.get('description')
    console.log(title);
    await connectDb()
    const newProdoct = await new product({image : img,dis : dis, title,title,price : price})
   await newProdoct.save()
       return {data : "Product saved sucessfully"}


} catch (error) {
    console.log(error);
    return{data :"someting went wrong please try again leter !!"}
    
}
}