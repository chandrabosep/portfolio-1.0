import React from 'react'
import Image from 'next/image'

const Card = () => {

    const projects = [
        {
        name: 'Netflix Clone',
        image: '/idk.jpg',
        technologies: ['React','TailwindCSS','Firebase','Stripe Payments'],
        link:'',
        },
        {
            name: 'Netflix Clone',
            image: '/idk.jpg',
            technologies: ['React','TailwindCSS','Firebase','Stripe'],
            link:'',
            }

    ]

  return (
    <>     
        {projects.map((e) => (
          <div className='w-full md:w-3/12 rounded-3xl bg-[#0E1116]'>
            <a href={e.link} target='_blank'>
            <div className='relative'>
                <Image src={e.image} alt={e.name} className='w-full rounded-t-3xl object-cover' width={800} height={800}/>
                <div className='absolute inset-0 bg-black opacity-50'></div>
            </div>
            <div className='px-4 pb-6 md:pb-4'>
              <div className='py-4 md:pt-3 md:pb-1 text-2xl font-medium md:text-2xl'>
                {e.name}
              </div>
            <div className='flex gap-3 md:gap-2 flex-wrap md:pt-2'>
            {e.technologies.map((e) => (
                <span className='border rounded-xl md:rounded-lg border-gray-500 px-5 py-1.5 md:px-3 md:py-1 md:text-sm'>{e}</span>
            ))}
            </div>
            </div>
            </a>
          </div>
        ))}
    </>
  )
}

export default Card
