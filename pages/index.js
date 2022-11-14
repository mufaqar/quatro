import Head from 'next/head'
import Image from 'next/image'
import HeroSection from '../components/heroSection'
import ServiceBox from '../components/serviceBox'
import Code from '../public/images/code.png';
import Graph from '../public/images/graph.png';
import Clock from '../public/images/clock.png';

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className='bg-gradient-to-b from-[#D8E0ED] py-14 '>
        <div className='container mx-auto'>
          <h2 className='md:text-[5.75rem] md:leading-[10.4rem] font-bold -tracking-[1.5px] text-center text-black/20'>시스템 트레이딩의 진입장벽,</h2>
          <p className='md:text-[3.25rem] md:leading-[3.8rem] font-bold -tracking-[1.5px] text-center text-[#171717]'>퀀트로는 이렇게 낮췄어요.</p>
        </div>
        <div className='container mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-12'>
          <ServiceBox bgColour="bg-[#A9D2FF]" src_path={Code} title="코딩 걱정 없이" content="자동매매를 하고 싶지만, 코딩이 걱정이라면? 전략 아이디어만 있다면 나만의 전략은 퀀트로에서 실현 시킬 수 있어요." />
          <ServiceBox bgColour="bg-[#434B61]" src_path={Graph} title="전략 걱정 없이" content="퀀트로가 직접 분석하고 인증한 
                상위 퀀트 투자자들의 
                다양한 전략을 받아보세요."/>
          <ServiceBox bgColour="bg-[#F8E2A9]" src_path={Clock} title="시간 걱정 없이" content="이제 내가 원하는 타점에서
                자동 매매될 수 있도록 시스템에 맡기고
                소중한 시간을 아끼세요."/>
        </div>
      </section>

      <section className='py-14'>
        <div className='container mx-auto grid md:grid-cols-2 grid-cols-1 gap-8 mt-12'>
          <div>
            <h1 className='md:text-[3.75rem] md:leading-[5.25rem] font-bold -tracking-[1.5px] text-[#171717] md:text-start text-center'>
              퀀트투자,<br></br>
              편리함에 전략을 더해
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}
