import SEO from '@/components/SEO'
import Main from '@/components/Main'
import About from '@/components/About'
import Technologies from '@/components/Technologies'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import site from '@/data/site'

export default function Home() {
  const person = {
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.name,
    alternateName: 'Kho Mabhena',
    url: site.url,
    image: site.image,
    email: site.email,
    jobTitle: 'Business Systems & Software Development Lead',
    description: site.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Harare',
      addressCountry: 'ZW',
    },
    sameAs: site.sameAs,
    knowsAbout: site.knowsAbout,
    worksFor: {
      '@type': 'Organization',
      name: 'Tapseed',
    },
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { '@id': `${site.url}/#person` },
        inLanguage: 'en-US',
      },
      person,
      {
        '@type': 'ProfilePage',
        '@id': `${site.url}/#profilepage`,
        url: site.url,
        name: site.title,
        description: site.description,
        isPartOf: { '@id': `${site.url}/#website` },
        inLanguage: 'en-US',
        dateCreated: '2023-06-01T00:00:00+02:00',
        dateModified: '2026-11-09T00:00:00+02:00',
        mainEntity: { '@id': `${site.url}/#person` },
      },
    ],
  }

  return (
    <div>
      <SEO jsonLd={jsonLd} />
      <Navbar />
      <div className=' px-4 md:px-12'>
        <Main />
        <About />
        <Technologies />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}
