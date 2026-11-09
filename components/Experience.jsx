import React from 'react';
import Title from './Title';
import getExperience from '@/data/experience';

const Experience = () => {
  const data = getExperience();

  return (
    <div id='experience' className='w-full p-2 mt-24'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center'>
        <Title title='Experience' sub='Where I Have Delivered' />
        <div className='flex flex-col gap-10'>
          {data.map(({ id, company, location, role, period, summary, bullets }) => (
            <div key={id} className='shadow-xl rounded-xl p-6 md:p-8 hover:scale-[1.01] ease-in duration-300'>
              <div className='flex flex-col md:flex-row md:items-baseline md:justify-between gap-1'>
                <h3 className='text-slate-700'>
                  {company}
                  <span className='font-normal text-slate-500'> · {location}</span>
                </h3>
                <p className='text-sm uppercase tracking-wider text-purple-700'>{period}</p>
              </div>
              <p className='py-1 italic text-slate-600'>{role}</p>
              <p className='py-2 text-slate-600'>{summary}</p>
              <ul className='list-disc list-outside px-5 py-1 leading-relaxed text-slate-600'>
                {bullets.slice(0, 4).map((bullet, index) => (
                  <li key={index} className='py-1'>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
