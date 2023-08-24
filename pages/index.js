import Image from 'next/image'
import { Inter } from 'next/font/google'
import Herosection1 from './Component/Herosection1'
import Herosection2 from './Component/Herosection2'
import Herosection3 from './Component/Herosection3'
import Herosection4 from './Component/Herosection4'
import ContactForm from './Component/ContactForm'
import Footer from './Component/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
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
         <div className='w-screen h-[70vh] bg-[#3D155F]'>
          <Footer/>
         </div>

     
    </main>
  )
}
