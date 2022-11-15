import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/images/logo.png'

export default function Footer() {
    return (
        <footer className='py-20'>
            <div className='container mx-auto '>
                <Link href="/">
                    <Image src={Logo} alt="logo" />
                </Link>
                <div className='h-[1px] w-full bg-[#EEEEEE] my-10'></div>
                <div>
                    <ul className='md:text-[0.75rem] md:leading-[1.25rem] font-medium md:flex gap-5'>
                        <li className='text-[#171717]'>BYTREIA</li>
                        <li className='text-[#949FA6] before:content-["_|"] before:mr-4'>대표 김나환</li>
                        <li className='text-[#949FA6] before:content-["_|"] before:mr-4'>사업자등록번호 837-08-02110</li>
                        <li className='text-[#949FA6] before:content-["_|"] before:mr-4'>
                            <Link href="#">help@quantro.net</Link>
                        </li>
                    </ul>
                    <ul className='md:text-[0.75rem] md:leading-[1.25rem] font-medium'>
                    <li className='text-[#949FA6]'>서울특별시 강남구 역삼로5길 5</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
