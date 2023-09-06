import HomeSection from '@/components/HomeSection'
import Navbar from '@/components/Nav'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=" px-4">
     <Navbar />
      <HomeSection />
    </main>
  )
}
