import React from 'react'

const LoadPosts = () => {
  return (
    <div className="flex pt-4 pb-3 px-4 flex-col gap-2 h-64 bg-slate-700 rounded-md ring-2 ring-slate-600 animate-pulse drop-shadow-2xl">
        <div className="pb-3 pl-2 w-full h-[58%] bg-slate-800 rounded-lg ring-2 ring-slate-600"></div>
        <div className="w-[90%] flex gap-4">
        <div className="flex-1 h-8 bg-slate-800 rounded-md ring-2 ring-slate-600"> </div>
        <div className="flex-1 h-8 bg-slate-800 rounded-md ring-2 ring-slate-600"> </div>
        </div>
        <div className="w-full flex-1 bg-slate-800 rounded-md "></div>
    </div>
  )
}

export default LoadPosts
