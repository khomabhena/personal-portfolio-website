import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import getExperience from '@/data/experience';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';

const resume = () => {
  const experience = getExperience();

  return (
    <>
      <SEO
        title='Resume'
        description='Resume of Kholwani Mabhena: Business Systems and Software Development Lead. Experience with Postilion, BankWare, ZIPIT 3.0, ZimSwitch, ISO 8583, payment gateways, React, Node.js, Django, and fintech delivery at Tapseed and Astro Mobile.'
        path='/resume'
        type='profile'
      />
      <Navbar />

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center text-lg sm:text-2xl'>Kholwani Mabhena</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/khomabhena/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/khomabhena'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>

        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Business Systems &amp; Software Development Lead
              <span className='px-1'>|</span>
              Meta Certified
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Business Systems Lead</p>
            <p className='py-2'>Meta Certified Engineer</p>
          </div>
        </div>

        <p className='text-center text-sm text-slate-600 pb-2'>
          Harare, Zimbabwe · colwanymab@gmail.com · Integrations · APIs · Financial Operations · Delivery Leadership
        </p>

        <p>
          Business systems and software development lead with 8+ years building and
          integrating operational and financial platforms, including 3+ years leading
          delivery teams and vendor/partner integrations. Experienced connecting
          day-to-day operational channels (POS, payment switches, customer apps) to
          core financial systems (BankWare, ledgers, payment gateways) through design,
          go-live, and ongoing support. Hands-on with SQL, APIs, data modelling, and
          production services; works closely with operations, finance-facing processes,
          IT counterparts, and external development partners.
        </p>

        <div className='py-4'>
          <h5 className='mt-8 text-slate-500 font-bold text-xl'>SKILLS</h5>
          <p className='py-2'>
            <span className='font-bold text-slate-600'>Business systems &amp; integration: </span>
            System integration, API design, data modelling, financial reconciliation support,
            transaction ledgers &amp; audit trails, go-live &amp; production support, stakeholder &amp; vendor coordination
          </p>
          <p className='py-1'>
            <span className='font-bold text-slate-600'>Data &amp; backends: </span>
            SQL, MySQL, SQLite, MongoDB, Node.js, Express.js, Python, Django REST Framework,
            REST APIs, OpenAPI/Swagger
          </p>
          <p className='py-1'>
            <span className='font-bold text-slate-600'>Financial / operational platforms: </span>
            BankWare / core banking APIs, Postilion / PostBridge, ISO 8583, ZimSwitch, ZIPIT 3.0,
            payment gateways, POS / merchant operations, VAS orchestration
          </p>
          <p className='py-1'>
            <span className='font-bold text-slate-600'>Delivery: </span>
            Technical leadership, cross-functional delivery, documentation,
            system / integration / end-to-end testing, Git
          </p>
          <p className='py-1'>
            <span className='font-bold text-slate-600'>Also: </span>
            JavaScript, TypeScript, React, React Native, Expo, Next.js, Tailwind CSS
          </p>
        </div>

        <h5 className='mt-8 text-slate-500 font-bold text-xl uppercase'>
          Professional Experience
        </h5>

        {experience.map(({ id, company, location, role, period, bullets }) => (
          <div key={id} className='py-6'>
            <p className='italic'>
              <span className='font-bold italic'>{company}</span>
              <span className='px-2'>|</span>{location}
            </p>
            <p className='py-1 italic'>{role} ({period.toUpperCase()})</p>
            <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
              {bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}

        <h5 className='mt-8 text-slate-500 font-bold text-xl uppercase'>
          Education
        </h5>
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold italic'>Meta</span>
            <span className='px-2'>|</span>Professional Certificates · 2023
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Back-End Developer Professional Certificate (June 2023 – October 2023)</li>
            <li>Front-End Developer Professional Certificate (August 2023 – November 2023)</li>
            <li>Mobile Developer Professional Certificate (October 2023 – December 2023)</li>
          </ul>
        </div>
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold italic'>Midlands State University, Gweru</span>
          </p>
          <p className='py-1 italic'>
            BSc Information Systems Honours · August 2011 – (studies deferred; equivalent
            practical experience through 8+ years professional delivery)
          </p>
        </div>

        <h5 className='mt-8 text-slate-500 font-bold text-xl uppercase'>
          Selected Delivery Highlights
        </h5>
        <ul className='list-disc list-outside px-7 py-4 leading-relaxed'>
          <li>
            BankWare ↔ operational channels: Core banking API and ZIPIT/Postilion services
            through design, test, go-live readiness, and support tooling.
          </li>
          <li>
            Multi-site merchant operations: POS, catalogue/redemption, and admin portal
            connecting branch activity to payment and programme financial records.
          </li>
          <li>
            Leadership: 3+ years as Chief Software Engineer owning team delivery,
            architecture, and partner/stakeholder engagement.
          </li>
        </ul>
      </div>
    </>
  );
};

export default resume;
