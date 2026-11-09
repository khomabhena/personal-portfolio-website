import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import Title from './Title';

const About = () => {
  const one = "Business systems and software development lead with 8+ years building and integrating operational and financial platforms, including 3+ years leading delivery teams and vendor/partner integrations."
  const two = "Experienced connecting day-to-day operational channels (POS, payment switches, and customer apps) to core financial systems such as BankWare, ledgers, and payment gateways through design, go-live, and ongoing support."
  const three = "Hands-on with SQL, APIs, data modelling, and production services; works closely with operations, finance-facing processes, IT counterparts, and external development partners."

  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <Title title="About" sub="Who Am I" />
          <p className='py-2 text-gray-600'>
            {one}
          </p>
          <p className='py-2 text-gray-600'>
            {two}
          </p>
          <p className='py-2 text-gray-600'>
            {three}
          </p>
          <Link href='/#experience'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              See recent delivery experience.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='Kholwani Mabhena' />
        </div>
      </div>
    </div>
  );
};

export default About;
