import getProjects from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
import SEO from '@/components/SEO'
import Navbar from '@/components/Navbar'
import site from '@/data/site'

const Projects = ({project}) => {
  const { id, title, image, techMore, liveDemo, gitHubLink, desc, techStack } = project[0]
  const pagePath = `/projects/${id}`
  const ogImage = image?.startsWith('http') ? image : `${site.url}${image}`
  const keywords = [
    'Kholwani Mabhena',
    title,
    techMore,
    ...(techStack || []),
    'business systems',
    'fintech',
    'software engineer Zimbabwe',
  ].filter(Boolean).join(', ')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description: desc,
    url: `${site.url}${pagePath}`,
    image: ogImage,
    author: {
      '@type': 'Person',
      name: site.name,
      url: site.url,
    },
    keywords: keywords,
    about: techStack,
  }

  return (
    <div className='w-full'>
      <SEO
        title={title}
        description={desc}
        keywords={keywords}
        path={pagePath}
        image={ogImage}
        imageAlt={`${title} by ${site.name}`}
        type='article'
        jsonLd={jsonLd}
      />
      <Navbar />
      <div className=' w-full h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={image}
          alt={title} />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>{title}</h2>
          <h3>{techMore}</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className=' text-slate-600 text-lg mt-8'>Project</p>
          <h2 className=' text-slate-600'>Overview</h2>
          <p className=' mt-8 text-slate-600 text-lg'>{desc}</p>
          <div className='mt-12'>
            {gitHubLink ? (
              <a href={gitHubLink} target='_blank' rel='noreferrer'>
                <button className=' bg-red-500 px-8 py-2 mt-4 mr-8'>Code</button>
              </a>
            ) : null}
            {liveDemo ? (
              <a href={liveDemo} target='_blank' rel='noreferrer'>
                <button className='px-8 py-2 mt-4'>Demo</button>
              </a>
            ) : null}
            {!gitHubLink && !liveDemo ? (
              <p className='mt-4 text-slate-500 italic'>
                Private production delivery. Code and demo are not publicly available.
              </p>
            ) : null}
          </div>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2 px-4'>
            <p className=' text-slate-600 text-lg font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              {
                techStack?.map((item, index) => (
                  <p key={index} className='text-gray-600 text-lg gap-4 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> {item}
                  </p>
                ))
              }
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline uppercase text-lg font-semibold text-slate-600 cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const paths = getProjects().map(item => ({
    params: {
      id: item.id
    }
  }))

  return {
      paths,
      fallback: 'blocking'
  }
}

export const getStaticProps = async ({params: {id}}) => {
  const project = getProjects().filter(item => item.id === id)

  return {
    props: {
      project
    }
  }
}

export default Projects
