import React from 'react'
import Image from 'next/image'

const Card = () => {

    const projects = [
        {
        name: 'Netflix Clone',
        image: '/netflix.jpg',
        technologies: ['React','TailwindCSS','Firestore','Stripe Payment','Firebase Authentication'],
        link:'https://netflix-clone-chandrabosep.vercel.app/',
        },
        {
            name: 'Retro Website',
            image: '/retro.jpg',
            technologies: ['React','SCSS','GSAP','Locomotive Scroll'],
            link:'https://retro-website-design.vercel.app/',
        },
        {
          name: 'Cosy Cradle',
          image: '/cosycradel.jpg',
          technologies: ['React','TailwindCSS','Firebase'],
          link:'',
      },

    ]

  return (
    <>     
        {projects.map((e) => (
          <div className='w-full md:w-[31%] rounded-3xl md:h-fit text-[#c5c5c5] bg-[#0c0f14]'>
            <a href={e.link} target='_blank'>
            <div className='relative'>
              {/* 899 x 510 */}
                <Image src={e.image} alt={e.name} className='w-full rounded-t-3xl object-cover' width={800} height={800}/>
                <div className='absolute inset-0 bg-black opacity-50'></div>
            </div>
            <div className='px-4 pb-6  md:pb-[6%]'>
              <div className='py-4 md:pt-2 md:pb-0.5 text-xl font-md md:text-xl'>
                {e.name}
              </div>
            <div className='flex gap-3 md:gap-2 flex-wrap md:pt-2'>
            {e.technologies.map((e) => (
                <span className='border rounded-xl md:rounded-md border-gray-500 px-5 py-1.5 md:px-3 md:py-1 md:text-sm'>{e}</span>
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
