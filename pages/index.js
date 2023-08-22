import Image from 'next/image'
import { Inter } from 'next/font/google'
import Herosection1 from './Component/Herosection1'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className=''
    >
    <div className='w-screen h-screen'>
     <Herosection1/>
    </div>
      

     
    </main>
  )
}
