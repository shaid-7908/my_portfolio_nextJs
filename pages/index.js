import Image from 'next/image'
import { Inter } from 'next/font/google'
import Herosection1 from './Component/Herosection1'
import Herosection2 from './Component/Herosection2'
import Herosection3 from './Component/Herosection3'
import Herosection4 from './Component/Herosection4'
import ContactForm from './Component/ContactForm'
import Footer from './Component/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Bengali Coder</title>
      <meta charSet="UTF-8"/>
      <meta name="description" content="Coding blog and developer portfolio website"/>
      <meta name="keywords" content="HTML, CSS, JavaScript , Next JS , Langchain ,Python , Web Developer"/>
      <meta name="author" content="Shahid Ali"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    </Head>
     <main
      className=''
    >
         <div className='w-screen h-screen'>
          <Herosection1/>
         </div>
         <div className='w-screen max-h-fit'>
          <Herosection2/>
         </div>
         <div className='w-screen max-h-fit bg-[#4831d4]'>
          <Herosection3/>
         </div>
         <div className='w-screen h-[90vh]'>
          <Herosection4/>
         </div>
         <div className='w-screen max-h-fit'>
          <ContactForm/>
         </div>
         

     
    </main>
    </>
   
  )
}
