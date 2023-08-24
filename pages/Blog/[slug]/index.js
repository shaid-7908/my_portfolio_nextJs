import React from 'react'
import fs from 'fs'
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebook, FaDownload } from 'react-icons/fa'

export default function index({frontmatter:{title,date},content,slug}) {
  return (
    <div className='containerWrap2'>
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

        <div className='flex justify-center my-5'>
        <article className="prose md:prose-lg prose-h1:text-[#4831d4] 
        prose-h1:text-3xl 
        prose-h1:font-bold
        prose-headings:text-gray-800 
        prose-p:text-gray-600 prose-p:leading-[1.5rem] prose-a:text-[#4831d4] prose-p:font-popins">
        <h1>{title}</h1>
        <div>{date}
        </div>
        <div className='flex'>
        <span className='text-2xl mx-1'><FaGithub /></span>
        <span className='text-2xl mx-1 text-[#0077b5]'><FaLinkedin /></span>
        </div>

          <Markdown>{content}</Markdown>
       </article>
       </div>
    </div>
  )
}


export function getStaticPaths(){
    const files = fs.readdirSync(path.join('POST'))
    const paths = files.map((filenames)=>({
      params: {
        slug: filenames.replace('.md','')
      }
    }))
    return {
      paths ,
      fallback: false
    }
  }
  
  export function getStaticProps({params:{slug}}){
    const fileConetnt = fs.readFileSync(path.join('POST',slug + '.md'),'utf-8')
    const {data:frontmatter , content } = matter(fileConetnt)
    return {
      props:{
        frontmatter,
        content,
        slug
      }
    }
  }
  
