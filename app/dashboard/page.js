"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const { data: session } = useSession() 
  if(!session) {
     const router= useRouter()
     router.push('/login')
  }
  return (
    <div className='flex flex-col  mx-[460px] '>
      <h2 className='text-center m-12 font-bold text-2xl'>Welcome to Your Dashboard</h2>
      <div className='flex flex-col gap-2'>
      <h4>Name</h4>
      <input className='w-full rounded-lg bg-slate-700 p-1' type='text'></input>
      </div>
      <div className='flex flex-col gap-2'>
      <h4>Email</h4>
      <input type="email" className='w-full rounded-lg bg-slate-700 p-1' ></input>
      </div>
      <div className='flex flex-col gap-2'>
      <h4>Username</h4>
      <input className='w-full rounded-lg bg-slate-700 p-1' type='text'></input>
      </div>
      <div className='flex flex-col gap-2'>
      <h4>Messege</h4>
      <input className='w-full rounded-lg bg-slate-700 p-1' type='text'></input>
      </div>
      <div className='text-center my-6'><button type="button" class="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br hover:from-violet-500 hover:via-violet-600 hover:to-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save</button></div>
    </div>
  )
}

export default Dashboard
