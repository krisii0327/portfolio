import React from 'react';
import { Metadata } from 'next';
import { contactDetails, socialLinks } from '@/constants';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
    title : "Contact - Kristóf Kövesi CV"
}

const page = () => {
  return (
    <section className='max-width tablet:mt-12 tablet:mb-12 mt-8 mb-8'>
        <div className='flex flex-col gap-4 items-center'>
            <div className='flex gap-4 tablet:gap-12 justify-center w-full flex-row max-tablet:flex-col max-tablet:max-w-sm'>
                {contactDetails.map((info, index) => (
                <div key={index} className='flex border border-gray-400 rounded-lg px-2 py-1 bg-white shadow shadow-gray-400 gap-4'>
                    <div className='flex items-center justify-center'>
                        <info.icon size={25}/>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-slate-600 font-semibold'>
                        {info.detail}
                        </span>
                        <span className='text-slate-700'>
                        {info.text}
                        </span>
                    </div>
                </div>
                ))}
            </div>
            <div className='flex flex-row gap-32 mb-6'>
                {socialLinks.map((social, index) => (
                    <Link key={index} href={social.url} className='cursor-pointer flex border border-gray-400 rounded-lg px-2.5 py-2 bg-white shadow shadow-gray-400 gap-2'>
                        <div>
                            <div className="animate-pulse flex gap-2">
                                <div className="flex items-center justify-center">
                                    <social.icon size={25} />
                                </div>
                                <div className="flex-1 space-y-4 py-1">
                                    <div className="text-slate-700 text-xl">
                                        {social.label}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        <div className="tablet:max-w-4xl tablet:justify-center mx-auto">
            <ContactForm/>
        </div>
    </section>
  )
}

export default page