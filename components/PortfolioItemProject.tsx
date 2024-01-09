"use client"
import React from 'react';
import { portfoliosAll } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Github } from 'lucide-react';

const PortfolioItemProject = ({portfolioData} : {portfolioData : (typeof portfoliosAll)[0]}) => {
    const [images, setImages] = useState(portfolioData.images);
    const [currentImg, setCurrentImg] = useState(portfolioData.images[0]);

    const filter = (selectedImage: string) => {
        const selected = selectedImage;
        const newImages = images.filter((image) => image != selected);
        newImages.unshift(selectedImage);

        setImages(newImages);
        setCurrentImg(newImages[0])
    }

  return (
    <div>
            <div className="mb-4 border border-gray-400 bg-gray-100/65 rounded-lg p-4 flex flex-row max-tablet:flex-col gap-2" key={portfolioData.id}>
              <div className='h-64 w-[400px] max-tablet:w-full'>
                  {images.slice(0, 1).map((image, index) => (
                    <div key={index} className='relative w-full h-full grow cursor-pointer'>
                      <Image src={currentImg} alt={image} fill objectFit='contain'></Image>
                    </div>
                  ))}
              </div>
              <div className='flex w-64 gap-2 flex-col max-tablet:flex-row max-tablet:h-32 max-tablet:w-full'>
                  {images.length > 2 && images.slice(1).map((image, index) => (
                     <div key={index} className='relative w-full h-full grow cursor-pointer hover:scale-105' onClick={() => filter(image)}>
                      <Image src={image} alt={image} fill objectFit='contain'></Image>
                    </div>
                  ))}
                  {images.length === 1 && (
                    <div className='flex w-64 gap-2 flex-col max-tablet:flex-row max-tablet:h-32 max-tablet:w-full h-full'>
                      <div className='bg-gray-200/60 rounded-lg grow h-1/2 flex justify-center items-center max-tablet:h-full'>
                          No more image
                      </div>
                      <div className='bg-gray-200/60 rounded-lg grow h-1/2 flex justify-center items-center max-tablet:h-full'>
                          No more image
                      </div>
                    </div>
                  )}
              </div>
              <div className='flex flex-col gap-2 w-1/2 max-tablet:w-full justify-around'>
                <div className='flex flex-col'>
                  <span className='font-semibold'>
                    Project name: 
                  </span>
                  <span>
                    {portfolioData.title}
                  </span>
                </div>
                <div className='flex flex-col'>
                  <span className='font-semibold'>
                    Info about the project: 
                  </span>
                  <span>
                    {portfolioData.info || ''}
                  </span>
                </div>
                <Link href={portfolioData.link} className='underline hover:text-crimson'> 
                        {portfolioData.link}
                    </Link>
                <Link href={portfolioData.github} className='flex items-center gap-3'>
                    <span>Link to the project repository:</span>
                    <div className='flex p-1 rounded-lg border mt-2 bg-crimson hover:bg-red-500 hover:scale-105'>
                        <Github size={25} color='white'/>
                    </div>
                </Link>
              </div>
            </div>
    </div>
  )
}

export default PortfolioItemProject