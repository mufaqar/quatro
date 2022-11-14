import Head from 'next/head'
import Image from 'next/image'
import HeroSection from '../components/heroSection'

export default function Home() {
  return (
   <>
   <HeroSection />
    
    <section className='bg-gradient-to-b from-[#D8E0ED]'>
      <div>
        <h2 className='text-[8.75rem]'>시스템 트레이딩의 진입장벽,</h2>
      </div>
    </section>
   </>
  )
}
