import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  const data = [
    {
      name: 'Front-End',
      icon: '/assets/certs/front-end.png',
      link: 'https://www.credly.com/badges/b9c36e05-4650-41b6-83eb-e82c35d6dfda/public_url'
    },
    {
      name: 'Full-Stack',
      icon: '/assets/certs/full-stack.png',
      link: 'https://www.credly.com/badges/afb4f2c9-31a3-4585-936f-a613c4517a83/public_url'
    },
    {
      name: 'Back-End',
      icon: '/assets/certs/back-end.png',
      link: 'https://www.credly.com/badges/98fc652a-b1d8-4374-a50e-11e1a15acf0d/public_url'
    },
  ]
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Integrations · APIs · Financial Operations · Delivery Leadership
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className=' text-purple-700'> Kholwani</span>
          </h1>
          <h1 className='py-2 text-gray-700 text-2xl sm:text-4xl'>
            Business Systems &amp; Software Development Lead
          </h1>
          <p className='py-2 text-purple-700 italic'>Meta Certified</p>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            8+ years building and integrating operational and financial platforms,
            connecting POS, payment switches, and customer apps to core banking
            systems through design, go-live, and ongoing support.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/khomabhena/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/khomabhena'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>

          {/* Certs */}
          <div className='grid grid-cols-3 lg:grid-cols-3 gap-8'>
          {
            data?.map(({name,icon, link}, index) => (
              <a key={index} href={link} target='_blank' rel='noreferrer'>
                <div className='p-6 cursor-pointer hover:scale-150 ease-in duration-300'>
                  <div className='grid grid-cols-1 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image className=' object-contain h-20 w-24 md:h-26 md:w-26' src={icon} width={400} height={400} alt={name} />
                    </div>
                  </div>
                </div>
              </a>
            ))
          }

        </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
