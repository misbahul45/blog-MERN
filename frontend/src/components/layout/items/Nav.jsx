import React from 'react'
import Link from "next/link"

const Nav = ({style}) => {
  return (
    <div className="flex-1 flex justify-center items-center">
        <ul className={`relative h-10 flex items-center ${style?"rounded-full bg-gradient-to-tr from-slate-700 to-gray-800 ring-2 ring-slate-600 backdrop-blur-md":""} transition-all duration-300`}>
            <li className={`relative w-32 h-full flex items-center justify-center text-slate-100 font-semibold uppercase group cursor-pointer`}>
                <Link className="w-full h-full flex items-center justify-center z-10" href={'/posts'}>Posts</Link>
                <span className={`rounded-full group-hover:bg-slate-900 absolute -translate-x-1/2 left-1/2 bottom-0 h-full w-0 group-hover:w-full transition-all duration-300`}></span>
            </li>
        </ul>
    </div>
  )
}


export default Nav

