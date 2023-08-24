import Footer from '../Component/Footer'
import matter  from 'gray-matter'
import fs from "fs";
import React from 'react'
// import Navbar from '../Component/Navbar'
import Link from 'next/link';


export default function index({posts}) {
  return (
    <>
    <div className='bg-slate-50'>
        <div className='containerWrap2 '>

              {/* <Navbar barcolor={"#4831d4"}/> */}

             <div className='p-3 flex justify-start items-center font-popins relative '>
            <h1 className='text-2xl text-[#4831d4] font-bold tracking-wider '>BengaliCoder</h1>
           {/* <Navbar barcolor='#4831d4'/> */}
            <div className='hidden lg:block'>
                <ul className='flex justify-around text-lgn tracking-wider font-semibold '>
                    <Link href='/' className='mx-4 text-[#4831d4]'>Home</Link>
                    <Link href='/About' className='mx-4 text-[#4831d4]'>About</Link>
                    <li className='mx-4 text-[#4831d4]'>Blog</li>
                    <li className='mx-4 text-[#4831d4]'>Conatct</li>
                    <li className='mx-4 text-[#4831d4]'>Project</li>
                </ul>
            </div>
             </div>

             <div className='grid grid-cols-4 gap-4'>
           {posts.map((blog,index)=>(
            
            <div className='border-b-2 p-2 col-span-2 my-4 shadow-md' key={index}>
              <span className='text-gray-500 text-xs'>{blog.date}</span>
              <h1 className='text-xl my-2 font-bold text-[#4831d4]'>{blog.title}</h1>
              <p className='text-gray-500 text-[0.90rem] font-popins'>{blog.summary}</p>
              <Link href={`/Blog/${blog.slug}`}>
              <div className='border-[#4831d4] 
                                border-[1px] w-[20%] 
                                p-2 text-center my-1 
                                rounded-md text-[#4831d4] 
                                hover:bg-[#4831d4] 
                                hover:text-white'>
                Read more
                
              </div>
              </Link>
             
            </div>
            
           ))}
             </div>


        </div>
    </div>
    <div className='w-screen h-[70vh] bg-[#3D155F]'>
        <Footer/>
    </div>
    
    </>
  )
}


export function getStaticProps(){
    const folder = "POST/";
    
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
  
    // Get gray-matter data from each file.
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`POST/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        summary: matterResult.data.summary,
        slug: fileName.replace(".md", ""),
      };
    });
    return {
      props:{
        posts
      }
    }
  }
