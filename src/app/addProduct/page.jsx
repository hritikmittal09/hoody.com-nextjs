'use client'
import { Alert } from "@/common/Alerts"
import { AddProductionAction } from "actions/actions"
import { useState } from "react"

function AddProductPage (){
    
    const [Notification,setnotifi] = useState(null)
    const onSubmit = async (Product)=>{
try {
    const res = await AddProductionAction(Product)
    setnotifi(res.data)
    
    console.log(res);
    
} catch (error) {
    
}
    }
    
    return (
        <>
         <div className="flex justify-center items-center h-screen bg-gray-100">
            <form  className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md" action= {onSubmit}>
                <h2 className="text-2xl mb-6 text-center">Add Product</h2>
                <div>
                {Notification && <Alert message={Notification}/>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                        Image URL
                    </label>
                    <input
                        type="text"
                        name="imageUrl"

                        className="input input-bordered w-full rounded-none"
                        placeholder="Enter image URL"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        className="input input-bordered w-full rounded-none"
                        placeholder="Enter product title"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="text"
                        name="price"
                       
                        className="input input-bordered w-full rounded-none"
                        placeholder="Enter price"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        name="description"
                        
                        className="textarea textarea-bordered w-full rounded-none"
                        placeholder="Enter product description"
                    ></textarea>
                </div>
               

                <div className="flex items-center justify-between">
                    <button type="submit" className="btn   bg-red-500 text-white rounded-none w-full ">
                        Add Product
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}
export default AddProductPage