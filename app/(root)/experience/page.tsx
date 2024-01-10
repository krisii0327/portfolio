import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { schools, timeline } from '@/constants';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title : "Work experience - Kristóf Kövesi CV"
}

const page = () => {
    return (
      <section className='max-width tablet:mt-12 tablet:mb-12 mt-8 mb-8'>

        {/* about */}
        <div>
          <SectionHeading title={'About me'} subtitle=''/>

          <div className='flex flex-col gap-2 font-semibold text-slate-600 text-base'>
            <span>
              As a person who is in the beginning of his career and also a student aswell, I have a big motivation for getting experiences in the future.
            </span>
            <span>
              After the Bachelor's degree, I started to work as a System Engineer. This workposition is very diversified, I had chance to manage a lot of VM, Databases and Systems. I also had chance to understand robots and to configure them. I met with a lot of different foreign worker.
            </span>
            <span>
              I started to learn about Cyber Security at University of Óbuda, Budapest. I finished the first half year successfully. Cyber security will be very useful in the future as the world evolves. In this half year, we went deeper at the cryptograpy tecniques, databases and cloud computing. And we also took over what we learned during our previous studies. In the next half year, we will learn about the SOC tecniques. We will get the answer how we can defend our companies informations from the hackers. How we can recognize a cyber security attack as soon as possible.
            </span>
            <span>
              In my free time I started to get deeper at programming. Firstly I met with programming at University of Pécs. I also got some knowledge about the machine codes for example Bash, Powershell and AWK languages too. But the program code was more understandable for me. I learned the basics about Python, C# and HTML (CSS).
              After these programming languages I started to learn Javascript to develop webpages. I am interested in both of the Backend and Frontend techniques. I picked one of the most used framework, NextJS (React). I think I picked very well.
              Because of it, I got better knowledge about backend Javascript programming, Tailwind style methods, about the MongoDB database, ExpressJS, NodeJS. I also learned about the API calls in web. I faced with a lot of different solution, what I had to understand to step for the next ladder.
            </span>
            <span>
              I started to make my own projects, to get better in both of the sides in web developing.
            </span>
            <span>
              My main goal at the moment is to get better in the IT world. To be a relevant person in IT.
            </span>
          </div>
        </div>


        {/* carrer */}
        <div>
          <SectionHeading title={'My work experiences'} subtitle={'places where I learned a lot'}/>
        
          <div className='mx-2 tablet:mx-20'>
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 sm:pl-48 py-6 group">
                <div className="font-semibold text-crimson text-xl mt-2 sm:mt-0">{item.position}</div>
            
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-4 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[10rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-4 sm:after:left-0 after:w-2 after:h-2 after:bg-red-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[10rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <div className="shadow shadow-gray-400 border border-gray-400 sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center font-semibold uppercase w-32 h-6 mb-3 sm:mb-0 text-slate-700 bg-red-200 rounded-lg whitespace-nowrap">{item.duration}</div>
                  <div className="font-bold text-slate-700">{item.company}</div>
                </div>
            
                <div className="flex flex-col text-slate-500">
                  {item.description.map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* schools */}
        <div>
            <SectionHeading title={'Schools'} subtitle={'started to learn things'}/>
            {schools.map((school, index) => (
              <div key={index} className='flex mx-2 tablet:mx-20 mb-4'>
                <div className='flex flex-col tablet:flex-row tablet:gap-8 grow gap-2'>
                  <div className='flex tablet:justify-center items-center'>
                    <span className='shadow shadow-gray-400 border border-gray-400 inline-flex items-center justify-center font-semibold w-32 h-6 sm:mb-0 text-slate-700 bg-red-200 rounded-lg whitespace-nowrap'>
                      {school.duration}
                    </span>
                  </div>

                  <div className='flex flex-col justify-center'>
                    <span className='text-crimson text-lg font-semibold'>{school.name}</span>
                    <span className='font-medium text-slate-700'>{school.study}</span>
                  </div>
                </div>

                <div className='flex justify-center items-center'>
                  <div className='relative ml-1 h-20 w-20 rounded-lg overflow-hidden'>
                    <Image src={school.logo} alt={school.name} fill className='object-cover rounded-lg'/>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    )
}

export default page