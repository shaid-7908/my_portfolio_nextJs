import Footer from '../Component/Footer'
import matter  from 'gray-matter'
import fs from "fs";
import React from 'react'
// import Navbar from '../Component/Navbar'
import Link from 'next/link';


export default function index({posts}) {
  return (
    <>
    <div className='bg-slate-300'>
        <div className='containerWrap2 '>

             
             
             <div className='grid grid-cols-5 gap-3 '>
              <div className='col-span-3 mt-[50px]'>

              
           {posts.map((blog,index)=>(
            
            <div className='border-b-2 p-2 col-span-3 my-4 shadow-md bg-white' key={index}>
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
           <div className='col-span-2'>
            h
           </div>
         
             </div>


        </div>
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
