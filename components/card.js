import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { SlideUpAnimation, TextAnimation } from '../animation';


export default function Card({ title, content, image_path,image_Hover,TxtColour, _delay }) {
    const [hover, setHover] = useState(false)
    const handleHover = () => {
        setHover(true)
        // alert('jhg')
    }
    return (
        <motion.div className='rounded-[32px] relative group transition-all card_wrapper' onMouseEnter={handleHover}
            variants={SlideUpAnimation} initial="offScreen" whileInView="onScreen" viewport={{ once: true, amount: 0.1 }} transition={{ delay: _delay }}>
            <Image src={image_path} alt="Image Missing" className='object-cover w-full h-full rounded-[32px] block group-hover:hidden' />
            <Image src={image_Hover} alt="Image Missing" className='object-cover w-full h-full rounded-[32px] hidden group-hover:block' />
            <div className='absolute bottom-12 md:px-14 px-8 w-full'>
                <h3
                    className={`md:text-[2.5rem] _heading mt-10 text-[1.5rem] md:leading-[3.1rem] leading-[1.875rem] -tracking-[1.5px] text-white   ${TxtColour && " group-hover:text-[#FFA4A5] text-[#FFA4A5]  w-[75%]"}`}>
                    <div
                        className=""
                        dangerouslySetInnerHTML={{
                            __html: title,
                        }}

                    ></div></h3>

                <p variants={TextAnimation} initial="offScreen" whileInView="onScreen" transition={{ duration: 0.1 }}
                    className={`md:text-[1.25rem] _text text-[0.9rem] transition-all md:leading-[1.6rem] leading-[1.2rem] -trackin
                    g-[1.5px] font-medium mt-5 ${TxtColour ? TxtColour : 'text-white'} ${title.includes('PC,모바일 구애없이') && 'last_item'}`}>
                    {content}</p>
            </div>
        </motion.div>
    )
}
