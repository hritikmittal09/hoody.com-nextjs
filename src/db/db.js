import mongoose from "mongoose";
export const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MongoDbUri)
       // console.log("sucess");
    } catch (error) {
        console.log(error);
        
    }
}