import Image from 'next/image';
import { TextAnimation } from '../animation';
import {motion} from 'framer-motion'

export default function PostBox({ title, content, image_path,category }) {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-5'>
            <div>
                <motion.h6 className='md:text-[1.25rem] text-[1rem] md:leading-[1.6rem] font-medium text-[#FF8B15]'
                variants={TextAnimation} initial="offScreen" whileInView="onScreen" viewport={{ once: true, amount: 0.1 }}>{category}</motion.h6>
                <motion.h3 className='md:text-[2.1rem] text-[1.25rem] md:leading-[2.75rem] font-bold text-white md:mt-9 mt-5'
                variants={TextAnimation} initial="offScreen" whileInView="onScreen" viewport={{ once: true, amount: 0.1 }}>
                    {title}</motion.h3>
                <motion.p className='md:text-[1.5rem] text-[0.875rem] md:leading-[2.25rem] font-medium text-[#A5A5A5] mt-3'
                variants={TextAnimation} initial="offScreen" whileInView="onScreen" viewport={{ once: true, amount: 0.1 }}>
                    {content}</motion.p>
            </div>
            <motion.div>
                <Image src={image_path} alt="Image" className='rounded-[32px] w-full lg:max-w-[609px]'/>
            </motion.div>
        </div>
    )
}
