'use client'
import axios from "axios"
import React, { useState } from 'react';

const Page = () => {
  const [category, setCategory]=useState('')
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleUpload = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/blogs', {
        title,
        body: content,
        category,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setTitle('')
      setCategory('')
      setContent('')
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full min-h-screen pt-16 pb-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-4 font-semibold text-orange-400">New Post</h1>
      <form className="w-full max-w-4xl pt-6 pb-3 px-7 border-2 border-slate-600 rounded-md">
        <input
          placeholder="Title..."
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="capitalize w-full mb-4 pt-3 pb-2.5 pl-4 border-2 border-slate-600 rounded-md bg-transparent outline-none text-slate-200"
        />
        <textarea
          placeholder="Content......"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="resize-none w-full h-96 bg-transparent outline-none border-2 border-slate-500 rounded-lg pl-4 py-2 text-slate-300"
        ></textarea>
        <div className="w-full flex justify-between px-6 mt-2">
          <input value={category} onChange={(e)=>setCategory(e.target.value)} type="text" placeholder="Category" className="text-sm text-slate-100 bg-slate-800 outline-none ring-2 ring-slate-700 pl-4 w-72" />
          <div>
            <button
              type="button"
              onClick={handleUpload}
              className="w-24 py-1.5 rounded-md bg-red-600 text-slate-100 font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
