"use client"
import React from 'react'


const About = () => {

  return (
    <div className='text-white'>
        <img className=' absolute   w-full h-56 opacity-85' src="\about.jpg" alt="about image" />
          <div className='flex  flex-col mx-[440px] text-xl gap-12 '>
            <div className=' relative flex gap-7 items-center'>
             <img className='invert-0 w-[60px] h-[60px]' src="\welcome.png" alt="" />
            <p className=' py-9 text-slate-800 font-bold'>Welcome to ImpactAllience, where our mission is to make the world a better place by supporting those in need.</p>
            </div>
            <div className='flex flex-col gap-7'>
            <h2 className='text-lime-400 mt-24 font-bold text-center '>Our Mission</h2>
            <p className='text-slate-300'>We aim to provide resources, support, and opportunities to individuals and communities facing hardships.</p>
            </div>
            <div className='flex flex-col gap-7'>
            <h2 className='text-lime-400 font-bold text-center '>Our Vision</h2>
            <p className='text-slate-300'>We envision a world where everyone has the opportunity to thrive, regardless of their circumstances.</p>
            </div>
            <div className='flex flex-col gap-7'>
            <h2 className='text-lime-400 font-bold text-center '>Our Team</h2>
            <p className='text-slate-300'>Our team is composed of dedicated professionals and volunteers who are passionate about making a difference.</p>
            </div>
            <div className='flex flex-col gap-7 pb-9'>
            <h2 className='text-lime-400 font-bold text-center '>Our History</h2>
            <p className='text-slate-300'>Founded in 2024, ImpactAllience has grown from a small local initiative to a global organization with numerous projects and programs.</p>
            </div>
            </div>
    </div>
  )
}

export default About
