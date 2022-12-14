import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '../components/heroSection';
import ServiceBox from '../components/serviceBox';
import Group1 from '../public/images/group1.png';
import Group2 from '../public/images/group2.png';
import Group3 from '../public/images/group3.png';
import Card1 from '../public/images/card1.png';
import Card2 from '../public/images/card2.png';
import Card3 from '../public/images/card3.png';
import Card4 from '../public/images/card4.png';
import Card5 from '../public/images/card5.png';
import Card6 from '../public/images/card6.png';
import card1_mbl from '../public/images/card1_mbl.png';
import card2_mbl from '../public/images/card2_mbl.png';
import card3_mbl from '../public/images/card3_mbl.png';
import card4_mbl from '../public/images/card4_mbl.png';
import card5_mbl from '../public/images/card5_mbl.png';
import card6_mbl from '../public/images/card6_mbl.png';
import Card1Hover from '../public/images/card1Hover.png';
import Card2Hover from '../public/images/card2Hover.png';
import Card3Hover from '../public/images/card3Hover.png';
import Card4Hover from '../public/images/card4Hover.png';
import Card5Hover from '../public/images/card5Hover.png';
import Card6Hover from '../public/images/card6Hover.png';
import BoxBtnMobile from '../public/images/_btn_box.png';
import BoxBtnDsk from '../public/images/btnBoxDsk.png';
import BoxBtnDskHover from '../public/images/btnBoxDskHover.png';
import PostBox from '../components/postBox';
import Blog1 from '../public/images/blog1.png';
import Blog2 from '../public/images/blog2.png';
import Icon1 from '../public/images/icon1.png';
import Smiley from '../public/images/smiley.png';
import Flow from '../public/images/flow.png';
import Txt_Pic from '../public/images/text_image.png';
import Txt_PicHover from '../public/images/txt_imgHover.png';
import { motion } from 'framer-motion';
import {
  BoxTextAnimation,
  SlideUpAnimation,
  Text,
  TextAnimation,
  ZoomAnimation,
} from '../animation';
import { useInView } from 'react-hook-inview';
import { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function Home(_delay) {
  const [ref, inView] = useInView();
  const [refEx, inViewEx] = useInView();
  const [mblRef, inViewMbl] = useInView();
  const [box, setBox] = useState(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setBox(true);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setBox(false);
    }
  }, [inView]);

  const Text = {
    onScreen: {
      y: inView ? '5rem' : '26rem',
      // scale: inView ? 1 : 2,
      // x: inView ? "0" : "40rem",
    },
    offScreen: {
      y: '26rem',
    },
  };
  const Box = {
    onScreen: {
      y: box ? '10rem' : '32rem',
      opacity: box ? 1 : 0,
    },
    offScreen: {
      opacity: 0,
    },
  };

  const ImageSlide = {
    onScreen: {
      y: inViewMbl ? '-0rem' : '-12rem',
      scale: inViewMbl ? 1 : 0.2,
      x: inViewMbl ? 1 : '7rem',
      transition: {
        duration: 0.5,
      },
    },
    offScreen: {},
  };

  return (
    <>
      <HeroSection />

      <section className="bg-gradient-to-b from-[#D8E0ED] md:pt-20 pt-10 pb-14 md:px-auto px-6 ">
        <div className="w-full group:">
          <Image
            src={Txt_Pic}
            alt="Image"
            className="mx-auto md:block hidden"
            variants={TextAnimation}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true, amount: 0.1 }}
          />
          <Image
            src={Txt_PicHover}
            alt="Image"
            className="mx-auto md:hidden block"
            variants={TextAnimation}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true, amount: 0.1 }}
          />
          <motion.h5
            className="md:text-[3.25rem] text-[1.25rem] md:leading-[3.8rem] leading-[1.438rem] font-bold text-center text-[#171717] mt-5"
            variants={TextAnimation}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true, amount: 0.1 }}
          >
            ???????????? ????????? ????????????.
          </motion.h5>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-8 mt-12">
          <ServiceBox
            image_path={Group1}
            title="?????? ?????? ??????"
            content="??????????????? ?????? ?????????, ????????? ???????????????? ?????? ??????????????? ????????? ????????? ????????? ??????????????? ?????? ?????? ??? ?????????."
            _delay="0.1"
          />
          <ServiceBox
            image_path={Group2}
            title="?????? ?????? ??????"
            _delay="0.2"
            content="???????????? ?????? ???????????? ????????? 
?????? ?????? ??????????????? 
????????? ????????? ???????????????."
          />
          <ServiceBox
            image_path={Group3}
            title="?????? ?????? ??????"
            _delay="0.3"
            content="?????? ?????? ????????? ????????????
                ?????? ????????? ??? ????????? ???????????? ?????????
                ????????? ????????? ????????????."
          />
        </div>
      </section>

      <section className="md:py-20 pb-20 pt-0 md:px-auto px-6" id="investment">
        <div className="container relative mx-auto grid md:grid-cols-3 grid-cols-1 mt-12">
          <div className="col-span-2">
            <h1 className=" sticky md:top-24 md:text-[3.75rem] text-[2rem] md:leading-[5.25rem] mb-5 leading-[2.75rem] font-bold text-[#171717] md:text-start text-center">
              ????????????,<br></br>
              ???????????? ????????? ??????
            </h1>
          </div>
          <motion.div
            className="grid gap-8"
            variants={TextAnimation}
            initial="offScreen"
            whileInView="onScreen"
          >
            <motion.div
              className="rounded-[32px] relative group transition-all card_wrapper "
              variants={TextAnimation}
              initial="onScreen"
              whileInView="onffcreen"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: _delay }}
            >
              <Image
                src={Card1}
                alt="Image Missing"
                className="object-cover  w-full h-full md:block hidden rounded-[32px] group-hover:hidden"
                priority="true"
              />
              <Image
                src={card1_mbl}
                alt="Image Missing"
                className="object-cover w-full h-full md:hidden block rounded-[32px] md:group-hover:hidden"
              />
              <Image
                src={Card1Hover}
                alt="Image Missing"
                className="object-cover w-full h-full rounded-[32px] hidden md:group-hover:block"
                placeholder="blur"
                priority="true"
              />
              <div className="absolute bottom-8 md:px-12 px-8 w-full">
                <h3
                  className={`md:text-[2.5rem] _heading mt-10 text-[1.5rem] md:leading-[3.1rem] leading-[1.875rem] text-white md:group-hover:text-white/70 `}
                >
                  ?????? ????????????<br></br>
                  ????????? ????????????
                </h3>

                <p
                  variants={TextAnimation}
                  initial="offScreen"
                  whileInView="onScreen"
                  transition={{ duration: 0.1 }}
                  className={`md:text-[1.25rem] _text text-[0.9rem] transition-all md:leading-[1.6rem] leading-[1.2rem] font-medium mt-4 text-white`}
                >
                  ????????????,?????????,?????????,????????? ??? ???????????? ????????? ????????????
                  ???????????? ???????????? ????????? ???????????? ?????????.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="rounded-[32px] relative group transition-all card_wrapper1"
              variants={TextAnimation}
              initial="onScreen"
              whileInView="onffcreen"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: _delay }}
            >
              <Image
                src={Card2}
                alt="Image Missing"
                className="object-cover  w-full h-full md:block hidden rounded-[32px] group-hover:hidden"
                placeholder="blur"
                priority="true"
              />
              <Image
                src={card2_mbl}
                alt="Image Missing"
                className="object-cover w-full h-full md:hidden block rounded-[32px] md:group-hover:hidden"
              />
              <Image
                src={Card2Hover}
                alt="Image Missing"
                className="object-cover w-full h-full rounded-[32px] hidden md:group-hover:block"
                placeholder="blur"
                priority="true"
              />
              <div className="absolute bottom-8 md:px-12 px-8 w-full">
                <h3
                  className={`md:text-[2.5rem] w-[100%] _heading mt-10 text-[1.5rem] mx-auto text-center md:-ml-[3rem] md:leading-[3.1rem] leading-[1.875rem] text-[#FFA4A5] group-hover:text-[#FFA4A5] `}
                >
                  ????????????, ??????
                </h3>

                <p
                  variants={TextAnimation}
                  initial="offScreen"
                  whileInView="onScreen"
                  transition={{ duration: 0.1 }}
                  className={`md:text-[1.25rem] mx-auto _text-left text-center _text text-[0.9rem]  transition-all md:leading-[1.6rem] leading-[1.2rem] font-medium mt-4 text-black `}
                >
                  ?????????????????? ???????????? ?????? ???????????? ???????????? ????????? ???????????????
                  ????????????.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="rounded-[32px] relative group transition-all card_wrapper "
              variants={TextAnimation}
              initial="onScreen"
              whileInView="onffcreen"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: _delay }}
            >
              <Image
                src={Card3}
                alt="Image Missing"
                className="object-cover  w-full h-full md:block hidden rounded-[32px] group-hover:hidden"
                priority
              />
              <Image
                src={card3_mbl}
                alt="Image Missing"
                className="object-cover w-full h-full md:hidden block rounded-[32px] md:group-hover:hidden"
              />
              <Image
                src={Card3Hover}
                alt="Image Missing"
                className="object-cover w-full h-full rounded-[32px] hidden md:group-hover:block"
                placeholder="blur"
                priority="true"
              />
              <div className="absolute bottom-8 md:px-12 px-8 w-full">
                <h3
                  className={`md:text-[2.5rem] _heading mt-10 text-[1.5rem] md:leading-[3.1rem] leading-[1.875rem] text-white md:group-hover:text-white/70  `}
                >
                  ????????? ??????????????? <br></br>
                  ?????? ????????????
                </h3>

                <p
                  variants={TextAnimation}
                  initial="offScreen"
                  whileInView="onScreen"
                  transition={{ duration: 0.1 }}
                  className={`md:text-[1.25rem] _text text-[0.9rem] transition-all md:leading-[1.6rem] leading-[1.2rem] font-medium mt-4 text-white `}
                >
                  ??????????????? ???????????? ????????? ???????????? ??? ?????? ???????????????
                  ??????????????? ?????? ????????? ????????? ???????????????.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="rounded-[32px] relative group transition-all card_wrapper1 "
              variants={TextAnimation}
              initial="onScreen"
              whileInView="onffcreen"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: _delay }}
            >
              <Image
                src={Card4}
                alt="Image Missing"
                className="object-cover  w-full h-full md:block hidden rounded-[32px] group-hover:hidden"
                priority
              />
              <Image
                src={card4_mbl}
                alt="Image Missing"
                className="object-cover w-full h-full md:hidden block rounded-[32px] md:group-hover:hidden"
              />
              <Image
                src={Card4Hover}
                alt="Image Missing"
                className="object-cover w-full h-full rounded-[32px] hidden md:group-hover:block"
                placeholder="blur"
                priority="true"
              />
              <div className="absolute bottom-8 md:px-12 px-8 w-full">
                <h3
                  className={`md:text-[2.5rem] _heading mt-10 text-[1.5rem] md:leading-[3.1rem] leading-[1.875rem] text-white md:group-hover:text-white/70  `}
                >
                  ?????? ?????? ???????????????<br></br>
                  ?????? ?????? ??????
                </h3>

                <p
                  variants={TextAnimation}
                  initial="offScreen"
                  whileInView="onScreen"
                  transition={{ duration: 0.1 }}
                  className={`md:text-[1.25rem] _text text-[0.9rem] transition-all md:leading-[1.6rem] leading-[1.2rem] font-medium mt-4 text-white `}
                >
                  ???????????? ????????? ?????? ??????????????? ????????? ????????? ??? ??? ?????????.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="rounded-[32px] relative group transition-all card_wrapper "
              variants={TextAnimation}
              initial="onScreen"
              whileInView="onffcreen"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: _delay }}
            >
              <Image
                src={Card5}
                alt="Image Missing"
                className="object-cover  w-full h-full md:block hidden rounded-[32px] group-hover:hidden"
                priority
              />
              <Image
                src={card5_mbl}
                alt="Image Missing"
                className="object-cover w-full h-full md:hidden block rounded-[32px] md:group-hover:hidden"
              />
              <Image
                src={Card5Hover}
                alt="Image Missing"
                className="object-cover w-full h-full rounded-[32px] hidden md:group-hover:block"
                placeholder="blur"
                priority="true"
              />
              <div className="absolute bottom-8 md:px-12 px-8 w-full">
                <h3
                  className={`md:text-[2.5rem] _heading mt-10 text-[1.5rem] md:leading-[3.1rem] leading-[1.875rem] text-black  `}
                >
                  ???????????? ???????????????<br></br>
                  ????????? ??????
                </h3>

                <p
                  variants={TextAnimation}
                  initial="offScreen"
                  whileInView="onScreen"
                  transition={{ duration: 0.1 }}
                  className={`md:text-[1.25rem] _text text-[0.9rem] transition-all md:leading-[1.6rem] leading-[1.2rem] font-medium mt-4 text-black `}
                >
                  ??????????????? ???????????? ????????? ???????????? ??? ?????? ??????????????? ?????????
                  ??????????????? ??????????????? ?????? ????????? ????????? ???????????????.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="rounded-[32px] relative group transition-all card_wrapper_last "
              variants={TextAnimation}
              initial="onScreen"
              whileInView="onffcreen"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: _delay }}
            >
              <Image
                src={Card6}
                alt="Image Missing"
                className="object-cover  w-full h-full md:block hidden rounded-[32px] group-hover:hidden"
                priority
              />
              <Image
                src={card6_mbl}
                alt="Image Missing"
                className="object-cover w-full h-full md:hidden block rounded-[32px] md:group-hover:hidden"
              />
              <Image
                src={Card6Hover}
                alt="Image Missing"
                className="object-cover w-full h-full rounded-[32px] hidden md:group-hover:block"
                placeholder="blur"
                priority="true"
              />
              <div className="absolute bottom-8 md:px-12 px-8 w-full">
                <h3
                  className={`md:text-[2.5rem] _heading mt-10 text-[1.5rem] md:leading-[3.1rem] leading-[1.875rem] text-white md:group-hover:text-white/70  `}
                >
                  PC,????????? ????????????<br></br>
                  ?????? ????????????
                </h3>

                <p
                  variants={TextAnimation}
                  initial="offScreen"
                  whileInView="onScreen"
                  transition={{ duration: 0.1 }}
                  className={`md:text-[1.25rem] _text text-[0.9rem] transition-all md:leading-[1.6rem] leading-[1.2rem] font-medium mt-4 text-white `}
                >
                  ??????/?????? ??????????????? ??????/?????? ???????????? ??? ????????? ???????????????
                  ?????? ????????? ????????? ???????????? ??????????????? ?????? ????????? ???????????????
                  ???????????????.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="pt-20 pb-10 md:py-20 bg-[#333333] relative md:px-auto px-6 min-h-[1000px] overflow-hidden">
        <motion.div
          className="container mx-auto"
          variants={width >= '768' ? Text : ''}
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true }}
        >
          <h1
            className={` _boxHeading ${
              width >= '768'
                ? 'absolute top-1/2 transform -translate-y-1/2'
                : 'text-[32px] margin-top-0'
            } text-[2rem]  leading-[2.75rem] font-bold text-[#F9FAFB] text-start ${
              inView
                ? 'text-white text-[60px]  md:leading-[5.25rem]'
                : 'text-[#5E5E5E] md:text-[120px] md:leading-[120px]'
            }`}
          >
            ????????????,<br></br>
            ???????????? ????????? ??????
          </h1>
        </motion.div>
        <motion.div
          className={`container mx-auto  gap-14 mt-10 _boxWrapper  ${
            inView ? box && 'grid' : 'hidden'
          }`}
          variants={width >= '768' ? Box : ''}
          initial="offScreen"
          animate="onScreen"
        >
          {/*  Box One */}
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-5 py-10">
            <div>
              <motion.h6
                className="md:text-[1.25rem] text-[1rem] md:leading-[1.6rem] font-medium text-[#FF8B15] "
                variants={width >= '768' && BoxTextAnimation}
                initial="offScreen"
                whileInView="onScreen"
              >
                {`??????`}
              </motion.h6>

              <motion.h3
                className="md:text-[2.1rem] text-[1.25rem] md:leading-[2.75rem] font-bold text-white md:mt-9 mt-5 "
                variants={width >= '768' && BoxTextAnimation}
                initial="offScreen"
                whileInView="onScreen"
              >
                {`????????? ????????? ??????????????? ???????????? ???????????? ????????? ??????`}
              </motion.h3>

              <motion.p
                className="md:text-[1.5rem] text-[0.875rem] md:leading-[2.25rem] font-medium text-[#A5A5A5] mt-3"
                variants={width >= '768' && BoxTextAnimation}
                initial="offScreen"
                whileInView="onScreen"
                viewport={{ once: true, amount: 0.1 }}
              >
                {`?????? ??????????????? ???????????? ??????????????? ??????????????? ?????? ???????????? ???????????? ???????????? ??????????????? ???????????? ????????? ???????????????.`}
              </motion.p>
            </div>
            <div className={` ${inView ? box && 'img-container' : ''}`}>
              <Image
                src={Blog1}
                alt="Image"
                className="rounded-[32px] w-full lg:max-w-[609px]"
              />
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#3A3A3A]"></div>

          {/*  Box Two */}
          <motion.div className="grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-5 py-10">
            <div>
              <motion.h6
                className="md:text-[1.25rem] text-[1rem] md:leading-[1.6rem] font-medium text-[#FF8B15]"
                variants={width >= '768' && BoxTextAnimation}
                initial="offScreen"
                whileInView="onScreen"
              >
                {`???`}
              </motion.h6>
              <motion.h3
                className="md:text-[2.1rem] text-[1.25rem] md:leading-[2.75rem] font-bold text-white md:mt-9 mt-5"
                variants={width >= '768' && BoxTextAnimation}
                initial="offScreen"
                whileInView="onScreen"
              >
                {`???????????? ???????????? ????????????????????? ????????? ????????? ??????`}
              </motion.h3>
              <motion.p
                className="md:text-[1.5rem] text-[0.875rem] md:leading-[2.25rem] font-medium text-[#A5A5A5] mt-3"
                variants={width >= '768' && BoxTextAnimation}
                initial="offScreen"
                whileInView="onScreen"
              >
                {`???????????? ???????????? ???????????? ??????????????? ???????????? ???????????? ??? ????????? ???????????? ???????????? ????????? ????????? ????????? ?????????.`}
              </motion.p>
            </div>
            <div className={` ${inView ? box && 'img-container2' : ''}`}>
              <Image
                src={Blog2}
                alt="Image"
                className="rounded-[32px] w-full lg:max-w-[609px]"
              />
            </div>
          </motion.div>
        </motion.div>
        <div
          className="min-h-[5px] w-full absolute bg-transparent left-0 top-5/6"
          ref={width >= '768' ? ref : refEx}
        ></div>
      </section>

      <section className="py-20 md:px-auto px-6 bg-[#F9FAFB] relative  bg-contain bg-no-repeat bg-right overflow-hidden">
        <div className="container mx-auto text-center ">
          <motion.h3
            className="md:text-[3.75rem] z-20 relative text-[1.5rem] md:leading-[5.25rem] leading-[1.875rem] font-light text-center text-[#171717]"
            variants={width >= '768' ? TextAnimation : ''}
            initial={'offScreen'}
            whileInView={'onScreen'}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 0.4 }}
          >
            ????????? ???????????? ?????????
          </motion.h3>
          <motion.h3
            className="md:text-[3.75rem] z-20 text-[1.75rem] md:leading-[5.25rem] relative leading-[2.1rem] font-bold text-center text-[#171717] mt-5 mb-10"
            variants={width >= '768' ? TextAnimation : ''}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 0.8 }}
          >
            ?????????, ???????????? ??????????????????.
          </motion.h3>
          <motion.button
            className="relative z-20"
            variants={width >= '768' ? TextAnimation : ''}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 1 }}
          >
            {/*<Link
              href="#"
              className="bg-[#F39200] hover:bg-[#E1740F] text-white w-fit mx-auto border-2 border-[#F39200] hover:border-[#E1740F] px-5 py-2 rounded-full md:text-[1.25rem] md:leading-[1.5rem] font-bold"
            >
              ????????? ?????? ????????????
          </Link> */}

            <Link href="/">
              <figure className="group">
                <div className="md:hidden">
                  <Image
                    src={BoxBtnMobile}
                    alt="btn"
                    width={196}
                    height={52}
                    placeholder="blur"
                    priority="true"
                  ></Image>
                </div>
                <div className="hidden md:block">
                  <div className="group-hover:hidden">
                    <Image
                      src={BoxBtnDsk}
                      alt="btn"
                      width={196}
                      height={52}
                      placeholder="blur"
                      priority="true"
                    ></Image>
                  </div>
                  <div className="hidden group-hover:block">
                    <Image
                      src={BoxBtnDskHover}
                      alt="btn"
                      width={196}
                      height={52}
                      placeholder="blur"
                      priority="true"
                    ></Image>
                  </div>
                </div>
              </figure>
            </Link>
          </motion.button>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-14 md:pt-20 pt-16 ">
          <motion.div
            className="md:p-8 p-4"
            variants={width >= '768' && TextAnimation}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 1.2 }}
          >
            <figure
              variants={ZoomAnimation}
              initial="offScreen"
              whileInView="onScreen"
              viewport={{ once: true, amount: 0.1 }}
              translate={{ delay: 0.1 }}
            >
              <Image src={Icon1} alt="Image" className="mx-auto" />
            </figure>
            <div>
              <motion.h3
                className="md:text-[1.5rem] text-[1.125rem] md:leading-[2.125rem] leading-[1.75rem] font-bold text-center text-[#171717] mt-10"
                variants={TextAnimation}
                initial="offScreen"
                whileInView="onScreen"
                viewport={{ once: true, amount: 0.1 }}
              >
                ???????????? ???????????? ?????? ??????
              </motion.h3>
              <motion.p
                className="md:text-[1rem] text-[0.8rem] md:leading-[1.6rem] leading-[1.375rem] font-medium text-[#606060] text-center mt-5"
                variants={TextAnimation}
                initial="offScreen"
                whileInView="onScreen"
                viewport={{ once: true, amount: 0.1 }}
                ref={mblRef}
              >
                ??????????????? ????????? ????????????????????? ????????? ?????? ???????????? ????????????
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            className="md:p-8 p-4"
            variants={width >= '768' && TextAnimation}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 1.4 }}
          >
            <figure
              variants={ZoomAnimation}
              initial="offScreen"
              whileInView="onScreen"
              viewport={{ once: true, amount: 0.1 }}
              translate={{ delay: 0.2 }}
            >
              <Image src={Flow} alt="Image" className="mx-auto" />
            </figure>
            <div>
              <motion.h3
                className="md:text-[1.5rem] text-[1.125rem] md:leading-[2.125rem] leading-[1.75rem] font-bold text-center text-[#171717] mt-10"
                variants={TextAnimation}
                initial="offScreen"
                whileInView="onScreen"
                viewport={{ once: true, amount: 0.1 }}
              >
                ?????? ??????????????? ?????? ?????? ??????
              </motion.h3>
              <motion.p
                className="md:text-[1rem] text-[0.8rem] md:leading-[1.6rem] leading-[1.375rem] font-medium text-[#606060] text-center mt-5"
                variants={TextAnimation}
                initial="offScreen"
                whileInView="onScreen"
                viewport={{ once: true, amount: 0.1 }}
              >
                ????????? ?????? ?????? ????????? ????????? ????????? ?????? ??? ?????? ?????? ??????
                ?????? ??????
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            className="md:p-8 p-4 z-10"
            variants={width >= '768' && TextAnimation}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: 1.6 }}
          >
            <figure
              iants={ZoomAnimation}
              initial="offScreen"
              whileInView="onScreen"
              viewport={{ once: true, amount: 0.1 }}
              translate={{ delay: 0.3 }}
            >
              <Image src={Smiley} alt="Image" className="mx-auto" />
            </figure>
            <div>
              <motion.h3
                className="md:text-[1.5rem] text-[1.125rem] md:leading-[2.125rem] leading-[1.75rem] font-bold text-center text-[#171717] mt-10"
                variants={TextAnimation}
                initial="offScreen"
                whileInView="onScreen"
                viewport={{ once: true, amount: 0.1 }}
              >
                ???????????? ?????????, ???????????? ??????
              </motion.h3>
              <motion.p
                className="md:text-[1rem] text-[0.8rem] md:leading-[1.6rem] leading-[1.375rem] font-medium text-[#606060] text-center mt-5"
                variants={TextAnimation}
                initial="offScreen"
                whileInView="onScreen"
                viewport={{ once: true, amount: 0.1 }}
              >
                ????????????????????? ??? ?????? ???????????? ????????? ?????? ????????? ???
              </motion.p>
            </div>
          </motion.div>
        </div>
        <motion.figure
          className="absolute -right-5 -top-16 _hidden md:block "
          variants={ImageSlide}
          initial="offScreen"
          animate="onScreen"
          viewport={{ once: false, amount: 0.1 }}
        >
          <Image
            src="/images/bgMbl.png"
            alt="mobile"
            height={600}
            width={500}
          />
        </motion.figure>
      </section>

      <section className="py-20 md:px-auto px-6">
        <div className="container mx-auto">
          <motion.h3
            className="md:text-[3.125rem] text-[1.5rem] md:leading-[3.6rem] leading-[1.875rem] font-bold text-center text-[#171717]"
            variants={TextAnimation}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true, amount: 0.1 }}
          >
            ??? ????????? ?????? ????????????????
          </motion.h3>
        </div>
        <motion.div className="container mx-auto grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-7 md:pt-20 pt-8 ">
          <Link href="#">
            <motion.div
              className="bg-[#F9FAFB] border border-[#F2F2F2] hover:border-[#333333] md:rounded-[40px] rounded-[16px] md:p-10 p-6 flex md:flex-col flex-row items-center"
              variants={TextAnimation}
              initial="offScreen"
              whileInView="onScreen"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="md:w-full w-1/2">
                <h3 className="md:text-[2rem] md:leading-[2.375rem] font-bold text-[#171717] md:mt-10">
                  ????????????
                </h3>
                <p className="md:text-[1rem] md:leading-[1.18rem] font-normal text-[#333333] mt-5 md:block hidden md:min-h-[38px]">
                  ?????????????????? ????????? ???????????????.
                </p>
              </div>
              <p className="md:w-full w-1/2 md:text-[1.25rem] text-[0.875rem] md:leading-[1.43rem] leading-[1rem] font-medium text-[#909090] flex items-center md:justify-start justify-end md:mt-12">
                ????????? ?????? ????????????
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 ml-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </p>
            </motion.div>
          </Link>
          <Link href="#">
            <motion.div
              className="bg-[#F9FAFB] border border-[#F2F2F2] hover:border-[#333333] md:rounded-[40px] rounded-[16px] md:p-10 p-6 flex md:flex-col flex-row items-center"
              variants={TextAnimation}
              initial="offScreen"
              whileInView="onScreen"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="md:w-full w-1/2">
                <h3 className="md:text-[2rem] md:leading-[2.375rem] font-bold text-[#171717] md:mt-10">
                  ????????????
                </h3>
                <p className="md:text-[1rem] md:leading-[1.18rem] font-normal text-[#333333] mt-5 md:block hidden md:min-h-[38px]">
                  ??????????????? ?????? ????????? ???????????????.
                </p>
              </div>
              <p className="md:w-full w-1/2 md:text-[1.25rem] text-[0.875rem] md:leading-[1.43rem] leading-[1rem] font-medium text-[#909090] flex items-center md:justify-start justify-end md:mt-12">
                ???????????? ????????????
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 ml-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </p>
            </motion.div>
          </Link>
          <Link href="#">
            <motion.div
              className="bg-[#F9FAFB] border border-[#F2F2F2] hover:border-[#333333] md:rounded-[40px] rounded-[16px] md:p-10 p-6 flex md:flex-col flex-row items-center"
              variants={TextAnimation}
              initial="offScreen"
              whileInView="onScreen"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="md:w-full w-1/2">
                <h3 className="md:text-[2rem] md:leading-[2.375rem] font-bold text-[#171717] md:mt-10">
                  ????????????
                </h3>
                <p className="md:text-[1rem] md:leading-[1.18rem] font-normal text-[#333333] mt-5 md:block hidden md:min-h-[38px]">
                  ????????? ?????? ???????????????? ????????? ??????????????? ???????????????.
                </p>
              </div>
              <p className="md:w-full w-1/2 md:text-[1.25rem] text-[0.875rem] md:leading-[1.43rem] leading-[1rem] font-medium text-[#909090] flex items-center md:justify-start justify-end md:mt-12">
                1:1?????? ????????????
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 ml-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </p>
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
