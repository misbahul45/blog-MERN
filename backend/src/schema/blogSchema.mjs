import mongoose from "mongoose"

const Schema=mongoose.Schema

const blogSchema=new Schema({
    title:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    }
},{
    timestamps:true,
})
const Blog=mongoose.model("Blog", blogSchema)

export default Blog