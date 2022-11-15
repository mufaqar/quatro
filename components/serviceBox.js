import Image from 'next/image'

export default function ServiceBox({ bgColour, image_path, title, content }) {
    return (
        <div className='bg-white md:rounded-[32px] rounded-[16px] md:py-12 py-6 md:px-11 px-4 flex md:flex-col flex-row gap-3 items-center hover:scale-105 transition ease-in-out delay-150'>
            <div className='md:w-auto w-1/3'>
                <Image src={image_path} alt="Code Image" className={`rounded-full md:p-5 p-2 mx-auto  ${bgColour}`} />
            </div>
            <div className='md:w-auto w-2/3'>
                <h3 className='md:text-[2rem] text-[1rem] md:leading-[2.3rem] font-bold -tracking-[1.5px] md:text-center text-start text-[#171717] mt-10'>{title}</h3>
                <p className='md:text-[1.125rem] text-[0.8rem] md:leading-[1.5rem] -tracking-[1.5px] font-medium text-[#868686] md:text-center text-start mt-5'>{content}</p>
            </div>
        </div>
    )
}
