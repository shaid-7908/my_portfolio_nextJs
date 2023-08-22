import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Profile from '../../Images/Profile.jpg'

export default function Herosection1() {
  return (
    <div className='herosectionBg'>
        <div className='containerWrap2'>
         
        <div className='p-3 flex justify-start items-center font-popins relative '>
                <h1 className='text-2xl text-[#ccf381] font-bold tracking-wider mx-4'>BengaliCoder</h1>
               {/* <Navbar barcolor="#ccf381"/> */}
                <div className='hidden lg:block'>
                    <ul className='flex justify-around text-lgn tracking-wider font-semibold '>
                        <Link href='/' className='mx-4 text-[#ccf381]'>Home</Link>
                        <Link href='/' className='mx-4 text-[#ccf381]'>About</Link>
                        <Link href='/' className='mx-4 text-[#ccf381]'>Blog</Link>
                        <li className='mx-4 text-[#ccf381]'>Conatct</li>
                        <li className='mx-4 text-[#ccf381]'>Project</li>
                    </ul>
                </div>
            </div>


            <div className='flex flex-col lg:flex-row'>
                <div  className=' flex-1 p-3 '>
                    <div className='text-5xl lg:text-7xl font-bold my-4 text-[#ccf381] p-3'>
                        <h1>Full Stack</h1>
                        <h1>Developer</h1>
                    </div>
                    <div className='text-slate-200 text-md md:text-lg my-4 p-3 font-popins'>
                        <p>I like to craft solid and scalable frontend products <br/> with great user experiences.</p>
                    </div>
                    
                </div>
                <div className=' flex-1 p-3 relative'>
                    {/* <Particles1/> */}
                                       
                    {/*for mid screen */}
                    
                    <div className='w-[200px] h-[200px] lg:w-[300px] lg:h-[400px] border-2 m-4  '>
                        <Image className='object-cover translate-y-4  translate-x-4' alt='profile_image' 
                        src={Profile} width={400} height={300}/>
                        
                    </div>
                </div>

            </div>




        </div>
    </div>
  )
}
