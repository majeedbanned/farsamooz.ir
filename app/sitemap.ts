import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://farsamooz.ir',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
        url: 'https://farsamooz.ir/aboutus',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
        url: 'https://farsamooz.ir/demo',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    
    {
        url: 'https://farsamooz.ir/agents',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    
    {
        url: 'https://farsamooz.ir/contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://farsamooz.ir/videos/login',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.5,
  },
  {
    url: 'https://farsamooz.ir/videos/sheet',
  lastModified: new Date(),
  changeFrequency: 'weekly',
  priority: 0.5,
},
{
  url: 'https://farsamooz.ir/videos/download',
lastModified: new Date(),
changeFrequency: 'weekly',
priority: 0.5,
},
{
  url: 'https://farsamooz.ir/videos/reports',
lastModified: new Date(),
changeFrequency: 'weekly',
priority: 0.5,
},
{
  url: 'https://farsamooz.ir/videos/paperexam',
lastModified: new Date(),
changeFrequency: 'weekly',
priority: 0.5,
},
  ]
}