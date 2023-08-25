import '@/styles/globals.css'
import { Poppins } from 'next/font/google'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import { useRouter } from 'next/navigation'
const popins = Poppins({
  subsets:['latin'],
  weight:['300']
})

export default function App({ Component, pageProps }) {
  
  return <main className={popins.className}>
   <Navbar/>
    <Component {...pageProps} />
    <div className='w-screen h-[70vh] bg-[#3D155F]'>
          <Footer/>
         </div>
  </main>
}
