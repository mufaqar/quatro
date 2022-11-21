import Image from 'next/image'
import {motion} from 'framer-motion'
import { TextAnimation } from '../animation'

export default function ServiceBox({ image_path, title, content, _delay }) {
    return (
        <motion.div className='bg-white md:rounded-[32px] rounded-[16px] md:py-12 py-6 md:px-[76px] px-4 flex md:flex-col flex-row gap-3 items-center'
        variants={TextAnimation} initial="offScreen" whileInView="onScreen" viewport={{ once: true, amount: 0.1 }} transition={{delay: _delay}} >
            <div className='md:w-full w-1/5 flex items-center'>
                <Image src={image_path} alt="Code Image" className={`rounded-full m-auto`} />
            </div>
            <div className='md:w-full w-4/5'>
                <h3 className='md:text-[2rem] text-[1rem] md:leading-[2.3rem] font-bold -tracking-[1.5px] md:text-center text-start text-[#171717] md:mt-10 mt-0'>{title}</h3>
                <p className='md:text-[1.125rem] text-[0.9rem] md:leading-[1.5rem] -tracking-[1.5px] font-medium text-[#868686] md:text-center text-start md:mt-5 mt-2'>{content}</p>
            </div>
        </motion.div>
    )
}
