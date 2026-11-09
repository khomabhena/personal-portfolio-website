import React from 'react';
import Title from './Title';

const Skills = () => {
  const data = [
    {
      name: 'Business systems & integration',
      detail: 'System integration, API design, data modelling, financial reconciliation, transaction ledgers & audit trails, go-live & production support, stakeholder & vendor coordination',
    },
    {
      name: 'Data & backends',
      detail: 'SQL, MySQL, SQLite, MongoDB, Node.js, Express.js, Python, Django REST Framework, REST APIs, OpenAPI/Swagger',
    },
    {
      name: 'Financial / operational platforms',
      detail: 'BankWare / core banking APIs, Postilion / PostBridge, ISO 8583, ZimSwitch, ZIPIT 3.0, payment gateways, POS / merchant operations, VAS orchestration',
    },
    {
      name: 'Delivery & leadership',
      detail: 'Technical leadership, cross-functional delivery, documentation, system / integration / end-to-end testing, Git',
    },
    {
      name: 'Channel UIs',
      detail: 'JavaScript, TypeScript, React, React Native, Expo, Next.js, Tailwind CSS, where channel UIs support operational workflows',
    },
  ]
  return (
    <div id='skills' className='w-full p-2 mt-24'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center'>
        <Title title='Skills' sub='What I Bring' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {
            data?.map(({ name, detail }, index) => (
              <div key={index} className='py-8 px-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <h3 className='text-slate-700'>{name}</h3>
                <p className='pt-3 text-slate-600 text-sm leading-relaxed'>{detail}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Skills;
