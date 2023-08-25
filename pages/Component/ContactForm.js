import React from 'react'
import {motion} from 'framer-motion'

export default function ContactForm() {
  return (
    <div className='containerWrap2 h-[100%] flex flex-col justify-start p-4'>
        <div className='text-center'>
            <motion.h1 
                initial={{opacity:0,translateY:40}} 
                whileInView={{opacity:1,translateY:0}} 
                transition={{duration:0.5}} 
                viewport={{once:true}} 
                className='text-3xl md:text-5xl font-extrabold text-[#4831d4] my-9'>
                Send Me Message!
            </motion.h1>
            <motion.p 
             initial={{opacity:0,translateY:40}} 
             whileInView={{opacity:1,translateY:0}} 
             transition={{duration:0.5}} 
             viewport={{once:true}} 
             className='my-4 text-xl md:text-2xl text-[#3d155f]'>
                  Got a question or proposal, or just want<br/>
                  to say hello? Go ahead.
            </motion.p>
        </div>
        <div className=' flex justify-center '>
          <div className='grid w-[90%] md:w-[60%]  grid-cols-4 grid-rows-3 md:grid-rows-2 gap-x-2 gap-y-8'>
               <div className='col-span-4 md:col-span-2 border-b-[1px] border-black'>
               <span>Your Name</span>
               <input className='py-2 outline-none'  type='text' placeholder='Enter Your name'/>
               </div>
               <div className='col-span-4 md:col-span-2 border-b-[1px] border-black '>
               <span>Email Address</span>
                      <input className='py-2 outline-none' type='text' placeholder='Email Address'/>
               </div>
               <div className='border-b-[1px] border-black col-span-4'>
               <span className=''>
                     Your Message
                  </span>
             <input type='text' className='outline-none py-2' placeholder='Your Message'/>
               </div>
          </div>
        </div>
        {/* <div className='flex flex-col md:flex-row justify-center bg-red-500'>
            <div className='w-[90%] md:w-[30%] font-popins'>
                <div className='flex-1 my-4  
                                border-b-[1px] 
                                border-gray-500  ml-4'>
                    <span>Your Name</span>
                    <input className='py-2 outline-none'  type='text' placeholder='Enter Your name'/>
                </div>
            </div>
            <div className='w-[90%] md:w-[30%] font-popins'>
                <div className='flex-1 my-4  
                                border-b-[1px] border-gray-500  
                                ml-4'>
                      <span>Email Address</span>
                      <input className='py-2 outline-none' type='text' placeholder='Email Address'/>
                </div>
            </div>
        </div> */}
        {/* <div className='flex justify-center'>
             
            <div className='w-[90%] md:w-[60%] 
                            border-b-[1px] border-gray-500 
                            font-popins my-8  py-2 '>
                  <span className='py-2'>
                     Your Message
                  </span>
             <input type='text' className='outline-none' placeholder='Your Message'/>
            </div>
            
            </div> */}
        <div className='flex justify-center py-4'>
            <div className='w-[90%] md:w-[30%] border-[1px] 
                          border-[#4831d4] text-[#4831d4] 
                            text-center p-4 text-2xl 
                            font-popins hover:bg-[#4831d4] 
                            hover:text-white duration-200'>
                
                 Shoot Message
            </div>

        </div>
    </div>
  )
}
