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
            <Link href={'/posts/create'}>
                <button className={`${robotoSemiBold.className} text-lg text-slate-300 w-24 py-1.5 rounded-md bg-gray-800 border-2 border-slate-600`}>Create</button>
            </Link>
        </div>
    </header>
  )
}

export default Navbar
