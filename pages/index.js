import Image from 'next/image'
import { Inter } from 'next/font/google'
import Herosection1 from './Component/Herosection1'
import Herosection2 from './Component/Herosection2'

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
      

     
    </main>
  )
}
