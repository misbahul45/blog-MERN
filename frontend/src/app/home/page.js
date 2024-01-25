'use client'
import Link from "next/link"
import { robotoSemiBold } from "@/library/font/font"
import { getPosts } from "@/library/functions/posts"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import LoadPosts from "@/components/home/LoadPosts"

const page = () => {

  const { data:posts, isLoading }=useQuery({
    queryKey:["posts"],
    queryFn:getPosts,
  })

  return (
    <main className="w-full h-full pt-24 lg:px-20">

    </main>
  )
}

export default page
