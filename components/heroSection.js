import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '../public/images/mbl_hero.png';

export default function HeroSection() {
  return (
    <section className='bg-[#D8E0ED] md:py-28 py-20 md:bg-[url("/images/hero_img.png")] bg-no-repeat bg-contain bg-right'>
      <div className="container mx-auto flex md:flex-row flex-col items-center">
        <div className="md:w-2/3 w-full md:pl-32 md:px-auto px-6 ">
          <h1 className="md:text-[3.75rem] text-[2rem] md:leading-[5.25rem] leading-[2.75rem] font-bold -tracking-[1.5px] text-[#171717] md:text-start text-center">
            시스템 트레이딩,<br></br>
            진입장벽을 낮추다.
          </h1>
          <p className="md:text-[1.5rem] text-[0.875rem] md:leading-[1.905rem] leading-[1.063rem] font-normal text-[#525A68] md:text-start text-center mt-6">
            트레이딩은 퀀트로에 맡기고, 이젠 일상을 즐기세요.
          </p>
          <div className="mt-12 gap-5 flex md:flex-row flex-col md:px-auto px-6 ">
            <Link
              href="/"
              className="bg-[#F39200] w-fit md:mx-0 mx-auto border-2 border-[#F39200] px-5 py-2 rounded-full textWhite md:text-[1.25rem] text-[1rem] md:leading-[1.5rem] font-bold text-white"
            >
              퀀트로 바로가기
            </Link>
            <Link
              href="mailto:help@quantro.net"
              className="bg-transparent w-fit md:mx-0 mx-auto border-2 border-black/10 px-5 py-2 rounded-full md:text-[1.25rem] text-[1rem] md:leading-[1.5rem] font-bold text-[#171717]"
            >
              이용안내
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 w-full">
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="md:hidden block w-full"
          />
        </div>
      </div>
      <div className="relative ">
        <Link href="#" className="mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-10 h-10 text-white mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Link>
        <Link
          href="#"
          className="absolute top-0 right-5 text-[1rem] leading-[1.1rem]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-16 h-16 bg-white p-4 mb-2 rounded-full "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          <span>문의하기</span>
        </Link>
      </div>
    </section>
  );
}
