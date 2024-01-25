'use client'
import Image from "next/image"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import { getPosts } from '@/library/functions/posts'
import LoadPosts from '@/components/home/LoadPosts'
import { robotoSemiBold } from '@/library/font/font'

const page = () => {
  const { data:posts, isLoading }=useQuery({
    queryKey:["posts"],
    queryFn:getPosts,
  })
  return (
    <main className="w-full min-h-screen pt-24 px-16 pb-8">
        <h1 className={`${robotoSemiBold.className} lg:text-7xl text-cyan-400 text-center mb-6`}>Posts</h1>
        <div className={`h-full ${isLoading?"grid grid-cols-4 gap-5":"flex justify-around gap-5 flex-wrap"}  mt-2`}>
          {isLoading?
            Array.from({length:8}).map((_,index)=>(
              <LoadPosts key={index} />
            ))
          :
            posts.map((post)=>(
              <Link key={post._id} href={`/posts/${post._id}`} className="w-64 h-72 pt-2 pb-1.5 px-2 bg-gradient-to-b from-slate-700 to-slate-800 ring-2 ring-slate-500 rounded-md drop-shadow-2xl hover:scale-105 transition-all duration-200">
               <Image />
               <h1 className={`${robotoSemiBold.className} text-xl text-slate-100 capitalize mb-1`}>{post.title}</h1>
               <p className="text-sm first-letter:uppercase text-slate-300">{post.body}</p>
              </Link>
            ))
          }
        </div>
    </main>
  )
}

export default page
