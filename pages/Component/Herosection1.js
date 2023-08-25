'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Profile from '../../Images/Profile.jpg'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {motion} from 'framer-motion'
import TransitionPage from './Transitionpage'
import Particles1 from './Particles1'
import Navbar from './Navbar'

export default function Herosection1() {
    const router = useRouter()

  return (
    <AnimatePresence mode='wait'>
    <motion.div key={router.route} className='herosectionBg'>
        <TransitionPage/>
        <div className='containerWrap2'>
         
       


            <div className='flex flex-col lg:flex-row'>
                <div  className=' flex-1 p-3 mt-[40px]'>
                    <div className='text-5xl lg:text-7xl font-bold my-4 text-[#ccf381] p-3'>
                        <h1>Full Stack</h1>
                        <h1>Developer</h1>
                    </div>
                    <div className='text-slate-200 text-md md:text-lg my-4 p-3 font-popins'>
                        <p>I like to craft solid and scalable frontend products <br/> with great user experiences.</p>
                    </div>
                    
                </div>
                <div className=' flex-1 p-3 relative  mt-[40px]'>
                    <Particles1/>
                    {/* <Particles1/> */}
                                       
                    {/*for mid screen */}
                    
                    <div className='w-[200px] h-[200px] lg:w-[300px] lg:h-[400px] border-2 m-4  '>
                        <Image className='object-cover translate-y-4  translate-x-4' alt='profile_image' 
                        src={Profile} width={400} height={300}/>
                        
                    </div>
                </div>

            </div>




        </div>
    </motion.div>
    </AnimatePresence>
  )
}
