import Image from "next/image";
import Link from "next/link";
import Mbl_hero from "../public/images/mbl_hero.png";
import HeroImage from "../public/images/hero_img.png";
import Btn_yellow from "../public/images/btn_yellow.png";
import Btn_transp from "../public/images/btn_transp.png";
import Btn_yellowHover from "../public/images/btn_yellowHover.png";
import Btn_transpHover from "../public/images/btn_transHover.png";
import Btn_yellowMbl from "../public/images/btn_yellMbl.png";
import Btn_transMbl from "../public/images/btn_transMbl.png";
import Chat from "../public/images/chat.png";
import Chat_hover from "../public/images/chat_hover.png";
import { motion } from "framer-motion";
import { TextAnimation, ZoomAnimation } from "../animation";

export default function HeroSection() {
  return (
    <section className='bg-[#D8E0ED] relative md:pt-28 md:pb-16 py-20 '>
      <div>
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <div className="w-full md:px-auto px-6 md:pt-[9rem] pt-[5.625rem]">
            <motion.h1
              className="md:text-[3.75rem] text-[2rem] md:leading-[5.25rem] leading-[2.75rem] font-bold text-[#171717] md:text-start text-center"
              variants={TextAnimation}
              initial="offScreen"
              whileInView="onScreen"
              viewport={{ once: true, amount: 0.1 }}

            >
              시스템 트레이딩,<br></br>
              진입장벽을 낮추다.
            </motion.h1>
            <motion.p
              className="md:text-[1.5rem] text-[0.875rem] md:leading-[1.905rem] leading-[1.063rem] font-normal text-[#525A68] md:text-start text-center mt-6"
              variants={TextAnimation}
              initial="offScreen"
              whileInView="onScreen"
              viewport={{ once: true, delay: 12 }}
              transition={{ delay: .3 }}
            >
              트레이딩은 퀀트로에 맡기고, 이젠 일상을 즐기세요.
            </motion.p>
            <div className="md:mt-12 mt-8 mb-5 md:gap-5 gap-2 flex md:flex-row flex-col md:px-0 px-6 ">
              <motion.button variants={ZoomAnimation}
                initial="offScreen"
                whileInView="onScreen"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: .4 }}
                className={` group`}
              >
                <Link
                  href="/"
                >
                  <Image src={Btn_yellow} alt='Image' className="md:group-hover:hidden md:block hidden mx-auto" />
                  <Image src={Btn_yellowHover} alt='Image' className="md:group-hover:block hidden mx-auto" />
                  <Image src={Btn_yellowMbl} alt='Image' className="md:hidden mx-auto" />
                </Link>
              </motion.button>
              <motion.button variants={ZoomAnimation}
                initial="offScreen"
                whileInView="onScreen"
                viewport={{ once: true, amount: 0.1, delay: 2 }}
                transition={{ delay: .5 }}
                className={`group`}
              >
                <Link
                  href="mailto:help@quantro.net"
                >
                  <Image src={Btn_transp} alt='Image' className="md:group-hover:hidden md:block hidden mx-auto" />
                  <Image src={Btn_transpHover} alt='Image' className="md:group-hover:block hidden mx-auto" />
                  <Image src={Btn_transMbl} alt='Image' className="md:hidden mx-auto" />
                </Link>
              </motion.button>
            </div>
          </div>
          <div className="w-full">

            <Image
              src={Mbl_hero}
              alt="Hero Image"
              className="md:hidden block w-full"
            />
          </div>
        </div>
        <Image
          src={HeroImage}
          alt="Hero Image"
          className="md:block hidden absolute top-0 right-0 max-w-[70%]"
        />
      </div>
      <div className="relative md:mt-[18rem]">
        <Link href="/#investment" className="mt-10 md:block hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-10 h-10 text-white mx-auto animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Link>
        <Link
          href="https://pf.kakao.com/_dynxfxj"
          target="_blank"
          className="fixed bottom-20 right-5 z-50 group transition-all"
        >
          <Image src={Chat} alt='Image' className="group-hover:hidden block max-w-[72px]" />
          <Image src={Chat_hover} alt='Image' className="group-hover:block hidden max-w-[72px]" />
        </Link>
      </div>
    </section>
  );
}
