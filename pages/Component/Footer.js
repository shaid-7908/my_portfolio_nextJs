import React from 'react'
import {FaGithub,FaLinkedin,FaFacebook} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='containerWrap2 p-4  h-[100%] '>
         <h1 className='text-slate-400 tracking-[4px] font-semibold'>SAY HELLO</h1>
         <div className='h-[60%] flex md:flex-row flex-col border-b-2 border-[#ccf381]'>
             <div className='flex-1 flex flex-col '>
             <span className='text-[#ccf381] mt-11 tracking-[2px] font-popins'>shahid451998@gmail.com</span>
    
             </div>
             <div className='flex-1 flex flex-col'>
             <div className='my-4 md:mt-11 text-[#ccf381] tracking-[2px] font-popins text-lg'>My Work</div>
             <div className='my-4 md:mt-11 text-[#ccf381] tracking-[2px] font-popins text-lg'>My Self</div>
             <div className='my-4 md:mt-11 text-[#ccf381] tracking-[2px] font-popins text-lg'>My Remsume</div>
             </div>
         </div>
         <div className='flex'>
            <h1 className='text-[#ccf381] mt-4 flex-1'> <span>&copy;</span> Bengali Coder</h1>
            <div className='flex-1 mt-4 flex'>
            <span className='mx-6 text-2xl  text-[#ccf381]'><FaGithub/></span>
            <span className='mx-6 text-2xl  text-[#ccf381]'><FaLinkedin/></span>
            <span className='mx-6 text-2xl text-[#ccf381]'><FaFacebook/></span>
            </div>
         </div>
    </div>
  )
}
