'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link"
import React, { useEffect, useState } from 'react'


const Navbar = () => {
    const [style, setStyle]=useState(false)
    const router=usePathname()
    console.log(router)
    useEffect(()=>{
        const handleNavbar=()=>{
            if(window.scrollY>20){
                setStyle(true)
            }else{
                setStyle(false)
            }   
        }
        window.addEventListener("scroll",handleNavbar)

        return ()=>{
            window.removeEventListener("scroll",handleNavbar)
        }
    },[])
    console.log(style)

  return (
    <header className={`fixed top-0 left-0 flex items-center justify-center h-16 bg-none w-full`}>
        <div className="flex-1  flex justify-center">
            <h1 className={`${style?"opacity-0":"opacity-100"} text-slate-100 transition-all duration-300`}>Logo</h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
            <ul className={`relative h-10 flex items-center ${style?"rounded-full bg-gradient-to-tr from-slate-700 to-gray-800 ring-2 ring-slate-600":""} transition-all duration-300`}>
                <li className={`relative w-32 h-full flex items-center justify-center text-slate-100 font-semibold uppercase group cursor-pointer`}>
                    <Link className="w-full h-full flex items-center justify-center z-10" href={'/home'}>Home</Link>
                    <span className={`rounded-full group-hover:bg-slate-900 absolute -translate-x-1/2 left-1/2 bottom-0 h-full w-0 group-hover:w-full transition-all duration-300`}></span>
                </li>
                <li className={`relative w-32 h-full flex items-center justify-center text-slate-100 font-semibold uppercase group cursor-pointer`}>
                    <Link className="w-full h-full flex items-center justify-center z-10" href={'/about'}>About</Link>
                    <span className={`rounded-full group-hover:bg-slate-900 absolute -translate-x-1/2 left-1/2 bottom-0 h-full w-0 group-hover:w-full transition-all duration-300`}></span>
                </li>
                <li className={`relative w-32 h-full flex items-center justify-center text-slate-100 font-semibold uppercase group cursor-pointer`}>
                    <Link className="w-full h-full flex items-center justify-center z-10" href={'/posts'}>Posts</Link>
                    <span className={`rounded-full group-hover:bg-slate-900 absolute -translate-x-1/2 left-1/2 bottom-0 h-full w-0 group-hover:w-full transition-all duration-300`}></span>
                </li>
                <span className={`absolute w-32 h-full bg-slate-900 rounded-full shadow-lg shadow-white/10 ${router==="/home"?"left-0":router==="/about"?"left-1/2 -translate-x-1/2":"left-2/3"} transition-all duration-100`}></span>
            </ul>
        </div>
        <div className="flex-1 flex justify-center items-center">
            <div className={`${style?"opacity-0":"opacity-100"} transition-all duration-300`}>
                <Link href={'/auth/login'}>
                    <button>Login</button>
                </Link>
                <Link href={'/auth/signup'}>
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar
