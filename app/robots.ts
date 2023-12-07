import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/','/blog/'],
      

    },
    sitemap: 'https://farsamooz.ir/sitemap.xml',
  }
}