import Footer from '@/components/Footer'
import HomeSection from '@/components/HomeSection'
import Navbar from '@/components/Nav'
import Image from 'next/image'

export default function Home() {
  return (
    <main >
     <Navbar />
      <HomeSection />
      <Footer/>
    </main>
  )
}

