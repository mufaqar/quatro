import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../public/images/logo.png';

function Header() {
  const [navbar, setNavbar] = useState(false);

  const [headerClr, setHeaderClr] = useState(false);

  const changeBackground = () => {
      if (window.scrollY >= 80) {
        setHeaderClr(true);
      }
      else {
        setHeaderClr(false);
      }
  }
  if (typeof window !== "undefined") {

      window.addEventListener('scroll', changeBackground);

  }


  return (
    <>
      <Head>
        <title>Quantro</title>
        <link rel="shortcut icon" href="favicon.png" />
      </Head>
      <header>
        <nav className={`w-full fixed z-50 ${headerClr ? 'bg-white/80 backdrop-blur-sm' : 'backdrop-blur-none bg-transparent'
                }`}>
          <div className="justify-between md:px-16 px-6 py-6 md:py-6 md:items-center md:flex">
            <div>
              <div className="flex items-center justify-between md:block">
                <Link href="/">
                  <Image src={Logo} alt="Logo" />
                </Link>
                <div className="md:hidden hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'block' : 'hidden'
                }`}
              >
                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-white hidden">
                    <Link href="/">home</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
