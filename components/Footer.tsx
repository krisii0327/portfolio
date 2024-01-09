import React from 'react';
import Link from 'next/link';
import { navLinks, socialLinks, contactDetails } from '@/constants';

const Footer = () => {

  const linkDesign = (linkUrl : string) => {
    return () => 
    `px-2 py-1 font-semibold hover:text-crimson hover:font-semibold transition-colors relative block after:block after:absolute after:left-0 after:h-0.5 after:bg-crimson after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left`
  }

  return (
    <footer className='bottom-0 left-0 right-0 py-3 border-t border-gray-300 max-width bg-white'>
      <div className='flex items-center justify-between'>
        <Link href="/" className='text-crimson font-semibold'>
          Kristóf Kövesi
        </Link>
        <nav className='flex gap-12'>
          <div className='items-center gap-8 hidden md:flex'>
            {contactDetails.map((detail, index) => (
              <div key={index} className='flex gap-3 items-center text-crimson'>
                <detail.icon size={15} />
                <p className='text-grey-600'>{detail.text}</p>
              </div>
            ))}
          </div>
          <div className='flex items-center gap-8 md:hidden relative'>
            {contactDetails.map((detail, index) => (
              <div key={index} className='flex gap-3 items-center text-crimson group'>
                <detail.icon size={15} className='cursor-pointer'/>
                <div className='text-grey-600 hidden group-hover:flex group-hover:absolute items-center justify-center -top-5 whitespace-nowrap'>
                  <div className='px-1.5 py-0.5 bg-white rounded-lg border border-gray-300 absolute'>
                    {detail.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </nav>
        <div className='flex gap-3'>
          {socialLinks.map((link, index) => (
            <a href={link.url} key={index} className='w-6 h-6 bg-crimson text-white flex justify-center items-center rounded-lg'>
              <link.icon size={15} strokeWidth={0} fill="currentColor" />
            </a>
          ))}
        </div>
      </div>
      <p className='flex items-center mt-2 text-xs'>
        Copyright © {new Date().getFullYear()} All right reserved.
      </p>
    </footer>
  )
}

export default Footer