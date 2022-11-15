import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '../components/heroSection'
import ServiceBox from '../components/serviceBox'
import Code from '../public/images/code.png';
import Graph from '../public/images/graph.png';
import Clock from '../public/images/clock.png';
import Card from '../components/card';
import Card1 from '../public/images/card1.png';
import Card2 from '../public/images/card2.png';
import Card3 from '../public/images/card3.png';
import Card4 from '../public/images/card4.png';
import Card5 from '../public/images/card5.png';
import Card6 from '../public/images/card6.png';
import PostBox from '../components/postBox';
import Blog1 from '../public/images/blog1.png';
import Blog2 from '../public/images/blog2.png';
import Icon1 from '../public/images/icon1.png';
import Smiley from '../public/images/smiley.png';
import Flow from '../public/images/flow.png';

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className='bg-gradient-to-b from-[#D8E0ED] py-20 md:px-auto px-6'>
        <div className='container mx-auto'>
          <h2 className='md:text-[5.75rem] text-[2rem] md:leading-[10.4rem] leading-[2.375rem] font-bold -tracking-[1.5px] text-center text-black/20'>시스템 트레이딩의 진입장벽,</h2>
          <p className='md:text-[3.25rem] text-[1.25rem] md:leading-[3.8rem] leading-[1.438rem] font-bold -tracking-[1.5px] text-center text-[#171717] mt-5'>퀀트로는 이렇게 낮췄어요.</p>
        </div>
        <div className='container mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-12'>
          <ServiceBox bgColour="bg-[#A9D2FF]" image_path={Code} title="코딩 걱정 없이" content="자동매매를 하고 싶지만, 코딩이 걱정이라면? 전략 아이디어만 있다면 나만의 전략은 퀀트로에서 실현 시킬 수 있어요." />
          <ServiceBox bgColour="bg-[#434B61]" image_path={Graph} title="전략 걱정 없이" content="퀀트로가 직접 분석하고 인증한 
                상위 퀀트 투자자들의 
                다양한 전략을 받아보세요."/>
          <ServiceBox bgColour="bg-[#F8E2A9]" image_path={Clock} title="시간 걱정 없이" content="이제 내가 원하는 타점에서
                자동 매매될 수 있도록 시스템에 맡기고
                소중한 시간을 아끼세요."/>
        </div>
      </section>

      <section className='py-20 md:px-auto px-6' id="investment">
        <div className='container relative mx-auto grid md:grid-cols-3 grid-cols-1 mt-12'>
          <div className='col-span-2'>
            <h1 className=' sticky top-24 md:text-[3.75rem] text-[2rem] md:leading-[5.25rem] leading-[2.75rem] font-bold -tracking-[1.5px] text-[#171717] md:text-start text-center'>
              퀀트투자,<br></br>
              편리함에 전략을 더해
            </h1>
          </div>
          <div className='grid gap-8'>
            <Card image_path={Card1} title="모든 거래소를 한번에 통합관리" content="바이낸스,바이빗,비트겟,업비트 등 
                  국내외의 다양한 거래소를 통합하여 한곳에서 
                  주문을 관리할수 있어요." />
            <Card image_path={Card2} title="누구든지, 쉽게 " content="트레이딩뷰와 연동하여 쉽고 편리하게
                  자동매매 가능한 프로그램을 제공해요." />
            <Card image_path={Card3} title="시스템 트레이딩의 소통 놀이터로" content="사용자간의 피드백과 의견을 주고받을 수 있는 
                  커뮤니티와 사용가능한 무료 시스템 전략을
                  받아보세요." />
            <Card image_path={Card4} title="상위 퀀트 투자자들의 전략 분석 제공" content="퀀트로의 인증된 전문 전략가들의
                  다양한 전략을 볼 수 있어요." />
            <Card image_path={Card5} title="전문가가 코딩해주는 나만의 전략" content="사용자간의 피드백과 의견을 주고받을 수 있는 
                  커뮤니티와 퀀트로 이용자라면 사용가능한
                  무료 시스템 전략을 제공합니다." />
            <Card image_path={Card6} title="PC,모바일 구애없이 언제 어디서나" content="한글/영문 언어지원과 달러/원화 단위변환 등
                  시스템 트레이딩을 위한 최적의 옵션을 제공하며
                  텔레그램을 통해 상세한 주문내역을 받아보세요." />
          </div>
        </div>
      </section>

      <section className='py-20 bg-[#333333] md:px-auto px-6'>
        <div className='container mx-auto'>
          <h1 className='md:text-[3.75rem] text-[2rem] md:leading-[5.25rem] leading-[2.75rem] font-bold -tracking-[1.5px] text-[#F9FAFB] md:text-start text-center'>
            퀀트투자,<br></br>
            편리함에 전략을 더해
          </h1>
        </div>
        <div className='container mx-auto grid gap-14 mt-10'>
          <PostBox image_path={Blog1} title="국내외 최상위 개발진들과 협업하여 분산주문 시스템 구축" content="많은 주문횟수와 성공적인 주문연결을 최우선으로 하며 사용자가 자동매매 서비스를 이용하는데 불편함이 없도록 하고있어요." category="하나" />
          <PostBox image_path={Blog2} title="암호화된 알고리즘 보관시스템으로 사용자 데이터 보호" content="퀀트로는 사용자의 데이터를 절대적으로 중요하게 생각하며 그 어떠한 위험에도 노출되지 않도록 최선을 다하고 있어요." category="둘" />
        </div>
      </section>

      <section className='py-20 md:px-auto px-6 bg-[#F9FAFB] md:bg-[url(/images/bgMbl.png)] bg-contain bg-no-repeat bg-right'>
        <div className='container mx-auto text-center '>
          <h3 className='md:text-[3.75rem] text-[1.5rem] md:leading-[5.25rem] leading-[1.875rem] font-light -tracking-[1.5px] text-center text-[#171717]'>거래소 통합주문 플랫폼</h3>
          <h3 className='md:text-[3.75rem] text-[1.75rem] md:leading-[5.25rem] leading-[2.1rem] font-bold -tracking-[1.5px] text-center text-[#171717] mt-5 mb-10'>퀀트로, 간편하게 시작해보세요.</h3>
          <Link href="#" className='bg-[#F39200] hover:bg-[#E1740F] text-white w-fit mx-auto border-2 border-[#F39200] hover:border-[#E1740F] px-5 py-2 rounded-full md:text-[1.25rem] md:leading-[1.5rem] font-bold'>이용권 등록 바로가기</Link>
        </div>
        <div className='container mx-auto grid md:grid-cols-3 grid-cols-1 gap-14 md:pt-20 pt-16 '>
          <div className='md:p-8 p-4'>
            <Image src={Icon1} alt="Image" className='mx-auto' />
            <div>
              <h3 className='md:text-[1.5rem] text-[1.125rem] md:leading-[2.125rem] leading-[1.75rem] font-bold -tracking-[1.5px] text-center text-[#171717] mt-10'>자동매매 프로그램 무료 제공</h3>
              <p className='md:text-[1rem] text-[0.8rem] md:leading-[1.6rem] leading-[1.375rem] -tracking-[1.5px] font-medium text-[#606060] text-center mt-5'>전략가들이 검증한 시스템트레이딩 전략을
                쉽고 간편하게 이용가능</p>
            </div>
          </div>
          <div className='md:p-8 p-4'>
            <Image src={Flow} alt="Image" className='mx-auto' />
            <div>
              <h3 className='md:text-[1.5rem] text-[1.125rem] md:leading-[2.125rem] leading-[1.75rem] font-bold -tracking-[1.5px] text-center text-[#171717] mt-10'>상위 전략가들의 전략 분석 제공</h3>
              <p className='md:text-[1rem] text-[0.8rem] md:leading-[1.6rem] leading-[1.375rem] -tracking-[1.5px] font-medium text-[#606060] text-center mt-5'>흩어져 있어 찾기 어려운 전세계 다양한 전략 및
                개인 맞춤 전략 제작 제공</p>
            </div>
          </div>
          <div className='md:p-8 p-4'>
            <Image src={Smiley} alt="Image" className='mx-auto' />
            <div>
              <h3 className='md:text-[1.5rem] text-[1.125rem] md:leading-[2.125rem] leading-[1.75rem] font-bold -tracking-[1.5px] text-center text-[#171717] mt-10'>교류하는 놀이터, 커뮤니티 공간</h3>
              <p className='md:text-[1rem] text-[0.8rem] md:leading-[1.6rem] leading-[1.375rem] -tracking-[1.5px] font-medium text-[#606060] text-center mt-5'>시스템트레이더 간
                전략 아이디어 교류를 위한 소통의 장</p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 md:px-auto px-6'>
        <div className='container mx-auto'>
          <h3 className='md:text-[3.125rem] text-[1.5rem] md:leading-[3.6rem] leading-[1.875rem] font-bold -tracking-[1.5px] text-center text-[#171717]'>더 궁금한 점이 있으신가요?</h3>
        </div>
        <div className='container mx-auto grid md:grid-cols-3 grid-cols-1 md:gap-14 gap-7 md:pt-20 pt-8 '>
          <Link href="#">
            <div className='bg-[#F9FAFB] border border-[#F2F2F2] hover:border-[#333333] rounded-[40px] md:p-10 p-6 flex md:flex-col flex-row items-center hover:scale-105 transition ease-in-out delay-150'>
              <div className='md:w-full w-1/2'>
                <h3 className='md:text-[2rem] md:leading-[2.375rem] font-bold -tracking-[1.5px] text-[#171717] md:mt-10'>이용요금</h3>
                <p className='md:text-[1rem] md:leading-[1.18rem] -tracking-[1.5px] font-normal text-[#333333] mt-5 md:block hidden'>기본서비스는 무료로 제공되어요.</p>
              </div>
              <p className='md:w-full w-1/2 md:text-[1.25rem] text-[0.875rem] md:leading-[1.43rem] leading-[1rem] font-medium -tracking-[1.5px] text-[#909090] flex items-center gap-3 md:mt-12'>이용권 등록 바로가기
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </p>
            </div>
          </Link>
          <Link href="#">
            <div className='bg-[#F9FAFB] border border-[#F2F2F2] hover:border-[#333333] rounded-[40px] md:p-10 p-6 flex md:flex-col flex-row items-center hover:scale-105 transition ease-in-out delay-150'>
              <div className='md:w-full w-1/2'>
                <h3 className='md:text-[2rem] md:leading-[2.375rem] font-bold -tracking-[1.5px] text-[#171717] md:mt-10'>이용안내</h3>
                <p className='md:text-[1rem] md:leading-[1.18rem] -tracking-[1.5px] font-normal text-[#333333] mt-5 md:block hidden'>궁금해하실 모든 내용을 담아봤어요.</p>
              </div>
              <p className='md:w-full w-1/2 md:text-[1.25rem] text-[0.875rem] md:leading-[1.43rem] leading-[1rem] font-medium -tracking-[1.5px] text-[#909090] flex items-center gap-3 md:mt-12'>이용안내 바로가기
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </p>
            </div>
          </Link>
          <Link href="#">
            <div className='bg-[#F9FAFB] border border-[#F2F2F2] hover:border-[#333333] rounded-[40px] md:p-10 p-6 flex md:flex-col flex-row items-center hover:scale-105 transition ease-in-out delay-150'>
              <div className='md:w-full w-1/2'>
                <h3 className='md:text-[2rem] md:leading-[2.375rem] font-bold -tracking-[1.5px] text-[#171717] md:mt-10'>고객센터</h3>
                <p className='md:text-[1rem] md:leading-[1.18rem] -tracking-[1.5px] font-normal text-[#333333] mt-5 md:block hidden'>어려운 점이 있으신가요?
                  퀀트로 고객센터로 문의주세요.</p>
              </div>
              <p className='md:w-full w-1/2 md:text-[1.25rem] text-[0.875rem] md:leading-[1.43rem] leading-[1rem] font-medium -tracking-[1.5px] text-[#909090] flex items-center gap-3 md:mt-12'>1:1문의 바로가기
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
