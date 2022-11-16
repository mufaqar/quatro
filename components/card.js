import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { SlideUpAnimation, TextAnimation } from '../animation';


export default function Card({ title, content, image_path, _delay }) {
    const [hover, setHover] = useState(false)
    const handleHover = () => {
        setHover(true)
        // alert('jhg')
    }
    return (
        <motion.div className='rounded-[32px] relative group transition-all' onMouseEnter={handleHover}
            variants={SlideUpAnimation} initial="offScreen" whileInView="onScreen" viewport={{ once: true, amount: 0.1 }} transition={{ delay: _delay }}>
            <Image src={image_path} alt="Image Missing" className='object-cover w-full h-full rounded-[32px] group-hover:blur-[2px]' />
            <div className='absolute bottom-12 md:px-14 px-8'>
                <h3
                    className='md:text-[2.5rem] group-hover:hidden mt-10 text-[1.5rem] md:leading-[3.1rem] leading-[1.875rem] font-bold -tracking-[1.5px] text-white group-hover:text-white/60 '>
                    <div
                        className=""
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}

                    ></div></h3>
                <motion.p variants={TextAnimation} initial="offScreen" whileInView="onScreen" transition={{ duration: 0.1 }}
                    className='md:text-[2.5rem] hidden group-hover:block mt-10 text-[1.5rem] md:leading-[3.1rem] leading-[1.875rem] font-bold -tracking-[1.5px] text-white group-hover:text-white/60 '>
                    <div
                        className=""
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}

                    ></div></motion.p>

                <motion.p variants={TextAnimation} initial="offScreen" whileInView="onScreen" transition={{ duration: 0.1 }}
                    className='md:text-[1.25rem] text-[0.9rem] transition-all md:leading-[1.6rem] leading-[1.2rem] -tracking-[1.5px] font-medium text-white mt-5 md:hidden group-hover:block'>
                    {content}</motion.p>
            </div>
        </motion.div>
    )
}
