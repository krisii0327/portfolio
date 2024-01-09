"use client"
import { portfolios } from '@/constants';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const ProjectItem = ({projectData} : {projectData : (typeof portfolios)[0]}) => {
    const [currentImg, setCurrentImg] = useState(projectData.images[0]);

    return (
        <div className='shadow-box'>
            <h4 className='text-slate-700 font-semibold mb-2 ml-4'>{projectData.title}</h4>

            <div className='relative w-full h-80 rounded-lg overflow-hidden group cursor-pointer mb-5'>
                <Image src={currentImg} alt={projectData.title} fill className='object-cover' />
                <Link href={projectData.link} className='bg-black bg-opacity-10 backdrop-blur-[1px] absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <div className='w-16 h-16 flex items-center justify-center bg-gray-100 opacity-85 border border-gray-400 p-3 text-gray-700 rounded-lg'>
                        <ArrowUpRight />
                    </div>
                </Link>
            </div>

            <div className='grid grid-cols-3 gap-3'>
                {projectData.images.map((image, index) => (
                    <div key={index} onClick={() => setCurrentImg(image)} className='relative h-20 w-full rounded-lg overflow-hidden group cursor-pointer'>
                        <Image src={image} alt={projectData.title} fill className='object-cover'/>
                        <div className={`bg-black bg-opacity-10 backdrop-blur-[1px] absolute top-0 left-0 w-full h-full transition-opacity duration-300
                            ${currentImg !== image ? "opacity-85 border border-gray-300 rounded-lg" : "opacity-0"}
                        `}>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ProjectItem