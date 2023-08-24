import '@/styles/globals.css'
import { Poppins } from 'next/font/google'

const popins = Poppins({
  subsets:['latin'],
  weight:['300']
})

export default function App({ Component, pageProps }) {
  
  return <main className={popins.className}>

    <Component {...pageProps} />
  </main>
}
