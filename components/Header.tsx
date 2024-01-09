import React from 'react';
import Link from 'next/link';
import NavLinks from './NavLinks';

const Header = () => {
    return (
        <header className='sticky top-0 flex items-center justify-between h-12 max-width border-b border-gray-300 z-20 bg-white mb-4'>
            <Link href={'/'}>
                <h5 className='text-crimson text-xl font-semibold'>Kristóf Kövesi&apos;s Page</h5>
            </Link>
            <NavLinks />
        </header>
    )
}

export default Header