import axios from "axios"
export const getPosts=async()=>{
    try{
        const response = await axios.get("http://localhost:4000/api/blogs");
        return response.data
    }catch(e){
        throw new Error(e.message)
    }
}