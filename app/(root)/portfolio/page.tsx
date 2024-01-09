import React from 'react'
import { Metadata } from 'next';
import SectionHeading from '@/components/SectionHeading';
import { portfoliosAll } from '@/constants';
import PortfolioItemProject from '@/components/PortfolioItemProject';

export const metadata: Metadata = {
  title : "Portfolio - Kristóf Kövesi CV"
}

const page = () => {
  return (
    <section className='max-width tablet:mt-12 tablet:mb-12 mt-8 mb-8'>
        <SectionHeading title={"My portfolio"} subtitle={"These pages are created by me in my free time."}/>

        <div className='mb-10'>
          <div className='text-xl mb-2 text-slate-700 ml-4'>My main project at the moment. I am working on this project when I have free time.</div>
          
          {portfoliosAll.slice(0, 1).map((project, index) => (
              <PortfolioItemProject key={index} portfolioData={project} />
          ))}   
        </div>

        <div className='border-b border-slate-300' />

        <div>
          <div className='text-xl mb-2 mt-8 text-slate-700 ml-4'>Some of my old projects</div>

          {portfoliosAll.slice(1).map((project, index) => (
            <PortfolioItemProject key={index} portfolioData={project} />
          ))}   
        </div>
        <div className='text-slate-600 font-semibold'>
          <span>
            And.. I also have some project what I don&apos;t have in vercel or other deploy pages. I started these projects just to practice.
          </span>
        </div>
    </section>
  )
}

export default page