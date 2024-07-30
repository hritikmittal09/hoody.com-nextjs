import mongoose from "mongoose"


const ProductSechma = new mongoose. Schema({
    image :{
        type : String,
        required : true,

    } ,
    price :{
        type : Number,
        required : true,
    },
    title : {
        type : String,
        required : true,
    },
    dis : {
        type : String,
        required: true
    }
})
mongoose.models = {}

//const product = models.product || model("product", ProductSechma)
export default  mongoose.model("product",ProductSechma)