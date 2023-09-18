import React from 'react'
import '@/app/page.css'
import Image from 'next/image'
import Card from '@/components/Card'

const page = () => {

  const skills = ['HTML','CSS','SASS','JavaScript','React','NextJS','TailwindCSS','Material UI','GSAP','Figma']

  return (
    <>
    <div className='px-10 md:px-20 border-gray-500'>
      <div className='px-6 border-x border-gray-500  py-6'>
      </div>
    </div>
      <div className="px-10 md:px-20 border-gray-500 border-y text-6xl md:text-8xl font-bold flex justify-between">
        <div className='py-10 border-gray-500 border-x px-6 text-white w-full'>Chandra Bose .</div>
        <div className=' border-r border-gray-500 w-1/6'></div>
      </div>
      <div className='flex flex-col md:flex-row md:items-bottom md:justify-between'>
      <div className="px-10 md:p-0  md:w-fit border-gray-500 text-center text-6xl font-bold md:order-2 md:relative">
        <div className='py-10 md:py-6 border-x md:border-x-0 md:border-b border-gray-500 flex'>
        <Image src="/profile.jpeg" width={800} height={800} alt="Chandra Bose" class="w-[17.5rem] relative h-[22rem] md:w-[25rem] md:h-[28rem] rounded-3xl ml-6 md:ml-0" />
        <div class="flex items-start justify-end space-x-3 absolute -bottom-16 left-24 z-10 md:bottom-12 md:left-6 ">
          <svg viewBox="0 0 18 14" fill="none" class="h-4 text-white/50">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0H15.75C16.0455 0 16.3381 0.058198 16.611 0.171271C16.884 0.284344 17.1321 0.450078 17.341 0.65901C17.5499 0.867942 17.7157 1.11598 17.8287 1.38896C17.9418 1.66194 18 1.95453 18 2.25V11.75C18 12.0455 17.9418 12.3381 17.8287 12.611C17.7157 12.884 17.5499 13.1321 17.341 13.341C17.1321 13.5499 16.884 13.7157 16.611 13.8287C16.3381 13.9418 16.0455 14 15.75 14H2.25C1.65326 14 1.08097 13.7629 0.65901 13.341C0.237053 12.919 0 12.3467 0 11.75V2.25ZM1.5 8.06V11.75C1.5 12.164 1.836 12.5 2.25 12.5H15.75C15.9489 12.5 16.1397 12.421 16.2803 12.2803C16.421 12.1397 16.5 11.9489 16.5 11.75V9.06L14.28 6.841C14.1394 6.70055 13.9488 6.62166 13.75 6.62166C13.5512 6.62166 13.3606 6.70055 13.22 6.841L11.31 8.75L11.78 9.22C11.8537 9.28866 11.9128 9.37146 11.9538 9.46346C11.9948 9.55546 12.0168 9.65478 12.0186 9.75548C12.0204 9.85618 12.0018 9.95621 11.9641 10.0496C11.9264 10.143 11.8703 10.2278 11.799 10.299C11.7278 10.3703 11.643 10.4264 11.5496 10.4641C11.4562 10.5018 11.3562 10.5204 11.2555 10.5186C11.1548 10.5168 11.0555 10.4948 10.9635 10.4538C10.8715 10.4128 10.7887 10.3537 10.72 10.28L5.53 5.091C5.38937 4.95055 5.19875 4.87166 5 4.87166C4.80125 4.87166 4.61063 4.95055 4.47 5.091L1.5 8.06ZM11 4C11 4.26522 10.8946 4.51957 10.7071 4.70711C10.5196 4.89464 10.2652 5 10 5C9.73478 5 9.48043 4.89464 9.29289 4.70711C9.10536 4.51957 9 4.26522 9 4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3C10.2652 3 10.5196 3.10536 10.7071 3.29289C10.8946 3.48043 11 3.73478 11 4Z" fill="currentColor"></path>
          </svg>
          <div class="text-sm font-bold uppercase text-white">IMG_0526.jpg</div>
        </div>
        </div>
      </div>
      <div className="px-10 md:pl-20 md:w-5/12 border-b border-gray-500 md:order-1">
        <div className='pb-10 md:h-full pt-6 px-6 border-x border-gray-500'>
          <div className=' text-5xl font-bold md:text-4xl'>About me</div>
          <div className='md:flex md:flex-col'>
            <div className='py-8 text-xl font-light text-gray-50 opacity-70 max-w-2xl md:text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae adipisci voluptatibus modi? Dignissimos reprehenderit alias illum ipsam amet aperiam maiores ut enim. Ad fuga, ipsum sint doloribus officia voluptatibus non!
            </div>
            <div className=''>
              <div className='font-medium text-xl text-right'>FIND ME AT</div>
                <div className='flex gap-4 mt-4 justify-end'>
                  <a href="" className='h-16 w-16 border-2 rounded-full md:h-10 md:w-10 border-gray-500 flex items-center justify-center'>
                    <svg viewBox="0 0 24 24" class="w-5 flex-shrink-0 text-gray-40 transition-all group-hover:text-gray-800 dark:text-gray-50 dark:group-hover:text-green-400"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"></path></svg>
                  </a>
                  <a href="" className='h-16 w-16 border-2 rounded-full md:h-10 md:w-10 border-gray-500 flex items-center justify-center'>
                    <svg viewBox="0 0 22 22" fill="none" class="w-5 flex-shrink-0 text-gray-40 transition-all group-hover:text-gray-800 dark:text-gray-50 dark:group-hover:text-green-400"><path d="M11 0C8.01167 0 7.63858 0.01375 6.46525 0.066C5.29375 0.121 4.49625 0.30525 3.795 0.5775C3.07175 0.858 2.45758 1.23475 1.84617 1.84617C1.23475 2.45758 0.857083 3.07083 0.5775 3.795C0.30525 4.49625 0.120083 5.29375 0.066 6.46525C0.011 7.63858 0 8.01167 0 11C0 13.9883 0.01375 14.3614 0.066 15.5348C0.121 16.7053 0.30525 17.5038 0.5775 18.205C0.858 18.9273 1.23475 19.5424 1.84617 20.1538C2.45758 20.7643 3.07083 21.1429 3.795 21.4225C4.49717 21.6938 5.29467 21.8799 6.46525 21.934C7.63858 21.989 8.01167 22 11 22C13.9883 22 14.3614 21.9863 15.5348 21.934C16.7053 21.879 17.5038 21.6938 18.205 21.4225C18.9273 21.142 19.5424 20.7643 20.1538 20.1538C20.7643 19.5424 21.1429 18.9301 21.4225 18.205C21.6938 17.5038 21.8799 16.7053 21.934 15.5348C21.989 14.3614 22 13.9883 22 11C22 8.01167 21.9863 7.63858 21.934 6.46525C21.879 5.29467 21.6938 4.49533 21.4225 3.795C21.142 3.07175 20.7643 2.45758 20.1538 1.84617C19.5424 1.23475 18.9301 0.857083 18.205 0.5775C17.5038 0.30525 16.7053 0.120083 15.5348 0.066C14.3614 0.011 13.9883 0 11 0ZM11 1.98C13.9361 1.98 14.2863 1.99467 15.4458 2.04508C16.5183 2.0955 17.1004 2.27333 17.4873 2.4255C18.0024 2.62442 18.3673 2.86275 18.7541 3.24683C19.1382 3.63183 19.3765 3.99758 19.5754 4.51275C19.7258 4.89958 19.9054 5.48167 19.954 6.55417C20.0063 7.71467 20.0182 8.063 20.0182 11C20.0182 13.937 20.0044 14.2863 19.9503 15.4458C19.8944 16.5183 19.7157 17.1004 19.5644 17.4873C19.3591 18.0024 19.1253 18.3673 18.7403 18.7541C18.3563 19.1382 17.985 19.3765 17.4753 19.5754C17.0903 19.7258 16.4991 19.9054 15.4266 19.954C14.2588 20.0063 13.915 20.0182 10.9725 20.0182C8.02908 20.0182 7.68533 20.0044 6.51842 19.9503C5.445 19.8944 4.85375 19.7157 4.46875 19.5644C3.94717 19.3591 3.58875 19.1253 3.20467 18.7403C2.81875 18.3563 2.57217 17.985 2.37967 17.4753C2.22842 17.0903 2.05058 16.4991 1.99467 15.4266C1.95342 14.2716 1.93875 13.915 1.93875 10.9862C1.93875 8.05658 1.95342 7.69908 1.99467 6.53033C2.05058 5.45783 2.22842 4.8675 2.37967 4.4825C2.57217 3.96 2.81875 3.6025 3.20467 3.21658C3.58875 2.8325 3.94717 2.585 4.46875 2.39342C4.85375 2.24125 5.43217 2.0625 6.50467 2.0075C7.67342 1.96625 8.01717 1.9525 10.9588 1.9525L11 1.98ZM11 5.3515C7.87875 5.3515 5.3515 7.8815 5.3515 11C5.3515 14.1213 7.8815 16.6485 11 16.6485C14.1213 16.6485 16.6485 14.1185 16.6485 11C16.6485 7.87875 14.1185 5.3515 11 5.3515ZM11 14.6667C8.97417 14.6667 7.33333 13.0258 7.33333 11C7.33333 8.97417 8.97417 7.33333 11 7.33333C13.0258 7.33333 14.6667 8.97417 14.6667 11C14.6667 13.0258 13.0258 14.6667 11 14.6667ZM18.1922 5.12875C18.1922 5.8575 17.6 6.44875 16.8722 6.44875C16.1434 6.44875 15.5522 5.85658 15.5522 5.12875C15.5522 4.40092 16.1443 3.80967 16.8722 3.80967C17.5991 3.80875 18.1922 4.40092 18.1922 5.12875Z" fill="currentColor"></path></svg>
                  </a>
                  <a href="" className='h-16 w-16 border-2 rounded-full md:h-10 md:w-10 border-gray-500 flex items-center justify-center'>
                    <svg viewBox="0 0 22 22" fill="none" class="w-5 flex-shrink-0 text-gray-40 transition-all group-hover:text-gray-800 dark:text-gray-50 dark:group-hover:text-green-400"><path d="M11 0C4.9225 0 0 5.0503 0 11.2793C0 16.2638 3.1515 20.4907 7.52125 21.9805C8.07125 22.0867 8.27292 21.738 8.27292 21.4382C8.27292 21.1703 8.26375 20.4606 8.25917 19.5207C5.19933 20.2012 4.554 18.0074 4.554 18.0074C4.0535 16.7056 3.33025 16.3578 3.33025 16.3578C2.33383 15.6585 3.40725 15.6726 3.40725 15.6726C4.51183 15.7515 5.09208 16.8343 5.09208 16.8343C6.07292 18.5591 7.667 18.061 8.29583 17.7724C8.39483 17.043 8.67808 16.5458 8.9925 16.2638C6.54958 15.9818 3.982 15.0118 3.982 10.6899C3.982 9.45862 4.40825 8.45289 5.11408 7.66334C4.99033 7.37853 4.61908 6.23181 5.21033 4.67808C5.21033 4.67808 6.13158 4.37542 8.23533 5.83421C9.11533 5.58325 10.0503 5.45918 10.9853 5.45354C11.9203 5.45918 12.8553 5.58325 13.7353 5.83421C15.8253 4.37542 16.7466 4.67808 16.7466 4.67808C17.3378 6.23181 16.9666 7.37853 16.8566 7.66334C17.5578 8.45289 17.9841 9.45862 17.9841 10.6899C17.9841 15.0231 15.4128 15.9771 12.9653 16.2544C13.3503 16.5928 13.7078 17.2846 13.7078 18.3411C13.7078 19.8506 13.6941 21.0631 13.6941 21.4297C13.6941 21.7258 13.8866 22.0783 14.4503 21.9655C18.8512 20.486 22 16.2563 22 11.2793C22 5.0503 17.0748 0 11 0Z" fill="currentColor"></path></svg>
                  </a>
                  <a href="" className='h-16 w-16 border-2 rounded-full md:h-10 md:w-10 border-gray-500 flex items-center justify-center'>
                  <svg viewBox="0 0 20 16" fill="none" class="w-5 flex-shrink-0 text-gray-40 transition-all group-hover:text-gray-800 dark:text-gray-50 dark:group-hover:text-green-400"><path d="M20 2.90909V3.0623L10.7486 8.85915C10.5234 9.00017 10.2643 9.07483 10 9.07483C9.73568 9.07483 9.47655 9.00017 9.25143 8.85915L0 3.0623V2.90909C0 2.13755 0.30102 1.39761 0.836838 0.852053C1.37266 0.306493 2.09938 0 2.85714 0H17.1429C17.9006 0 18.6273 0.306493 19.1632 0.852053C19.699 1.39761 20 2.13755 20 2.90909Z" fill="currentColor"></path><path d="M0 13.0909V4.77091L6.30277 8.71923L2.56413 11.3897C2.22707 11.6304 2.149 12.0989 2.38976 12.4359C2.63051 12.773 3.09893 12.851 3.43599 12.6103L7.67766 9.58052L8.50286 10.0975C8.9531 10.3795 9.47137 10.5288 10 10.5288C10.5286 10.5288 11.0469 10.3795 11.4971 10.0975L12.3224 9.58048L16.5641 12.6103C16.9012 12.851 17.3696 12.773 17.6104 12.4359C17.8511 12.0989 17.773 11.6304 17.436 11.3897L13.6973 8.71919L20 4.77091V13.0909C20 13.8624 19.699 14.6024 19.1632 15.1479C18.6273 15.6935 17.9006 16 17.1429 16H2.85714C2.09938 16 1.37266 15.6935 0.836838 15.1479C0.30102 14.6024 0 13.8624 0 13.0909Z" fill="currentColor"></path></svg>
                  </a>
                </div>
              </div>
              </div>
          </div>
      </div>
      <div className='px-10 md:pr-20 md:w-2/5  border-b border-gray-500 order-3'>
        <div className='py-10 px-6 md:h-full border-x border-gray-500 skills'>
          <div className='text-2xl font-medium text-green-400 uppercase'>Skills</div>
          <div className='flex flex-wrap gap-4 pt-10'>
            {skills.map((e) => (
            <span className='border-2 rounded-lg border-gray-500 w-fit px-8 py-2'>
              {e}
            </span>
            ))}
          </div>
        </div>
      </div>
      </div>
      <div className='px-10 md:px-20 border-b border-gray-500'>
        <div className='py-10 px-6 border-x border-gray-500'>
          <div className='text-2xl font-medium text-green-400 uppercase'>Projects</div>
            <div className='flex flex-wrap gap-6 pt-10'>
              <Card/>
            </div>
          </div>
      </div>
      <div className='px-10 md:px-20 border-b border-gray-500'>
        <div className='py-10 px-6 border-x border-gray-500 text-center'>
          <div className='font-light text-lg text-[#77818F]'>
            Have an interesting, stupid or crazy idea you'd like some help building? <span className='border-b text-gray-200 border-green-500'><a href="">Let's talk.</a></span>
          </div>
          <div className='text-medium font-light text-[#3D4654] py-4'>{new Date().getFullYear()} © Chandra Bose</div>
        </div>
      </div>
    </>
  )
}

export default page
