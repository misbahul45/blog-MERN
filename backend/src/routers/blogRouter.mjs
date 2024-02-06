import { Router } from "express"
import Blog from "../schema/blogSchema.mjs"
import { validationResult, param, checkSchema, matchedData } from "express-validator"
import { blogValidatorQuery, blogValidator, blogPatchValidator } from "../validator/blogValidator.mjs"

const blogRouter=Router()
    blogRouter.get("/api/blogs/:idPost?",
        param('idPost').isString(),
        async(req,res,next)=>{
            try{
                const {params:{ idPost }}=req
                if(idPost!==undefined){
                    const blog=await Blog.findById(idPost)
                    if(!blog){
                       return res.status(400).send({ message:"Internal server error"})
                    }
                    return res.send(blog)
                }else{
                    next();
                }
            }catch(e){
                return res.status(400).send({message: "id not available"})
            }
        },
        checkSchema(blogValidatorQuery),
        async(req,res)=>{
            try{
                const { params:{ idPost } }=req
                const { title, category, body }= matchedData(req)
                const blogs=await Blog.find()
                let blog;
                if(blogs && idPost===undefined){
                    if(title && category && body){
                        blog=blogs.filter((blog)=>{
                            return blog.title.includes(title)&& blog.body.includes(body)&& blog.category.includes(category)
                         }
                        )
                    }else if(title){
                        blog=blogs.filter((blog)=>blog.title.includes(title))
                        return res.send(blog)
                    }else if(category){
                        blog=blogs.filter((blog)=>blog.category.includes(category))
                        return res.send(blog)
                    }else if(body){
                        blog=blogs.filter((blog)=>blog.body.includes(body))
                        return res.send(blog)
                    }
                        return res.send(blogs)
                }
                throw new Error("Internal Server Error")
            }catch(e){
                return res.status(500).send({message:e.message})
            }
        },
    )
    blogRouter.post("/api/blogs",
    blogValidator(),
    async(req,res)=>{
        try{
            const errorResult=validationResult(req)
            if(!errorResult.isEmpty()){
                return res.status(500).send({ msg:errorResult.array() })
            }
            const dataBlog=matchedData(req)
            const newBlog=new Blog(dataBlog)
            const isSuccesed=await newBlog.save()
            if(!isSuccesed){
                throw new Error("cannot save blog")
            }
            return res.send( { message:"Succesed" } )
        }catch(e){
            return res.status(500).send({ message:e })
        }
    })

    blogRouter.put("/api/blogs/:idPost",
        param('idPost').isString().notEmpty(),
        blogValidator(),
        async(req, res)=>{
            const { params:{ idPost } }=req
            const dataBlog=matchedData(req)
            if(idPost && dataBlog){
                try{
                    const errorResult=validationResult(req)
                    if(!errorResult.isEmpty()){
                        throw new Error("Cannot Update blog")
                    }else{
                        const updateBlog=await Blog.findByIdAndUpdate(idPost, dataBlog, { new:true })
                        if(updateBlog){
                            return res.send({ message:"Successed update" })
                        }else{
                            throw new Error("Blog Not Found")
                        }
                    }

                }catch(e){
                    return res.status(400).send( { message:e.message } )
                }
            }
        }
    )
    
    blogRouter.patch("/api/blogs/:idPost",
        param('idPost').isString().notEmpty(),
        blogPatchValidator(),
        async(req, res)=>{
            const updateItem=matchedData(req)
            const { params:{ idPost } }=req
            console.log(updateItem)
            try{
                if(idPost){
                    if(updateItem){
                        const updatBlog=await Blog.findByIdAndUpdate(idPost,updateItem,{ new:true })
                        if(updatBlog){
                            return res.send({ message:"Successed update"})
                        }else{
                            throw new Error("Can't update")
                        }
                    }
                }else{
                    throw new Error("updefined id")
                }
            }catch(e){
                return res.status(400).send({ message:e.message })
            }
        }
    )
    blogRouter.delete("/api/blogs/:idPost",
        async(req,res)=>{
            const { params:{idPost}}=req
            console.log(idPost)
            if(idPost){
                try{
                    const isDelete = await Blog.findOneAndDelete({ _id: idPost }).exec();
                    if(isDelete){
                        return res.send({ message:"Successed Delete" })
                    }else{
                        return  res.status(400).send({message:"Wrong delete item"})
                    }
                }catch(e){
                    return res.status(400).send({
                        message:e.message
                    })
                }
            }else{
                return res.status(400).send({
                    message:"undefined id"
                })
            }
        }
    )



export default blogRouter