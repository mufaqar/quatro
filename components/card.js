import Image from 'next/image';


export default function Card({ title, content, image_path }) {
    return (
        <div className='rounded-[32px] relative group transition-all'>
            <Image src={image_path} alt="Image Missing" className='object-cover w-full h-full rounded-[32px] group-hover:blur-[2px]' />
            <div className='absolute bottom-12 md:px-14 px-8'>
                <h3 className='md:text-[2.5rem] text-[1.5rem] md:leading-[3.1rem] leading-[1.875rem] font-bold -tracking-[1.5px] text-white group-hover:text-white/70 mt-10'>
                    {title}</h3>
                <p className='md:text-[1.25rem] text-[0.9rem] md:leading-[1.6rem] leading-[1.2rem] -tracking-[1.5px] font-medium text-white mt-5 hidden group-hover:block'>
                    {content}</p>
            </div>
        </div>
    )
}
