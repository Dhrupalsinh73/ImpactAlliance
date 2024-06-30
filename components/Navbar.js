"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const [showdropdown, setShowdropdown] = useState(false)
  const { data: session } = useSession() 
  return (
    <nav className=' text-white flex justify-between px-4 h-16 items-center inset-0-z-10 w-full  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] relative '>
       
      <Link className="logo flex items-center  p-5" href={"/"}>
        <div className=" flex items-center justify-center my-8 w-16 h-16 text-2xl font-bold text-green-500 border-y-2 border-indigo-700 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-full shadow-lg transform transition-transform hover:scale-110">
            IA
        </div>
        <div className="ml-4 text-2xl font-bold text-slate-400">
        ImpactAlliance</div>
      </Link>
      <div className='relative'>
      <ul className='flex  gap-10 justify-between items-center'>
        <Link className='hover:cursor-pointer'  href={"/"}>Home</Link>
        <Link className='hover:cursor-pointer' href={"/about"}>About</Link>

        {session && 
                 <><button onClick={()=>setShowdropdown(!showdropdown)}  onBlur={()=>{setTimeout(() => {setShowdropdown(false)}, 100);}} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">welcome {session.user.email}<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
                </button>

<div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute top-full left-[455px]  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      <li>
        <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
      </li>
      <li>
        <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={()=>(signOut())}>Sign out</Link>
      </li>
    </ul>
</div></>
}

        {session &&
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>(signOut())}>Logout</button>}
        {!session && <Link href={"/login"} className='hover:cursor-pointer font-bold'><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Login</button></Link>}
       </ul>
      </div>
    </nav>
  )
}

export default Navbar

