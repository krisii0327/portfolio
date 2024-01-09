"use client"
import React from 'react';
import { navLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';


const NavLinks = () => {
    const url = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const linkDesign = (linkUrl : string) => {
        return () => 
        `px-2 py-1 font-semibold hover:text-crimson hover:font-semibold transition-colors relative block after:block after:absolute after:left-0 after:h-0.5 after:bg-crimson after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left
        ${url === linkUrl ? "after:scale-x-100 after:origin-right text-crimson" : "after:scale-x-0 after:origin-left text-gray-700"}`
    }

    return (
        <nav>
            <ul className='hidden md:flex gap-8 items-center'>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.url} className={linkDesign(link.url)()}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='flex flex-col md:hidden'>
                {!isMenuOpen &&
                    <div onClick={() => setIsMenuOpen(true)}>
                        <Menu className='text-gray-700 cursor-pointer'/>
                    </div>    
                }
                {isMenuOpen &&
                <>
                    <div onClick={() => setIsMenuOpen(false)}>
                        <X className='text-gray-700 cursor-pointer'/>
                    </div>
                    <div className='flex absolute inset-0 top-12 h-12 w-full justify-center items-center border-b border-gray-300 bg-white'>
                        <div className='flex flex-row gap-4'>
                            {navLinks.map((link, index) => (
                                <div key={index} onClick={() => setIsMenuOpen(false)}>
                                    <Link href={link.url} className={linkDesign(link.url)()}>
                                        {link.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
                }
            </div>
        </nav>
  )
}

export default NavLinks