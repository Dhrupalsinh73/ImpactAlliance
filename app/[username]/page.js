
import React from 'react'

const Username = ({params}) => {
  return (
    <>
    <div className='cover relative text-white w-full'>
      <img className='object-cover w-full h-[350]' src='https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/16.gif?token-time=1720051200&token-hash=uQ4xRk-E70ILXfBgjf7fxN5N8jCiLolCwf1x5Amw6cQ%3D'></img>
      <div className='absolute -bottom-16 right-[46%] '>
        <img className='w-28 h-28 rounded-full 'src='/my.jpg'></img>
      </div>
    </div>
    <div className='flex flex-col py-16 justify-center items-center '>
        <div className='font-bold text-xl'>
          @Dhrupalsinh73
          {/* @{params.username} */}
        </div>
        <div className='text-slate-400'>
        Creating Animated art for VTT
        </div>
        <div  className='text-slate-500'>
        11,958 members.85 posts.$16,250/release
        </div>
        <div className='payment flex gap-3 w-[80%] mt-2'>
          <div className='supporter  w-1/2 bg-slate-900 text-white rounded-lg p-5'>
          <h2 className='font-bold text-2xl  my-5'>supporters</h2>
             <ul className='mx-7'>
              <li className='my-2 flex items-center gap-2'>
                <img className=' w-8 h-8' src='\profile.gif' alt='profile_icon'></img>
                <span>Paras donated <span className="font-bold">$30 </span>I support you brother lots of love</span>
              </li>
              <li className='my-2 flex items-center gap-2'>
                <img className=' w-8 h-8' src='\profile.gif' alt='profile_icon'></img>
                <span>Ajay donated  <span className="font-bold">$20 </span>I support you brother lots of love</span>
              </li>
              <li className='my-2 flex items-center gap-2'>
                <img className=' w-8 h-8' src='\profile.gif' alt='profile_icon'></img>
                <span>Darshit donated  <span className="font-bold">$10 </span>I support you brother lots of love</span>
              </li>
              <li className='my-2 flex items-center gap-2'>
                <img className=' w-8 h-8' src='\profile.gif' alt='profile_icon'></img>
                <span>Paras donated  <span className="font-bold">$30 </span>I support you brother lots of love</span>
              </li>
              <li className='my-2 flex items-center gap-2'>
                <img className=' w-8 h-8' src='\profile.gif' alt='profile_icon'></img>
                <span>Ajay donated  <span className="font-bold">$20 </span>I support you brother lots of love</span>
              </li>
              <li className='my-2 flex items-center gap-2'>
                <img className=' w-8 h-8' src='\profile.gif' alt='profile_icon'></img>
                <span>Darshit donated  <span className="font-bold">$10 </span>I support you brother lots of love</span>
              </li>
              <li className='my-2 flex items-center gap-2'>
                <img className=' w-8 h-8' src='\profile.gif' alt='profile_icon'></img>
                <span>Paras donated  <span className="font-bold">$30 </span>I support you brother lots of love</span>
              </li>
              <li className='my-2 flex items-center gap-2'>
                <img className=' w-8 h-8' src='\profile.gif' alt='profile_icon'></img>
                <span>Ajay donated  <span className="font-bold">$20 </span>I support you brother lots of love</span>
              </li>
              <li className='my-2 flex items-center gap-2'>
                <img className=' w-8 h-8' src='\profile.gif' alt='profile_icon'></img>
                <span>Darshit donated  <span className="font-bold">$10 </span>I support you brother lots of love</span>
              </li>
              <li className='my-2 flex items-center gap-2'>
                <img className=' w-8 h-8' src='\profile.gif' alt='profile_icon'></img>
                <span>Paras donated  <span className="font-bold">$30 </span>I support you brother lots of love</span>
              </li>
              <li className='my-2 flex items-center gap-2'>
                <img className=' w-8 h-8' src='\profile.gif' alt='profile_icon'></img>
                <span>Ajay donated  <span className="font-bold">$20 </span>I support you brother lots of love</span>
              </li>
              <li className='my-2 flex items-center gap-2'>
                <img className=' w-8 h-8' src='\profile.gif' alt='profile_icon'></img>
                <span>Darshit donated  <span className="font-bold">$10 </span>I support you brother lots of love</span>
              </li>
             </ul>
          </div>
          <div className='make payment w-1/2 bg-slate-900 text-white rounded-lg p-2'>
          <h2 className='font-bold text-2xl  my-5'></h2>
              <div className='flex flex-col gap-2'>
                <div>
                <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='enter name'/>
                </div>
                <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='enter massege'/>
                <input type='text' className='w-full p-3 rounded-lg bg-slate-800' placeholder='enter amout'/>
                <div className='text-center'><button type="button" class="text-white px-9 w-fit bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br hover:from-green-500 hover:via-green-600 hover:to-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button></div>
              </div>
              <div className='flex gap-2 mt-5'>
                <button className='p-3 rounded-lg bg-slate-800'>pay $10</button>
                <button className='p-3 rounded-lg bg-slate-800'>pay $20</button>
                <button className='p-3 rounded-lg bg-slate-800'>pay $30</button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
