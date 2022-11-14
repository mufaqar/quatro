import Image from 'next/image'

export default function ServiceBox({ bgColour, image_path, title, content }) {
    return (
        <div className='bg-white rounded-[32px] py-12 px-11'>
            <Image src={image_path} alt="Code Image" className={`rounded-full p-5 mx-auto ${bgColour}`} />
            <div className=''>
                <h3 className='md:text-[2rem] md:leading-[2.3rem] font-bold -tracking-[1.5px] text-center text-[#171717] mt-10'>{title}</h3>
                <p className='md:text-[1.125rem] md:leading-[1.5rem] -tracking-[1.5px] font-medium text-[#868686] text-center mt-5'>{content}</p>
            </div>
        </div>
    )
}
