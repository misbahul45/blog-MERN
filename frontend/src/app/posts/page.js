'use client'
import { useQuery } from "@tanstack/react-query";
import { getPosts } from '@/library/functions/posts';
import LoadPosts from '@/components/home/LoadPosts';
import { robotoSemiBold } from '@/library/font/font';
import { useRef, useState } from "react";
import axios from "axios";

const Page = () => {
  const { data: posts, isLoading, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  const [edit, setEdit] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');

  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  const handleEdit = async (id) => {
    setEdit(edit === "" ? id : '');
    
    if (edit === id) {
      try {
        await axios.patch(`http://localhost:4000/api/blogs/${id}`, {
          title: editTitle,
          body: editBody,
        });
      } catch (error) {
        console.error("Error updating post:", error);
      }
    }
  };

  const handleDelete=async(id)=>{
    try{
      await axios.delete(`http://localhost:4000/api/blogs/${id}`)
      refetch()
    }catch(e){
      console.log(e)
    }
  }

  return (
    <main className="w-full min-h-screen pt-24 px-16 pb-8">
      <h1 className={`${robotoSemiBold.className} lg:text-7xl text-cyan-400 text-center mb-6`}>Posts</h1>
      <div className={`h-full ${isLoading ? "grid grid-cols-4 gap-5" : "flex justify-around gap-5 flex-wrap"} mt-2`}>
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <LoadPosts key={index} />
          ))
        ) : (
          posts.map((post) => (
            <article key={post._id} className="flex flex-col justify-between w-64 h-72 pt-4 pb-3 px-4 bg-gradient-to-b from-slate-700 to-slate-800 ring-2 ring-slate-500 rounded-md drop-shadow-2xl hover:scale-105 transition-all duration-200">
              <div className={`flex flex-col ${edit === post._id && "gap-2"} `}>
                <div>
                  <h1
                    onInput={(e) => setEditTitle(e.target.textContent)}
                    ref={titleRef}
                    contentEditable={edit === post._id}
                    className={`${robotoSemiBold.className} text-xl text-slate-100 capitalize mb-1 px-2 py-1 outline-none ${edit === post._id ? "ring-2 ring-slate-500 rounded-md " : ""}`}
                  >
                    {post.title}
                  </h1>
                </div>
                <div>
                  <p
                    onInput={(e) => setEditBody(e.target.textContent)}
                    ref={bodyRef}
                    contentEditable={edit === post._id}
                    className={`text-sm first-letter:uppercase text-slate-300 px-2 py-1 outline-none ${edit === post._id ? "ring-2 ring-slate-500 rounded-md" : ""}`}
                  >
                    {post.body}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => handleEdit(post._id)} className="text-xl px-8 rounded-md py-1 bg-blue-600 text-slate-100 hover:bg-blue-800">
                  {edit === post._id ? "Save" : "Edit"}
                </button>
                <button onClick={()=>handleDelete(post._id)} className="text-xl px-8 rounded-md py-1 bg-red-600 text-slate-100 hover:bg-red-700">Delete</button>
              </div>
            </article>
          ))
        )}
      </div>
    </main>
  );
};

export default Page;
