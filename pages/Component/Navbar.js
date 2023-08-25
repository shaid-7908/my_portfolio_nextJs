'use client'
import React from 'react'
import { useRouter } from 'next/router';

import  { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faX} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

import {motion} from 'framer-motion'

export default function Navbar({barcolor}) {
    const [navColor, setnavColor] = useState("transparent");
    const [navPosition,setNavPosition] = useState('absolute')
    const [navSrcollLinkColor,setNavScrollLinkColor] = useState(false)
    const router = useRouter()

    const listenScrollEvent = () => { 
        window.scrollY > 10 ? setnavColor("md:bg-white") : setnavColor("md:bg-transparent");
        window.scrollY > 10 ? setNavPosition('sticky') : setNavPosition('absolute');
        window.scrollY > 10 ? setNavScrollLinkColor(true) : setNavScrollLinkColor(false)
    }
   
  const [menuState,setMenuState]=useState(false)


  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  useEffect(() => {
    
    console.log('route change with dependency', router.pathname);
}, [router]);

  return (
   //  <div className='md:hidden absolute z-50 flex flex-col items-end right-0 top-[10px] '>
   //    <span className={`text-[${barcolor}] text-3xl p-2`} onClick={()=>{setMenuState(!menuState)
   //   console.log(menuState)   
   // }
   // }>
   //      {menuState ? <FontAwesomeIcon icon={faX}/> : <FontAwesomeIcon icon={faBars}/>}
   //      </span>
   //      <div className={`w-screen h-[35vh] bg-white  mt-3 ${menuState ? 'block' : ' hidden' } transition duration-1000 ease-in-out `}>
   //         <div className='w-[80%] h-[100%] mx-auto flex'>
   //               <ul className='flex-1'>
   //                <motion.li 
   //                   initial={{opacity:0,translateY:20}}
   //                   whileInView={{opacity:1,translateY:0}}
   //                   transition={{duration:0.5}}
   //                   className='my-4 text-[#ccf381] font-popins tracking-widest'>Home</motion.li>
   //                <motion.li 
   //                   initial={{opacity:0,translateY:20}}
   //                   whileInView={{opacity:1,translateY:0}}
   //                   transition={{duration:0.5}}
   //                   className='my-4 text-[#ccf381] font-popins tracking-widest'>About</motion.li>
   //                <motion.li 
   //                   initial={{opacity:0,translateY:20}}
   //                   whileInView={{opacity:1,translateY:0}}
   //                   transition={{duration:0.5}}
   //                   className='my-4 text-[#ccf381] font-popins tracking-widest'>Blog</motion.li>
   //                <motion.li 
   //                   initial={{opacity:0,translateY:20}}
   //                   whileInView={{opacity:1,translateY:0}}
   //                   transition={{duration:0.5}}
   //                   className='my-4 text-[#ccf381] font-popins tracking-widest'>Contact</motion.li>
   //                <motion.li 
   //                   initial={{opacity:0,translateY:20}}
   //                   whileInView={{opacity:1,translateY:0}}
   //                   transition={{duration:0.5}}
   //                   className='my-4 text-[#ccf381] font-popins tracking-widest'>Project</motion.li>
   //               </ul>
   //               <div className='flex-1 my-4 border-l-[1px] px-2 flex flex-col'>
   //                <motion.h1 
   //                initial={{opacity:0,translateY:20}}
   //                whileInView={{opacity:1,translateY:0}}
   //                transition={{duration:0.5}}
   //                className='text-slate-500 tracking-widest'>SAY HELLO</motion.h1>
   //                <motion.span
   //                    initial={{opacity:0,translateY:20}}
   //                    whileInView={{opacity:1,translateY:0}}
   //                    transition={{duration:0.5}} 
   //                    className='text-[#ccf381] font-popins '>
   //                 <a href='mailto:shahid451998@gmail.com'>Email</a>
   //                </motion.span>
   //                <motion.span 
   //                  initial={{opacity:0,translateY:20}}
   //                  whileInView={{opacity:1,translateY:0}}
   //                  transition={{duration:0.5}}
   //                  className='text-[#ccf381] font-popins my-2 '>
   //                 <a href='mailto:shahid451998@gmail.com'>Linkedin</a>
   //                </motion.span>
   //               </div>
   //         </div>
   //      </div>
   //  </div>
   <div className={`w-screen ${navPosition} ${navColor} top-0 z-40 `}
       style={{
        // backgroundColor:navColor,
        // position:navPosition,
        transition: "all 1s"
       }}
       >
      <div className='containerWrap2'>
      <div className='p-3 flex flex-col md:flex-row md:justify-start md:items-center font-popins relative'>
                

                <h1 className={`text-2xl  ${router.pathname != '/' || navSrcollLinkColor ? 'text-[#4831d4]' : 'text-[#ccf381]'}  tracking-wider mx-4`}>Bengali Coder</h1>
                <div className='absolute md:hidden right-2' onClick={()=>setMenuState(!menuState)}>
                {menuState ? <FontAwesomeIcon icon={faX}/> : <FontAwesomeIcon icon={faBars}/>}
                </div>

                
               {/* <Navbar barcolor="#ccf381"/> */}
                <nav className={`${menuState ? 'block' : 'hidden md:block'} transition duration-500 ease-in-out`}>
                    <ul className='flex flex-col md:flex-row justify-around text-lgn tracking-wider  '>
                        <Link href='/' className={`mx-4 my-4 ${router.pathname != '/' || navSrcollLinkColor ? 'text-[#4831d4]' : 'text-[#ccf381]'}`}>Home</Link>
                        <Link href='/' className='mx-4 my-4 text-[#ccf381]'>About</Link>
                        <Link href='/Blog' className='mx-4 my-4 text-[#ccf381]'>Blog</Link>
                        <li className='mx-4 my-4 text-[#ccf381]'>Conatct</li>
                        <li className='mx-4 my-4 text-[#ccf381]'>Project</li>
                    </ul>
                </nav>
            </div>
      </div>
   </div>
  )
}
