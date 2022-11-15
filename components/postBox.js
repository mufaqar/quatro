import Image from 'next/image';

export default function PostBox({ title, content, image_path,category }) {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-24 gap-10'>
            <div>
                <p className='md:text-[1.25rem] text-[1rem] md:leading-[1.6rem] -tracking-[1.5px] font-medium text-[#FF8B15]'>{category}</p>
                <h3 className='md:text-[2.1rem] text-[1.25rem] md:leading-[2.75rem] font-bold -tracking-[1.5px] text-white mt-10'>
                    {title}</h3>
                <p className='md:text-[1.5rem] text-[0.875rem] md:leading-[2.25rem] -tracking-[1.5px] font-medium text-[#A5A5A5] '>
                    {content}</p>
            </div>
            <div>
                <Image src={image_path} alt="Image" className='rounded-[32px] w-full lg:max-w-[609px]'/>
            </div>
        </div>
    )
}
