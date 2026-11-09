import Head from 'next/head'
import site from '@/data/site'

const SEO = ({
  title = site.title,
  description = site.description,
  keywords = site.keywords,
  path = '/',
  image = site.image,
  imageAlt = site.imageAlt,
  type = 'website',
  jsonLd,
}) => {
  const url = path === '/' ? site.url : `${site.url}${path}`
  const resolvedTitle = title.includes(site.name) ? title : `${title} | ${site.name}`
  const imageType = image.toLowerCase().endsWith('.jpg') || image.toLowerCase().endsWith('.jpeg')
    ? 'image/jpeg'
    : 'image/png'

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
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
    alumniOf: [
      {
        '@type': 'Organization',
        name: 'Midlands State University',
      },
      {
        '@type': 'Organization',
        name: 'Meta',
      },
    ],
  }

  return (
    <Head>
      <title>{resolvedTitle}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content={site.name} />
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
      <link rel='canonical' href={url} />

      <meta property='og:title' content={resolvedTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={type} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={site.name} />
      <meta property='og:locale' content={site.locale} />
      <meta property='og:image' content={image} />
      <meta property='og:image:secure_url' content={image} />
      <meta property='og:image:alt' content={imageAlt} />
      <meta property='og:image:type' content={imageType} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={resolvedTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:image:alt' content={imageAlt} />

      <link rel='icon' href='/colwanymab-favicon-color.png' />
      <link rel='apple-touch-icon' href='/colwanymab-favicon-color.png' />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd || defaultJsonLd),
        }}
      />
    </Head>
  )
}

export default SEO
