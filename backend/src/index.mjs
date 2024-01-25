import express from "express"
import monggose from "mongoose"
import blogRouter from "./routers/blogRouter.mjs";
import dotenv from "dotenv"
import cors from 'cors';

dotenv.config()

const app=express();
const PORT=process.env.PORT || 3000
const MONGO_URL=process.env.MONGO_URL

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(blogRouter)
app.use("/", (req, res) => {
    res.redirect('/api/blogs');
});  

monggose.connect(MONGO_URL)
.then(()=>{
    console.log("mongooDB conected")
}).catch((e)=>{
    console.log(e)
})


app.listen(PORT,()=>{
    console.log("app run PORT ",PORT)
})
