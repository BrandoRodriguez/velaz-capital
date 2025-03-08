import type { Property } from '@/payload-types'

export const property1: Partial<Property> = {
  slug: 'exclusivity-in-the-best-area-of-ortega',
  slugLock: false,
  _status: 'published',
  // @ts-ignore
  authors: ['{{AUTHOR}}'],
  content: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Dive into the marvels of modern innovation, where the only constant is change. A journey where pixels and data converge to craft the future.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        }
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },

  meta: {
    description:
      'A playground for the over-and-underwater world adventurers. Surfing, diving, snorkeling, fishing, sailing, nature trails & villages to explore.',
    // @ts-ignore
    image: '{{IMAGE_PROPERTY_1}}',
    title: 'Exclusivity in the best area of ​​Ortega',
  },
  relatedPosts: [], // this is populated by the seed script
  title: 'Exclusivity in the best area of ​​Ortega',
}

export const property1_es: Partial<Property> = {
  slug: 'exclusividad-en-la-mejor-zona-de-ortega',
  slugLock: false,
  _status: 'published',
  // @ts-ignore
  authors: ['{{AUTHOR}}'],
  content: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Sumérgete en las maravillas de la innovación moderna, donde la única constante es el cambio. Un viaje donde los píxeles y los datos convergen para crear el futuro.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        }
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },
  meta: {
    description:
      'Our restaurants use fresh, organic ingredients that are locally produced and sourced. Delicious flavors and a warm atmosphere are the perfect way to unwind.',
    // @ts-ignore
    image: '{{IMAGE_PROPERTY_1}}',
    title: 'Exclusividad en la mejor zona de Ortega',
  },
  relatedPosts: [], // this is populated by the seed script
  title: 'Exclusividad en la mejor zona de Ortega',
}
