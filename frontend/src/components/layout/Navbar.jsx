'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import Nav from './items/nav'
import { robotoSemiBold } from '@/library/font/font'


const Navbar = () => {
    const [style, setStyle]=useState(false)
    const router=usePathname()
    const authenticated=true

    useEffect(()=>{
        const handleNavbar=()=>{
            if(window.scrollY>0){
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
  return (
    <header className={`fixed top-0 left-0 flex items-center justify-center h-16 bg-none w-full z-20`}>
        <div className="flex-1  flex justify-center">
            <h1 className={`${style?"opacity-0":"opacity-100"} text-slate-100 transition-all duration-300`}>Logo</h1>
        </div>
        <Nav style={style} router={router} />
        <div className={`flex-1 flex justify-center items-center ${style?"opacity-0":"opacity-100"}`}>
            {authenticated?
                <Link href={'/posts/create'}>
                    <button className={`${robotoSemiBold.className} text-lg text-slate-300 w-24 py-1.5 rounded-md bg-gray-800 border-2 border-slate-600`}>Create</button>
                </Link>
                :
                <div className={`flex items-center gap-4 transition-all duration-300`}>
                    <Link href={'/auth/login'}>
                        <button className="w-24 py-2 bg-slate-900 text-slate-100 font-semibold ring-2 ring-slate-500 rounded-lg drop-shadow-lg hover:scale-105 transition-all duration-300">Login</button>
                    </Link>
                    <Link href={'/auth/signup'}>
                        <button className="w-24 py-2 bg-slate-700 text-slate-100 font-semibold ring-2 ring-slate-500 rounded-lg drop-shadow-lg hover:scale-105 transition-all duration-300">Sign Up</button>
                    </Link>
                </div>
            }
        </div>
    </header>
  )
}

export default Navbar
