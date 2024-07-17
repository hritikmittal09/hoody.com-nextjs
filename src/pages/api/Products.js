// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectDb } from "@/db/db"
import user from "@/models/user"
import product from "@/models/prodcts"
export default async function handler(req, res) {
 await connectDb()
 if (req.method === 'GET') {
  const AllProducts = await product.find({});
   
  res.status(200).json(AllProducts)
  

  
 }
}
