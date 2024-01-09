import { Phone, ArrowRight, ArrowDown, Smile } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';
import ProjectItem from '@/components/ProjectItem';
import { infocards, portfolios, skills } from '@/constants';

const page = () => {
  return (
    <>
      <section className='flex items-center max-width flex-col-reverse tablet:flex-row tablet:gap-8 gap-2 mb-16'>

        {/* hero */}
        <div className='tablet:w-2/3 mt-10 tablet:mt-0'>
            <div className='flex flex-col gap-3 items-center tablet:items-start max-w-4xl text-center tablet:text-left'>
              <p className='flex gap-2 px-4 py-2 bg-gray-100 text-gray-700 w-max rounded-lg border border-gray-400'>Hello there! My name is Kristóf Kövesi.<Smile /></p>
              <h1 className='text-gray-700'>Welcome to my page</h1>
              <p className='flex flex-col text-gray-600'>
                <span className='mb-2'>
                  This page is created by me to share a little information about myself. 
                </span>
                <span className='mb-2'>
                  First of all, in 2018, I started to learn at University of Pécs and I obtained my degree in Computer Engineering with a specialization in Systems Engineering.
                  After that, in 2023, I began studying as a cybersecurity engineer at University of Óbuda in Budapest. In addition to my hobbies, I started to learn programming in my free time because I love to learn new things.
                </span>
                <span>
                  If you have some question, feel free to ask me.
                </span>
              </p>
            </div>
            <div className='flex gap-5 mt-6 justify-center items-center tablet:justify-start'>
              <Link href={'/contact'} className='btn btn-primary shadow-box hover:scale-105'>
                <Phone />
                Contact
              </Link>
              <Link href={'/portfolio'} className='btn btn-secondary shadow-box hover:scale-105'>
                View portfolio
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className='flex gap-5 justify-center items-center tablet:justify-start mt-4'>
              <div className='btn bg-gray-300 shadow-box border-gray-400 cursor-pointer hover:scale-105'>
                Download my CV
                <ArrowDown size={16} />
              </div>
            </div>
        </div>

        <div className='relative w-full tablet:w-1/3 h-[400px] tablet:h-[600px]'>
          <Image src={"/images/hero.png"} alt={"me"} fill className="object-cover rounded-2xl"></Image>
        </div>
      </section>
        

      {/* skills */}
      <section className='max-width'>
        <SectionHeading title="Skills" subtitle="what I know from my studies."/>

        <div className='grid-use'>
          {skills.map((skill, index) => (
            <div key={index} className='flex flex-col items-center mb-4'>
              <div className='w-12 h-12 rounded-lg bg-crimson flex items-center justify-center flex-shrink-0 mb-2'>
                <skill.icon size={32} color='white'></skill.icon>
              </div>
              <div className='text-center'>
                <h4 className='text-gray-700 mb-2'>{skill.name}</h4>
                <p className='text-gray-600'>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* infocard */}
      <section className='max-width'>
        <SectionHeading title="Info's about me" subtitle="what is my personality like" />

        <div className='grid-use-benefit-firstrow'>
          <div className='flex w-full h-full'>
            {infocards.slice(0, 1).map((card, index) => (
              <div key={index} className='flex flex-col items-center shadow-box'>
                    <h5 className='text-gray-700 mb-2'>{card.name}</h5>
                    <p className='text-gray-600'>{card.description}</p>
              </div>
            ))}
          </div>
          <div className='flex w-full h-full'>
            {infocards.slice(1, 2).map((card, index) => (
              <div key={index} className='flex flex-col items-center shadow-box'>
                    <h5 className='text-gray-700 mb-2'>{card.name}</h5>
                    <p className='text-gray-600'>{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='grid-use-benefit-secondrow'>
          {infocards.slice(2).map((card, index) => (
            <div key={index} className='flex flex-col items-center shadow-box'>
                  <h5 className='text-gray-700 mb-2'>{card.name}</h5>
                  <p className='text-gray-600'>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* portfolios */}
      <section className='max-width'>
        <SectionHeading title='My projects' subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." />

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
            {portfolios.map((project, index) => (
              <ProjectItem key={index} projectData={project} />
            ))}
        </div>
        
        <div className='flex w-full justify-center'>
          <div className='flex max-w-sm gap-6'>
            <Link href="https://github.com/krisii0327?tab=repositories" className='btn btn-primary mx-auto mb-10 hover:scale-105'>View GitHub Profile</Link>
            <Link href="/portfolio" className='btn btn-primary mx-auto mb-10 hover:scale-105'>View Portfolio</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default page