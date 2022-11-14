import Image from 'next/image';


export default function Card({ title, content, image_path }) {
    return (
        <div className='rounded-[32px] relative group transition-all'>
            <Image src={image_path} alt="Code Image" className='object-cover w-full h-full rounded-[32px] group-hover:blur-sm' />
            <div className='absolute bottom-12 md:px-14 '>
                <h3 className='md:text-[2.5rem] md:leading-[3.1rem] font-bold -tracking-[1.5px] md:text-start text-center text-white mt-10'>
                    {title}</h3>
                <p className='md:text-[1.25rem] md:leading-[1.6rem] -tracking-[1.5px] font-medium text-white md:text-start text-center mt-5 hidden group-hover:block'>
                    {content}</p>
            </div>
        </div>
    )
}
