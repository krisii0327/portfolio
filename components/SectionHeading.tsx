import React from 'react'

const SectionHeading = ({title, subtitle} : {title:string, subtitle:string}) => {
  return (
    <div className='max-w-xl mx-auto mb-8 text-center mt-12'>
        <h2 className='text-gray-700 mb-1'>{title}</h2>
        <p className='text-gray-600'>{subtitle}</p>
    </div>
  )
}

export default SectionHeading