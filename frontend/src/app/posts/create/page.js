import React from 'react'
import { MdEmojiEmotions,MdEditLocation,MdInsertLink } from "react-icons/md";
import { FaRegImages } from "react-icons/fa6";
const page = () => {
  return (
    <div className="w-full min-h-screen pt-16 pb-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-4 font-semibold text-orange-400">New Post</h1>
      <form className="w-full max-w-4xl pt-6 pb-3 px-7 border-2 border-slate-600 rounded-md">
        <input placeholder="Title..." type="text" className="capitalize w-full mb-4 pt-3 pb-2.5 pl-4 border-2 border-slate-600 rounded-md bg-transparent outline-none text-slate-200" />
        <textarea placeholder="Content......" className="resize-none w-full h-96 bg-transparent outline-none border-2 border-slate-500 rounded-lg pl-4 py-2 text-slate-300"></textarea>
        <div className="w-full flex justify-between px-6 mt-2">
          <div>
            <button>
              <MdEmojiEmotions />
            </button>
            <button>
              <FaRegImages />
            </button>
            <button>
              <MdEditLocation />
            </button>  
            <button>
              <MdInsertLink />
            </button>
          </div>
          <div>
            <button className="w-24 py-1.5 rounded-md bg-red-600 text-slate-100 font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300">Save</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default page
