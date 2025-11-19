import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = '/og-image.jpg',
  ogType = 'website',
  path = ''
}) => {
  const { i18n } = useTranslation()
  const lang = i18n.language
  
  const siteUrl = 'https://thibautfaucheux.com'
  const fullUrl = `${siteUrl}${path}`
  
  const defaultTitle = lang === 'fr' 
    ? 'Thibaut Faucheux – Étudiant en Informatique & Développeur Logiciel | Portfolio'
    : 'Thibaut Faucheux – Computer Science Student & Software Developer | Portfolio'
  
  const defaultDescription = lang === 'fr'
    ? 'Étudiant ingénieur de 21 ans à CESI Lyon, Apprenti Développeur d\'Applications chez Pilot Corporation. Création d\'applications web modernes.'
    : '21-year-old engineering student at CESI Lyon, Application Developer Apprentice at Pilot Corporation. Building modern web applications.'

  const finalTitle = title ? `${title} | Thibaut Faucheux` : defaultTitle
  const finalDescription = description || defaultDescription

  return (
    <Helmet>
      <html lang={lang} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:locale" content={lang === 'fr' ? 'fr_FR' : 'en_US'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Helmet>
  )
}

export default SEO
